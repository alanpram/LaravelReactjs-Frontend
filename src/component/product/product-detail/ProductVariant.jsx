import React from "react";
import { Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";

function ProductVariant(){
    return (
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
    );
}

export default ProductVariant;