import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import MainImg from "../assets/images/kowooni_main.jpeg";

function Profile() {
  const [title, setTitle] = useState("");
  const [count, setCount] = useState(0);
  const typingWord = "Im Web Developer";

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setTitle((prevTitleValue) => {
        let result = prevTitleValue
          ? prevTitleValue + typingWord[count]
          : typingWord[0];
        setCount(count + 1);

        if (count >= typingWord.length) {
          setCount(0);
          setTitle("");
        }

        return result;
      });
    }, 300);

    return () => {
      clearInterval(typingInterval);
    };
  });

  return (
    <div className="App">
      <StyledProfile>
        <div
          style={{ backgroundImage: "url(/assets/kowooni_main.jpeg)" }}
          className="mainBackground"
        >
          <div className="typingName">
            <h3>LEE KO WOON</h3>
            <h3>{title}</h3>
          </div>
        </div>
      </StyledProfile>
    </div>
  );
}

export default Profile;

const StyledProfile = styled.div`
  display: flex;
  width: 80%;
  height: 100%;
  margin-left: 20%;

  .mainBackground {
    display: inline-block;
    /* position: fixed; */
    width: 80vw;
    height: 100vh;
    background-size: cover;
    opacity: 0.8;
  }
  /* .typing {
    width: 100%;
    height: 100%;
    background-color: gray;
    opacity: 0.5;
    color: white;
    font-size: 3em;
    font-weight: bold;
  } */

  /* .mainImg {
    position: relative;
    width: 100%;
    height: 100vh;
    background-size: cover;
    opacity: 0.5;
    background-color: gray;
  } */
  .typingName {
    height: 100%;
    color: black;
    font-size: 3em;

    @keyframes cursor {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
    h3::after {
      content: "";
      animation: cursor 0.7s infinite;
    }
  }
`;
