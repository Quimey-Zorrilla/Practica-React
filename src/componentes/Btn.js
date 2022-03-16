import { Link } from "react-router-dom"

const Btn = (producto) => {
    return(
        <Link to="/item/ + producto.id"><button>Mas Detalles</button></Link>
    )
}

export default Btn;