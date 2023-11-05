import React from "react";
import styled from "styled-components";
import { LuLogOut } from "react-icons/lu";
import { AiOutlineSetting } from "react-icons/ai";

const Base = styled.div`
  z-index: 999;
  background: #fff;
  position: absolute;
  width: 130px;
  height: 100px;

  top: 50px;
  right: 0;

  border-radius: 5px;
  border: 1px solid #f0f0f0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  hr {
    width: 100%;
    border: 0.3px solid #f0f0f0;
    margin: 0;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  height: 50px;
  svg {
    font-size: 20px;
  }
  span {
    font-size: 15px;
  }
  &:hover {
    background: #f6f6f6;
  }
`;

const UserModal = () => {
  return (
    <Base>
      <Container>
        <AiOutlineSetting />
        <span>계정설정</span>
      </Container>
      <hr />
      <Container>
        <LuLogOut />
        <span>로그아웃</span>
      </Container>
    </Base>
  );
};

export default UserModal;
