import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Button, Col, Container, Offcanvas, Row } from "react-bootstrap";
import { BsHeart } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useCart } from "../../checkout/CartContext";


function ProductLabel({data,descriptionRef,setShowAlert  }){

    //initialization data---------------------------------------------------------------------
    const item = data.data.data;
    const [variant, setVariant] = useState(item.link_fabric);
    const category = item.category;
    const option = data.data.variant;
    const finishing = item.link_frame.frame_finishing.split('/');

    // split data value-----------------------------------------------------------------------
    const spec = item.link_frame.frame_spec.split('|');
    const dimensions = item.link_frame.link_dimension ? item.link_frame.link_dimension.dimension_name : '';
    const values = item.link_frame.frame_dimension_value;
    const dimensionArray = dimensions.split("/");
    const valueArray = values.split("/");

    let dimensionValue = '';

    for(let i = 0; i < dimensionArray.length; i++){
        dimensionValue += `${dimensionArray[i]}:${valueArray[i]}`;
        
        if(i === dimensionArray.length - 1){
        dimensionValue += ' cm'
        }else{
        dimensionValue += ' cm, '
        }
    }

    // Ref for scrolling----------------------------------------------------------------------
    const toggleShowMore = () => {
        descriptionRef.current.scrollIntoView({ behavior: 'smooth' });
    };


    //state for show data variant poduct on canvas---------------------------------------------
    const [showOffcanvasEnd, setShowOffcanvasEnd] = useState(false);
    const [variantData, setVariantData] = useState([]);
    const [loadVariantData, LoadSetVariantData] = useState(false);
    const [effectExecuted, setEffectExecuted] = useState(false);

    //set canvas to open and close
    const toggleOffcanvasEnd = () => {
        setShowOffcanvasEnd(!showOffcanvasEnd);
    }
    //get data variant
    useEffect(() => {
        if (showOffcanvasEnd && !effectExecuted) {
            const fetchData = async () => {
                try {
                const response = await axios.get(`http://127.0.0.1:1234/api/product-detail/${item.item_slug}/variant`);
                setVariantData(response.data);
                setEffectExecuted(true);
                LoadSetVariantData(true);
                } catch (error) {
                console.error('Error fetching variant data:', error);
                }
            };

            fetchData();
        }
    }, [showOffcanvasEnd, effectExecuted]);


    //handle add to cart------------------------------------------------------------------------
    const { updateCartItemCount } = useCart();
    const [cartItem, setCartItem] = useState([]);

    //cek product image
    let image = '';
    if (data.data.alternative_image === 'null') {
        image = item;
    } else {
        image = data.data.alternative_image;
    }

    // save data to local storage
    useEffect(() => {
        const cartData = JSON.parse(localStorage.getItem('cart'));

        if (cartData && cartData.length > 0) {
            setCartItem(cartData);
        }
    }, []);

    const addToCart = (item) => {
        const cart = {
        item_uuid: item.item_uuid,
        image: image.link_image[0].media_path + '/' + image.link_image[0].media_file,
        item_name: item.item_name,
        size: dimensionValue,
        variant: item.link_fabric ? item.link_fabric.item_name : '-',
        qty: 1,
        price: item.link_price.product_price
        };

        const existingItemIndex = cartItem.findIndex((cartItem) => cartItem.item_uuid === item.item_uuid);

        if (existingItemIndex !== -1) {
            const updatedCart = [...cartItem];
            const newQty = updatedCart[existingItemIndex].qty = parseInt(updatedCart[existingItemIndex].qty) + 1;
            updatedCart[existingItemIndex].price = parseInt(updatedCart[existingItemIndex].price) * newQty;
            setCartItem(updatedCart);

            setShowAlert(true);
        } else {
            setCartItem([...cartItem, cart]);

            setShowAlert(true);
        }
    };

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItem));

        const newTotalQty = cartItem.reduce((accumulator, currentItem) => {
            return accumulator + parseInt(currentItem.qty);
        }, 0);

        updateCartItemCount(newTotalQty);
    }, [cartItem]);

    return(
        <>
            <div className="product-label">
            <div className="d-flex">
                <div className="mt-3 pb-2">
                    <p className="fst-italic product-label-item">{item.item_name.replace(category,'')}</p>
                    <h1 className="">{data.data.category}</h1>
                </div>
                <div className="ms-auto">
                    <BsHeart className="wishlist-icon"/>
                </div>
            </div>

            <p>{item.link_frame.frame_detail.slice(0,200)} ... <span className="see-more" onClick={toggleShowMore}>See more</span></p>
            <hr></hr>

            <div className="mt-3 pb-2">
                <h5>Price</h5>
                <h3 className="product-label-price">Rp.{parseInt(item.link_price.product_price).toLocaleString().replace(/,/g, '.')}</h3>
            </div>
            <hr></hr>

            {variant && (
                <>
                    <div className="d-flex mt-4 pb-2">
                        <div className="selected-fabric">
                            <h5>Selected Fabric</h5>
                            <div className="image-container mt-4 d-flex align-items-center justify-content-center">
                                <img src={'http://localhost:1234' + item.link_fabric.link_image.media_path+'/thumb/'+item.link_fabric.link_image.media_file} alt="Selected Fabric Image" className="rounded-circle"/>
                            </div>
                            <p className="text-center mt-3">{item.link_fabric.item_name}</p>
                        </div>
                        <div className="option-fabric">
                            <h5>Fabric Option</h5>
                            <div className="image-container mt-4 d-flex align-items-center justify-content-center gap-3">
                                {Object.keys(option).map((opt) => (
                                <Link to={'/product-detail/' + option[opt].item_slug} key={option[opt].item_uuid}>
                                    <img src={'http://localhost:1234' + option[opt].link_fabric.link_image.media_path + '/thumb/' + option[opt].link_fabric.link_image.media_file} alt="Selected Fabric Image" className="rounded-circle"/>
                                </Link>
                                ))}
                            </div>
                            <button onClick={toggleOffcanvasEnd} className="btn btn-sm btn-dark mt-3">See More Fabric</button>
                        </div>
                    </div>
                    <hr></hr>
                </>
            )}
                
            <h5>Get it on 17 October 2023</h5>
            <Button className="bg-dark w-100 mt-3 mb-3" onClick={() => addToCart(item)}>Add To Cart</Button>
        </div>

        <Offcanvas show={showOffcanvasEnd} onHide={toggleOffcanvasEnd} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Variant Product</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                {loadVariantData ? (
                <>
                    {Object.keys(variantData.data).map((category) => {
                    const categoryData = variantData.data[category]; 
                    return (
                        <div key={category}>
                        <h5>{category}</h5>
                        <p className="mb-5" style={{fontSize:"14px"}}>Rp.{parseInt(categoryData[0].link_price.product_price).toLocaleString().replace(/,/g,'.')} for all item with <span className="text-lowercase">{category}</span> collection</p>
                        <Row>
                            {Object.keys(categoryData).map((item) => {
                            const itemData = categoryData[item];
                            return (
                                <Col md={4} xs={6} className="mb-5" key={itemData.item_uuid}>
                                <Link to={'/product-detail/' + itemData.item_slug} className="product-title" onClick={toggleOffcanvasEnd}>
                                        <img className="w-100 mb-1" src={'http://localhost:1234' + itemData.link_fabric.link_image.media_path + '/thumb/' + itemData.link_fabric.link_image.media_file} alt="Product Image" />
                                        <p>{itemData.link_fabric.item_name}
                                        <br/>
                                        <span style={{ fontSize: "11px",marginTop:"-20px" }}>{itemData.link_fabric.item_compose}</span>
                                        </p>
                                </Link>
                                </Col>
                            );
                            })}
                        </Row>
                        <hr className="mb-5"/>
                        </div>
                    );
                    })}
                </>
                ) : (
                <p>No variants available</p>
                )}
            </Offcanvas.Body>
        </Offcanvas>
        </>
    );
}

export default ProductLabel;