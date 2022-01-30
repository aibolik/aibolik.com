import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import type { MetaFunction, LinksFunction } from "remix";

import globalStylesUrl from './styles/global.css';
import customResetUrl from './styles/custom-reset.css';
import { radixColorsLinks } from './styles/colors.links';

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
      rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,600;1,400&display=swap'
    },
  ];
}

export const meta: MetaFunction = () => {
  return { title: "New Remix App" };
};

export default function App() {

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
        {typeof document === "undefined" ? "__STYLES__" : null}
      </head>
      <body className="dark-theme">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
