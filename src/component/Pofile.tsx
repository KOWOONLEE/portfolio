import React from "react";
import styled from "styled-components";

function Profile() {
  return (
    <div className="App">
      <StyledProfile>
        <div>KO WOON</div>
      </StyledProfile>
    </div>
  );
}

export default Profile;

const StyledProfile = styled.div`
  display: flex;
  width: 82%;
  height: 100%;
  background-color: blue;
  color: white;
`;
