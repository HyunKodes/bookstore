import { useState, useEffect } from 'react';

export interface IBookInfo {
    id: string;
    author: string;
    cost: number;
    country: string;
    imageLink: string;
    language: string;
    title: string;
    year: number;
  }
  
  export interface IBookRequest {
    id: string;
    author: string;
    cost: number;
    country: string;
    imageLink: string;
    language: string;
    title: string;
    year: number;
  }
export const useBooks = () => {
  const [books, setBooks] = useState<IBookInfo[]>([]);

  useEffect(() => {
    const storedBooks = localStorage.getItem('books');
    console.log(storedBooks)

    if (storedBooks) {
      setBooks(JSON.parse(storedBooks));
    } else {
      fetch('/db.json')
        .then((response) => response.json())
        .then((data) => {
          setBooks(data.books);
          localStorage.setItem('books', JSON.stringify(data.books));
        });
    }
  }, []);

  const getBookById = (id: string) => {
    return books.find((book) => book.id === id);
  };
  
  const deleteBook = (id: string) => {
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
    localStorage.setItem('books', JSON.stringify(updatedBooks));
  };

  const createBook = (newBook: IBookInfo) => {
    const updatedBooks = [...books, newBook];
    setBooks(updatedBooks);
    localStorage.setItem('books', JSON.stringify(updatedBooks));
  };


  const editBook = (id: string, updatedBook: IBookInfo) => {
    const updatedBooks = books.map((book) => (book.id === id ? updatedBook : book));
    setBooks(updatedBooks);
    localStorage.setItem('books', JSON.stringify(updatedBooks));
  };

  return { books, getBookById, deleteBook, createBook, editBook };
};
