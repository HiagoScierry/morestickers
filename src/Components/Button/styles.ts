import styled from "styled-components";
import { Theme } from "../../Styles";
import { pxToRem } from "../../Utils";

export const Container = styled.div`
  color: ${Theme.primary.white};
  background-color: ${Theme.primary.orange};

  display: flex;
  align-items: center;
  justify-content: center;

  padding: ${pxToRem(20)};

  border-radius: 10px;

  width: ${pxToRem(125)};
  height: ${pxToRem(40)};

  font-weight: 600;

  text-decoration: none;


  &&:hover {
    opacity: 0.8;
  }
`;
