import { render, MjmlText } from 'mjml-react';
import { LoaderFunction, json, Response } from '@remix-run/node';
import { getMdxEmail } from "~/utils/emails.server";
import { EmailTemplate } from '~/components/emails/template';
import { getMDXComponent } from 'mdx-bundler/client';
import { Paragraph } from '~/components/emails/paragraph';

const mdxComponents = {
  p: Paragraph,
};

export const loader: LoaderFunction = async ({
  request,
}) => {
  const { code, frontmatter } = await getMdxEmail('emails', 'test');

  const Component = getMDXComponent(code);

  const { html, errors } = render((
    <EmailTemplate title={frontmatter.subject}>
      <Component components={mdxComponents} />
    </EmailTemplate>
  ));

  if (errors?.length) {
    console.error(errors);
    return json("Error parsing email", { status: 500 });
  }

  return new Response(html, {
    headers: {
      'Content-Type': 'text/html',
    },
  });
}