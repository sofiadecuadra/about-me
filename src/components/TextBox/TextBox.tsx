import React, { useRef } from "react";
import style from "./TextBox.module.css";

interface InputProps {
  label: string;
  placeholder?: string;
  required?: boolean;
  height?: string;
  width?: string;
  multiline?: boolean;
  setField: (field: string) => void;
  error?: string;
  setError: (error: string) => void;
  inputRef?: React.RefObject<HTMLInputElement | HTMLTextAreaElement>;
  name?: string;
}

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
}: InputProps) => {
  return (
    <div className={style["container"]}>
      {error && <p className={style["error-bubble"]}>{error}</p>}
      <p className={style["label"]}>
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
          className={style["text-box"]}
          placeholder={placeholder}
          style={{ height: height, width: width, paddingTop: "12px" }}
          name={name}
        />
      ) : (
        <input
          ref={inputRef as React.RefObject<HTMLInputElement>}
          className={style["text-box"]}
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
