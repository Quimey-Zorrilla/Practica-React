const ItemDetail = ({item}) => {

    const {name, copy, price} = item;

    return(
        <div>
            <p>{name}</p>
            <p>{copy}</p>
            <h4>
                <span>Precio del producto ${price}</span>
            </h4>
        </div>
    )
}

export default ItemDetail;