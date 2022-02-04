import * as React from 'react';
import { LoaderFunction, useLoaderData } from 'remix';
import { MdxPage } from "~/types"
import { getMdxPage } from "~/utils/mdx.server"
import { getMDXComponent } from 'mdx-bundler/client';
import { Header } from '~/components/header';
import styled from 'styled-components';
import { getFriendlyDate } from '~/utils/datetime';
import { MaxWidthWrapper } from '~/components/max-width-wrapper';
import { Spacer } from '~/components/spacer';
import { BlogImage } from '~/components/blog/blog-image';
import { Footer } from '~/components/footer';
import { BlogAnchor } from '~/components/blog-anchor';
import { FencedCode } from '~/components/fenced-code';
import { InlineCode } from '~/components/inline-code';
import { OrderedList, ListItem, UnorderedList } from '~/components/lists';
import { Blockquote } from '~/components/blockquote';

type LoaderData = {
  page: MdxPage;
}

export const loader: LoaderFunction = async ({ params }) => {
  if (!params.slug) {
    throw Error('Oops, this page does not exist');
  }

  const page = await getMdxPage('blog', params.slug);

  const data: LoaderData = {
    page,
  };

  return data;
}

const HeaderWrapper = styled.div`
  padding: 24px 0;
`;

const Hero = styled(MaxWidthWrapper)`
  padding: 128px 0 56px; 
  text-align: center;
`;

const Heading = styled.h1`
  font-size: 3rem;
  color: var(--color-heading-text);
  max-width: 20ch;
  margin: 0 auto;
`;

const PublishedOn = styled.div`
  font-style: italic;
  font-size: 1.125rem;
  color: var(--mauve11);
`;

const MainContent = styled.main`
  max-width: 725px;
  margin: 0 auto;

  p {
    margin-bottom: 24px;
  }

  h2 {
    font-size: 2rem;
    margin-top: 56px;
    margin-bottom: 16px;
    color: var(--mauve12);
  }

  h3 {
    font-size: 1.5rem;
    margin-top: 40px;
    margin-bottom: 12px;
  }

  h2 code,
  h3 code {
    font-size: 1em;
  }

  hr {
    margin-top: 64px;
    margin-bottom: 64px;
  }
`;

const mdxComponents = {
  BlogImage,
  a: BlogAnchor,
  pre: FencedCode,
  code: InlineCode,
  ol: OrderedList,
  ul: UnorderedList,
  li: ListItem,
  blockquote: Blockquote,
};

export default function BlogPage() {
  const data = useLoaderData<LoaderData>();

  const { code, frontmatter } = data.page;

  const Component = React.useMemo(() => getMDXComponent(code), [code]);

  const { title, publishedOn } = frontmatter;

  return (
    <div>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <Hero>
        <Heading>
          {title}
        </Heading>
        <PublishedOn>
          {getFriendlyDate(publishedOn)}
        </PublishedOn>
      </Hero>
      <MainContent>
        <Component components={mdxComponents} />
      </MainContent>
      <Spacer $size={64} />
      <Footer />
    </div>
  );

}