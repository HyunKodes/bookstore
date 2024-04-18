import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;

  form {
    border-radius: 1rem;
    text-align: center;
    width: 40%;
    height: 100%;
    padding: 2rem 1rem;
    display: flex;
    opacity: 90%;
    background-color: #000;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: rgb(14, 13, 18) 1px 1px 20px;
    gap: 2rem;
    margin: 2rem auto;

    input[type=submit] {
    text-transform: uppercase;
    text-decoration: none;
    font-weight: 600;
    font-size: 0.8rem;
    color: rgb(255, 255, 255);
    border-radius: 0.3rem;
    border: 1px solid #5280e2;
    background-color: #5280e2;
    cursor: pointer;
    }
  }
`;
