import React from "react";
import Image from "next/image";
export default function GithubSocial(): JSX.Element {
  return (
    <a
      href="https://github.com/sophlanz"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        src="/svgs/githubSocials.svg"
        height={20}
        width={20}
        alt="github"
      />
    </a>
  );
}
