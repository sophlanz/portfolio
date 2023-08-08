import React from "react";
interface Props {
  htmlFor: string;
  type: string;
  name: string;
  onChangeSetState: React.Dispatch<React.SetStateAction<string>>;
}
export default function FormLabel(props: Props): JSX.Element {
  return (
    <label htmlFor={props.htmlFor}>
      Hello Sophia, I&apos;m
      <input
        type={props.type}
        name={props.name}
        onChange={(e) => props.onChangeSetState(e.target.value)}
      />
    </label>
  );
}
