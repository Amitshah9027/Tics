import styled from "styled-components";

export const Boards = styled.div`
  border: 2rem solid #ff652f;
  background: #ff652f;
  width: 500px;
  height: 500px;
  display: grid;
  grid-template: repeat(3, 1fr) / repeat(3, 1fr);
  gap: 1rem;
`;
