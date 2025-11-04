import { BrowserRouter, Routes, Route } from "react-router-dom";
import Despesas from "./pages/Despesas";
import Pacientes from "./pages/Pacientes";
import App from "./app";


export default function Navegacao() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />

        <Route path="/pacientes" element={<Pacientes />} />

      </Routes>
    </BrowserRouter>
  );
}