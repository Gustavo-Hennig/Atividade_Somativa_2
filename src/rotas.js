import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cadastro from './paginas/cadastro/index';
import Login from './paginas/login/index'
import Principal from './paginas/principal/index'

const Rotas = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/principal" element={<Principal />} />
        </Routes>
    </BrowserRouter>
  );
}

export default Rotas;