import styled, { css } from 'styled-components';
import { Link } from 'remix';

const anchorStyles = css`
  text-decoration: none;
  color: var(--blue11);
  font-weight: var(--font-weight-semibold);

  :hover {
    transition: box-shadow 150ms ease 0s;
    box-shadow: 0 2px 0 var(--blue11);
  }
`;

const ExternalLink = styled.a`
  ${anchorStyles};
`;

const InternalLink = styled(Link)`
  ${anchorStyles};
`;

type BlogAnchorProps = Omit<JSX.IntrinsicElements['a'], 'ref'>;

function BlogAnchor({
  children,
  href,
  ...anchorProps
}: BlogAnchorProps) {
  if (href?.startsWith('http://') || href?.startsWith('https://')) {
    return (
      <ExternalLink {...anchorProps} href={href} target="_blank">
        {children}
      </ExternalLink>
    );
  }

  return (
    <InternalLink {...anchorProps} to={(href as string)}>
      {children}
    </InternalLink>
  );
}

export { BlogAnchor };