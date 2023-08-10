import React from "react";
interface Props {
  posts?: {
    frontmatter: frontmatter;
    markdownBody: string;
    slug: String;
  }[];
}
type frontmatter = {
  title: string;
  date: string;
  author: string;
};
export default function BlogPosts(props: Props): JSX.Element {
  const { posts } = props;
  return (
    <div>
      {posts?.map((post) => {
        return (
          <div key={`${post.slug}`}>
            <h2>{post.frontmatter.title}</h2>
            <p>{post.frontmatter.date}</p>
            <p>{post.frontmatter.author}</p>
          </div>
        );
      })}
    </div>
  );
}
