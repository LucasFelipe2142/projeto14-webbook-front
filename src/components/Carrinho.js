import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import Top from "./Top";
import IMAGEMTESTE from "../img/IMAGEMTESTE.jpg";

function CarrinhoProduto({nome, preco} ){



  return(<>
  
  <div className="produto">
                  <img src={IMAGEMTESTE}></img>
                  <div className="info">
                    <div>
                     <div>Produto: {nome}</div>
                     <div>Preço: {preco}</div>
                    </div>
                    <div className="quantidade">
                      <div>Quantidade:</div> 
                      <div>Icone de lixeira</div>
                    </div>
                  </div>
                </div>
  </>);
}



export default function Carrinho(){

  const [ cart, setCart ] = useState("");

  useEffect(() => {  
      console.log(localStorage.getItem("token"));
      getCart();
    }, []);

    async function getCart(){

      const token = localStorage.getItem("token").replace(/["']/g, "");
      
      const config = {
        headers: {
          token: token
        }
      }

      const cart = await (await axios.get(`http://localhost:5000/cart`, config)).data;
      console.log(cart.products);
      setCart(cart.products);

    }

    return(
        <Container>
            <Top/>
            <div className="title">
                <p>Carrinho de compras</p>
            </div>
            <Lista>
            {cart.map(produto => <CarrinhoProduto nome={produto.name} preco={produto.price} />)}
                
            </Lista>
            

            <div className="button">Continuar Comprando</div>
                <div className="confirma"> 
                    <div>Subtotal: R$</div>
                    <div className="button">Confirmar compra</div>
                </div>

        
        </Container>
    );
}

const Container = styled.div`

  width: 100%;
  height: 100vh;
  background-color: white;
  padding-top: 110px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .title{
    width: 120px;
    height: 15px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    font-size: 13px;
    color: #112255;

    display: flex;
    align-items: center;
    justify-content: center;

  }

`
const Lista = styled.div`

  width: 100%;
  height: 100vh;
  background-color: #E0E0E0;
  padding: 100 0 0 100;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;


  .produto{
    width: 325px;
    height: 119px;
    background-color: #FFFFFF;
    border-radius: 5px;
    padding: 19 19 10 16;

    display: flex;
  }

  .info{
    display:flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .quantidade{
    display: flex;
    justify-content: space-around;

  }

  img{
    width: 76px;
    height: 98px;
    border-radius: 0%;

  }
`
