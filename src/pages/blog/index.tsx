import React from "react";
import matter from "gray-matter";
import { GetStaticProps } from "next";
import NavBar from "@/components/nav";
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
  console.log(props);
  const { posts } = props;
  return (
    <div>
      <NavBar />
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
interface MarkdownModule {
  default: string;
}
export const getStaticProps: GetStaticProps = async () => {
  // gets all .md files in the posts dir
  const webpackContext = require.context("../../../posts", true, /^[^.]+\.md$/);

  //list of file names gotten by webpack
  const keys = webpackContext.keys();
  console.log(keys);
  const values = keys.map(webpackContext);
  console.log(values);
  //get the values of the files
  const posts = keys.map((key, index) => {
    const slug = key
      .replace(/^.*[\\\/]/, "")
      .split(".")
      .slice(0, -1)
      .join(".");
    console.log(slug);
    const file = values[index] as MarkdownModule;
    //get frontmatter & markdownbody from file
    const { data, content } = matter(file.default);
    return {
      frontmatter: data,
      markdownBody: content,
      slug,
    };
  });
  return {
    props: {
      posts: posts,
    },
  };
};
