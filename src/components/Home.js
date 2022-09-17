import styled from "styled-components";
import Top from "./Top";
import Footer from "./Footer";
import ContainerBooks from "./ContainerBooks";
import { useState, useContext } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Context from "./contexts/Context";

export default function Home() {
  const [search, setSearch] = useState("");
  const { bookGenre } = useContext(Context);
  return (
    <Container>
      <Top />
      <div className="search">
        <input
          disabled={false}
          type="text"
          name="input"
          placeholder="Encontre seu livro"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="icon">
          <AiOutlineSearch color="666666" />
        </div>
      </div>
      <div className="genre">{genreBook()}</div>
      <div className="columnBooks">
        <ContainerBooks genre={bookGenre} bookName={search} />
      </div>
      <div className="space"></div>
      <Footer />
    </Container>
  );

  function genreBook() {
    if (bookGenre === "all") return "Todos";
    return bookGenre[0].toUpperCase() + bookGenre.substring(1);
  }
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
    margin-bottom: 19px;
  }
  .icon {
    font-size: 20px;
  }
  .genre {
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    /* identical to box height */

    color: #112255;

    margin-bottom: 18px;
  }
  .columnBooks {
    width: 290px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding-bottom: 20px;
  }
`;
