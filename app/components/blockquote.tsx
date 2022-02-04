import styled from "styled-components";

const Quote = styled.blockquote`
  font-style: italic;
  color: var(--gray11);
  font-weight: var(--font-weight-medium);
  border-left: 4px solid var(--slate7);
  padding-left: 16px;
  margin-bottom: 32px;

  p > code {
    color: var(--color-body-text);
    font-style: normal;
  }
`;

type BlockquoteProps = Omit<JSX.IntrinsicElements['blockquote'], 'ref'>;

function Blockquote({ children, ...otherProps }: BlockquoteProps) {

  return (
    <Quote {...otherProps}>
      {children}
    </Quote>
  );
}

export { Blockquote };