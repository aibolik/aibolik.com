import { useFetcher } from "@remix-run/react";
import { useEffect } from "react";
import styled, { css } from "styled-components"
import { BlogAnchor } from "~/components/blog-anchor";
import { Header } from "~/components/header";
import { MaxWidthWrapper } from "~/components/max-width-wrapper";
import { useNewsletterTracking } from "~/hooks/analytics/track-newsletter";
import { MainContent } from "~/sc/MainContent";
import { themeGet } from "~/utils/theme-get";

const PageWrapper = styled.div`
  padding-bottom: 80px;
`;

const HeaderWrapper = styled.div`
  padding: 24px 0;
`;

const Heading = styled.h1`
  font-size: 3rem;
  color: var(--color-heading-text);
  max-width: 20ch;
  margin-top: 60px;
  margin-bottom: 16px;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media ${themeGet('breakpoints.desktop')} {
    flex-direction: row;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
`;

const Label = styled.label`
  font-weight: var(--font-weight-semibold);
`;

const placeholderCss = css`
  color: var(--mauve11);
`;

const Input = styled.input`
  border: none;
  display: block;
  min-width: 260px;
  padding: 8px 0;
  background: none;
  color: var(--mauve12);
  border-bottom: 1px solid var(--color-white);
  transition: border 150ms;
  outline: none;

  :focus {
    border-bottom: 3px solid var(--blue7);

    +label {
      color: var(--blue11);
    }
  }

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
  margin-top: 24px;

  :hover {
    background: var(--blue10);
  }
`;

const GTM_DEFAULT_PROPS = {
  formPosition: 'newsletter_page_main',
  formLocation: 'newsletter_page',
};

export default function NewsletterPage() {
  const newsletter = useFetcher();

  useEffect(() => {
    if (newsletter.data?.error) {
      alert(newsletter.data.error);
    }
  }, [newsletter.data]);

  useNewsletterTracking(newsletter, GTM_DEFAULT_PROPS);

  return (
    <PageWrapper>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <MaxWidthWrapper>
        <MainContent>
          <Heading>
            A newsletter about Web
          </Heading>
          <p>
            I started this blog as a platform where I can experiment with new Web technologies(currently, <strong><BlogAnchor href="https://remix.run/">Remix.run</BlogAnchor></strong>) and share my learnings as blog posts.
            <br /><br />
            With a help of a Newsletter, I can keep you updated on new articles. In addition to that, I will also share updates about new courses or any other <em>useful content</em> I create on the Web.
            <br />
            <br />
            If you don't feel like it, unsubscribe at any time.
          </p>
          {newsletter.data?.success ? (
            <>
              <p>
                Thanks for subscribing! You will shortly start receiving updates from me.
              </p>
            </>
          ) : (
            <newsletter.Form method="post" action="/new-subscriber">
              <FormWrapper>
                <InputWrapper>
                  <Input id="fname" placeholder="Kate" name="first_name" type="text" />
                  <Label htmlFor="fname">First name</Label>
                </InputWrapper>
                <InputWrapper>
                  <Input required id="email" placeholder="email@domain.com" name="email" type="email" />
                  <Label htmlFor="email">Email*</Label>
                </InputWrapper>
              </FormWrapper>
              <CTAButton disabled={newsletter.state === 'submitting'}>
                Subscribe
              </CTAButton>
            </newsletter.Form>)}

        </MainContent>
      </MaxWidthWrapper>
    </PageWrapper>
  )
}