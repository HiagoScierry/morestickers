import React from "react";

import {
  Container,
  Box,
  Title,
  Form,
  Name,
  Contacts,
  Label,
  Input,
  InputMiddle,
  Item,
  CEP,
  InputThree,
  Streets,
} from "./styles";

const GetStick: React.FC = () => {
  return (
    <Container>
      <Box>
        <Title>Dados Pessoais</Title>
        <Form>
          <Name>
            <Item>
              <Label>Nome :</Label>
              <InputMiddle />
            </Item>
            <Item>
              <Label>Telefone :</Label>
              <InputMiddle />
            </Item>
          </Name>
          <Contacts>
            <Label>Email :</Label>
            <Input />
          </Contacts>
        </Form>

        {/* <Title>Endereço</Title>
        <Form>
          <CEP>
            <Item>
              <Label>CEP :</Label>
              <InputThree />
            </Item>
            <Item>
              <Label>Estado :</Label>
              <InputThree />
            </Item>
            <Item>
              <Label>Cidade :</Label>
              <InputThree />
            </Item>
          </CEP>
          <Streets>
            <Item>
              <Label>Rua :</Label>
              <InputMiddle />
            </Item>
            <Item>
              <Label>Telefone :</Label>
              <InputMiddle />
            </Item>
          </Streets>
        </Form> */}
      </Box>
    </Container>
  );
};

export default GetStick;
