import React from "react";
interface Props {
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function MenuCloseButton(props: Props): JSX.Element {
  const closeModal = () => {
    if (props.setIsOpen) {
      props.setIsOpen(false);
    }
  };
  return (
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
  );
}
