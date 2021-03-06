import { json, LinksFunction, LoaderFunction, MetaFunction } from "@remix-run/node";
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData } from "@remix-run/react";

import globalStylesUrl from './styles/global.css';
import customResetUrl from './styles/custom-reset.css';
import { radixColorsLinks } from './styles/colors.links';
import { ThemeProvider } from "./components/core/theme-provider";
import { DynamicLinks } from "./utils/dynamic-links";
import { GTMNoScript, GTMScript } from "./utils/analytics/gtm";

export const loader: LoaderFunction = async () => {
  console.log(`NODE_ENV`, process.env.NODE_ENV);
  return json({
    ENV: {
      ENVIRONMENT: process.env.NODE_ENV === 'production' ? 'production' : 'local',
    },
  });
}

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
  const title = 'My Online space to share my learning in tech | Aibol Kussain';
  const description = 'This is my creative space where I share my learnings in tech industry through interactive blog posts. Come and learn more!';

  return {
    title,
    'og:title': title,
    'twitter:title': title,
    description,
    'og:description': description,
    'twitter:description': description,
    'og:url': 'https://aibolik.com',
  };
};

export default function App() {
  const data = useLoaderData();

  return (
    <html lang="en">
      <head>
        <GTMScript />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <DynamicLinks />
        <Links />
        {typeof document === "undefined" ? "__STYLES__" : null}
      </head>
      <body className="dark-theme">
        <GTMNoScript />
        <ThemeProvider>
          <Outlet />
          <ScrollRestoration />
          <script dangerouslySetInnerHTML={{
            __html: `window.ENV = ${JSON.stringify(data.ENV)}`,
          }} />
          <Scripts />
          {process.env.NODE_ENV === "development" && <LiveReload />}
        </ThemeProvider>
      </body>
    </html>
  );
}
