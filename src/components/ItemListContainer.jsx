import React from "react";  

const ItemListContainer = (name) => {
    const stringProps = JSON.stringify(name);
    return (
        <>
            <div>
                <h1>Hola {stringProps} esto es una prueba de los PROPS</h1>
            </div>
        </>
    );
}

export default ItemListContainer;

//<h2>{titulo ? titulo : 'Producto'};</h2>