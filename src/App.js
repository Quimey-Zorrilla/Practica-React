import React from 'react';

/* IMPORTAMOS DE react-router-dom */
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { NavBar } from './componentes/NavBar';
import { ItemListContainer } from './componentes/ItemListContainer';
import { ItemDetailContainer } from './componentes/ItemDetailContainer';

function App() {
    return (
        /* envolvemos todo en BrowserRouter */
        <BrowserRouter>
            {/* La Navbar afuera de Routes para que se muestre en todas las rutas */}
            <NavBar />
        
            {/* aca empiezan las rutas */}
            <Routes>
                {/* la HOME */}
                <Route path="/" element={<ItemListContainer greeting={'HOME'} />} />
        
                {/* filtramos por categoria */}
                <Route
                path="/category/:catId"
                element={<ItemListContainer greeting={'FILTRADO'} />}
                />
        
                {/* vista de detalle */}
                <Route path="/product/:itemId" element={<ItemDetailContainer />} />
        
                {/* para evitar navegar a rutas que no existen. pueden usar un mensaje de error en vez del navigate que reditecciona */}
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;