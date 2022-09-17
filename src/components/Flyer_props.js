import styled from "styled-components";
import { useState } from "react";

export default function Flyer_props(props) {
  const [mostrar, setMostrar] = useState("none");

  return (
    <>
      <Flyer_Style onClick={() => setMostrar("inherit")}>
        <img src={props.url} />
        <div className="inf">
          {props.name} <p>+</p>
        </div>
      </Flyer_Style>
      <BookInf mostrar={mostrar}>
        <div className="background"></div>
        <div className="container">
          <div className="boxInf">
            <div className="top">
              <img src={props.url} />
              <p>{props.name}</p>
            </div>
          </div>
        </div>
      </BookInf>
    </>
  );
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
    left: 10vh;
    width: 294px;
    height: 394px;
    opacity: 1;
    background: #d9d9d9;
    border-radius: 10px;
    z-index: 1;
    margin-top: 85px;

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

      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 28px;

      color: #000000;
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
    justify-content: space-around;

    p {
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;
      /* identical to box height */

      color: #f5f5f5;
    }
  }
`;
