import { LinksFunction, LoaderFunction, MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { getMDXComponent } from 'mdx-bundler/client';
import * as React from 'react';
import { MdxPage } from '~/types';
import { getMdxPage } from '~/utils/mdx.server';
import styled from 'styled-components';
import { Header } from '~/components/header';
import { MaxWidthWrapper } from '~/components/max-width-wrapper';
import { MainContent } from '~/sc/MainContent';
import { Wave } from '~/sc/Wave';
import { BlogImage } from '~/components/blog/blog-image';
import { Spacer } from '~/components/spacer';
import { Footer } from '~/components/footer';
import { BlogAnchor } from '~/components/blog-anchor';
import { InlineCode } from '~/components/inline-code';
import { Blockquote } from '~/components/blockquote';

type LoaderData = {
  page: MdxPage;
}

const Hero = styled(MaxWidthWrapper)`
  padding: 128px 16px 0; 
  text-align: center;
`;

const Heading = styled.h1`
  font-size: 3rem;
  color: var(--color-heading-text);
  max-width: 20ch;
  margin: 0 auto;
`;

const HeaderWrapper = styled.div`
  padding: 24px 0;
`;

export const links: LinksFunction = () => {

  return [{
    rel: 'canonical', href: 'https://aibolik.com/me',
  }];
}

export const loader: LoaderFunction = async ({ params }) => {
  const page = await getMdxPage('pages', 'me');

  const data: LoaderData = {
    page,
  };

  return data;
}

export const meta: MetaFunction = ({ data }) => {
  const { frontmatter } = data.page;

  const { title, description, } = frontmatter;

  return {
    title,
    description,
    'og:title': title,
    'twitter:title': title,
    'og:description': description,
    'twitter:description': description,
    'og:image': 'https://aibolik.mo.cloudinary.net/pages/me/me.jpeg',
    'og:url': 'https://aibolik.com/me',
  };
}

const mdxComponents = {
  Wave,
  a: BlogAnchor,
  code: InlineCode,
  BlogImage: BlogImage,
  blockquote: Blockquote,
};

export default function MePage() {
  const data = useLoaderData<LoaderData>();

  const { code, frontmatter } = data.page;

  const Component = React.useMemo(() => getMDXComponent(code), [code]);

  return (
    <div>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <Hero>
        <Heading>
          About me
        </Heading>
      </Hero>
      <MaxWidthWrapper>
        <MainContent>
          <Component components={mdxComponents} />
        </MainContent>
      </MaxWidthWrapper>
      <Spacer $size={64} />
      <Footer />
    </div>
  );
}