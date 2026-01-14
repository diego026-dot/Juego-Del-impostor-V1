import {BrowserRouter, Routes, Route} from 'react-router-dom'

import DashboardView from './views/DashboardView'


export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                
            <Route path='/' element={<DashboardView/>} index />
                    
                
            </Routes>

        </BrowserRouter>
    )
}