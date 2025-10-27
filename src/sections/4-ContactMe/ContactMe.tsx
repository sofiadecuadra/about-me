import { forwardRef, useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { z } from "zod";

import { HEADER_HEIGHT } from "@/utils";
import { useWindowSize } from "@/hooks/useWindowSize";
import { contactFormSchema, type ContactFormData } from "../../schemas";
import emailjs from "@emailjs/browser";
import TextBox from "@components/TextBox/TextBox";

import style from "./ContactMe.module.css";

const ContactMe = forwardRef<HTMLDivElement>((_, ref) => {
  const { t } = useTranslation();
  const { height } = useWindowSize();
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [message, setMessage] = useState("");
  const [messageError, setMessageError] = useState("");

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const validateForm = (): boolean => {
    try {
      const formData: ContactFormData = {
        from_name: name.trim(),
        from_email: email.trim(),
        message: message.trim(),
      };

      contactFormSchema.parse(formData);

      setNameError("");
      setEmailError("");
      setMessageError("");

      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        setNameError("");
        setEmailError("");
        setMessageError("");
        error.issues.forEach((err) => {
          const fieldName = err.path[0] as string;
          const errorMessage = t(err.message);

          if (fieldName === "from_name") {
            setNameError(errorMessage);
            nameRef.current?.focus();
          } else if (fieldName === "from_email") {
            setEmailError(errorMessage);
            emailRef.current?.focus();
          } else if (fieldName === "message") {
            setMessageError(errorMessage);
            messageRef.current?.focus();
          }
        });
      }
      return false;
    }
  };

  const sendEmail = () => {
    const serviceId = import.meta.env.VITE_REACT_APP_SERVICE_ID;
    const templateId = import.meta.env.VITE_REACT_APP_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_REACT_APP_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      toast.error(t("ContactMe.Errors.Unknown"));
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
      toast.error(t("ContactMe.Errors.Unknown"));
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
      className={style.container}
      ref={ref}
      style={{ height: height - HEADER_HEIGHT }}
    >
      <div className={style.subContainer}>
        <h2>{t("ContactMe.Title")}</h2>
        <p className={style.text}>{t("ContactMe.Description")}</p>
        <form
          className={style.formContainer}
          id="contact-form"
          onSubmit={handleFormSubmit}
        >
          <div className={style.userInfo}>
            <div className={style.width}>
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
            <div className={style.width}>
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
          <button type="submit" className={style.button}>
            {t("ContactMe.Submit")}
          </button>
        </form>
      </div>
    </div>
  );
});

export default ContactMe;
