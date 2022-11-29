import React from "react";
import Navbar from "../component/Navbar";
import Profile from "../component/Pofile";
import styled from "styled-components";
import About from "../component/About";

function Main() {
  return (
    <StyledMain>
      <Navbar />
      <Profile />
      <About />
    </StyledMain>
  );
}

export default Main;

const StyledMain = styled.div`
  display: inline-block;
  width: 100%;
  height: 100vh;
  /* flex-direction: row; */
  /* align-items: stretch; */
  /* flex-direction: row; */
  /* justify-content: space-between; */
`;
