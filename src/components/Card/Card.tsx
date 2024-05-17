import style from "./Card.module.css";

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
  return (
    <div
      className={`${style.container} ${
        imagePosition === "right" ? style.rightImage : style.leftImage
      }`}
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
