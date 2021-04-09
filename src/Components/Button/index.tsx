import React from "react";
import { Container } from "./styles";

type ButtonProps = {
  text: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick = () => {} }) => {
  return <Container onClick={onClick}>{text}</Container>;
};

export default Button;
