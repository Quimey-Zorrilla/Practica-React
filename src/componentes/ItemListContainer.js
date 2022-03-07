import ItemCounter from "./ItemCount";

function ItemListContainer({greetings}) {
    
    const n = 12;

    return(
        <div>
            {[...Array(n)].map((e, i) => <p key={i}>{greetings}</p>)}
            <p>{greetings}</p>
            <ItemCounter onAdd={() => console.log('Agregado al carrito')} />
        </div>
    )
}

export default ItemListContainer;