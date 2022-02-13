import * as React from 'react';
import { Link, Links } from 'remix';
import styled from 'styled-components';
import { themeGet } from '~/utils/theme-get';
import { Logo } from './logo';
import { MaxWidthWrapper } from './max-width-wrapper';
import { Stack } from './stack';
import { HamburgerMenuIcon, Cross1Icon as MenuCloseIcon } from '@radix-ui/react-icons';

const LINKS = [
  { name: 'All posts', to: '/all'},
  { name: 'Topics', to: '/topics'},
  { name: 'Short writes', to: '/short-writes'},
  { name: 'Who is Aibol?', to: '/me'},
]

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Nav = styled.nav`
  flex: 1;

  @media ${themeGet('breakpoints.mobile')} {
    display: none;
  }
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

const MobileOverlay = styled.div`
  position: fixed;
  inset: 0;
`;

const MobileBackdrop = styled.button`
  position: absolute;
  inset: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  background: hsla(216, 50.0%, 11.8%, 0.97);
  transition: opacity 500ms ease;
`;

const MobileNavigation = styled(Stack)`
  position: absolute;
  right: 32px;
  top: 180px;

  display: flex;
  flex-direction: column;
  text-align: right;
  z-index: 2;
`;

const MobileLink = styled(Link)`
  color: var(--color-heading-text);
  font-size: 1.75rem;
  font-weight: var(--font-weight-semibold);
  text-decoration: none;
  padding: 10px;

  transform: translateY(-25px);
  opacity: 0;
  transition: transform 500ms ease, opacity 500ms ease;

  &.open {
    transform: translateY(0);
    opacity: 1;
  }
`;

const Hamburger = styled.div`
  @media ${themeGet('breakpoints.desktop')} {
    display: none;
  }

  svg {
    width: 56px;
    height: 26px;
    padding-left: 30px;
  }
`;

const CloseIcon = styled.div`
  position: absolute;
  z-index: 2;
  top: 56px;
  right: 16px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  padding: 12px;
  pointer-events: none;

  transform: translateY(-25px);
  opacity: 0;
  transition: transform 500ms ease, opacity 500ms ease;

  &.open {
    transform: translateY(0);
    opacity: 1;
  }

  svg {
    width: 26px;
    height: 26px;
  }
`;

const Header: React.FC = () => {
  const [isOpen, setOpen] = React.useState<boolean>(false);

  const open = React.useCallback(() => {
    setOpen(true);
    document.body.classList.add('no-scroll');
  }, []);

  const close = React.useCallback(() => {
    setOpen(false);
    document.body.classList.remove('no-scroll');
  }, []);

  return (
    <MaxWidthWrapper>
      <Wrapper>
        <Logo to="/">AibolKussain</Logo>
        <Hamburger>
          <HamburgerMenuIcon onClick={open} />
        </Hamburger>
        <MobileOverlay style={{ pointerEvents: isOpen ? 'auto' : 'none' }}>
          <MobileBackdrop onClick={close} style={{ opacity: isOpen ? '1' : '0' }} tabIndex={-1} />
          <CloseIcon className={isOpen ? 'open' : ''}>
            <MenuCloseIcon />
          </CloseIcon>
          <MobileNavigation $space={16} as="nav">
            {LINKS.map(({ name, to }) => (
              <MobileLink className={isOpen ? 'open' : ''} key={to} to={to}>
                {name}
              </MobileLink>
            ))}
          </MobileNavigation>
        </MobileOverlay>
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