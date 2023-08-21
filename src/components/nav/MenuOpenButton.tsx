import React from "react";
interface Props {
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function MenuOpenButton(props: Props): JSX.Element {
  const openModal = () => {
    if (props.setIsOpen) {
      props.setIsOpen(true);
    }
  };
  return (
    <button className="menuToggle" onClick={openModal}>
      MENU
    </button>
  );
}
