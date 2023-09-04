import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import BaseImage from "../../assets/img/base_image2.jpg";
import { BsTrash } from "react-icons/bs";
import { useCart } from "./CartContext";

const CartComponent = () => {

    const { updateCartItemCount } = useCart();

    //get data from local storage
    const [cartData, setCartData] = useState(JSON.parse(localStorage.getItem('cart')) || []);

    const incrementQty = (item_uuid) => {
        const updatedCart = cartData.map((item) => {
            if (item.item_uuid === item_uuid) {
                item.qty += 1;
            }

            return item;
        });

        localStorage.setItem('cart', JSON.stringify(updatedCart));
        setCartData(updatedCart);
    };

    const decrementQty = (item_uuid) => {
        const updatedCart = cartData.map((item) => {
            if (item.item_uuid === item_uuid && item.qty > 1) {
                item.qty -= 1;
            }

            return item;
        });

        localStorage.setItem('cart', JSON.stringify(updatedCart));
        setCartData(updatedCart);
    };

    //remove data from local storage
    const removeFromCart = (item_uuid) => {
        const updatedCart = cartData.filter((item) => item.item_uuid !== item_uuid);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        
        setCartData(updatedCart);
    };

    useEffect(() => {

        const newTotalQty = cartData.reduce((accumulator, currentItem) => {
            return accumulator + parseInt(currentItem.qty);
        }, 0);

        updateCartItemCount(newTotalQty);
    }, [cartData]);

    return (
        <>
        <span>Home / Product / </span>
        <Container>
        <h3 className="text-center mt-3 mb-5">Shopping Cart</h3>
        {cartData.map((item)=>(
            <Row key={item.item_uuid}>
                <Col className="border2" md={8}>
                    <Row>
                        <Col xs={4}>
                            <img className="w-100" src={'http://localhost:1234' + item.image}/>
                        </Col>
                        <Col xs={8}>
                            <span>Product :</span>
                            <h5>{item.item_name}</h5>

                            <span>Size :</span>
                            <h5>{item.size}</h5>

                            <span>Variant :</span>
                            <h5>{item.variant}</h5>
                            <button className="btn btn-dark" onClick={() => decrementQty(item.item_uuid)}>-</button>
                            <button className="btn btn-dark">{item.qty}</button>
                            <button className="btn btn-dark" onClick={() => incrementQty(item.item_uuid)}>+</button>
                        </Col>
                    </Row>
                </Col>
                <Col className="border2 mt-5" md={4}>
                    <Row>
                        <Col md={12} xs={4}></Col>
                        <Col md={12} xs={8} className="d-flex justify-content-between">
                            <h5>Rp {parseInt(item.price * item.qty).toLocaleString()}</h5>
                            <BsTrash onClick={() => removeFromCart(item.item_uuid)} />
                        </Col>
                    </Row>
                </Col>
            <  hr className="mt-4"></hr>
            </Row>
        ))
        }
        </Container>
        </>
    )
}

export default CartComponent;