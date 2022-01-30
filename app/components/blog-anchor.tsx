import styled from 'styled-components';
import { Link } from 'remix';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--blue11);
  font-weight: var(--font-weight-semibold);

  :hover {
    transition: box-shadow 150ms ease 0s;
    box-shadow: 0 2px 0 var(--blue11);
  }
`;

type BlogAnchorProps = Omit<JSX.IntrinsicElements['a'], 'ref'>;

function BlogAnchor({
  children,
  href,
  ...anchorProps
}: BlogAnchorProps) {

  return (
    <StyledLink {...anchorProps} to={(href as string)}>
      {children}
    </StyledLink>
  );
}

export { BlogAnchor };