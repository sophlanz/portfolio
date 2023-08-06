import React from "react";
interface Props {
  leftPx?: string;
  rightPx?: string;
}
export default function ShadowCursor(props: Props): JSX.Element {
  return (
    <span
      className="cursorCircle"
      style={{ left: `${props.leftPx}`, top: `${props.rightPx}` }}
    ></span>
  );
}
