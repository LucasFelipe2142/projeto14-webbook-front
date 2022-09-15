import styled from "styled-components";
import { AiOutlineShopping, AiOutlineMenu } from "react-icons/ai";

export default function Top() {
  return (
    <Container>
      <div className="icon">
        <AiOutlineMenu color="white" />
      </div>
      WEBOOK
      <div className="icon">
        <AiOutlineShopping color="white" />
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
