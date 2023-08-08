import React from "react";
interface Props {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  statusMessage: string;
}
export default function ContactContainer(props: Props): JSX.Element {
  return (
    <div className="contactContainer">
      <form className="contact" onSubmit={(e) => props.handleSubmit(e)}>
        <label htmlFor="name">
          Hello Sophia, I&apos;m
          <input
            type="text"
            name="name"
            onChange={(e) => props.setName(e.target.value)}
          />
        </label>
        <label htmlFor="email">
          Here is my fancy e-mail
          <input
            type="text"
            name="email"
            onChange={(e) => props.setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="message">
          I would love to connect about
          <input
            type="text"
            name="message"
            onChange={(e) => props.setMessage(e.target.value)}
          />
        </label>
        <p>{props.statusMessage}</p>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
