import React from "react";
interface Props {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  statusMessage: string;
}
export default function ContactForm(props: Props): JSX.Element {
  return (
    <form className="contact" onSubmit={(e) => props.handleSubmit(e)}>
      {/*   */}
    </form>
  );
}
