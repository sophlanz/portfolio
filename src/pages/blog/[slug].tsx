import React from "react";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import glob from "glob";
import { GetStaticProps, GetStaticPropsContext, GetStaticPaths } from "next";
import { ParsedUrlQuery } from "querystring";
interface contextParams extends ParsedUrlQuery {
  slug: string;
}
export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as contextParams;

  //get markdown & frontmatter from file based on slug
  const post = await import(`../../posts/${slug}.md`);

  //content is the markdown string, data has the frontmatter
  const { data, content } = matter(post.default);

  return {
    props: {
      frontmatter: data,
      markdownContent: content,
    },
  };
};
