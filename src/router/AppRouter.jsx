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
import { Login } from "../pages/Login";
import { TourInfo } from "../pages/TourInfo";
import { Reserva } from "../pages/Reserva";
import ProtectedRoutes from "./ProtectedRoutes";
import { ContextTour } from "../context/ContextTour";
import { Notificacion } from "../pages/Notificacion";
import { Layout } from "../components/Layout";
import { ContextReservation } from "../context/ContextReservation";
import { LayoutBase } from "../layouts/LayoutBase";

export const AppRouter = () => {
  return (
    <>
      <Router>
        {/* <Header /> */}
        <ContextReservation>
          <ContextDepartment>
            <ContextTour>
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<Departamentos />} />
                  <Route path="departamentos" element={<Departamentos />} />
                  <Route path="departamento/:id" element={<Departamento />} />
                  <Route element={<ProtectedRoutes />}>
                    <Route path="reserva/:id" element={<Reserva />} />
                  </Route>
                  <Route path="tours" element={<Tours />} />
                  <Route path="tour/test" element={<TourInfo />} />
                  <Route path="login" element={<Login />} />
                  <Route path="nosotros" element={<Nosotros />} />
                  <Route path="contactanos" element={<Contactanos />} />
                  <Route path="*" element={<Navigate to="/departamentos" />} />
                </Route>
                <Route path="/notificacion" element={<Notificacion />} />
                <Route path="/home" element={<LayoutBase/>}/>
              </Routes>
            </ContextTour>
          </ContextDepartment>
        </ContextReservation>
        {/* <FooterBase /> */}
      </Router>
    </>
  );
};
