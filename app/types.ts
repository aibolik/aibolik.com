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

type MdxEmail = {
  code: string;
  slug: string;
  
  frontmatter: {
    subject?: string;
  }
}

type MdxListItem = Omit<MdxPage, 'code'>;

export type {
  MdxPage,
  MdxListItem,
  MdxEmail,
};

declare global {
  interface Window {
    ENV: {
      ENVIRONMENT: 'local' | 'production',
    }
  }
};