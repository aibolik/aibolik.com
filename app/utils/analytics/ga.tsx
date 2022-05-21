import * as React from 'react';

export const GaAnalytics: React.FC = () => {
  if (typeof window !== 'undefined' && window.ENV.ENVIRONMENT === 'local') {
    return null;
  }
  if (typeof window === 'undefined' && process.env.NODE_ENV !== 'production') {
    return null;
  }

  return (
    <>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-BXV9W2MDTE" />
      <script dangerouslySetInnerHTML={{
        __html: `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-BXV9W2MDTE');`
      }}></script>
    </>
  );
}