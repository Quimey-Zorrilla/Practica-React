import ItemCounter from "./ItemCount";
import ItemList from './ItemList';
import products from '../products.json';
import ItemDetailContainer from "./ItemDetailContainer";

const ItemListContainer = ({greetings}) => {

    return (
        <>
        <div>
            <p>{greetings}</p>
            <ItemCounter onAdd={() => console.log('agregado al carrito')} />
        </div>
        <div>
            <h2>INCENTIA cuenta con amplia gama de productos organicos</h2>
            <ItemList list={products}/>
        </div>
        <div>
            <ItemDetailContainer productList={products}/>
        </div>
        </>
    )
}

export default ItemListContainer;