import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Login from "./components/Login";
import GlobalStyle from "./styles/globalStyles";
import Registration from "./components/Registration";
import Home from "./components/Home";
import Context from "./components/contexts/Context";

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
          </Routes>
        </Context.Provider>
      </BrowserRouter>
    </>
  );
}
