import { BrowserRouter } from "react-router-dom";
import NavBar from "./componentes/NavBar";
import Main from "./Main";

function App() {
    return (
        <BrowserRouter>
            <NavBar/>
            <Main/>
        </BrowserRouter>
    )
}

export default App;