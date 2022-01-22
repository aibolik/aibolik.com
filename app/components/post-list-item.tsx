import * as React from 'react';
import { Link } from 'remix';
import styled from 'styled-components';
import { MdxListItem } from '~/types';

interface PostListItemProps {
  post: MdxListItem;
}

const LinkWrapper = styled(Link)`
  display: block;
  color: var(--color-text);
  text-decoration: none;
`;

const Title = styled.h3`
  font-weight: var(--font-weight-semibold);
  color: var(--color-heading-text);
  font-size: 1.375rem;
`;

const PreviewText = styled.p`
  margin-top: 12px;
`;

const ReadCTA = styled.div`
  color: var(--color-heading-text);
  font-style: italic;
  margin-top: 12px;
`;

const PostListItem: React.FC<PostListItemProps> = ({
  post,
}) => {
  const { slug, frontmatter: { title, description, readTimeInMins } } = post;

  return (
    <article>
      <LinkWrapper to={`/blog/${slug}`}>
        <Title>{title}</Title>
        <PreviewText>
          {description}
        </PreviewText>
        <ReadCTA>
          Read in ~{readTimeInMins} minutes
        </ReadCTA>
      </LinkWrapper>
    </article>
  );
}

export { PostListItem };