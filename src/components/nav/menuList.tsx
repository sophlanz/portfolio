import React, { useState, useEffect } from "react";
import uniqid from "uniqid";
import Link from "next/link";
interface Props {
  modalIsOpen: boolean;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function MenuList(props: Props): JSX.Element {
  const [displayList, setDisplayList] = useState<JSX.Element[]>([]);
  const closeModal = () => {
    if (props.setIsOpen) {
      props.setIsOpen(false);
    }
  };
  const listItems: JSX.Element[] = [
    <li key={uniqid()} onClick={closeModal}>
      <Link href="/">HOME</Link>
    </li>,
    /*   <li key={uniqid()} onClick={closeModal}>
      <Link href="/blog">BLOG</Link>
    </li>, */
    <li key={uniqid()} onClick={closeModal}>
      <Link href="/projects">PROJECTS</Link>
    </li>,
    <li key={uniqid()} onClick={closeModal}>
      <Link href="/about">ABOUT</Link>
    </li>,
    <li key={uniqid()} onClick={closeModal}>
      <Link href="/contact">CONTACT</Link>
    </li>,
    <li key={uniqid()} onClick={closeModal}>
      <Link href="/resume">RESUME</Link>
    </li>,
  ];
  useEffect(() => {
    if (props.modalIsOpen === true) {
      let index: number = 0;
      const interval = setInterval(() => {
        setDisplayList((prevState) =>
          prevState ? [...prevState, listItems[index]] : [listItems[index]]
        );
        index++;
        if (index >= listItems.length) {
          clearInterval(interval);
        }
      }, 250);
      return () => {
        clearInterval(interval);
      };
    }
  }, [props.modalIsOpen, listItems]);

  return (
    <ul
      className="right"
      style={{ display: props.modalIsOpen === true ? "flex" : "none" }}
    >
      {displayList}
    </ul>
  );
}
