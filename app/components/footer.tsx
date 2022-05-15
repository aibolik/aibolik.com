import * as React from 'react';
import { Link } from "@remix-run/react";
import styled from 'styled-components';
import { themeGet } from '~/utils/theme-get';
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

const LinksWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media ${themeGet('breakpoints.mobile')} {
    justify-content: flex-start;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  @media ${themeGet('breakpoints.mobile')} {
    flex-direction: column-reverse;
    gap: 48px;
  }
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
    link: '/',
  },
  // {
  //   name: 'Topics',
  //   link: '/topics',
  // },
  // {
  //   name: 'Short writes',
  //   link: '/short-writes',
  // },
  {
    name: 'Who is Aibol?',
    link: '/me',
  },
];

const COPYRIGHT_TEXT = `© 2022-presnt, Aibol Kussain.`;

const Footer: React.FC = () => {

  return (
    <Wrapper>
      <MaxWidthWrapper>
        <Container>
          <div>
            <Logo to="/">AibolKussain</Logo>
            <Spacer $size={16} />
            <CopyrightText>
              This website was built and designed by myself.
              <br /><br />
              {COPYRIGHT_TEXT}
            </CopyrightText>
          </div>
          <div>
            <LinksWrapper>
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
            </LinksWrapper>
          </div>
        </Container>
      </MaxWidthWrapper>
    </Wrapper>
  );
}

export { Footer };