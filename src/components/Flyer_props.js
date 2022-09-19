import styled from "styled-components";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function Flyer_props({ book }) {
  const [mostrar, setMostrar] = useState("none");
  const navigate = useNavigate();

  return (
    <>
      <Flyer_Style onClick={() => setMostrar("inherit")}>
        <img src={book.url} />
        <div className="inf">
          <div>{book.name}</div> <p>+</p>
        </div>
      </Flyer_Style>
      <BookInf mostrar={mostrar}>
        <div className="background"></div>
        <div className="container">
          <div className="boxInf">
            <div className="content">
              <div className="top">
                <img src={book.url} />
                <div className="names">
                  <p>{book.name}</p>
                  <h2>{book.autor}</h2>
                </div>
              </div>
              <h1>Sinopse:</h1>
              <div className="sinopse">{book.description}</div>
              <div className="price">
                <p>Valor:</p>
                {"R$ " + book.price}
              </div>
            </div>
            <div className="buttons">
              <div className="add" onClick={()=> registrateBook()}>Adicionar ao carrinho</div>
              <div className="back" onClick={() => setMostrar("none")}>
                Cancelar
              </div>
            </div>
          </div>
        </div>
      </BookInf>
    </>
  );
  function registrateBook() {
    axios
    .post("https://project-14-webook.herokuapp.com/cart", {
        
      name:book.name,
      price: book.price,
      sinopse: book.description,
      imgUrl: book.url
          
    },{
        headers: {
          token: JSON.parse(localStorage.getItem("token")),
        },
      })
    .then((response) => {
      console.log("enviado para o carrinho");
      navigate("/home");
    })
    .catch((error) => {
      console.log(error);
    });
}
}

const BookInf = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  display: ${(props) => props.mostrar};
  width: 100%;
  height: 100vh;
  .background {
    position: fixed;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.75);
    opacity: 0.68;
  }
  .container {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .boxInf {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    left: 10vh;
    width: 294px;
    height: 394px;
    opacity: 1;
    background: #d9d9d9;
    border-radius: 10px;
    z-index: 1;
    margin-top: 85px;

    h1 {
      margin-left: 19px;
      margin-top: 18px;
      margin-bottom: 8px;

      font-style: normal;
      font-weight: 600;
      font-size: 13px;
      line-height: 15px;

      color: #000000;
    }

    img {
      width: 76px;
      height: 98px;

      background: url(image.png);
      border-radius: 4px;
      margin-right: 21px;
    }

    .top {
      margin-left: 19px;
      margin-top: 20px;
      display: flex;
      .names {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        p {
          width: 140px;
          font-style: normal;
          font-weight: 600;
          font-size: 24px;
          line-height: 28px;

          color: #000000;
        }
        h2 {
          font-style: normal;
          font-weight: 400;
          font-size: 15px;
          line-height: 15px;

          color: #000000;
        }
      }
    }

    .sinopse {
      width: 250px;
      margin-left: 19px;

      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 13px;
      line-height: 15px;
      text-align: justify;

      color: #000000;
    }

    .price {
      width: 250px;
      margin-top: 18px;
      margin-left: 19px;

      display: flex;
      justify-content: space-between;
    }

    .buttons {
      display: flex;
      .add {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 210px;
        height: 37px;

        background: #58e855;

        font-style: normal;
        font-weight: 700;
        font-size: 13px;
        line-height: 15px;
        text-align: justify;

        color: #000000;
      }
      .back {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 84px;
        height: 37px;

        background: #f94444;

        font-style: normal;
        font-weight: 700;
        font-size: 13px;
        line-height: 15px;
        text-align: justify;

        color: #000000;
      }
    }
  }
`;

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
    justify-content: space-between;

    padding: 0 8px 0 8px;

    p {
      margin-left: 8px;
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;
      /* identical to box height */

      color: #f5f5f5;
    }
  }
`;
