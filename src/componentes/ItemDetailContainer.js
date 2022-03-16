import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import {ProductosIniciales} from "./ProductosIniciales";



const ItemDetailContainer = () => {

  const [producto, setProducto] = useState([]);
  const [loading, setLoading] = useState (true);
  const { id } = useParams();

  useEffect(() => {

    setLoading(true);

    const PromesaInicial = new Promise ((res) => {
      setTimeout(() => {
        res(ProductosIniciales);
      }, 2000)
    })

    PromesaInicial
    .then((res) => {
      var resultado = ProductosIniciales.find(producto => {
        return producto.id === id;
      })
      setProducto(resultado);
    })
    .catch((error) => {
      console.log("Error al cargar los productos");
    })
    .finally(() => {
      setLoading(false);
    })
  }, [id])





  return (
    <>
    <div>
      {loading ? "Cargando los productos ..." : <ItemDetail producto={producto} />}
    </div>
    <div>
      <h2>{producto.nombre}</h2>
      <img src="https://picsum.photos/200/150" alt="" />
      <p>{producto.desc}</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam maiores ipsa, quasi nemo fuga corrupti quam? Culpa officiis minus impedit perspiciatis fugit corrupti maxime soluta dicta veritatis nihil tempora numquam quo repellendus autem, laudantium voluptas debitis eum maiores ab placeat rerum ratione quibusdam vel? Aperiam a molestiae nemo ducimus sed.</p>
    </div>
    </>
  )
}
  
export default ItemDetailContainer;