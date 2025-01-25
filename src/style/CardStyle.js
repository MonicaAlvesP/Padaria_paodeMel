import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 1rem;

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #fff;
    text-shadow: 0 0 1rem rgba(65, 4, 39, 0.5);
  }

  @media (max-width: 768px) {
    height: auto;
    padding: 0.5rem;

    h2 {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 480px) {
    h2 {
      font-size: 1.2rem;
    }
  }
`;

export const Content = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
  padding: 1rem;

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem;
    background-color: rgb(90, 21, 42);
    border-radius: 0.5rem;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
    color: #fff;

    img {
      width: 20vw;
      height: 30vh;
      object-fit: cover;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    padding: 0.5rem;

    li {
      padding: 0.5rem;

      img {
        width: 90%;
        object-fit: cover;
      }
    }
  }

  @media (max-width: 480px) {
    display: flex;
    overflow-x: auto;
    padding: 0.5rem;

    li {
      min-width: 80%;
      padding: 0.5rem;
    }
  }
`;