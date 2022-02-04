import styled from 'styled-components';

const Code = styled.code`
  background: hsla(206, 6.0%, 43.9%, .5);
  border-radius: 4px;
  font-family: var(--font-family-mono);
  padding: .2em .4em;

  p & {
    font-size: 85%;
    font-weight: 500;
  }

  a & {
    color: inherit;
  }
`;

type CodeProps = Omit<JSX.IntrinsicElements['code'], 'ref'>;

function InlineCode({ children, ...otherProps }: CodeProps) {
  if (typeof children !== 'string') {
    return <code {...otherProps}>{children}</code>;
  }

  return <Code {...otherProps}>{children}</Code>;
}

export { InlineCode };