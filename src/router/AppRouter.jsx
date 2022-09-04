import { Routes, Route, BrowserRouter as Router, Navigate } from "react-router-dom";
import { Departamentos } from "../pages/Departamentos";
import { Tours } from "../pages/Tours";
import { Header } from "../components/Header";
import { Contactanos } from "../pages/Contactanos";
import { Nosotros } from "../pages/Nosotros"

export const AppRouter = () => {
    return (
        <>
        
        <Router>
        <Header/>   
            <Routes>
                <Route path='departamentos' element={<Departamentos/>} />
                <Route path='tours' element={<Tours/>} />
                <Route path='nosotros' element={<Nosotros/>} />
                <Route path='contactanos' element={<Contactanos/>} />
                <Route path='/*' element={<Navigate to='/departamentos'/>} />
                
            </Routes>
        </Router>
            
        </>
    )
}

