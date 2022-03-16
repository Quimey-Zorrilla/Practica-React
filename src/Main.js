import ItemListContainer from "./componentes/ItemListContainer";
import { Route, Routes } from "react-router-dom";
import Carrito from "./pages/Carrito"
import ItemDetailContainer from "./componentes/ItemDetailContainer";

function Main() {
    return(
        <>
            <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/categoria/:id" element={<ItemListContainer/>}/>
                <Route path="/carrito" element={<Carrito/>}/>
                <Route path="/item/:id" element={<ItemDetailContainer/>}/>
            </Routes>
        </>
    )
} 

export default Main;