import styled from "styled-components";
import { useNavigate } from "react-router";
import { AiFillCloseCircle } from "react-icons/ai";
import { useContext } from "react";
import Contextos from "./contexts/Context";

export default function Options(){
const {setBookGenre} = useContext(Contextos);

    const navigate = useNavigate();


    return(
        <Container>
          <div className="top">
            <p onClick={() => navigate("/home")}>WEBOOK</p>         
                <div onClick={() => navigate("/home")}>
                    <AiFillCloseCircle color="white" fontSize={35} />
                </div>
          </div>
          <div className="Lista">
                <p>CATEGORIAS:</p>
                    <div className="gen">
                        <p onClick={()=>{
                          setBookGenre('romance')
                          navigate('/home')
                        }}>ROMANCE</p>
                        <p onClick={()=>{
                          setBookGenre('aventura')
                          navigate('/home')
                        }}>AVENTURA</p>
                        <p onClick={()=>{
                          setBookGenre('ficção')
                          navigate('/home')
                        }}>FICÇÃO CIENTIFICA</p>
                        <p onClick={()=>{
                          setBookGenre('fantasia')
                          navigate('/home')
                        }}>FANTASIA</p>
                        <p onClick={()=>{
                          setBookGenre('biogarfia')
                          navigate('/home')
                        }}>BIOGRAFIA</p>
                        <p onClick={()=>{
                          setBookGenre('didaticos')
                          navigate('/home')
                        }}>DIDATICOS</p>
                        <p onClick={()=>{
                          setBookGenre('infantis')
                          navigate('/home')
                        }}>INFANTIS</p>
                       
                    </div>
                <p onClick={() => navigate("/sold")}>VENDER LIVRO</p>
                <p onClick={() => navigate("/perfil")}>PERFIL</p>
                <p onClick={() => navigate("/carrinho")}>CARRINHO</p>
                <p onClick={() => navigate("/")}>LOGOUT</p>
                
          </div>
        </Container>

    );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #112255;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-left: 10px;

  .top{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px;
    color: #ffffff;
  }

  .top div{
    margin-left: 200px;
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
`;