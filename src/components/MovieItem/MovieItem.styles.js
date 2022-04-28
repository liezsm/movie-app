import styled from "styled-components";

export const Image = styled.img`
  width: 100%;
  max-width: 720px;
  height: 300px;
  transition: all 300ms;
  object-fit: cover;
  border-radius: 20px;
  animation: animateMovie 450ms;

  :hover {
    opacity: 0.7;
  }

  @keyframes animateMovie {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
