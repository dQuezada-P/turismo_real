import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppRouter } from './router/AppRouter'
import './index.css'
import { ContextAuth } from './context/ContexAuth'



ReactDOM.createRoot(document.getElementById('root')).render(
    <ContextAuth>
        <AppRouter></AppRouter>   
    </ContextAuth>   
         
)


