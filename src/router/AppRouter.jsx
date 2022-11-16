import {
  Routes,
  Route,
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";
import { ContextDepartment } from "../context/ContextDepartment";
import { Departamentos } from "../pages/Departamentos";
import { Tours } from "../pages/Tours";
import { Contactanos } from "../pages/Contactanos";
import { Nosotros } from "../pages/Nosotros";
import { Departamento } from "../pages/DepartamentoInfo";
import { Login } from "../pages/Login";
import { Reserva } from "../pages/reservation/Reserva";
import ProtectedRoutes from "./ProtectedRoutes";
import { ContextTour } from "../context/ContextTour";
import { ContextReservation } from "../context/ContextReservation";
import { LayoutBase } from "../layouts/LayoutBase";
import { ContextTransport } from "../context/ContextTransport";
import { Notificacion } from "../pages/Notificacion";
import { PerfilUsuario } from "../pages/userProfile/PerfilUsuario";

export const AppRouter = () => {
  return (
    <>
      <Router>
        <ContextReservation>
          <ContextDepartment>
            <ContextTransport>
              <ContextTour>
                <Routes>
                  <Route path="/" element={<LayoutBase />}>
                    <Route index element={<Departamentos />} />
                    <Route path="login" element={<Login />} />
                    <Route path="notificacion" element={<Notificacion/>}/>
                    <Route path="departamentos" element={<Departamentos />} />
                    <Route path="departamento/:id" element={<Departamento />} />
                    <Route path="tours" element={<Tours />} />
                    <Route path="nosotros" element={<Nosotros />} />
                    <Route path="contactanos" element={<Contactanos />} />
                    <Route path="*" element={<Navigate to="departamentos" />} />
                    <Route element={<ProtectedRoutes />}>
                      <Route path="perfil" element={<PerfilUsuario />} />
                      <Route path="reserva/:id" element={<Reserva />} />
                    </Route>
                  </Route>
                </Routes>
              </ContextTour>
            </ContextTransport>
          </ContextDepartment>
        </ContextReservation>
      </Router>
    </>
  );
};
