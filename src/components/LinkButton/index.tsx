import { Link } from "react-router-dom";

import "./styles.scss";

type Props = {
  children?: any;
  to: string;
  title: string;
  color?: "green" | "red" | "blue";
  onClick?: any;
};
//usar title para criar tool-tip
const LinkButton = ({ to, color = "blue", children }: Props) => {
  return (
    <div className="linkButton">
      <Link to={to}>
        <div className={`linkButton__body ${color}`}>{children}</div>
      </Link>
    </div>
  );
};

export default LinkButton;
