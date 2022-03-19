import React from 'react';

export const ItemDetail = ({
    id,
    name,
    category,
    image,
    description,
    price,
}) => {
    return (
        <div className="detalles">
            <img src={image} alt={`${id}-${name}`} className="flex-col" />
            <section>
                <h1>{name}</h1>
                <p>{description}</p>
                <h2>${price}</h2>
            </section>
        </div>
    );
};