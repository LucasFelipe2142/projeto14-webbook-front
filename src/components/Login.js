import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router";
import { useState } from "react";
import logo from "../img/logo.png";

export default function Login() {
  const navigate = useNavigate();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Container>
      <img src={logo}></img>
      <h1>WEBOOK</h1>
      <input
        disabled={false}
        type="text"
        name="input"
        placeholder="Email"
        value={login}
        onChange={(e) => setLogin(e.target.value)}
      />
      <input
        disabled={false}
        type="password"
        name="input"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button onClick={() => logar()}>Entrar</Button>

      <p onClick={() => navigate("/Cadastro")}>Primeira vez? Cadastre-se!</p>
    </Container>
  );

  function logar() {
    axios
      .post("http://localhost:5000/login", {
        email: login,
        password: password,
      })
      .then((response) => {
        localStorage.setItem("token", JSON.stringify(response.data.token));
        localStorage.setItem("name", JSON.stringify(response.data.name));
        localStorage.setItem("userId", JSON.stringify(response.data.userId));
        // console.log("foi");
        navigate("/home");
      })
      .catch((error) => {
        alert(error.message);
      });
  }
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #112255;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 159px;
    height: 159px;
    margin-bottom: 10px;
  }
  h1 {
    font-family: "Big Shoulders Stencil Text";
    font-style: normal;
    font-weight: 400;
    font-size: 96px;
    line-height: 115px;
    /* identical to box height */

    color: #f5f5f5;

    margin-bottom: 40px;
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
  width: 326px;
  height: 46px;
  left: 23px;
  top: 375px;

  background: #3296d4;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;

  color: #ffffff;
`;
