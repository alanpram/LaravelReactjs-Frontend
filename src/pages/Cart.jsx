import React from "react";
import { Container } from "react-bootstrap";
import CartComponent from "../component/checkout/CartComponent";

function Cart() {
    return (
        <Container fluid className='content-body'>
            <CartComponent/>
        </Container>
    );
}

export default Cart;