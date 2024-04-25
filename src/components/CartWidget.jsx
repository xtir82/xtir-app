import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
//import { byPrefixAndName } from '@awesome.me/kit-b1d6513b5e/icons';

const CartWidget = () => {
    return (
        <>
            <FontAwesomeIcon icon={faCartShopping} />
        </>
    )
}

export default CartWidget;