import React, { useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Template from "./components/Template";
import WorkSpace from "./components/WorkSpace";
import styled from "styled-components";
import { IoAddOutline } from "react-icons/io5";
import WorkSpaceModalIndex from "./components/Modal";
import Modal from "./components/Modal";
import AddWorkSpaceModal from "./components/AddWorkSpaceModal";
const Base = styled.div`
  position: relative;
`;

const AddBtnCircle = styled.div`
  position: fixed;
  bottom: 15px;
  right: 15px;
  background: #ea9900;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  cursor: pointer;
  svg {
    font-size: 30px;
    color: #fff;
  }
  &:hover {
    background: #eab100;
  }
`;

const App = () => {
  const [isWorkSpaceModalOpen, setIsWorkSpaceModalOpen] = useState(false);
  const [spaces, setSpaces] = useState([
    {
      id: 1,
      title: "React Study",
      context: [
        {
          id: 1,
          title: "투두리스트 만들기",
          text: "리액트로 만드는 나만의 투드리스트 완성하기",
          done: false,
          priority: false,
        },
        {
          id: 2,
          title: "10장까지 복습하기",
          text: "주특기 주차 전까지 복습하기",
          done: true,
          priority: true,
        },
      ],
    },
    {
      id: 2,
      title: "Javascript",
      context: [
        {
          id: 1,
          title: "javascript 복습",
          text: "javascript 중급 강의 듣기",
          done: false,
          priority: false,
        },
        {
          id: 2,
          title: "프로그래머스",
          text: "js로 프로그래머스 lv0 풀기",
          done: true,
          priority: true,
        },
      ],
    },
  ]);

  const nextSpaceId = useRef(3);

  const AddSpace = (value) => {
    const newSpace = {
      id: nextSpaceId.current,
      title: value,
      context: [],
    };
    setSpaces(spaces.concat(newSpace));
    nextSpaceId.current += 1;
  };

  const onRemove = (spaceId, todoId) => {
    const updateSpaces = spaces.map((workspace) => {
      if (workspace.id === spaceId) {
        return {
          ...workspace,
          context: workspace.context.filter((todo) => todo.id !== todoId),
        };
      }
      return workspace;
    });
    setSpaces(updateSpaces);
  };

  const onTogglePri = (spaceId, todoId) => {
    const updateSpaces = spaces.map((workspace) => {
      if (workspace.id === spaceId) {
        return {
          ...workspace,
          context: workspace.context.map((todo) =>
            todo.id === todoId ? { ...todo, done: !todo.done } : todo
          ),
        };
      }
      return workspace;
    });
    setSpaces(updateSpaces);
  };

  const onToggleDone = (spaceId, todoId) => {
    const updateSpaces = spaces.map((workspace) => {
      if (workspace.id === spaceId) {
        return {
          ...workspace,
          context: workspace.context.map((todo) =>
            todo.id === todoId ? { ...todo, priority: !todo.priority } : todo
          ),
        };
      }
      return workspace;
    });
    setSpaces(updateSpaces);
  };

  const handleModalOpen = () => setIsWorkSpaceModalOpen(true);
  const handleModalClose = () => {
    setIsWorkSpaceModalOpen(false);
  };
  return (
    <Base>
      <Navbar />
      <Template>
        {spaces.map((space) => (
          <WorkSpace
            onRemove={onRemove}
            onTogglePri={onTogglePri}
            onToggleDone={onToggleDone}
            spaces={spaces}
            setSpaces={setSpaces}
            space={space}
          />
        ))}
      </Template>

      <>
        <AddBtnCircle onClick={handleModalOpen}>
          <IoAddOutline />
        </AddBtnCircle>
        <Modal isOpen={isWorkSpaceModalOpen} onClose={handleModalClose}>
          <AddWorkSpaceModal
            AddSpace={AddSpace}
            handleModalClose={handleModalClose}
          />
        </Modal>
      </>
    </Base>
  );
};

export default App;
