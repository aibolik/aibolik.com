import * as React from 'react';
import styled, { css } from 'styled-components';
import { MaxWidthWrapper } from './max-width-wrapper';
import { Spacer } from './spacer';
import NewsletterIcon from '~/assets/newsletter-icon.svg';
import { themeGet } from '~/utils/theme-get';
import { useFetcher } from '@remix-run/react';
import { useNewsletterTracking } from '~/hooks/analytics/track-newsletter';

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

  @media ${themeGet('breakpoints.mobile')} {
    display: none;
  }
`;

const EmailInputContainer = styled.div`
  display: flex;

  @media ${themeGet('breakpoints.mobile')} {
    flex-direction: column;
  }
`;

const placeholderCss = css`
  color: var(--color-body-text);
  font-style: italic;
`;

const Input = styled.input`
  background: transparent;
  border: none;
  border-bottom: 1px solid var(--color-white);
  min-width: 350px;
  color: var(--color-body-text);

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

  @media ${themeGet('breakpoints.mobile')} {
    margin-top: 24px;
  }

  :hover {
    background: var(--blue10);
  }
`;

const GTM_DEFAULT_PROPS = {
  formPosition: 'homepage_bottom',
  formLocation: 'homepage',
};

const NewsletterForm: React.FC = () => {
  const newsletter = useFetcher();

  React.useEffect(() => {
    if (newsletter.data?.error) {
      alert(newsletter.data.error);
    }
  }, [newsletter.data]);

  useNewsletterTracking(newsletter, GTM_DEFAULT_PROPS);

  return (
    <MaxWidthWrapper>
      <Wrapper>
        <div>
          {newsletter.data?.success ? (
            <>
              <Heading>Done!</Heading>
              <Spacer $size={24} />
              <p>
                Thanks for subscribing! You will shortly start receiving updates from me.
              </p>
            </>
          ) :
          (<>
          <Heading>
            Get updates about new posts
          </Heading>
          <Spacer $size={24} />
          <p>
            I committed to share more this year, so if you don’t want to miss anything, please subscribe to my newsletter. I hope you will enjoy the content!
          </p>
          <Spacer $size={16} />
          {/* TODO: error boundary when submitting a form */}
          <newsletter.Form method='post' action='/new-subscriber'>
            <EmailInputContainer>
              <Input
                name="email"
                type="email"
                placeholder="Your email"
              />
              <Spacer $size={32} $axis="horizontal" />
              <CTAButton disabled={newsletter.state === 'submitting'}>
                {/* TODO: add here a disabled state or loading indicator */}
                Subscribe
              </CTAButton>
            </EmailInputContainer>
          </newsletter.Form>
          </>)}
        </div>
        <div>
          <Icon alt="" src={NewsletterIcon} />
        </div>
      </Wrapper>
      
    </MaxWidthWrapper>
  );
}

export { NewsletterForm };