import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";

import globalStylesUrl from './styles/global.css';
import customResetUrl from './styles/custom-reset.css';
import { radixColorsLinks } from './styles/colors.links';
import { ThemeProvider } from "./components/core/theme-provider";
import { DynamicLinks } from "./utils/dynamic-links";

export const links: LinksFunction = () => {

  return [
    ...radixColorsLinks,
    {
      rel: 'stylesheet', href: globalStylesUrl,
    },
    {
      rel: 'stylesheet', href: customResetUrl,
    },
    {
      rel: 'preconnect', href: 'https://fonts.googleapis.com',
    },
    {
      rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous',
    },
    {
      rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap'
    },
    {
      rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Red+Hat+Mono:wght@400;500&display=swap',
    }
  ];
}

export const meta: MetaFunction = () => {
  return {
    title: 'Aibol Kussain\'s blog',
    description: 'My creative space where I share my learnings in tech with interactive and friendly blog posts. Read more!'
  };
};

export default function App() {

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <DynamicLinks />
        <Links />
        {typeof document === "undefined" ? "__STYLES__" : null}
      </head>
      <body className="dark-theme">
        <ThemeProvider>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          {process.env.NODE_ENV === "development" && <LiveReload />}
        </ThemeProvider>
      </body>
    </html>
  );
}
