import {
  Routes,
  Route,
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";
import { ContextDepartment } from "../context/ContextDepartment";
import { Departamentos } from "../pages/Departamentos";
import { Tours } from "../pages/Tours";
import { Header } from "../components/header/Header";
import { Contactanos } from "../pages/Contactanos";
import { Nosotros } from "../pages/Nosotros";
import { Departamento } from "../pages/DepartamentoInfo";
import { FooterBase } from "../components/footer/FooterBase";

export const AppRouter = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route
            path="departamentos"
            element={
              <ContextDepartment>
                <Departamentos />
              </ContextDepartment>
            }
          />
          <Route
            path="departamento/:id"
            element={
              <ContextDepartment>
                <Departamento />
              </ContextDepartment>
            }
          />
          <Route path="tours" element={<Tours />} />
          <Route path="nosotros" element={<Nosotros />} />
          <Route path="contactanos" element={<Contactanos />} />
          <Route path="/*" element={<Navigate to="/departamentos" />} />
        </Routes>
        <FooterBase/>
      </Router>

    </>
  );
};
