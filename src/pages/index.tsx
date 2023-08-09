import LoadingScreen from "../components/loading";
import Navbar from "../components/nav";
import { useState, useEffect } from "react";
import HomepageHeader from "@/components/homepageHeader";
import matter from "gray-matter";
import { GetStaticProps } from "next";
interface Props {
  posts: {
    frontmatter: object;
    markdownBody: string;
    slug: String;
  }[];
}
export default function Home(props: Props): JSX.Element {
  const [didInit, setDidInit] = useState<boolean>(false);
  useEffect(() => {
    const data = window.localStorage.getItem("didInit");
    if (!data) {
      let timeOut = setTimeout(() => {
        setDidInit(true);
      }, 1350);
      window.localStorage.setItem("didInit", "true");
      return () => {
        clearTimeout(timeOut);
      };
    } else {
      setDidInit(true);
    }
  }, []);
  return (
    <>
      {!didInit ? (
        <LoadingScreen />
      ) : (
        <>
          <Navbar posts={props.posts} />
          <HomepageHeader />
        </>
      )}
    </>
  );
}
interface MarkdownModule {
  default: string;
}
export const getStaticProps: GetStaticProps = async () => {
  // gets all .md files in the posts dir
  const webpackContext = require.context("../posts", true, /\.md$/);

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
