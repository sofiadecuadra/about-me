import { useEffect, useRef } from "react";
import style from "./Card.module.css";
import { observeElement } from "../../utils";

interface CardProps {
  title: string;
  description: string;
  variant?: "default" | "cleanup" | "expensify";
  image?: string;
  imagePosition?: "left" | "right";
  imageWidth?: string;
  maxTextWidth?: string;
}

const Card = ({
  title,
  description,
  variant = "default",
  image,
  imagePosition = "left",
  imageWidth = "100%",
  maxTextWidth = "500px",
}: CardProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const className = imagePosition === "right" ? style.rightVisible : style.leftVisible;
    const unobserve = observeElement(containerRef, className);
    return () => unobserve();
  }, [imagePosition]);

  return (
    <div
      className={`${style.container} ${
        imagePosition === "right" ? style.rightImage : style.leftImage
      }`}
      ref={containerRef}
    >
      {image && <img src={image} alt="Card" className={style.image} style={{ width: imageWidth }} />}
      <div style={{ maxWidth: maxTextWidth }} className={style.subContainer}>
        <h3 className={style[`text-${variant}`]}>{title}</h3>
        <p className={style[`text-${variant}`]}>{description}</p>
      </div>
    </div>
  );
};

export default Card;
