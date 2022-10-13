import "./styles.scss";

interface TitleProps {
  text: string;
}

const Title = (props: TitleProps) => {
  return <h1 className="Title">{props.text}</h1>;
};

export default Title;
