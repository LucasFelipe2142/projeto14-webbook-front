import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Login from "./components/Login";
import GlobalStyle from "./styles/globalStyles";
import Registration from "./components/Registration";
import Home from "./components/Home";
import Carrinho from "./components/Carrinho";
import Context from "./components/contexts/Context";
import AddBook from "./components/AddBook"
 
export default function App() {
  const [bookGenre, setBookGenre] = useState("all");
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>

        <Context.Provider
          value={{
            bookGenre,
            setBookGenre,
          }}
        >
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/cadastro" element={<Registration />} />
            <Route path="/home" element={<Home />} />
            <Route path="/carrinho" element={<Carrinho />} />
            <Route path="/sold" element={<AddBook />} />
          </Routes>
        </Context.Provider>

      </BrowserRouter>
    </>
  );
}
