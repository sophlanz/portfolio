import React from "react";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import glob from "glob";
import { GetStaticProps, GetStaticPaths } from "next";
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
export const getStaticPaths: GetStaticPaths = async () => {
  //get all markdown (.md) files in the posts dir
  const blogs = glob.sync("posts/**/*.md");

  //remove path and extension to leave filename only
  const blogSlugs = blogs.map((file) =>
    file.split("/")[1].replace(/ /g, "-").slice(0, -3).trim()
  );

  // create paths with `slug` param
  const paths = blogSlugs.map((slug) => {
    return { params: { slug: slug } };
  });
  return {
    paths,
    fallback: false,
  };
};
