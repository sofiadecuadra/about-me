export type NavOptionVariant = "default" | "cleanup" | "expensify";

export type NavOptionProps = {
  text: string;
  variant?: NavOptionVariant;
  onClick: () => void;
  selected: boolean;
};
