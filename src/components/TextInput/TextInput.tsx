import { FC, ChangeEvent } from "react";
import styles from "./TextInput.module.css";
import { TextInputProps } from "./types";

const TextInput: FC<TextInputProps> = ({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  id,
  name,
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className={styles.container}>
      {label && (
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
      )}
      <input
        type={type}
        id={id}
        name={name || id}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className={styles.input}
      />
    </div>
  );
};

export default TextInput;
