import styled from "styled-components";
import { useNavigate } from "react-router";



export default function Checkout(){
 
    const navigate = useNavigate();


    return(
        <Container>


            <div onClick={() => navigate("/home")}>Confirmar compra</div>
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