import styled from "styled-components";
import { AiOutlineShopping, AiOutlineMenu } from "react-icons/ai";
import { useNavigate } from "react-router";

export default function Top() {
  const navigate = useNavigate();
  return (
    <Container>
      <div className="icon" onClick={() => navigate("/options")}>
        <AiOutlineMenu color="white" />
      </div>
      WEBOOK
      <div onClick={() => navigate("/buying")}>
        <AiOutlineShopping color="white" fontSize={35} />
      </div>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 85px;
  display: flex;
  background-color: #112255;
  align-items: center;
  justify-content: space-around;

  font-family: "Big Shoulders Stencil Text";
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 57px;

  color: #f5f5f5;

  .icon {
    font-size: 30px;
  }
`;
