import React, { useState } from "react";

import styled from "styled-components";

const Base = styled.div`
  border-radius: 8px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  background: #fff;
  padding: 40px;
`;

const AddForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 22px;
  font-weight: bold;
`;

const Sub = styled.div`
  font-size: 13px;
  font-weight: bold;
  margin-top: 10px;
  color: #aeb0b2;
`;

const InputTitle = styled.div`
  margin-top: 25px;
  font-size: 16px;
  font-weight: bold;
  color: #5e6062;
`;

const AddInput = styled.input`
  margin-top: 10px;
  padding-bottom: 5px;
  outline: none;
  border: none;
  border-bottom: 1px solid #ebebeb;
  font-size: 15px;
`;
const BtnWrapper = styled.div`
  margin-left: auto;
  margin-top: 35px;
`;

const Btn = styled.button`
  font-weight: bold;
  color: ${({ color }) => (color === "red" ? "red" : "black")};
`;

const AddTodoModal = ({ AddTodo, handleModalClose }) => {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoDes, setTodoDes] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    AddTodo(todoTitle, todoDes);
    handleModalClose();
    setTodoTitle("");
    setTodoDes("");
  };

  const onChangeTodoTitle = (e) => {
    setTodoTitle(e.target.value);
  };

  const onChangeTodoDes = (e) => {
    setTodoDes(e.target.value);
  };

  return (
    <Base>
      <Title>New Todo</Title>
      <Sub>새로운 할일을 작성해주세요!</Sub>
      <AddForm onSubmit={onSubmit}>
        <InputTitle>Todo Name</InputTitle>
        <AddInput
          placeholder="제목을 입력해주세요."
          onChange={onChangeTodoTitle}
          value={todoTitle}
        />
        <InputTitle> Detailed description</InputTitle>
        <AddInput
          placeholder="상세 내용을 입력해주세요."
          onChange={onChangeTodoDes}
          value={todoDes}
        />
        <BtnWrapper>
          <Btn>Create</Btn>
          <Btn color="red">Cancel</Btn>
        </BtnWrapper>
      </AddForm>
    </Base>
  );
};

export default AddTodoModal;
