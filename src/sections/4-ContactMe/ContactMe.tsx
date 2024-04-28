import { forwardRef, useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { HEADER_HEIGHT, useWindowDimensions } from "../../utils";
import style from "./ContactMe.module.css";
import TextBox from "../../components/TextBox/TextBox";

const ContactMe = forwardRef<HTMLDivElement>((_, ref) => {
  const { t } = useTranslation();
  const { height } = useWindowDimensions();
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [message, setMessage] = useState("");
  const [messageError, setMessageError] = useState("");

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleLinkedInClick = () => {
    window.open(
      "https://www.linkedin.com/in/sofía-decuadra-noya-4a8842245",
      "_blank"
    );
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:decuadrasofia@gmail.com";
  };

  const validateForm = () => {
    let isValid = true;

    if (!message.trim()) {
      setMessageError(t("ContactMe.Errors.Message"));
      isValid = false;
      messageRef.current?.focus();
    } else {
      setMessageError("");
    }

    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) {
      setEmailError(t("ContactMe.Errors.Email"));
      isValid = false;
      emailRef.current?.focus();
    } else {
      setEmailError("");
    }

    if (!name.trim()) {
      setNameError(t("ContactMe.Errors.Name"));
      isValid = false;
      nameRef.current?.focus();
    } else {
      setNameError("");
    }

    return isValid;
  };

  const handleFormSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form submitted successfully!");
    }
  };

  return (
    <div
      className={style["container"]}
      style={{ height: height - HEADER_HEIGHT }}
      ref={ref}
    >
      <div className={style["subContainer"]}>
        <h2>{t("ContactMe.Title")}</h2>
        <p className={style["text"]}>{t("ContactMe.Description")}</p>
        <div className={style["form-container"]}>
          <div className={style["user-info"]}>
            <TextBox
              label="Name"
              placeholder={t("E.g. Jean")}
              required
              setField={setName}
              error={nameError}
              setError={setNameError}
              inputRef={nameRef}
            />
            <TextBox
              label="Email"
              placeholder={t("mail@example.com")}
              required
              setField={setEmail}
              error={emailError}
              setError={setEmailError}
              inputRef={emailRef}
            />
          </div>
          <TextBox
            label="Message"
            required
            height="112px"
            width="516px"
            multiline
            setField={setMessage}
            error={messageError}
            setError={setMessageError}
            inputRef={messageRef}
          />
        </div>
        <div className={style["button-container"]}>
          <button onClick={handleFormSubmit} className={style["submit-button"]}>
            {t("ContactMe.Submit")}
          </button>
        </div>
      </div>
      <img src="./src/assets/images/me.png" alt="Me"></img>
    </div>
  );
});

export default ContactMe;
