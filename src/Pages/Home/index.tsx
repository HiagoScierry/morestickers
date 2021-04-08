import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <>
      <div>Home</div>
      <Link to="/stick">Go to Stick</Link>
    </>
  );
};

export default Home;
