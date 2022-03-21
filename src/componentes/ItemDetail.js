import React from 'react';
import ItemCount from './ItemCount';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const ItemDetail = ({
    id,
    name,
    category,
    image,
    description,
    price,
    
}) => {
    const [seleccionado, setSeleccionado] = useState(false)
    const [agregar, setAgregar] = useState(false)

    const onAdd = (unidadSeleccionada) => {
        if(unidadSeleccionada !== undefined){
            setSeleccionado(true)
        }
        setAgregar(true)
    }
    return (
        <div className="detalles">
            <img src={image} alt={`${id}-${name}`} className="flex-col" />
            <div>
                <section>
                    <h1>{name}</h1>
                    <p>{description}</p>
                    <h2>${price}</h2>
                </section>
                <section>
                    <p>{seleccionado?"Compra realizada!":"No selecciono cantidad"}</p>
                    {agregar?<Link to="/carrito/">Ir al carrito</Link> : <ItemCount initial={1} stock={5} onAdd={onAdd}/> }
                </section>
            </div>
        </div>
    );
};