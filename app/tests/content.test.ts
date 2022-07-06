import * as fs from 'fs/promises';
import path from 'path';

const BLOG_DIR = 'content/blog';

test('Ensure that all files are lowercase', async () => {
  
  const absPath = path.resolve(__dirname, '..', '..', BLOG_DIR);

  const mdxFilesOrDirs = (await fs.readdir(absPath)).map((fileOrDir) => {
    return fileOrDir.replace('.mdx', '');
  });

  mdxFilesOrDirs.forEach((fileOrDir) => {
    expect(fileOrDir).toEqual(fileOrDir.toLowerCase());
  });
});