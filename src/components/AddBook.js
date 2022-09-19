//import axios from 'axios';
import styled from "styled-components";
import logo from "../img/logo.png";
import { useNavigate } from "react-router";
import { useState } from "react";
import axios from "axios";
import Top from "./Top";

export default function Registration() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [autor, setAutor] = useState("");
  const [description, setDescription] = useState("");
  const [pagNumber, setPagNumber] = useState("");
  const [urlCapa, setUrlCapa] = useState("");
  const [genre, setGenre] = useState("");
  const [price, setPrice] = useState("");


  return (
    <>
    <Top />
    <Container>
        <div className="baseboard">Vender livro</div>
      <input
        disabled={false}
        type="text"
        name="input"
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        disabled={false}
        type="text"
        name="input"
        placeholder="Autor"
        value={autor}
        onChange={(e) => setAutor(e.target.value)}
      />
      <input
        disabled={false}
        type="text"
        name="input"
        placeholder="Descrição"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        disabled={false}
        type="number"
        name="input"
        placeholder="Numero de paginas"
        value={pagNumber}
        onChange={(e) => setPagNumber(e.target.value)}
      />

    <input
        disabled={false}
        type="text"
        name="input"
        placeholder="Foto da capa"
        value={urlCapa}
        onChange={(e) => setUrlCapa(e.target.value)}
      />

    <input
        disabled={false}
        type="text"
        name="input"
        placeholder="Gênero"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
      />

    <input
        disabled={false}
        type="number"
        name="input"
        placeholder="Preço"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <Button onClick={() => addBook()}>Cadastrar livro</Button>

    </Container>
    </>
    
  );
    function addBook() {
        axios
        .post("http://localhost:5000/sold", {
            
                name: name,
                pag_number: pagNumber,
                description:  description,               
                autor: autor,
                url: urlCapa,
                price: price,
                genre: genre
              
        },{
            headers: {
              authorization:
                "Bearer " + JSON.parse(localStorage.getItem("token")),
            },
          })
        .then((response) => {
          console.log("livro cadastrado");
          navigate("/home");
        })
        .catch((error) => {
          console.log(error);
        });
    }

}

const Container = styled.div`
margin-top:85px;
  width: 100%;
  height: 100vh;
  background-color: #112255;
  display: flex;
  flex-direction: column;
  align-items: center;
  .baseboard{
    width: 100%;
    height: 25px;

    background: #FFFFFF;

    display: flex;
    justify-content: center;
    align-items:center ;

    font-style: normal;
    font-weight: 300;
    font-size: 13px;
    line-height: 15px;

    color: #112255;

    margin-bottom: 25px;

  }
  h1 {
    font-family: "Big Shoulders Stencil Text";
    font-style: normal;
    font-weight: 400;
    font-size: 64px;
    line-height: 77px;

    color: #f5f5f5;
  }
  input {
    width: 326px;
    height: 58px;
    left: 25px;
    top: 233px;

    border: 1px solid #d5d5d5;
    background: #ffffff;
    border-radius: 5px;
    margin-bottom: 13px;
    outline: none;

    padding-left: 15px;

    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;

    color: #000000;
  }

  p {
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    /* identical to box height */

    color: #ffffff;
    margin-top: 36px;
  }
`;

const Button = styled.div`
margin-top: 20px;
  width: 326px;
  height: 40px;
  left: 23px;
  top: 375px;

  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
/* identical to box height */


color: #112255;

`;
