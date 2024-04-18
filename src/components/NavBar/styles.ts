import styled from "styled-components";

export const Container = styled.nav`
  width: 100%;
  padding: 1.5rem 5rem;
  z-index: 10000;
  opacity: 95%;
  background-color: #ffffff;
  position: sticky;
  top: 0;

  ul {
    display: flex;
    justify-content: flex-end;
    list-style-type: none;
    gap: 2rem;
    list-style: none;
  }

  a {
    text-decoration: none;
    text-transform: uppercase;
    font-size: 1.2rem;
    font-weight: 500;
    color: #5280e2;
  }

  .active {
    border-bottom: 2px solid #5280e2;
  }
`;
