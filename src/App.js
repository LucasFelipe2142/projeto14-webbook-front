import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import GlobalStyle from "./styles/globalStyles";
import Registration from "./components/Registration";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Registration />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
