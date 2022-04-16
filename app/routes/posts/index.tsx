import { Link, useLoaderData } from "@remix-run/react";
import { getPosts } from '~/post';
import type { Post } from '~/post';

export const loader = () => {
  return getPosts();
}

export default function Posts() {
  const posts = useLoaderData<Post[]>();

  console.log(posts);

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map(({ slug, title }) => (
          <li key={slug}>
            <Link to={slug}>
              {title}
            </Link>
          </li>
        ))}
      </ul>

    </div>
  );
}