import React, { useRef, useState } from "react";
import styled from "styled-components";
import { IoAddOutline } from "react-icons/io5";
import TodoCard from "./TodoCard";
import Modal from "./Modal";
import AddTodoModal from "./AddTodoModal";

const Base = styled.div`
  width: 25%;
  padding: 10px;
  border-right: 1px solid #ededed;
`;

const Header = styled.div`
  height: 40px;
  padding: 10px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  span {
    font-size: 18px;
    font-weight: bold;
  }
`;

const LeftThingCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #eaeaea;
  background: #fff;
  border-radius: 100%;
  width: 20px;
  height: 20px;
  margin: 3px 0 0 5px;
  font-size: 12px;
  font-weight: bold;
`;

const AddBtnCircle = styled.div`
  background: #ea9900;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  cursor: pointer;
  svg {
    font-size: 15px;
    color: #fff;
  }
  &:hover {
    background: #eab100;
  }
`;

const CardContainer = styled.div``;

const WorkSpace = ({
  space,
  spaces,
  setSpaces,
  onRemove,
  onToggleDone,
  onTogglePri,
}) => {
  const { id, title, context } = space;
  const [isTodoModalOpen, setIsTodoModalOpen] = useState(false);

  const nextTodoId = useRef(3);

  const AddTodo = (titleValue, textValue) => {
    const newTodo = {
      id: nextTodoId.current,
      title: titleValue,
      text: textValue,
      done: false,
      priority: false,
    };
    const updateSpaces = spaces.map((space) => {
      if (space.id === id) {
        return {
          ...space,
          context: [...space.context, newTodo],
        };
      }
      return space;
    });
    setSpaces(updateSpaces);
  };

  const handleModalOpen = () => setIsTodoModalOpen(true);
  const handleModalClose = () => {
    setIsTodoModalOpen(false);
  };
  return (
    <Base>
      <Header>
        <TitleContainer>
          <span>{title}</span>
          <LeftThingCircle>2</LeftThingCircle>
        </TitleContainer>
        <AddBtnCircle onClick={handleModalOpen}>
          <IoAddOutline />
        </AddBtnCircle>
      </Header>
      <CardContainer>
        {context.map((todo) => (
          <TodoCard
            todo={todo}
            onRemove={onRemove}
            onTogglePri={onTogglePri}
            onToggleDone={onToggleDone}
            spaceId={id}
          />
        ))}
      </CardContainer>
      <Modal isOpen={isTodoModalOpen} onClose={handleModalClose}>
        <AddTodoModal handleModalClose={handleModalClose} AddTodo={AddTodo} />
      </Modal>
    </Base>
  );
};

export default WorkSpace;
