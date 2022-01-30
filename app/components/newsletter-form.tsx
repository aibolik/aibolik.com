import * as React from 'react';
import styled, { css } from 'styled-components';
import { MaxWidthWrapper } from './max-width-wrapper';
import { Spacer } from './spacer';
import NewsletterIcon from '~/assets/newsletter-icon.svg';

const Heading = styled.h2`
  font-weight: var(--font-weight-semibold);
  font-size: 2rem;
  color: var(--color-heading-text);
`;

const Wrapper = styled.div`
  display: flex;
  padding-top: 32px;
  padding-bottom: 32px;

  div:first-child {
    flex: 2 1 auto;
    max-width: 626px;
  }

  div:nth-child(2) {
    flex: 1 1 auto;
  }
`;

const Icon = styled.img`
  width: 231px;
  height: 206px;
  margin: auto;
  transform: rotate(15deg);
`;

const EmailInputForm = styled.form`
  display: flex;
`;

const placeholderCss = css`
  color: var(--color-body-text);
  font-style: italic;
`

const Input = styled.input`
  background: transparent;
  border: none;
  border-bottom: 1px solid var(--color-white);
  min-width: 350px;
  ::placeholder {
    ${placeholderCss}
  }
  
  :-ms-input-placeholder {
    ${placeholderCss}
  }
  
  ::-ms-input-placeholder {
    ${placeholderCss}
  }
`;

const CTAButton = styled.button`
  height: 60px;
  border: none;
  min-width: 175px;
  padding: 16px 48px;
  cursor: pointer;
  background: var(--blue9);
  color: white;
  font-weight: var(--font-weight-semibold);
  border-radius: 4px;

  :hover {
    background: var(--blue10);
  }
`;

const EmailForm: React.FC = () => {

  return (
    <EmailInputForm>
      <Input name="email" type="email" placeholder="Your email" />
      <Spacer $size={32} $axis="horizontal" />
      <CTAButton>
        Subscribe
      </CTAButton>
    </EmailInputForm>
  );
}

const NewsletterForm: React.FC = () => {

  return (
    <MaxWidthWrapper>
      <Wrapper>
        <div>
          <Heading>
            Get updates about new posts
          </Heading>
          <Spacer $size={24} />
          <p>
            I committed to share more this year, so if you don’t want to miss anything, please subscribe to my newsletter. I hope you will enjoy the content!
          </p>
          <Spacer $size={16} />
          <EmailForm />
        </div>
        <div>
          <Icon alt="" src={NewsletterIcon} />
        </div>
      </Wrapper>
      
    </MaxWidthWrapper>
  );
}

export { NewsletterForm };