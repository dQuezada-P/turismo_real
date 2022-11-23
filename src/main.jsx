import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppRouter } from './router/AppRouter'
import './index.css'
import { ContextAuth } from './context/ContexAuth'
import { ContextLoading } from './context/ContextLoading'


ReactDOM.createRoot(document.getElementById('root')).render(
    <ContextLoading>
        <ContextAuth>
            <AppRouter></AppRouter>   
        </ContextAuth>   
    </ContextLoading>   
         
)


