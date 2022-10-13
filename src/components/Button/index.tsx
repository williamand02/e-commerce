import "./styles.scss";

interface ButtonProps {
  color?: "green" | "blue" | "red" | "white";
  children: any;
  className?: string;
  onClick?: any;
  round?: boolean;
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
    >
      {props.children}
    </button>
  );
};

export default Button;
