import styled from 'styled-components';

const Pre = styled.pre`
  position: relative;
  border: 1px solid var(--slate7);
  padding: 16px;
  border-radius: 6px;
  margin-left: -16px;
  margin-right: -16px;
  margin-bottom: 32px;
  overflow-x: auto;

  scrollbar-width: thin;
  --scrollbar-bg-color: rgba(0, 0, 0, .1);
  --scrollbar-thumb-color: var(--slate9);

  ::-webkit-scrollbar-track {
    background-color: var(--scrollbar-bg-color);
  }

  ::-webkit-scrollbar {
    width: 6px;
    background-color: var(--scrollbar-bg-color);
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    -webkit-box-shadow: var(----scrollbar-bg-shadow);
    background-color: var(--scrollbar-thumb-color);
  }

  code {
    font-family: var(--font-family-mono);
    font-weight: 500;
    line-height: 25px;
    padding: 0;
    line-height: 1.5;
    background: none;
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