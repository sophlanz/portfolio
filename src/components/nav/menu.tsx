import React, { useState, useCallback } from "react";
import Modal from "react-modal";
import MenuList from "./menuList";
import MenuOpenButton from "./menuOpenButton";
import MenuCloseButton from "./menuCloseButton";
export default function Menu(): JSX.Element {
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/*menu toggle*/}
      <MenuOpenButton setIsOpen={setIsOpen} />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        contentLabel="Modal"
        className="Modal"
        overlayClassName="Overlay"
      >
        <MenuCloseButton setIsOpen={setIsOpen} />
        <MenuList modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
      </Modal>
    </>
  );
}
