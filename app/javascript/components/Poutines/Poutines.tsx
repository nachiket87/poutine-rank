import React, { useState, useEffect } from "react";
import Poutine from "./Poutine";
import styled from "styled-components";

const Home: styled = styled.div`
  text-align: center;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;
const Header: styled = styled.div`
  h1 {
    font-size: 42px;
  }
`;
const Subheader: styled = styled.div`
  font-weight: 300;
  font-size: 26px;
`;
const Grid: styled = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  width: 100%;
`;

const Poutines: React.FC = () => {
  const [poutines, setPoutines] = useState([]);

  useEffect(() => {
    // get all poutines from API
    // Update poutine in our state
    fetch("/api/v1/poutines.json")
      .then((resp) => resp.json())
      .then((data) => {
        setPoutines(data.data);
      })
      .catch((resp) => console.log(resp));
  }, []);

  const list: JSX.Element[] = poutines.map((item) => {
    return <Poutine key={item.attributes.name} attributes={item.attributes} />;
  });

  return (
    <Home>
      <Header>
        <h1> MTL Poutines </h1>
        <Subheader>Honest Poutine Reviews.</Subheader>
        <Grid>{list}</Grid>
      </Header>
    </Home>
  );
};

export default Poutines;
