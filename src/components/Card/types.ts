export type CardVariant = "default" | "cleanup" | "expensify" | "loopstudio";
export type ImagePosition = "left" | "right";

export type CardProps = {
  title: string;
  description: string;
  variant?: CardVariant;
  image?: string;
  imagePosition?: ImagePosition;
  imageWidth?: string;
  maxTextWidth?: string;
};
