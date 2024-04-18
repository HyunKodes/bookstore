import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IBookInfo, useBooks } from '../../../services/Hooks';
import { Card } from "../../../components/Card";
import { Container } from "./styles";
import { Title } from "../../../components/Title";

export const Details = () => {
  const { id } = useParams();
  const { getBookById, editBook } = useBooks();

  let bookInfo: IBookInfo | undefined;
  if (id) {
    console.log(id)
    bookInfo = getBookById(id);
    console.log(bookInfo)
  }

  console.log()
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (bookInfo) {
      const updatedBook = { ...bookInfo, [event.target.name]: event.target.value };
      editBook(id, updatedBook);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

return (
  <Container>
    <Title text={"Details"} />
    {bookInfo && (
      <form onSubmit={handleSubmit}>      
      <Card
        info={{
          id: bookInfo.id,
          author: (
            <input
              type="text"
              name="author"
              value={bookInfo.author}
              onChange={handleChange}
            />
          ),
          country: (
            <input
              type="text"
              name="country"
              value={bookInfo.country}
              onChange={handleChange}
            />
          ),
          imageLink: bookInfo.imageLink,
          title: (
            <input
              type="text"
              name="title"
              value={bookInfo.title}
              onChange={handleChange}
            />
          ),
          year: (
            <input
              type="text"
              name="year"
              value={bookInfo.year}
              onChange={handleChange}
            />
          ),
          cost: (
            <input
              type="text"
              name="cost"
              value={bookInfo.cost}
              onChange={handleChange}
            />
          ),
        }}
      />
    </form>
  )}

  </Container>
);
};