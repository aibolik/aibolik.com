import { bundleMDX } from "mdx-bundler";
import { getMdxFileOrDirectory } from "./mdx.server";


export async function getMdxEmail(contentDir: string, slug: string) {
  const { file, cwd } = await getMdxFileOrDirectory(contentDir, slug);

  const { code, frontmatter } = await bundleMDX({
    file,
    cwd,
  });

  return { 
    slug,
    code,
    frontmatter,
  };
}