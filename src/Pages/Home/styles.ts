import styled from "styled-components";
import { FaDev } from "react-icons/fa";

import { Theme } from "../../Styles";
import { pxToRem } from "../../Utils";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  max-width: ${pxToRem(1920)};
  width: 100%;
  height: 100vh;

  @media (max-width: 1440px) {
    max-width: ${pxToRem(1440)};
  }

  @media (max-width: 600px) {
    max-width: ${pxToRem(600)};
  }
`;

export const Dev = styled(FaDev).attrs({
  size: 50,
})`
  width: ${pxToRem(500)} !important;
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

  @media (max-width: 1000px) {
    width: ${pxToRem(450)};
    height: ${pxToRem(250)};
  }

  @media (max-width: 600px) {
    width: ${pxToRem(350)};
    height: ${pxToRem(250)};
  }

  @media (max-width: 400px) {
    width: ${pxToRem(300)};
    height: ${pxToRem(250)};
  }
`;

export const Title = styled.h1`
  font-size: ${pxToRem(30)};
  margin-bottom: ${pxToRem(20)};
  margin-top: ${pxToRem(20)};

  @media (max-width: 1000px) {
    font-size: ${pxToRem(20)};
    margin-bottom: ${pxToRem(10)};
    margin-top: ${pxToRem(10)};
  }

  @media (max-width: 400px) {
    font-size: ${pxToRem(16)};
    margin-bottom: ${pxToRem(5)};
  }
`;

export const Subtitle = styled.h2`
  font-size: ${pxToRem(16)};
  margin-bottom: ${pxToRem(20)};

  @media (max-width: 1000px) {
    font-size: ${pxToRem(13)};
    margin-bottom: ${pxToRem(10)};
  }

  @media (max-width: 400px) {
    font-size: ${pxToRem(10)};
    margin-bottom: ${pxToRem(5)};
  }
`;
