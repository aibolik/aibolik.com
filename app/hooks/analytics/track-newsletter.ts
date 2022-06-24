import { useFetcher } from "@remix-run/react";
import { Fetcher } from "@remix-run/react/transition";
import { useEffect } from 'react';

const NEWSLETTER_EVENTS = {
  SUCCESS: 'newsletter_form_success',
  FAILURE: 'newsletter_form_failure',
};

function useNewsletterTracking(form: Fetcher<any>, defaultProps: object) {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    if (form.type === 'done') {
      if (form.data?.success) {
        window.dataLayer.push({
          event: NEWSLETTER_EVENTS.SUCCESS,
          ...defaultProps
        });
      } else if(form.data?.error) {
        window.dataLayer.push({
          event: NEWSLETTER_EVENTS.FAILURE,
          error_type: 'regex',
          ...defaultProps,
        });
      } else {
        window.dataLayer.push({
          event: NEWSLETTER_EVENTS.FAILURE,
          error_type: 'unknown',
          ...defaultProps,
        });
      }
    }
  }, [form]);
}

export { useNewsletterTracking };