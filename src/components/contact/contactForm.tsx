import React from "react";
import FormLabel from "./formLabel";
interface Props {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  statusMessage: string;
}
export default function ContactForm(props: Props): JSX.Element {
  const { handleSubmit, setName, setEmail, setMessage, statusMessage } = props;
  return (
    <form className="contact" onSubmit={(e) => handleSubmit(e)}>
      <FormLabel
        htmlFor="name"
        type="text"
        name="name"
        onChangeSetState={setName}
        message="Hello Sophia, I'm"
      />
      <FormLabel
        htmlFor="email"
        type="text"
        name="email"
        onChangeSetState={setEmail}
        message="Here is my fancy e-mail"
      />
      <FormLabel
        htmlFor="message"
        type="text"
        name="message"
        onChangeSetState={setMessage}
        message="I would love to connect about"
      />
      <p>{statusMessage}</p>
      <button type="submit">Send</button>
    </form>
  );
}
