import { renderToString } from "react-dom/server";
import { EntryContext, redirect } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import { ServerStyleSheet } from 'styled-components';

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  let url = new URL(request.url);
  let hostname = url.hostname;
  let proto = request.headers.get("X-Forwarded-Proto") ?? url.protocol;

  url.host =
    request.headers.get("X-Forwarded-Host") ??
    request.headers.get("host") ??
    url.host;
  url.protocol = "https:";

  if (proto === "http" && hostname !== "localhost") {
    return redirect(url.toString(), {
      headers: {
        "X-Forwarded-Proto": "https",
      },
    });
  }
  
  const sheet = new ServerStyleSheet();

  let markup = renderToString(
    sheet.collectStyles(
      <RemixServer context={remixContext} url={request.url} />
    )
  );
  const styles = sheet.getStyleTags();

  markup = markup.replace("__STYLES__", styles);

  responseHeaders.set("Content-Type", "text/html");

  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}
