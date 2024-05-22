import { Injectable } from '@nestjs/common';
import { exec } from 'child_process';
import { writeFile } from 'fs/promises';
import { join } from 'path';
import webpack from 'webpack';

type BuildBundleOutput = {
  hash: string;
  bundle: string;
};

@Injectable()
export class WebpackService {
  private compiler: webpack.Compiler;

  async compile(
    fileData: string | Buffer | NodeJS.ReadableStream,
    tempDir: string,
  ) {
    try {
      const file = join(tempDir, 'index.ts');

      await writeFile(file, fileData);
      this.setupCompiler(file, tempDir);

      const result = await this.buildBundle(tempDir);

      return { ...result, file };
    } catch (error) {
      throw error;
    }
  }

  private setupCompiler(entry: string, outputPath: string) {
    this.compiler = webpack({
      target: 'web',
      entry,
      output: {
        path: outputPath,
        filename: 'bundle.js',
        libraryTarget: 'window',
      },
    });
  }

  private async buildBundle(outputPath: string): Promise<BuildBundleOutput> {
    return new Promise((resolve, reject) => {
      this.compiler.run(async (err, stats) => {
        if (err) {
          reject(err);
        }

        try {
          const result = await this.handleCompilationStats(stats, outputPath);
          resolve(result);
        } catch (error) {
          reject(error);
        }
      });
    });
  }

  private async handleCompilationStats(
    stats: webpack.Stats,
    outputPath: string,
  ): Promise<BuildBundleOutput> {
    if (stats.hasErrors()) {
      const missingDeps = stats.compilation.errors.map(
        (err: webpack.WebpackError) => this.getMissingDepFromErr(err.message),
      );

      if (missingDeps.length > 0) {
        await this.installMissingDependencies(
          missingDeps.join(' '),
          outputPath,
        );
        return this.buildBundle(outputPath);
      } else {
        throw stats.compilation.errors;
      }
    } else {
      return {
        hash: stats.hash,
        bundle: join(outputPath, 'bundle.js'),
      };
    }
  }

  private async installMissingDependencies(
    missingDeps: string,
    outputPath: string,
  ): Promise<void> {
    try {
      await this.execCommand(`npm i ${missingDeps}`, outputPath);
    } catch (error) {
      throw error;
    }
  }

  private execCommand(command: string, cwd: string) {
    return new Promise((resolve, reject) => {
      exec(command, { cwd }, (error, stdout) => {
        if (error) {
          reject(error);
        } else {
          resolve(stdout);
        }
      });
    });
  }

  private getMissingDepFromErr(err: string): string {
    const [matches, dependency] =
      /(?:(?:Cannot resolve module)|(?:Can't resolve)) '(?<dependency>[@\w\/\.-]+)' in/.exec(
        err,
      );

    if (!matches) {
      return;
    }
    return dependency;
  }
}
