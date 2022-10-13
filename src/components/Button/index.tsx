import "./styles.scss";

interface ButtonProps {
  color?: "green" | "blue" | "red" | "white";
  children: any;
  className?: string;
  onClick?: any;
  round?: boolean;
  type?: "button" | "reset" | "submit";
}

const Button = (props: ButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      className={`Button
    ${props.color || "blue"}
    ${props.className}
    ${props.round ? "round" : "square"}
    `}
      type={props.type ? props.type : "submit"}
    >
      {props.children}
    </button>
  );
};

export default Button;
