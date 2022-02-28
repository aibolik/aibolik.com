
type MdxPage = {
  code: string;
  slug: string;

  frontmatter: {
    title?: string;
    description?: string;
    readTimeInMins?: number;
    publishedOn?: string;
    isDraft?: boolean;
  }
}

type MdxListItem = Omit<MdxPage, 'code'>;

export type {
  MdxPage,
  MdxListItem,
};