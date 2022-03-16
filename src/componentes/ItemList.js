import Item from "./Item"

const ItemList = ({productos}) => {

    return (
        <>
            {productos.map((productos, index) => {
                return <Item key={productos.id} productos={productos}/>
            })}
        </>
    )
}

export default ItemList