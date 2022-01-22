import path from 'path';
import * as fs from 'fs/promises';
import { bundleMDX } from 'mdx-bundler';

async function getMdxPagesInDirectory(contentDir: string) {
  const dirPath = `content/${contentDir}`;
  const absPath = path.resolve(__dirname, '..', dirPath);

  const mdxFiles = (await fs.readdir(absPath)).filter(filename => filename.includes(`.mdx`));
  
  const mdxContents = await Promise.all(
    mdxFiles.map(async (filename) => {
      const [slug, ] = filename.split('.');

      const { code, frontmatter } = await bundleMDX({
        file: path.resolve(absPath, filename),
        cwd: path.resolve(absPath),
      });

      return {
        slug,
        code,
        frontmatter,
      };
    })
  );


  return mdxContents;
}

async function getMdxBlogs() {
  const mdxContents = await getMdxPagesInDirectory('blog');

  return mdxContents;
}

export {
  getMdxBlogs,
};