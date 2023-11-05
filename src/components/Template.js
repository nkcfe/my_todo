import React from "react";
import styled from "styled-components";

const Base = styled.div`
  height: 100vh;
  background: #f6f6f6;
  display: flex;
  position: relative;
`;



const Template = ({ children }) => {
  return <Base>{children}</Base>;
};

export default Template;
