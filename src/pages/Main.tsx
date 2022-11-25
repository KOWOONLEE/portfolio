import React from "react";
import Navbar from "../component/Navbar";
import Profile from "../component/Pofile";
import styled from "styled-components";

function Main() {
  return (
    <StyledMain>
      <Navbar />
      <Profile />
    </StyledMain>
  );
}

export default Main;

const StyledMain = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  /* flex-direction: row; */
  /* align-items: stretch; */
  /* flex-direction: row; */
  /* justify-content: space-between; */
`;
