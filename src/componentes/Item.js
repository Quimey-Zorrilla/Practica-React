import Btn from "./Btn";
import { ProductosIniciales } from "./ProductosIniciales";


const Item = ({productos}) => {
    return (
        <article>
            <h2>{productos.nombre}</h2>
            <img src="https://picsum.photos/200/150" alt=""/>
            <p>Precio : ${productos.precio}</p>
            <div>
                <Btn id={productos.id}/>
            </div>
        </article>
    )
}

export default Item;