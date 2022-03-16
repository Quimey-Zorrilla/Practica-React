import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import {ProductosIniciales} from "./ProductosIniciales"




const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false);
    const {id} = useParams()


    useEffect(() => {
        
        setLoading(true);
        const promesa = new Promise((res, rej) => {
            setTimeout(() => {
                res(ProductosIniciales);
            }, 2000)
        })

        promesa
            .then((res) => {
                if (id !== undefined) {
                    const ProductosFiltrados = ProductosIniciales.filter(producto => producto.id === id)
                    setProductos(ProductosFiltrados)
                } else {
                    setProductos(ProductosIniciales);
                }
                //setProductos(productosIniciales)
            })
            .catch((error) => {
                console.log("Error al cargar los productos")
                setError(true);
            })
            .finally(() => {
                setLoading(false)
            })

    },[id])

    return (
        <>
            {loading ? "Cargando..." : <ItemList productos={productos}/>}
            {error ? <h3>Error al intentar cargar la pagina</h3> : null}
        </>
    )
}

export default ItemListContainer;