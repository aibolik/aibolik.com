import type { LinksFunction } from 'remix';
import globalStylesUrl from '../styles/global.css';
import customResetUrl from '../styles/custom-reset.css';

export const links: LinksFunction = () => {

  return [
    {
      rel: 'stylesheet', href: globalStylesUrl,
    },
    {
      rel: 'stylesheet', href: customResetUrl,
    },
  ];
}

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      Start
    </div>
  );
}
