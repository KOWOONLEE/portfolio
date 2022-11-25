import React from "react";
import Navbar from "../component/Navbar";
import Profile from "../component/Pofile";
import styled from "styled-components";

function Main() {
  return (
    <StyledMain>
      <div className="App">
        <Navbar />
        <Profile />
      </div>
    </StyledMain>
  );
}

export default Main;

const StyledMain = styled.div`
  width: 100%;
  display: inline-block;
  /* flex-direction: row; */
  /* justify-content: space-between; */
`;
