import { useEffect, useRef } from "react";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

import style from "./Card.module.css";
import { CardProps } from "./types";

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
  const { observeElement } = useIntersectionObserver();

  useEffect(() => {
    const className =
      imagePosition === "right" ? style.rightVisible : style.leftVisible;
    const unobserve = observeElement(containerRef, className);
    return () => unobserve();
  }, [imagePosition, observeElement]);

  return (
    <div
      className={`${style.container} ${
        imagePosition === "right" ? style.rightImage : style.leftImage
      }`}
      ref={containerRef}
    >
      {image && (
        <img
          src={image}
          alt="Card"
          className={style.image}
          style={{ width: imageWidth }}
        />
      )}
      <div style={{ maxWidth: maxTextWidth }} className={style.subContainer}>
        <h3 className={style[`text-${variant}`]}>{title}</h3>
        <p className={style[`text-${variant}`]}>{description}</p>
      </div>
    </div>
  );
};

export default Card;
