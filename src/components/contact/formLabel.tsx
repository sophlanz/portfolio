import React from "react";
interface Props {
  htmlFor: string;
  type: string;
  name: string;
  onChangeSetState: React.Dispatch<React.SetStateAction<string>>;
  message: string;
}
export default function FormLabel(props: Props): JSX.Element {
  const { htmlFor, type, name, onChangeSetState, message } = props;
  return (
    <label htmlFor={htmlFor}>
      {message}
      <input
        type={type}
        name={name}
        onChange={(e) => onChangeSetState(e.target.value)}
      />
    </label>
  );
}
