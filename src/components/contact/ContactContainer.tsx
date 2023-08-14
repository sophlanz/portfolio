import React from "react";
import ContactForm from "./ContactForm";
import ContactGreeting from "./ContactGreeting";
interface Props {
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  formData: FormData;
  handleSubmit: (e: React.SyntheticEvent, form: FormData) => void;
}
interface FormData {
  name: string;
  email: string;
  message: string;
  statusMessage: string;
}
export default function ContactContainer(props: Props): JSX.Element {
  const { setFormData, formData, handleSubmit } = props;
  return (
    <>
      <ContactGreeting />
      <div className="contactContainer">
        <ContactForm
          setFormData={setFormData}
          formData={formData}
          handleSubmit={handleSubmit}
        />
      </div>
    </>
  );
}
