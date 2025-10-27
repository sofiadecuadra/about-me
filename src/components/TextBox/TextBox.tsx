import React from "react";
import classNames from "classnames";

import style from "./TextBox.module.css";
import { TextBoxProps } from "./types";

const TextBox = ({
  label,
  placeholder,
  required,
  height,
  width,
  multiline,
  setField,
  error,
  setError,
  inputRef,
  name,
  className,
}: TextBoxProps) => {
  return (
    <div className={style.container}>
      {error && <p className={style.errorBubble}>{error}</p>}
      <p className={style.label}>
        {label}
        {required ? "*" : ""}
      </p>
      {multiline ? (
        <textarea
          ref={inputRef as React.RefObject<HTMLTextAreaElement>}
          onChange={(event) => {
            setField(event.target.value.trim());
            setError("");
          }}
          className={classNames(style.textBox, className)}
          placeholder={placeholder}
          style={{ height: height, paddingTop: "12px" }}
          name={name}
        />
      ) : (
        <input
          ref={inputRef as React.RefObject<HTMLInputElement>}
          className={classNames(style.textBox, className)}
          placeholder={placeholder}
          onChange={(event) => {
            setField(event.target.value.trim());
            setError("");
          }}
          name={name}
          style={{ width: width }}
        />
      )}
    </div>
  );
};

export default TextBox;
