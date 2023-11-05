import React from "react";
import styled, { css } from "styled-components";
import { FiFlag } from "react-icons/fi";
import { GoPencil } from "react-icons/go";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";

const CtrBtnContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  right: 0px;
  color: #fff;
  top: ${({ seq }) =>
    seq === "first" ? "17px" : seq === "second" ? "42px" : "67px"};

  border-radius: 100%;

  padding: 3px;
  cursor: pointer;
  svg {
    font-size: 12px;
  }
  transition: all 0.2s ease-in;

  &:hover {
    background: #ededed;
  }
`;

const Base = styled.div`
  position: relative;
  margin: 15px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  background: #fff;
  border: 1px solid #ebebeb;
  border-radius: 5px;
  hr {
    margin: 15px 0;
    border: 0.5px solid #ededed;
    width: 100%;
  }
  &:hover ${CtrBtnContainer} {
    right: 10px;
    color: gray;
    border: 0.5px solid gray;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

const ProgressContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ebebeb;
  padding: 5px 8px;
  border-radius: 15px;
  gap: 5px;
  span {
    font-size: 10px;
    font-weight: bold;
  }

  ${(props) =>
    props.done
      ? css`
          background: ##b5b5b5;
          transition: all 0.5 ease;
        `
      : css`
          background: #1271ec;
          color: #fff;
          transition: all 0.5 ease;
        `};
`;

const PriorityContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ebebeb;
  padding: 5px 8px;
  border-radius: 15px;
  gap: 5px;
  span {
    color: #fff;
    font-size: 10spx;
    font-weight: bold;
  }

  ${(props) =>
    props.priority
      ? css`
          background: #db6638;
          display: block;
        `
      : css`
          display: none;
        `};
`;

const TitleContainer = styled.div`
  margin-top: 10px;
  margin-left: 2px;
  font-size: 15px;
  font-weight: bold;
  filter: ${({ done }) => (done ? "blur(2px);" : "none")};
`;

const TextContainer = styled.div`
  margin-top: 10px;
  margin-left: 2px;
  font-size: 12px;
  filter: ${({ done }) => (done ? "blur(2px);" : "none")};
`;

const TodoCard = ({ todo, spaceId, onRemove, onTogglePri, onToggleDone }) => {
  const { id, title, text, done, priority } = todo;

  return (
    <Base>
      <Header>
        <ProgressContainer done={done}>
          <span>{done ? "완료" : "진행중"}</span>
        </ProgressContainer>
        <PriorityContainer priority={priority}>
          <span>중요</span>
        </PriorityContainer>
      </Header>
      <CtrBtnContainer seq="first" onClick={() => onRemove(spaceId, id)}>
        <AiOutlineClose />
      </CtrBtnContainer>
      <CtrBtnContainer seq="second" onClick={() => onToggleDone(spaceId, id)}>
        <FiFlag />
      </CtrBtnContainer>
      <CtrBtnContainer seq="third" onClick={() => onTogglePri(spaceId, id)}>
        <AiOutlineCheck />
      </CtrBtnContainer>

      <TitleContainer done={done}>{title}</TitleContainer>
      <TextContainer done={done}>{text}</TextContainer>
    </Base>
  );
};

export default TodoCard;
