import React from "react";
import { Link } from "react-router-dom";
import { FaDev } from "react-icons/fa";

import { Container, Title, Subtitle, Box } from "./styles";
import { Button } from "../../Components/index";

const Home: React.FC = () => {
  return (
    <Container>
      <Box>
        <FaDev size={75} />
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
