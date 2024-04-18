import { useBooks } from "../../services/Hooks";
import { Card } from "../../components/Card";
import { Container } from "./styles";
import { Title } from "../../components/Title";

export const Books = () => {
  const { books } = useBooks();

  return (
    <Container>
      <Title text={"Books"} />
      <div className="card-container">
        {books.map((book, index) => (
          <Card
            info={{
              id: book.id,
              author: book.author,
              cost: book.cost,
              country: book.country,
              imageLink: book.imageLink,
              title: book.title,
              year: book.year,
              detailsButton: true,
            }}
            key={index}
          />
        ))}
      </div>
    </Container>
  );
};
