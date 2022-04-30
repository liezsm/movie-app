import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  min-height: 100px;
  background-color: var(--darkGrey);
  padding: 0 20px;
`;

export const Content = styled.div`
  display: inherit;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 80vw;
  margin: 0 auto;

  .column {
    background-color: var(--medGrey);
    border-radius: 0.7rem;
    display: grid;
    place-items: center;
    padding: 0.5rem;
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;
    width: 100%;
    padding: 20px 0;

    .column {
      width: 80%;
    }
  }
`;
