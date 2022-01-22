import styled from 'styled-components';

interface StackProps {
  $space: number;
  $orientation?: 'horizontal' | 'vertical'; 
}

const getMargin = ({
  $space,
  $orientation = 'vertical',
}: StackProps) =>
  $orientation === 'vertical'
    ? `margin-top: ${$space}px;`
    : `margin-left: ${$space}px;`;

const Stack = styled.div<StackProps>`
  display: flex;
  flex-direction: ${({ $orientation = 'vertical' }: StackProps) =>
    $orientation === 'horizontal' ? 'row' : 'column'};

  > * + * {
    ${getMargin}
  }
`;

export { Stack };