import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import GlobalStyle from "./styles/globalStyles";
import Registration from "./components/Registration";
import Home from "./components/Home";
import Carrinho from "./components/Carrinho";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Registration />} />
          <Route path="/home" element={<Home />} />
          <Route path="/carrinho" element={<Carrinho />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
