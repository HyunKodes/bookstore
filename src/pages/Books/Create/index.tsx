import { Input } from "../../../components/Input";
import { Title } from "../../../components/Title";
import { ChangeEvent, FormEvent, useState } from "react";
import { inputProps } from "./inputProps";
import { useNavigate } from "react-router-dom";
import { Container } from "./styles";
import { useBooks} from "../../../services/Hooks";
import { v4 as uuidv4 } from 'uuid';

export const Create = () => {
  const [request, setRequest] = useState({});

  const navigate = useNavigate()
  const { createBook } = useBooks();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRequest({ ...request, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newBook = { 
      ...request, 
      id: uuidv4(),
      author: "", 
      cost:0, 
      country: "",
      imageLink: "", 
      language: "",
      title: "", 
      year: 0,
    };    createBook(newBook);
    alert("Book successfully added!");
    navigate("/");
  };

  return (
    <Container>
      <Title text={"Create Book"} />
      <form onSubmit={(e) => handleSubmit(e)}>
        {inputProps.map((input, index) => (
          <Input
            label={input.label}
            id={input.id}
            name={input.name}
            onChange={handleChange}
            key={index}
          />
        ))}
        <Input type="submit" value="Submit" />
      </form>
    </Container>
  );
};
