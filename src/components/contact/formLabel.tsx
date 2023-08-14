import React from "react";
interface Props {
  htmlFor: string;
  type: string;
  name: string;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  message: string;
  formData: FormData;
}
interface FormData {
  name: string;
  email: string;
  message: string;
  statusMessage: string;
}
export default function FormLabel(props: Props): JSX.Element {
  const { htmlFor, type, name, setFormData, message, formData } = props;
  return (
    <label htmlFor={htmlFor} key={`${name}+${type}`}>
      {message}
      <input
        type={type}
        name={name}
        onChange={(e) => {
          setFormData({ ...formData, [name]: e.target.value });
        }}
      />
    </label>
  );
}
