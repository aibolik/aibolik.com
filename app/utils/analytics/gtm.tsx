import * as React from 'react';

export const GTMScript: React.FC = () => {
  if (typeof window !== 'undefined' && window.ENV.ENVIRONMENT === 'local') {
    return null;
  }
  if (typeof window === 'undefined' && process.env.NODE_ENV !== 'production') {
    return null;
  }

  return (
    <>
      <script dangerouslySetInnerHTML={{__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-52FSBJ5');`}} />
    </>
  );
}

export const GTMNoScript: React.FC = () => {
  if (typeof window !== 'undefined' && window.ENV.ENVIRONMENT === 'local') {
    return null;
  }
  if (typeof window === 'undefined' && process.env.NODE_ENV !== 'production') {
    return null;
  }

  return (
    <>
    <noscript>
      <iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-52FSBJ5"
        height="0"
        width="0"
        style={{
          display: 'none', 
          visibility: 'hidden'
        }}>
      </iframe>
    </noscript>
    </>
  )
}