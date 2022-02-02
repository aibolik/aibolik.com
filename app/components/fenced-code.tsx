import styled from 'styled-components';

const Pre = styled.pre`
  position: relative;
  border: 1px solid var(--slate7);
  padding: 16px;
  border-radius: 6px;
  margin-left: -16px;
  margin-right: -16px;
  margin-bottom: 32px;  

  code {
    font-family: var(--font-family-mono);
    font-weight: 500;
    line-height: 25px;
  }

  .code-lang {
    display: none;
  }
`;

type FencedCodeProps = Omit<JSX.IntrinsicElements['pre'], 'ref'>;

function FencedCode(props: FencedCodeProps) {
  const { children, ...otherProps } = props;

  return (
    <Pre {...otherProps}>
      {props.children}
    </Pre>
  );
}

export { FencedCode };