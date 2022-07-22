import { MjmlText } from 'mjml-react';

interface Props {
  children?: any;
}

function Paragraph({ children }: Props) {

  return (
    <MjmlText>
      {children}
    </MjmlText>
  );
}

export { Paragraph };