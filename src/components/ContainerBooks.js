import axios from "axios";
import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";

export default function ContainerBooks(props) {
  const [books, setBooks] = useState([]);
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

  return (
    <>
      {books.map((book, index) => (
        <div key={index}>
          <Flyer_props url={book.url} name={book.name} />
        </div>
      ))}
    </>
  );

  function Flyer_props(props) {
    return (
      <Flyer_Style>
        <img src={props.url} />
        <div className="inf">
          {props.name} <p>+</p>
        </div>
      </Flyer_Style>
    );
  }
}

const Flyer_Style = styled.div`
  width: 130px;
  height: 208px;
  left: 30px;
  top: 169px;
  background: #ffffff;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  margin-bottom: 20px;

  img {
    width: 130px;
    height: 168px;
  }
  .inf {
    width: 130px;
    height: 40px;
    background: #112255;

    font-style: normal;
    font-weight: 300;
    font-size: 13px;
    line-height: 15px;

    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: space-around;

    p {
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;
      /* identical to box height */

      color: #f5f5f5;
    }
  }
`;
