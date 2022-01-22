
type MdxPage = {
  code: string;
  slug: string;

  frontmatter: {
    title?: string;
    description?: string;
    readTimeInMins?: number;
  }
}

type MdxListItem = Omit<MdxPage, 'code'>;

export type {
  MdxPage,
  MdxListItem,
};