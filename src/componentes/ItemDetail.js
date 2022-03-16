const ItemDetail = (producto) => {
    return(
        <div>
            <h3>{producto[0].nombre}</h3>
            <p>Precio ${producto[0].precio}</p>
            <p>Descripción del Producto: {producto[0].desc}</p>
        </div>
    )
}

export default ItemDetail;