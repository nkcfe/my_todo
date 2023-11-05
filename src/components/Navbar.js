import React, { useState } from "react";
import styled from "styled-components";
import { IoChevronBackOutline } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import UserModal from "./UserModal";
const Base = styled.div`
  background: #fff;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #f0f0f0;
`;

const Container = styled.div`
  padding: 10px;
`;

const BtnDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 10px;
  gap: 5px;
  border-radius: 5px;
  svg {
    font-size: 20px;
  }
  span {
    font-size: 15px;
  }
  cursor: pointer;
  &:hover {
    background: #f6f6f6;
  }
  border: ${({ type }) => (type === "user" ? "1px solid #F0F0F0" : null)};
  position: ${({ type }) => (type === "user" ? "relative" : null)};
`;

const Navbar = () => {
  const [isUser, setIsUser] = useState(false);

  const onClickUserModal = () => {
    setIsUser(!isUser);
  };

  return (
    <Base>
      <Container>
        <BtnDiv>
          <IoChevronBackOutline />
          <span>Back</span>
        </BtnDiv>
      </Container>
      <Container>
        <BtnDiv type="user" onClick={onClickUserModal}>
          <AiOutlineUser />
          <span>User</span>
          {isUser && <UserModal />}
        </BtnDiv>
      </Container>
    </Base>
  );
};

export default Navbar;
