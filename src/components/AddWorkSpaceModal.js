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
  span {
    font-size: 20px;
    font-weight: bold;
  }
`;

const AddInput = styled.input`
  margin-top: 25px;
  padding: 10px 10px 5px 10px;
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

const AddWorkSpaceModal = ({ handleModalClose, AddSpace }) => {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    AddSpace(value);
    handleModalClose();
    setValue("");
  };

  const onClickClose = (e) => {
    e.preventDefault();
    handleModalClose();
  };

  return (
    <Base>
      <AddForm onSubmit={onSubmit}>
        <span>New WorkSpace</span>
        <AddInput
          placeholder="타이틀을 입력해주세요."
          onChange={onChange}
          value={value}
        />
        <BtnWrapper>
          <Btn>Create</Btn>
          <Btn color="red" onClick={onClickClose}>
            Cancel
          </Btn>
        </BtnWrapper>
      </AddForm>
    </Base>
  );
};

export default AddWorkSpaceModal;
