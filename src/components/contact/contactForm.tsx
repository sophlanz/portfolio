import React from "react";
import FormLabel from "./FormLabel";
interface Props {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  handleSubmit: (e: React.SyntheticEvent, form: FormData) => void;
}
interface FormData {
  name: string;
  email: string;
  message: string;
  statusMessage: string;
}
export default function ContactForm(props: Props): JSX.Element {
  const { formData, setFormData, handleSubmit } = props;
  const formLabelContent = [
    {
      htmlFor: "name",
      type: "text",
      name: "name",
      message: "Hello Sophia, I'm",
    },
    {
      htmlFor: "email",
      type: "text",
      name: "email",
      message: "Here is my fancy e-mail",
    },
    {
      htmlFor: "message",
      type: "text",
      name: "message",
      message: "I would love to connect about",
    },
  ];
  console.log(formData);
  return (
    <form className="contact" onSubmit={(e) => handleSubmit(e, formData)}>
      {formLabelContent.map((label) => (
        <FormLabel
          htmlFor={label.htmlFor}
          type={label.type}
          name={label.name}
          setFormData={setFormData}
          message={label.message}
          formData={formData}
        />
      ))}
      <p>{formData.statusMessage}</p>
      <button type="submit">Send</button>
    </form>
  );
}
