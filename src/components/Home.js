import styled from "styled-components";
import Top from "./Top";
import Footer from "./Footer";
import ContainerBooks from "./ContainerBooks";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

export default function Home() {
  const [search, setSearch] = useState("");
  const [bookGenre, setBookGenre] = useState("all");
  return (
    <Container>
      <Top />
      <div className="search">
        <div className="icon">
          <AiOutlineSearch color="666666" />
        </div>
        <input
          disabled={false}
          type="text"
          name="input"
          placeholder="Encontre seu livro"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <ContainerBooks genre={bookGenre} />
      <Footer />
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

  input {
    width: 100%;
    background: #e0e0e0;
    outline: none;
    border: 0;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;

    color: #000000;
  }

  .search {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 8px 16px;
    gap: 10px;

    width: 290px;
    height: 40px;

    background: #e0e0e0;
    border-radius: 8px;
  }
  .icon {
    font-size: 20px;
  }
`;