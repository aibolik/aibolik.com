import * as React from 'react';
import { LinksFunction, LoaderFunction, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
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
import { MainContent } from '~/sc/MainContent';
import { DynamicLinksFunction } from '../utils/dynamic-links';
import { BlogNewsletterForm } from '~/components/blog/blog-newsletter-form';
import { Callout } from '~/components/callout';

type LoaderData = {
  page: MdxPage;
  canonicalUrl: string;
}

const dynamicLinks: DynamicLinksFunction<LoaderData> = ({ data }) => {
  return [
    {
      rel: 'canonical', href: data.canonicalUrl,
    },
  ];
}

export const handle = {
  dynamicLinks,
};

export const loader: LoaderFunction = async ({ params }) => {
  if (!params.slug) {
    throw Error('Oops, this page does not exist');
  }
  const slug = params.slug.toLowerCase();

  const page = await getMdxPage('blog', slug);

  const canonicalUrl = `https://aibolik.com/blog/${slug}`;

  const data: LoaderData = {
    page,
    canonicalUrl,
  };

  return data;
}

export const meta: MetaFunction = ({ data }) => {
  const { frontmatter } = data.page;

  const { title, description } = frontmatter;


  return {
    title,
    description,
    robots: 'index, follow',
  };
}

const HeaderWrapper = styled.div`
  padding: 24px 0;
`;

const Hero = styled(MaxWidthWrapper)`
  padding: 128px 16px 56px; 
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

const mdxComponents = {
  BlogImage,
  a: BlogAnchor,
  pre: FencedCode,
  code: InlineCode,
  ol: OrderedList,
  ul: UnorderedList,
  li: ListItem,
  blockquote: Blockquote,
  Callout,
};

export default function BlogPage() {
  const { page } = useLoaderData<LoaderData>();

  const { code, frontmatter } = page;

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
      <MaxWidthWrapper>
        <MainContent>
          <Component components={mdxComponents} />
        </MainContent>
      </MaxWidthWrapper>
      <Spacer $size={64} />
      <BlogNewsletterForm />
      <Spacer $size={96} />
      <Footer />
    </div>
  );
}
