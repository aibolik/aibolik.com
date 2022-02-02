import styled from 'styled-components';

const Pre = styled.pre`

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