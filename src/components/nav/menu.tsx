import React, { useState } from "react";
import Modal from "react-modal";
import MenuList from "./menuList";
export default function Menu(): JSX.Element {
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      {/*menu toggle*/}
      <button className="menuToggle" onClick={openModal}>
        MENU
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        contentLabel="Modal"
        className="Modal"
        overlayClassName="Overlay"
      >
        <button
          className="menuToggleModal"
          onClick={closeModal}
          style={{
            position: "absolute",
            top: "20px",
            right: "40px",
            width: "125px",
          }}
        >
          CLOSE
        </button>
        <MenuList modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
      </Modal>
    </>
  );
}
