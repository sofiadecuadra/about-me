export type NavOptionVariant = "default" | "cleanup" | "expensify" | "loopstudio";

export type NavOptionProps = {
  text: string;
  variant?: NavOptionVariant;
  onClick: () => void;
  selected: boolean;
};
