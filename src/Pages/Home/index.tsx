import React from "react";
import { Link } from "react-router-dom";

import { Container, Title, Subtitle, Box, Dev } from "./styles";
import { Button } from "../../Components/index";

const Home: React.FC = () => {
  return (
    <Container>
      <Box>
        <Dev />
        <Title>Receba Stickers de Programação</Title>
        <Subtitle>
          Faça seu cadastro e receba o primeiro pacote em 3 dias !!!
        </Subtitle>
        <Link to="/stick">
          <Button text="Manda !" onClick={() => {}} />
        </Link>
      </Box>
    </Container>
  );
};

export default Home;
