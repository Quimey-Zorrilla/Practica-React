import React from 'react';
import { Link } from 'react-router-dom';

export const Item = ({ id, name, category, image, price }) => {
    /* aca tenemos nuestro Link */
    return (
        <>
            <article className={`item_card ${category}-category`}>
                <h2>{name}</h2>
                <img src={image} alt={name} className={'small-img'} />
                <p>${price}</p>
                <button>
                    <Link to={`/product/${id}`}>Mas detalle</Link>
                </button>
            </article>
        </>
    );
};