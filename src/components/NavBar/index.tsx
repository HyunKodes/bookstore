import { NavLink } from "react-router-dom";
import { Container } from "./styles";

export const NavBar = () => {
  return (
    <Container>
      <ul>
        <li>
          <NavLink to="/books">Books</NavLink>
        </li>
        <li>
          <NavLink to="/create">Add Book</NavLink>
        </li>
      </ul>
    </Container>
  );
};
