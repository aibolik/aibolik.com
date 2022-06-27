import styled from 'styled-components';
import { InfoCircledIcon as InfoBg } from '@radix-ui/react-icons';

const Container = styled.div`
  position: relative;
  padding: 16px 24px;
  background: var(--blue2);
  margin-bottom: 32px;
  border: 3px solid var(--blue6);
  border-radius: 12px;
  overflow: hidden;
`;

const Content = styled.div`
  position: relative;
  z-index: 1;

  p:last-child {
    margin-bottom: 0;
  }
`;

const IconWrapper = styled.div`
  color: var(--blue6);
  position: absolute;
  right: -16px;
  bottom: -52px;
`;

type CalloutProps = Omit<JSX.IntrinsicElements['div'], 'ref'>;

function Callout({ children }: CalloutProps) {


  return (
    <Container>
      <IconWrapper>
        <InfoBg width="128" height="128" />
      </IconWrapper>
      <Content>
        {children}
      </Content>
    </Container>
  );
}

export { Callout };