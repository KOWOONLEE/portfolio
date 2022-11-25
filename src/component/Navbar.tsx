import React from "react";
import styled from "styled-components";
import Profile_img from "../assets/images/kowoon_profile.jpeg";
import { AiOutlineHome } from "react-icons/ai";

function Navbar() {
  return (
    <div className="App">
      <StyledNavbar>
        <div>
          <img className="profileImg" alt="profile_img" src={Profile_img} />
        </div>
        <h2>KO WOON</h2>
        <section>
          <div>
            {" "}
            <AiOutlineHome /> <p>Home</p>
          </div>
          <p>About</p>
          <p>Skills</p>
          <p>Portfolio</p>
          <p>Contact</p>
        </section>
      </StyledNavbar>
    </div>
  );
}

export default Navbar;

const StyledNavbar = styled.div`
  display: inline-block;
  width: 18%;
  height: 100%;
  text-align: center;
  background-color: black;
  color: white;

  .profileImg {
    width: 55%;
    border-radius: 50%;
    object-fit: cover;
    margin: 20px 0 20px 0;
  }
`;
