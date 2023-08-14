import React from "react";
import matter from "gray-matter";
import { GetStaticProps } from "next";
import { Navbar } from "@/components/nav";
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
    <>
      <Navbar />
      <section>
        {posts?.map((post) => {
          return (
            <hgroup key={`${post.slug}`}>
              <h1>{post.frontmatter.title}</h1>
              <h2>{post.frontmatter.date}</h2>
              <h2>{post.frontmatter.author}</h2>
            </hgroup>
          );
        })}
      </section>
    </>
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
  const values = keys.map(webpackContext);
  //get the values of the files
  const posts = keys.map((key, index) => {
    const slug = key
      .replace(/^.*[\\\/]/, "")
      .split(".")
      .slice(0, -1)
      .join(".");
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
