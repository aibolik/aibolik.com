import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import invariant from 'tiny-invariant';
import { getPost } from '~/post';

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.slug, `Expected params.slug`);

  return getPost(params.slug);
}

export default function PostSlug() {
  const post = useLoaderData();

  return (
    <div>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  );
}