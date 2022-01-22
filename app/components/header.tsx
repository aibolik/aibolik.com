import * as React from 'react';
import { Link, Links } from 'remix';
import styled from 'styled-components';
import { MaxWidthWrapper } from './max-width-wrapper';

const LINKS = [
  { name: 'All posts', to: '/all'},
  { name: 'Topics', to: '/topics'},
  { name: 'Short writes', to: '/short-writes'},
  { name: 'Who is Aibol?', to: '/me'},
]

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 1.75rem;
  font-weight: var(--font-weight-semibold);
  color: var(--color-white);
  text-decoration: none;
`;

const Nav = styled.nav`
  flex: 1;
`;

const LinksWrapper = styled.ul`
  display: flex;
  list-style: none;
  justify-content: flex-end;
  padding: 0;

  li {
    margin: 10px;
  }
`;

const ListLink = styled(Link)`
  padding: 10px;
  color: var(--color-heading-text);
  font-weight: var(--font-weight-semibold);
  text-decoration: none;
  font-size: 1.125rem;
`;

const Header: React.FC = () => {

  return (
    <MaxWidthWrapper>
      <Wrapper>
        <Logo to="/">AibolKussain</Logo>
        <Nav>
          <LinksWrapper>
            {LINKS.map(({ name, to }) => (
              <li key={to}>
                <ListLink to={to}>
                  {name}
                </ListLink>
              </li>
            ))}
          </LinksWrapper>
        </Nav>
      </Wrapper>
    </MaxWidthWrapper>
  );
}

export { Header };