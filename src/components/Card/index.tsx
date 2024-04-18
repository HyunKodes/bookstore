import { Link, useNavigate } from "react-router-dom";
import { ButtonContainer, Container, TextContainer } from "./styles";
import { useBooks } from "../../services/Hooks";

interface IProps {
  info: {
    id: string | JSX.Element;
    author: string | JSX.Element;
    cost: number | JSX.Element;
    country: string | JSX.Element;
    imageLink: string;
    title: string | JSX.Element;
    year: number | JSX.Element;
    detailsButton?: boolean;
  };
}

export const Card = ({ info }: IProps) => {
  const { id, author, cost, country, year, imageLink, title, detailsButton } = info;

  const navigate = useNavigate();
  const { deleteBook } = useBooks();

  const handleDelete = (id: string) => {
    try {
      const option = confirm(
        "Are you sure you want to remove the selected item?"
      );

      if (option) {
        deleteBook(id);
        navigate("/");
      } else return;
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Container detailsButton={detailsButton}>
      <h2>{title}</h2>
      
      <img src={imageLink} alt="" />
      <TextContainer>
        <p>
          <span>Author: </span>
          {author}
        </p>
        
        {!detailsButton && (
          <>
            <p>
              <span>Country: </span>
              {country}
            </p>
            <p>
              <span>Year: </span>
              {year}
            </p>
            <p>
              <span>Cost: </span>
              {cost}
            </p>
          </>
        )}
      </TextContainer>

      {detailsButton ? (
        <ButtonContainer>
          <Link to={`/books/${id}`}>Details</Link>
          <button onClick={() => handleDelete(id as string)}>Delete</button>
        </ButtonContainer>
      ) : (
        <ButtonContainer>
          
          <Link to={`/books`} id="saveReturn" type="submit">
            Save and Return
          </Link>
        </ButtonContainer>
      )}
    </Container>
  );
};
