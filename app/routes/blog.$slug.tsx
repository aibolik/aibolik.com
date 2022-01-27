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
  font-size: 1.5rem;
  /* TODO: update to semantic/from-scheme color */
  color: #ACACAC
`;

const MainContent = styled.main`
  max-width: 725px;
  margin: 0 auto;
`;

const mdxComponents = {
  BlogImage,
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