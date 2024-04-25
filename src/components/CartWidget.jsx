import React from "react";
import './CartWidget.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
//import { byPrefixAndName } from '@awesome.me/kit-b1d6513b5e/icons';

const CartWidget = () => {
    return (
        <>
            <div>
                <FontAwesomeIcon icon={faCartShopping} />
                <p>0</p>
            </div>
        </>
    )
}

export default CartWidget;