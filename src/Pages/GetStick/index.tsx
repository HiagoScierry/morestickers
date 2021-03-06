import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import cep from "cep-promise";

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
  Complement,
  AlignButton,
  BoxAddress,
  AlignButtonAddress,
} from "./styles";

import { Button } from "../../Components";
import axios from "axios";

const GetStick: React.FC = () => {
  const [steps, setSteps] = useState<number>(0);

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [addressZip, setAddressZip] = useState<string>("");
  const [addressStreet, setAddressStreet] = useState<string>("");
  const [addressNumber, setAddressNumber] = useState<string>("");
  const [addressComplement, setAddressComplement] = useState<string>("");
  const [addressDistrict, setAddressDistrict] = useState<string>("");
  const [addressCity, setAddressCity] = useState<string>("");
  const [addressState, setAddressState] = useState<string>("");

  const [editState, setEditState] = useState<Boolean>(true);
  const [editCity, setEditCity] = useState<Boolean>(true);
  const [editDistrict, setEditDistrict] = useState<Boolean>(true);
  const [editStreet, setEditStreet] = useState<Boolean>(true);

  const getCep = async (value: string) => {
    try {
      const data = await cep(value + "0");
      setAddressState(data.state);
      setAddressCity(data.city);
      setAddressDistrict(data.neighborhood);
      setAddressStreet(data.street);

      if (!data.state) {
        setEditState(false);
      } else {
        setEditState(true);
      }

      if (!data.city) {
        setEditCity(false);
      } else {
        setEditCity(true);
      }

      if (!data.neighborhood) {
        setEditDistrict(false);
      } else {
        setEditDistrict(true);
      }

      if (!data.street) {
        setEditStreet(false);
      } else {
        setEditStreet(true);
      }
    } catch (error) {
      setEditState(false);
      setEditCity(false);
      setEditStreet(false);
      setEditDistrict(false);
    }
  };

  const send = async () => {
    try {
      if (
        name &&
        email &&
        phone &&
        addressZip &&
        addressStreet &&
        addressNumber &&
        addressComplement &&
        addressDistrict &&
        addressCity &&
        addressState
      ) {
        const onlyNumber = /\D/g;

        console.log({
          phone: phone.replace(onlyNumber, ""),
          addressZip: addressZip.replace(onlyNumber, ""),
        });

        const data = {
          name,
          email,
          phone: phone.replace(onlyNumber, ""),
          addressZip: addressZip.replace(onlyNumber, ""),
          addressStreet,
          addressNumber,
          addressComplement,
          addressDistrict,
          addressCity,
          addressState,
        };

        const response = await axios.post(
          "https://simple-api-selection.herokuapp.com/submit/",
          data
        );

        if (response.status === 200) {
          alert("Seus Adesivos chegaram em breve !!!");
        }
      } else {
        alert("Existem Campos N??o preenchidos");
      }
    } catch (error) {
      alert("Ops , houve um erro tente novamente mais tarde");
    }
  };

  const nextStep = () => {
    if (name.length <= 7) {
      alert("O nome precisa ter no minimo 8 caracteres !");
    } else {
      setSteps((prev) => prev + 1);
    }
  };

  return (
    <Container>
      {steps === 0 ? (
        <>
          <Box>
            <Title>Dados Pessoais</Title>
            <Form>
              <Name>
                <Item>
                  <Label>Nome :</Label>
                  <InputMiddle
                    mask=""
                    placeholder="Hiago Moreira"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Item>
                <Item>
                  <Label>Telefone :</Label>
                  <InputMiddle
                    placeholder="(27)99860-8981"
                    mask="(99)99999-9999"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </Item>
              </Name>
              <Contacts>
                <Item>
                  <Label>Email :</Label>
                  <Input
                    placeholder="hiagocarlosmoreira@hotmail.com"
                    mask=""
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Item>
              </Contacts>
            </Form>
            <AlignButton>
              <Link to="/">
                <Button text="Voltar" onClick={() => {}} />
              </Link>

              <Button text="Proximo" onClick={() => nextStep()} />
            </AlignButton>
          </Box>
        </>
      ) : (
        <></>
      )}

      {steps === 1 ? (
        <>
          <BoxAddress>
            <Title>Endere??o</Title>
            <Form>
              <CEP>
                <Item>
                  <Label>CEP :</Label>
                  <InputThree
                    mask="99999-999"
                    placeholder="29500-000"
                    value={addressZip}
                    onChange={(e) => {
                      if (e.target.value.length >= 7) {
                        setAddressZip(e.target.value);
                        getCep(e.target.value);
                      } else {
                        setAddressZip(e.target.value);
                      }
                    }}
                  />
                </Item>
                <Item>
                  <Label>Estado :</Label>
                  <InputThree
                    placeholder="ES"
                    mask=""
                    disabled={editState ? true : false}
                    value={addressState}
                    onChange={(e) => setAddressState(e.target.value)}
                  />
                </Item>
                <Item>
                  <Label>Cidade :</Label>
                  <InputThree
                    placeholder="Alegre"
                    disabled={editCity ? true : false}
                    mask=""
                    value={addressCity}
                    onChange={(e) => setAddressCity(e.target.value)}
                  />
                </Item>
              </CEP>
              <Streets>
                <Item>
                  <Label>Bairro :</Label>
                  <InputMiddle
                    mask=""
                    disabled={editDistrict ? true : false}
                    placeholder="COAB"
                    value={addressDistrict}
                    onChange={(e) => setAddressDistrict(e.target.value)}
                  />
                </Item>
                <Item>
                  <Label>Rua :</Label>
                  <InputMiddle
                    mask=""
                    disabled={editStreet ? true : false}
                    placeholder="Av. dos Estados"
                    value={addressStreet}
                    onChange={(e) => setAddressStreet(e.target.value)}
                  />
                </Item>
              </Streets>
              <Complement>
                <Item>
                  <Label>Numero :</Label>
                  <InputMiddle
                    mask=""
                    placeholder="123"
                    value={addressNumber}
                    onChange={(e) => setAddressNumber(e.target.value)}
                  />
                </Item>
                <Item>
                  <Label>Complemento :</Label>
                  <InputMiddle
                    mask=""
                    placeholder="Proximo a ..."
                    value={addressComplement}
                    onChange={(e) => setAddressComplement(e.target.value)}
                  />
                </Item>
              </Complement>
            </Form>
            <AlignButtonAddress>
              <Button
                text="Voltar"
                onClick={() => setSteps((prev) => prev - 1)}
              />
              <Button text="Enviar" onClick={() => send()} />
            </AlignButtonAddress>
          </BoxAddress>
        </>
      ) : (
        <></>
      )}
    </Container>
  );
};

export default GetStick;
