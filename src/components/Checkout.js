import styled from "styled-components";
import { useNavigate } from "react-router";



export default function Checkout(){
 
    const navigate = useNavigate();


    return(
        <Container>
            <div>Sua compra foi finalizada com sucesso</div>
            <div onClick={() => navigate("/home")}>Voltar a comprar</div>
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
