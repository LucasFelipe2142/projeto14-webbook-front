import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import Top from "./Top";




function CarrinhoProduto({nome, preco, imagem} ){



  return(<>
  
  <div className="produto">
                  <img src={imagem}></img>
                  <div className="info">
                    <div>
                     <div>Produto: {nome}</div>
                     <div>Preço: {preco}</div>
                    </div>
                    <div className="quantidade">
                      <div>Quantidade:</div> 
                    </div>
                  </div>
                </div>
  </>);
}



export default function Carrinho(){

  const navigate = useNavigate();

  const [ cart, setCart ] = useState("");

  useEffect(() => {  
      //console.log(localStorage.getItem("token"));
      getCart();
    }, []);

    async function getCart(){

      const token = localStorage.getItem("token").replace(/["']/g, "");
      
      const config = {
        headers: {
          token: token
        }
      }

      const cartData = await (await axios.get(`http://localhost:5000/cart`, config)).data;
      console.log(cartData);
      setCart(cartData);

    }

    async function checkout(){

      const token = localStorage.getItem("token").replace(/["']/g, "");

      const config = {
        headers: {
          token: token
        }
      }

      await axios.post("http://localhost:5000/purchases", {cart}, config);
      console.log(cart);
      navigate("/checkout")
    }

    return(
        <Container>
            <Top/>
            <div className="title">
                <p>Carrinho de compras</p>
            </div>
            <Lista>
            {cart ? cart.products.map(produto => <CarrinhoProduto nome={produto.name} preco={produto.price} imagem={produto.imgUrl}/>) : <div>O carrinho está vazio</div>}
            
                
            </Lista>
            

            <div className="button">Continuar Comprando</div>
                <div className="confirma"> 
                    <div>Subtotal: {cart.totalPrice}R$</div>
                    <div className="button" onClick={() => checkout()}>Confirmar compra</div>
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

  .button{
    width: 326px;
    height: 46px;
    left: 23px;
    top: 375px;

    background: #112255;
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
  }

  .confirma .button{
    background-color: #3296D4;
  }


`
const Lista = styled.div`

  width: 100%;
  height: 100vh;
  background-color: #E0E0E0;
  margin-top: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;


  .produto{
    width: 325px;
    height: 119px;
    background-color: #FFFFFF;
    border-radius: 5px;
    padding: 19 19 10 16;
    margin: 10px;

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
