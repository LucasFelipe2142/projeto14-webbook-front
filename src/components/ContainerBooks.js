import axios from "axios";
import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
import { IoReloadCircle } from "react-icons/io5";
import Flyer_props from "./Flyer_props";

export default function ContainerBooks(props) {
  const [books, setBooks] = useState([]);
  let newBooks;
  useEffect(() => {
    axios
      .get(`http://localhost:5000/home/${props.genre}`)
      .then((response) => {
        setBooks(response.data);
        console.log("foi");
      })
      .catch((error) => {
        return "erro" + error;
      });
  }, []);

  if (books.length === 0) return;

  newBooks = books;

  if (props.bookName !== "") {
    newBooks = books.filter((aux) => aux.name.includes(props.bookName));
  }

  if (newBooks.length === 0) {
    return (
      <Failed>
        <p>Nenhum livro encontrado</p>
        <div className="reload" onClick={() => window.location.reload(true)}>
          <IoReloadCircle color="#112255" fontSize={40} />
        </div>
      </Failed>
    );
  }

  return (
    <>
      {newBooks.map((book, index) => (
        <div key={index}>
          <Flyer_props url={book.url} name={book.name} />
        </div>
      ))}
    </>
  );
}

const Failed = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .reload {
    margin-top: 15px;
  }
`;
