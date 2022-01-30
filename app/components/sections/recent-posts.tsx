import * as React from 'react';
import styled from 'styled-components';
import type { MdxListItem } from '~/types';
import { PostListItem } from '../post-list-item';
import { Spacer } from '../spacer';
import { Stack } from '../stack';

interface RecentPostsProps {
  blogPosts: MdxListItem[];
}

const Wrapper = styled.section`
  grid-area: recent / recent;
`;

const Heading = styled.h2`
  text-transform: uppercase;
  color: var(--color-primary);
  font-weight: var(--font-weight-semibold);
  font-size: 1rem;
`;

const RecentPosts: React.FC<RecentPostsProps> = ({
  blogPosts,
}) => {

  return (
    <Wrapper>
      <Heading>
        My recent writings
      </Heading>
      <Spacer $size={8} />
      <Stack $space={16}>
        {blogPosts.map((post) => (
          <PostListItem key={post.slug} post={post} />
        ))}
      </Stack>
    </Wrapper>
  );
}

export { RecentPosts };