import "./styles.scss";

interface InputProps {
  type?: "text" | "number";
  text: string;
  value: any;
  readonly?: boolean;
  onChange?: (valor: any) => void;
  required?: boolean;
}

const Input = (props: InputProps) => {
  return (
    <div className="Input">
      <label htmlFor="title">{props.text}</label>
      <input
        onChange={(e) => props.onChange?.(e.target.value)}
        type={props.type ?? "text"}
        value={props.value}
        readOnly={props.readonly}
        required={props.required}
      />
    </div>
  );
};

export default Input;
