import path from 'path';
import * as fs from 'fs/promises';
import { constants } from 'fs';
import { bundleMDX } from 'mdx-bundler';
import { parse } from 'date-fns';
import rehypeShiki from 'rehype-shiki';
import rehypeCodeLang from '~/plugins/rehype-code-lang';

const fileExists = async (path: string) => {
  try {
    await fs.access(path, constants.F_OK);
    return true;
  } catch {
    return false;
  }
}

const getMdxFileOrDirectory = async (contentDir: string, slug: string) => {
  const dirPath = `content/${contentDir}`;
  const absPath = path.resolve(__dirname, '..', dirPath);

  const mdxFilePath = path.resolve(absPath, `${slug}.mdx`);

  const isMdxFile = (await fileExists(mdxFilePath));

  if (isMdxFile) {
    return {
      file: mdxFilePath,
      cwd: path.resolve(absPath),
    };
  }

  return {
    file: path.resolve(absPath, slug, 'index.mdx'),
    cwd: path.resolve(absPath, slug),
  };
}

async function getMdxPage(contentDir: string, slug: string) {
  const { file, cwd } = await getMdxFileOrDirectory(contentDir, slug);

  const { code, frontmatter } = await bundleMDX({
    file,
    cwd,
    xdmOptions(options) {
      /**
      - Material-Theme-Palenight
      - Material-Theme-Ocean
      - zeit
      */
      options.rehypePlugins = [...(options.rehypePlugins ?? []), 
        [rehypeShiki, { theme: 'Material-Theme-Palenight', useBackground: true }],
        rehypeCodeLang,
      ];

      return options;
    },
    esbuildOptions(options, frontmatter) {
      options.platform = 'node';
      return options;
    },
  });

  return {
    slug,
    code,
    frontmatter,
  };
}

async function getMdxPagesInDirectory(contentDir: string) {
  const dirPath = `content/${contentDir}`;
  const absPath = path.resolve(__dirname, '..', dirPath);

  const mdxFilesOrDirs = (await fs.readdir(absPath)).map((fileOrDir) => {
    return fileOrDir.replace('.mdx', '');
  });

  const mdxContents = await Promise.all(
    mdxFilesOrDirs.map(async (fileOrDirectory) => {
      const { file, cwd } = await getMdxFileOrDirectory(contentDir, fileOrDirectory);

      const { code, frontmatter } = await bundleMDX({
        file,
        cwd,
        esbuildOptions(options, frontmatter) {
          options.platform = 'node';
          return options;
        },
      });

      return {
        slug: fileOrDirectory,
        code,
        frontmatter,
      };
    })
  );

  mdxContents.sort((postA, postB) => {
    const dateA = parse(postA.frontmatter.publishedOn, 'dd-MM-yyyy', new Date());
    const dateB = parse(postB.frontmatter.publishedOn, 'dd-MM-yyyy', new Date());
    
    return dateB.getTime() - dateA.getTime();
  });


  return mdxContents.filter((post) => {
    return post?.frontmatter?.isDraft === false || typeof post?.frontmatter?.isDraft === 'undefined';
  });
}

async function getMdxBlogs() {
  const mdxContents = await getMdxPagesInDirectory('blog');

  return mdxContents;
}

export {
  getMdxBlogs,
  getMdxPage,
};