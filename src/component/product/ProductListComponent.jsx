import React, { useEffect, useState } from "react";
import { Row, Col, Form, Dropdown, Badge, Container } from "react-bootstrap";
import BaseImage from "../../assets/img/base_image2.jpg";
import { Link } from "react-router-dom";
import { BsX, BsXLg } from "react-icons/bs";
import axios from "axios";

const ProductListComponent = ({ data }) => {

    const dataList = data.data;
    const message = data.message;

    // state to save the selected checkbox
    const [selectedFilters, setSelectedFilters] = useState([]);
    // state to save the value change on the range slider
    const [sliderValue, setSliderValue] = useState(0);

    // function to save or delete selected checkbox
    const toggleFilter = (filter) => {
        // check the value in the filter
        if (selectedFilters.includes(filter)) {
            // delete when value exist
            setSelectedFilters(selectedFilters.filter((item) => item !== filter));
        } else {
            // when the event occurs and add the value if it does not already exist
            setSelectedFilters([...selectedFilters, filter]);
        }
    };
    
    //function to handle changes to range slider
    const handleSliderChange = (event) => {
        const value = event.target.value;
        setSliderValue(value);
    };

    
    return (
        <>
            <span>Home / Product / {message.category}</span>
            <div className="text-center">
                <h3 className="text-dark text-uppercase">{message.category}</h3>
                <p className="mx-auto product-list-text">
                    {message.category_description}
                </p>
            </div>

            <div className="filter text-center align-item-center d-flex justify-content-center">
                <Dropdown className="filter-menu">
                    <Dropdown.Toggle variant="success" id="dropdown-basic" className="btn-light">
                        SEATER
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">
                            <Form.Check // prettier-ignore
                                type="checkbox"
                                id="3.5 seater"
                                label="3.5 Seater"
                                onChange={() => toggleFilter("3.5 Seater")}
                                checked={selectedFilters.includes("3.5 Seater")}
                            />
                            <Form.Check // prettier-ignore
                                type="checkbox"
                                id="3 seater"
                                label="3 Seater"
                                onChange={() => toggleFilter("3 Seater")}
                                checked={selectedFilters.includes("3 Seater")}
                            />
                            <Form.Check // prettier-ignore
                                type="checkbox"
                                id="2.5 seater"
                                label="2.5 Seater"
                                onChange={() => toggleFilter("2.5 Seater")}
                                checked={selectedFilters.includes("2.5 Seater")}
                            />

                            <Form.Check // prettier-ignore
                                type="checkbox"
                                id="2 seater"
                                label="2 Seater"
                                onChange={() => toggleFilter("2 Seater")}
                                checked={selectedFilters.includes("2 Seater")}
                                />
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown className="filter-menu">
                    <Dropdown.Toggle variant="success" id="dropdown-basic" className="btn-light">
                        SHAPE
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">
                            <Form.Check // prettier-ignore
                                type="checkbox"
                                id="Rectangle"
                                label="Rectangle"
                                onChange={() => toggleFilter("Rectangle")}
                                checked={selectedFilters.includes("Rectangle")}
                            />
                            <Form.Check // prettier-ignore
                                type="checkbox"
                                id="Round"
                                label="Round"
                                onChange={() => toggleFilter("Round")}
                                checked={selectedFilters.includes("Round")}
                            />
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown className="filter-menu">
                    <Dropdown.Toggle variant="success" id="dropdown-basic" className="btn-light">
                        DIMENSION
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Container className="mt-2 mb-3">
                            <p>Lenght ( 0 - {sliderValue} cm )</p>
                            <input
                                type="range"
                                id="rangeSlider"
                                min="0"
                                max="300"
                                step="1"
                                value={sliderValue}
                                onChange={handleSliderChange}
                            />
                        </Container>
                    </Dropdown.Menu>
                </Dropdown>
            </div>

            <div className="filter-indikator">
                <Container className="d-flex">
                    <div className="filter-indikator-button">
                        {selectedFilters.map((filter) => (
                            <span 
                            className="p-1" 
                            key={filter}
                            onClick={() => toggleFilter(filter)}
                            >
                                <Badge className="mt-3 mb-3 bg-light">{filter} <BsXLg/></Badge>
                            </span>
                        ))}
                    </div>
                    {selectedFilters.length > 0 && (
                        <div className="ms-auto">
                            <span
                                className="p-1"
                                onClick={() => setSelectedFilters([])}
                                style={{ cursor: "pointer" }}
                            >
                                <Badge className="mt-3 mb-3 bg-light"><BsXLg className="text-danger"/> Clear All</Badge>
                            </span>
                        </div>
                    )}
                    
                </Container>
            </div>

            <div className="product-list px-5 mb-5">
                <Row>
                    {Object.keys(dataList).map((itemKey) => (
                        <Col
                            xs={12}
                            md={4}
                            className="mb-3 text-center"
                            key={dataList[itemKey].flagship.item_uuid}
                        >
                            <Link to={'/product-detail/' + dataList[itemKey].flagship.item_slug} className="product-title">
                                <img
                                    className="w-100 mg-mt-5 image-load bg-light"
                                    src={'http://localhost:1234' + dataList[itemKey].flagship.link_image[0].media_path + '/' + dataList[itemKey].flagship.link_image[0].media_file}
                                    onError={(e) => {
                                        e.target.src = BaseImage;
                                    }}
                                    alt={dataList[itemKey].flagship.link_image[0].media_file}
                                />
                                {dataList[itemKey].flagship.item_name}
                                <br></br>
                                <div className="price-container mt-1">
                                    <span>
                                        <sup className="from">From </sup>
                                        {parseInt(dataList[itemKey].price.link_price.product_price).toLocaleString().replace(/,/g, '.')}
                                    </span>
                                </div>
                            </Link>
                            <p className="text-light mt-1"></p>
                        </Col>
                    ))}
                </Row>
            </div>
        </>
    );
};

export default ProductListComponent;
