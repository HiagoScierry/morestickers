import styled from "styled-components";
import InputMask from "react-input-mask";
import { Theme } from "../../Styles";
import { pxToRem } from "../../Utils";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  max-width: ${pxToRem(1920)};
  width: 100%;
  height: 100vh;
`;

export const Box = styled.div`
  width: ${pxToRem(600)};
  height: ${pxToRem(400)};
  padding: ${pxToRem(20)};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: ${pxToRem(2)} solid ${Theme.primary.main};
  border-radius: ${pxToRem(20)};

  @media (max-width: 900px) {
    width: ${pxToRem(500)};
  }

  @media (max-width: 750px) {
    width: ${pxToRem(300)};
    height: ${pxToRem(300)};
  }
`;

export const Title = styled.h3`
  font-size: ${pxToRem(25)};
  margin-bottom: ${pxToRem(30)};
  letter-spacing: ${pxToRem(5)};

  @media (max-width: 750px) {
    font-size: ${pxToRem(18)};
    letter-spacing: ${pxToRem(3)};
  }
`;

export const Form = styled.div`
  width: 95%;
  height: ${pxToRem(400)};
  padding: ${pxToRem(20)};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: 900px) {
    height: ${pxToRem(300)};
  }
`;

export const Name = styled.div`
  width: 94%;
  height: ${pxToRem(50)};

  margin-bottom: ${pxToRem(20)};

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: ${pxToRem(45)};
  }

  @media (max-width: 750px) {
    margin-bottom: ${pxToRem(25)};
  }
`;

export const InputMiddle = styled(InputMask)`
  background-color: ${Theme.primary.main};
  color: ${Theme.primary.text};

  width: ${pxToRem(220)};
  height: ${pxToRem(40)};

  padding: ${pxToRem(10)};
  margin-bottom: ${pxToRem(5)};

  border-radius: 10px;
  border: 0;

  font-size: ${pxToRem(16)};

  @media (max-width: 900px) {
    width: ${pxToRem(460)};
  }

  @media (max-width: 750px) {
    font-size: ${pxToRem(12)};
    width: ${pxToRem(220)};
    height: ${pxToRem(30)};
  }
`;

export const Contacts = styled.div``;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const Label = styled.div`
  padding-left: ${pxToRem(10)};
  margin-bottom: ${pxToRem(5)};
  font-weight: 600;

  @media (max-width: 750px) {
    padding-left: ${pxToRem(5)};
    margin-bottom: ${pxToRem(0)};
    font-size: ${pxToRem(13)};
  }
`;

export const Input = styled(InputMask)`
  background-color: ${Theme.primary.main};
  color: ${Theme.primary.text};

  width: ${pxToRem(460)};
  height: ${pxToRem(40)};

  padding: ${pxToRem(10)};
  margin-bottom: ${pxToRem(5)};

  border-radius: 10px;
  border: 0;

  font-size: ${pxToRem(16)};
  box-shadow: 0;

  @media (max-width: 750px) {
    width: ${pxToRem(220)};
    height: ${pxToRem(30)};
    font-size: ${pxToRem(12)};
  }
`;

export const BoxAddress = styled.div`
  width: ${pxToRem(600)};
  height: ${pxToRem(400)};
  padding: ${pxToRem(20)};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: ${pxToRem(2)} solid ${Theme.primary.main};
  border-radius: ${pxToRem(20)};

  @media (max-width: 900px) {
    width: ${pxToRem(500)};
    height: ${pxToRem(650)};
  }

  @media (max-width: 750px) {
    width: ${pxToRem(300)};
    height: ${pxToRem(500)};
  }
`;

export const CEP = styled.div`
  width: 94%;
  height: ${pxToRem(50)};

  margin-bottom: ${pxToRem(25)};

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: ${pxToRem(80)};
    margin-top: ${pxToRem(45)};
  }

  @media (max-width: 750px) {
    margin-bottom: ${pxToRem(25)};
  }
`;

export const InputThree = styled(InputMask)`
  background-color: ${Theme.primary.main};
  color: ${Theme.primary.text};

  width: ${pxToRem(145)};
  height: ${pxToRem(40)};

  padding: ${pxToRem(10)};
  margin-bottom: ${pxToRem(5)};

  border-radius: 10px;
  border: 0;

  font-size: ${pxToRem(16)};
  box-shadow: 0;

  @media (max-width: 900px) {
    width: ${pxToRem(460)};
  }

  @media (max-width: 750px) {
    font-size: ${pxToRem(12)};
    width: ${pxToRem(220)};
    height: ${pxToRem(30)};
  }
`;

export const Streets = styled.div`
  width: 94%;
  height: ${pxToRem(50)};

  margin-bottom: ${pxToRem(20)};

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: ${pxToRem(45)};
    margin-top: ${pxToRem(45)};
  }

  @media (max-width: 750px) {
    margin-bottom: ${pxToRem(5)};
  }
`;

export const Complement = styled.div`
  width: 94%;
  height: ${pxToRem(50)};

  margin-bottom: ${pxToRem(20)};

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: ${pxToRem(45)};
    margin-top: ${pxToRem(45)};
  }

  @media (max-width: 750px) {
    margin-bottom: ${pxToRem(25)};
  }
`;

export const AlignButton = styled.div`
  width: 100%;
  height: ${pxToRem(200)};

  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
`;

export const AlignButtonAddress = styled.div`
  width: 100%;
  height: ${pxToRem(250)};

  display: flex;
  align-items: flex-end;
  justify-content: space-evenly;
`;