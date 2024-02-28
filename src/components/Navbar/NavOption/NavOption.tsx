import classNames from "classnames";
import { FC } from "react";
import "./NavOption.css";

interface NavOptionProps {
    text: string;
    variant?: "default" | "cleanup" | "expensify";
    onClick: () => void;
    selected: boolean;
}

const NavOption: FC<NavOptionProps> = ({ text, variant = "default", onClick, selected }) => {
    const className = `nav-option-${variant}${selected ? "-selected" : ""}`;
    return (
        <button className={classNames("nav-option", className)} onClick={onClick}>
            {text}
        </button>
    );
};

export default NavOption;
