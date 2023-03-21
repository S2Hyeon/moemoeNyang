import styled from "styled-components";

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  border-radius: 20px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  width: 330px;
  height: 350px;
  z-index: 999;
  margin: auto;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;
