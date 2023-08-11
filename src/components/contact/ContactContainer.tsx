import React from "react";
import ContactForm from "./ContactForm";
import ContactGreeting from "./ContactGreeting";
interface Props {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  statusMessage: string;
}
export default function ContactContainer(props: Props): JSX.Element {
  const { handleSubmit, setName, setEmail, setMessage, statusMessage } = props;
  return (
    <>
      <ContactGreeting />
      <div className="contactContainer">
        <ContactForm
          handleSubmit={handleSubmit}
          setName={setName}
          setEmail={setEmail}
          setMessage={setMessage}
          statusMessage={statusMessage}
        />
      </div>
    </>
  );
}
