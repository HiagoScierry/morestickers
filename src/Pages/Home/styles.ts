import styled from "styled-components";
import { Theme } from "../../Styles";
import { pxToRem } from "../../Utils";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${pxToRem(1440)};
  height: 100vh;
`;

export const Box = styled.div`
  width: ${pxToRem(600)};
  height: ${pxToRem(400)};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  border-radius: 10px;
  background-color: ${Theme.primary.grayBackground};

  color: ${Theme.primary.background};
`;

export const Title = styled.h1`
  font-size: ${pxToRem(30)};
  margin-bottom: ${pxToRem(20)};
  margin-top: ${pxToRem(20)};
`;

export const Subtitle = styled.h2`
  font-size: ${pxToRem(16)};
  margin-bottom: ${pxToRem(20)};

`;
