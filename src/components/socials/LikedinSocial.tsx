import React from "react";
import Image from "next/image";
export default function LinkedinSocial(): JSX.Element {
  return (
    <a
      href="https://www.linkedin.com/in/sophialanzendorf/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image src="/svgs/linkedin.svg" height={20} width={20} alt="linkedin" />
    </a>
  );
}
