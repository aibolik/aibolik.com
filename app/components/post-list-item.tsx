import * as React from 'react';
import { Link } from "@remix-run/react";
import styled from 'styled-components';
import { MdxListItem } from '~/types';
import { themeGet } from '~/utils/theme-get';

interface PostListItemProps {
  post: MdxListItem;
}

const LinkWrapper = styled(Link)`
  display: block;
  color: var(--color-body-text);
  text-decoration: none;
  padding: 16px;
  margin-left: -16px;
  margin-right: -16px;
  border-radius: 4px;

  transition: background 150ms, transform 150ms;

  :hover {
    background: var(--blue4);
    transform: translate(12px, 0);
  }

  @media ${themeGet('breakpoints.mobile')} {
    border-radius: 0;
    :hover {
      background: var(--blue4);
      transform: none;
    }
  }
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
  color: var(--slate11);
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