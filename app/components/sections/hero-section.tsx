import * as React from 'react';
import styled from 'styled-components';
import { MaxWidthWrapper } from '../max-width-wrapper';

const HeaderWrapper = styled.header`
  padding-top: 48px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: columns;
  align-items: center;
  min-height: 390px;
`;

const Heading = styled.h1`
  color: var(--color-heading-text);
  font-weight: var(--font-weight-regular);
  font-size: 4rem;
`;

interface HeroSectionProps {
  header: React.ReactNode;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  header,
}) => {

  return (
    <HeaderWrapper>
      {header}
      <MaxWidthWrapper>
        <Wrapper>
          <Heading>
            Some hero content
          </Heading>
        </Wrapper>
      </MaxWidthWrapper>      
    </HeaderWrapper>
  );
}

export { HeroSection };