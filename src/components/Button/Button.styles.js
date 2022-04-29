import styled from "styled-components";

export const ButtonStyle = styled.button`
  display: block;
  background-color: var(--darkGrey);
  width: 25%;
  height: 60px;
  border-radius: 30px;
  color: var(--white);
  font-size: var(--fontBig);
  margin: 20px auto;
  transition: all 300ms;
  outline: none;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;
