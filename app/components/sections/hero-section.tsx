import * as React from 'react';
import styled from 'styled-components';
import { Wave } from '~/sc/Wave';
import { themeGet } from '~/utils/theme-get';
import { MaxWidthWrapper } from '../max-width-wrapper';

const HeaderWrapper = styled.header`
  padding-top: 48px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  min-height: 390px;

  @media ${themeGet('breakpoints.mobile')} {
    margin-bottom: 48px;
  }
`;

const Heading = styled.h1`
  color: var(--color-heading-text);
  font-weight: var(--font-weight-regular);
  font-size: 4rem;
  margin-bottom: 32px;
`;

const IntroText = styled.div`
  font-size: 2rem;
  line-height: 1.6;
  max-width: 690px;
`;

const Creative = styled.span`
  border-radius: 6px;
  background: var(--red9);
  padding: 0 6px;
`;

const Experiment = styled.span`
  font-style: italic;
  font-weight: var(--font-weight-semibold);
  padding: 0 6px;
  border-radius: 6px;
  background: var(--purple9);
`;

const Learn = styled.span`
  border-radius: 6px;
  padding: 0 6px;
  background: var(--grass9);
  font-style: italic;
  font-weight: var(--font-weight-semibold);
`;


const Share = styled.span`
  display: inline-block;
  padding: 0 6px;
  border-radius: 6px;
  background: var(--blue9);
  font-style: italic;
  font-weight: var(--font-weight-semibold);
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
            Hello, <Wave>👋</Wave>!
          </Heading>
          <IntroText>
            Welcome to my <Creative>creative</Creative> space where I <Experiment>experiment</Experiment>, <Learn>learn</Learn> and <Share>share</Share>!
          </IntroText>
        </Wrapper>
      </MaxWidthWrapper>      
    </HeaderWrapper>
  );
}

export { HeroSection };