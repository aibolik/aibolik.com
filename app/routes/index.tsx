import { LoaderFunction, useLoaderData } from 'remix';
import styled from 'styled-components';
import { Header } from '~/components/header';
import { MaxWidthWrapper } from '~/components/max-width-wrapper';
import { NewsletterForm } from '~/components/newsletter-form';
import { HeroSection } from '~/components/sections/hero-section';
import { RecentPosts } from '~/components/sections/recent-posts';
import { Spacer } from '~/components/spacer';
import type { MdxListItem } from '~/types';
import { getMdxBlogs } from '~/utils/mdx.server';

type LoaderData = {
  blogPosts: MdxListItem[];
}

export const loader: LoaderFunction = async ({ request }) => {
  const blogPosts = await getMdxBlogs();

  const data: LoaderData = {
    blogPosts,
  }

  return data;
}

const Main = styled(MaxWidthWrapper)`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-areas: "recent wip";
`;

export default function Index() {
  const data = useLoaderData<LoaderData>();


  return (
    <div>
      <HeroSection header={<Header />} />
      <Main as="main">
        <RecentPosts blogPosts={data.blogPosts} />
      </Main>
      <Spacer $size={32} />
      <NewsletterForm />
    </div>
  );
}
