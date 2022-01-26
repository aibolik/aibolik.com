import * as React from 'react';
import { Link } from 'remix';
import styled from 'styled-components';
import { Logo } from './logo';
import { MaxWidthWrapper } from './max-width-wrapper';
import { Spacer } from './spacer';
import { Stack } from './stack';

const Wrapper = styled.footer`
  background: linear-gradient(
    90deg, 
    hsl(204,31%,13%) 0%, 
    hsl(200,33%,34%) 100% 
  );
  padding: 32px 0;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CopyrightText = styled.p`
  font-size: 0.75rem;
`;

const LinksHeading = styled.p`
  color: var(--color-heading-text);
  font-weight: var(--font-weight-semibold);
  font-size: 0.875rem;
`;


const LinkItem = styled(Link)`
  color: var(--color-body-text);
  text-decoration: none;
  font-size: 0.875rem;
`;

const LINKS = [
  {
    name: 'Twitter',
    link: 'https://twitter.com/aibolik_',
  },
  {
    name: 'GitHub',
    link: 'https://github.com/aibolik',
  },
];

const BLOG_LINKS = [
  {
    name: 'All posts',
    link: '/all',
  },
  {
    name: 'Topics',
    link: '/topics',
  },
  {
    name: 'Short writes',
    link: '/short-writes',
  },
  {
    name: 'Who is Aibol?',
    link: '/me',
  },
];

const Footer: React.FC = () => {

  return (
    <Wrapper>
      <MaxWidthWrapper>
        <Flex>
          <div>
            <Logo to="/">AibolKussain</Logo>
            <Spacer $size={16} />
            <CopyrightText>
              This website was built and designed by myself.
              <br /><br />
              © 2022-presnt, Aibol Kussain.
            </CopyrightText>
          </div>
          <div>
            <Flex>
              <div>
                <LinksHeading>Blog</LinksHeading>
                <Spacer $size={8} />
                <Stack $space={8}>
                  {BLOG_LINKS.map(({ name, link }) => (
                    <LinkItem key={link} to={link}>
                      {name}
                    </LinkItem>
                  ))}
                </Stack>
              </div>
              <Spacer $size={64} $axis='horizontal' />
              <div>
                <LinksHeading>Links</LinksHeading>
                <Spacer $size={8} />
                <Stack $space={8}>
                  {LINKS.map(({ name, link }) => (
                    <LinkItem key={link} to={link}>
                      {name}
                    </LinkItem>
                  ))}
                </Stack>
              </div>
            </Flex>
          </div>
        </Flex>
      </MaxWidthWrapper>
    </Wrapper>
  );
}

export { Footer };