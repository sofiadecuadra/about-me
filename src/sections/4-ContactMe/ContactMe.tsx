import { forwardRef, useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { HEADER_HEIGHT, useWindowDimensions } from "../../utils";
import style from "./ContactMe.module.css";
import TextBox from "../../components/TextBox/TextBox";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

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

  const sendEmail = () => {
    const serviceId = import.meta.env.VITE_REACT_APP_SERVICE_ID;
    const templateId = import.meta.env.VITE_REACT_APP_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_REACT_APP_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("Service ID, template ID, or public key is undefined.");
      return;
    }

    const form = document.getElementById("contact-form");

    if (form instanceof HTMLFormElement) {
      const toastId = toast.loading(t("ContactMe.Sending"));

      emailjs.sendForm(serviceId, templateId, form, publicKey).then(
        (_result) => {
          toast.update(toastId, {
            render: t("ContactMe.Success"),
            type: "success",
            isLoading: false,
            autoClose: 5000,
          });
          form.reset();
          setName("");
          setEmail("");
          setMessage("");
        },
        (_error) => {
          toast.update(toastId, {
            render: t("ContactMe.Errors.Unknown"),
            type: "error",
            isLoading: false,
            autoClose: 5000,
          });
        }
      );
    } else {
      console.error("Form is not a HTMLFormElement or it's null");
    }
  };

  const handleFormSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (validateForm()) {
      sendEmail();
    }
  };

  return (
    <div
      className={style["container"]}
      ref={ref}
      style={{ height: height - HEADER_HEIGHT}}
    >
      <div className={style["subContainer"]}>
        <h2>{t("ContactMe.Title")}</h2>
        <p className={style["text"]}>{t("ContactMe.Description")}</p>
        <form
          className={style["form-container"]}
          id="contact-form"
          onSubmit={handleFormSubmit}
        > 
          <div className={style["user-info"]}>
            <div className={style["width"]}>
            <TextBox
              label="Name"
              name="from_name"
              placeholder={t("ContactMe.FormPlaceholder.Name")}
              required
              setField={setName}
              error={nameError}
              setError={setNameError}
              inputRef={nameRef}
            />
            </div>
            <div className={style["width"]}>
            <TextBox
              label="Email"
              name="from_email"
              placeholder={t("ContactMe.FormPlaceholder.Email")}
              required
              setField={setEmail}
              error={emailError}
              setError={setEmailError}
              inputRef={emailRef}
            />
            </div>
          </div>
          <TextBox
            label="Message"
            name="message"
            placeholder={t("ContactMe.FormPlaceholder.Message")}
            required
            height="112px"
            multiline
            setField={setMessage}
            error={messageError}
            setError={setMessageError}
            inputRef={messageRef}
          />
          <button type="submit" className={style["button"]}>
            {t("ContactMe.Submit")}
          </button>
        </form>
      </div>
    </div>
  );
});

export default ContactMe;
