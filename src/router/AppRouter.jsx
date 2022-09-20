import { Routes, Route, BrowserRouter as Router, Navigate } from "react-router-dom";
import { Departamentos } from "../pages/Departamentos";
import { Tours } from "../pages/Tours";
import { Header } from "../components/Header";
import { Contactanos } from "../pages/Contactanos";
import { Nosotros } from "../pages/Nosotros"

export const AppRouter = () => {
    return (
<<<<<<< HEAD
        <> 
        <Router>
        <Header/>   
=======
        <>
        
        <Router>
            <Header/>   
>>>>>>> 262624868e05fa57347e724b32200ed4f68f5519
            <Routes>
                <Route path='departamentos' element={<Departamentos/>} />
                <Route path='tours' element={<Tours/>} />
                <Route path='nosotros' element={<Nosotros/>} />
                <Route path='contactanos' element={<Contactanos/>} />
<<<<<<< HEAD
                <Route path='*' element={<Navigate to='/departamentos'/>} /> 
=======
                <Route path='/*' element={<Navigate to='/departamentos'/>} />
                
>>>>>>> 262624868e05fa57347e724b32200ed4f68f5519
            </Routes>
        </Router>
            
        </>
    )
}

