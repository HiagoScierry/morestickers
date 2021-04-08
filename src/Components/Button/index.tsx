import React from "react";
import { Container } from "./styles";

interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  return <Container>{text}</Container>;
};

export default Button;
