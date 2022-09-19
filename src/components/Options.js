import styled from "styled-components";
import { useNavigate } from "react-router";
import { AiFillCloseCircle } from "react-icons/ai";
import { useContext } from "react";
import Contextos from "./contexts/Context";

export default function Options() {
  const { setBookGenre } = useContext(Contextos);

  const navigate = useNavigate();

  return (
    <Container>
      <div className="top">
        <div className="tentando" onClick={() => navigate("/home")}>
          WEBOOK
        </div>
        <div onClick={() => navigate("/home")}>x</div>
      </div>
      <div className="divisaoContainer">
        <div className="divisao"></div>
      </div>
      <div className="Lista">
        <p>CATEGORIAS:</p>
        <div className="gen">
          <p
            onClick={() => {
              setBookGenre("romance");
              navigate("/home");
            }}
          >
            ROMANCE
          </p>
          <p
            onClick={() => {
              setBookGenre("aventura");
              navigate("/home");
            }}
          >
            AVENTURA
          </p>
          <p
            onClick={() => {
              setBookGenre("ficção");
              navigate("/home");
            }}
          >
            FICÇÃO CIENTIFICA
          </p>
          <p
            onClick={() => {
              setBookGenre("fantasia");
              navigate("/home");
            }}
          >
            FANTASIA
          </p>
          <p
            onClick={() => {
              setBookGenre("biogarfia");
              navigate("/home");
            }}
          >
            BIOGRAFIA
          </p>
          <p
            onClick={() => {
              setBookGenre("didaticos");
              navigate("/home");
            }}
          >
            DIDATICOS
          </p>
          <p
            onClick={() => {
              setBookGenre("infantis");
              navigate("/home");
            }}
          >
            INFANTIS
          </p>
          <p
            onClick={() => {
              setBookGenre("all");
              navigate("/home");
            }}
          >
            TODOS
          </p>
        </div>
        <p onClick={() => navigate("/sold")}>VENDER LIVRO</p>
        <p onClick={() => navigate("/carrinho")}>CARRINHO</p>
        <p onClick={() => navigate("/")}>LOGOUT</p>
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #112255;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  .divisaoContainer {
    display: flex;
    justify-content: center;
    width: 100%;

    .divisao {
      width: 316px;
      height: 1px;

      background: #d9d9d9;
    }
  }

  .top {
    width: 100%;
    margin-top: 21px;
    padding: 0 25px 0 25px;
    margin-bottom: 3px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #ffffff;

    font-family: "Big Shoulders Stencil Text";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    /* identical to box height */

    color: #f5f5f5;
  }

  p {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;

    color: #ffffff;
    margin-top: 36px;
  }

  .gen p {
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;

    margin-left: 50px;
  }

  .Lista {
    padding-left: 80px;
    margin-bottom: 20px;
  }
`;
