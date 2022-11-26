import {
  Routes,
  Route,
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";
import { Departamentos } from "../pages/Departamentos";
import { Tours } from "../pages/Tours";
import { Contactanos } from "../pages/Contactanos";
import { Nosotros } from "../pages/Nosotros";
import { DepartamentoInfo } from "../pages/DepartamentoInfo";
import { Login } from "../pages/Login";
import { Reserva } from "../pages/reservation/Reserva";
import ProtectedRoutes from "./ProtectedRoutes";
import { ContextReservation } from "../context/ContextReservation";
import { LayoutBase } from "../layouts/LayoutBase";
import { Notificacion } from "../pages/Notificacion";
import { PerfilUsuario } from "../pages/userProfile/PerfilUsuario";
import { ContextLoading } from "../context/ContextLoading";
import { ContextModal } from "../context/ContextModal";
import { SignIn } from "../pages/SignIn";
import { ConfirmarCuenta } from "../pages/auth/ConfirmarCuenta";

export const AppRouter = () => {
  return (
    <>
      <Router>
        <ContextModal>
          <ContextReservation>
                <Routes>
                  <Route path="/" element={<LayoutBase />}>
                    <Route
                      index
                      element={<Navigate to="departamentos" />}
                    />
                    <Route path="login" element={<Login />} />
                    <Route path="confirmar-cuenta" element={<ConfirmarCuenta />} />
                    <Route path="signin" element={<SignIn />} />
                    
                    <Route
                      path="departamentos"
                      element={<Departamentos />}
                    />
                    
                    <Route
                      path="departamento/:id"
                      element={<DepartamentoInfo />}
                    />
                    <Route path="tours" element={<Tours />} />
                    <Route path="nosotros" element={<Nosotros />} />
                    <Route path="contactanos" element={<Contactanos />} />
                    <Route
                      path="*"
                      element={<Navigate to="departamentos" />}
                    />
                    <Route element={<ProtectedRoutes />}>
                      <Route path="perfil" element={<PerfilUsuario />} />
                      <Route path="reserva/:id" element={<Reserva />} />
                      <Route
                        path="notificacion"
                        element={<Notificacion />}
                      />
                    </Route>
                  </Route>
                </Routes>
          </ContextReservation>
        </ContextModal>
      </Router>
    </>
  );
};
