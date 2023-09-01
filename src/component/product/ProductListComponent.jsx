import React, { useEffect, useState } from "react";
import { Row, Col, Form, Dropdown, Badge, Container } from "react-bootstrap";
import BaseImage from "../../assets/img/base_image2.jpg";
import { Link } from "react-router-dom";
import { BsX, BsXLg } from "react-icons/bs";
import axios from "axios";

import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';


const ProductListComponent = ({ data }) => {

    const dataList = data.data;
    const message = data.message;

    // state to handle filter
    const [selectedFilters, setSelectedFilters] = useState([]);
    const [isProductListVisible, setProductListVisible] = useState(true);
    const [dataFilter,setDataFilter] = useState([]);

    // state to save the value change on the range slider
    const [sliderValue, setSliderValue] = useState(1);

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

        //check round checked or not
        if (filter === "Round") {
            setRoundChecked(!isRoundChecked);
        }
    };


    //state for handle slider length
    const [valueLength, setValueLength] = useState([0, 350]);

    //function for handle change slider length value from material ui
    const handleChangeLength = (event, newValue) => {
        setValueLength(newValue);
    };

    const resetLength = () => {
        setValueLength([0, 350]);
    };

    //state for handle slider width
    const [valueHeight, setValueHeight] = useState([0, 350]);

    //function for handle change slider width value from material ui
    const handleChangeHeight = (event, newValue) => {
        setValueHeight(newValue);
    };

    const resetHeight = () => {
        setValueHeight([0, 350]);
    };

    //state for handle slider diameter
    const [valueDiameter, setValueDiameter] = useState([0, 350]);

    //function for handle change slider diameter value from material ui
    const handleChangeDiameter = (event, newValue) => {
        setValueDiameter(newValue);
    };

    const resetDiameter = () => {
        setValueDiameter([0, 350]);
    };

    // use effect for get data filter from api
    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await axios.get("http://localhost:1234/api/product-filter",
                    {
                        params: {
                            filters: selectedFilters,
                            category: message.category,
                            length: valueLength,
                            height:valueHeight,
                            diameter:valueDiameter
                        },
                    }
                );

            setDataFilter(response.data.data);
            
            }catch (error) {
                console.log(error);
            }
        };

        //check available filter on state
        if ( selectedFilters.length > 0 ) {

            setProductListVisible(false);

            fetchData();
            
        }else{

            setProductListVisible(true);

        }

    }, [selectedFilters]);

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

                <Dropdown className={`filter-menu ${message.category != 'Sofa' && 'd-none'} `}>
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
                        
                            <span>Length ( {valueLength[0]} - {valueLength[1]}  cm )</span>
                            <Box className="mt-1 m-3" sx={{ width: 200 }}>
                            <Slider
                                value={valueLength}
                                onChange={handleChangeLength}
                                valueLabelDisplay="auto"
                                onChangeCommitted={() => {
                                    console.log("oke");
                                }}
                                min={0}
                                max={350}
                            />
                            </Box>

                            <span>Height ( {valueHeight[0]} - {valueHeight[1]}  cm )</span>
                            <Box className="mt-1 m-3" sx={{ width: 200 }}>
                            <Slider
                                value={valueHeight}
                                onChange={handleChangeHeight}
                                valueLabelDisplay="auto"
                                min={0}
                                max={350}
                            />
                            </Box>

                            <span>Diameter ( {valueDiameter[0]} - {valueDiameter[1]}  cm )</span>
                            <Box className="mt-1 m-3" sx={{ width: 200 }}>
                            <Slider
                                value={valueDiameter}
                                onChange={handleChangeDiameter}
                                valueLabelDisplay="auto"
                                min={0}
                                max={350}
                            />
                            </Box>
                    
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

                        {(valueLength[0] !== 0 || valueLength[1] !== 350) && (
                            <span className="p-1" onClick={() => resetLength()}>
                                <Badge className="mt-3 mb-3 bg-light">Length {valueLength[0]} - {valueLength[1]} cm<BsXLg/></Badge>
                            </span>
                        )}

                        {(valueHeight[0] !== 0 || valueHeight[1] !== 350) && (
                            <span className="p-1" onClick={() => resetHeight()}>
                                <Badge className="mt-3 mb-3 bg-light">Height {valueHeight[0]} - {valueHeight[1]} cm<BsXLg/></Badge>
                            </span>
                        )}

                        {(valueDiameter[0] !== 0 || valueDiameter[1] !== 350) && (
                            <span className="p-1" onClick={() => resetDiameter()}>
                                <Badge className="mt-3 mb-3 bg-light">Diameter {valueDiameter[0]} - {valueDiameter[1]} cm<BsXLg/></Badge>
                            </span>
                        )}
                        
                    </div>
                    {(selectedFilters.length > 0 || 
                    (valueDiameter[0] !== 0 || valueDiameter[1] !== 350) || 
                    (valueHeight[0] !== 0 || valueHeight[1] !== 350) || 
                    (valueLength[0] !== 0 || valueLength[1] !== 350)) && (
                        <div className="ms-auto">
                            <span
                                className="p-1"
                                onClick={() => {
                                    setSelectedFilters([]);
                                    setValueLength([0,350]);
                                    setValueHeight([0,350]);
                                    setValueDiameter([0,350]);
                                }}
                                style={{ cursor: "pointer" }}
                            >
                                <Badge className="mt-3 mb-3 bg-light"><BsXLg className="text-danger"/> Clear All</Badge>
                            </span>
                        </div>
                    )}
                    
                </Container>
            </div>

            <div className="product-list px-5 mb-5 mt-5">
                <Row className={`product-list-base ${isProductListVisible ? "" : "d-none"}`}>
                    {Object.keys(dataList).map((itemKey) => (
                        <Col
                            xs={12}
                            md={4}
                            className={
                                `mb-3 text-center 
                                ${
                                    (dataList[itemKey].length >= valueLength[0] && dataList[itemKey].length <= valueLength[1]) &&
                                    (dataList[itemKey].height >= valueHeight[0] && dataList[itemKey].height <= valueHeight[1]) &&
                                    (dataList[itemKey].diameter >= valueDiameter[0] && dataList[itemKey].diameter <= valueDiameter[1])  
                                    ? '' : 'd-none'
                                }`
                            }
                            key={dataList[itemKey].flagship.item_uuid}
                        >
                            <Link to={'/product-detail/' + dataList[itemKey].flagship.item_slug} className="product-title">
                                <div className="product-list-image position-relative">
                                    <img
                                    className="w-100 mg-mt-5 image-load bg-light"
                                    src={'http://localhost:1234' + dataList[itemKey].flagship.link_image[0].media_path + '/' + dataList[itemKey].flagship.link_image[0].media_file}
                                    onError={(e) => {
                                        e.target.src = BaseImage;
                                    }}
                                    alt={dataList[itemKey].flagship.link_image[0].media_file}
                                    />
                                    {dataList[itemKey].flagship.link_image.length > 1 && 
                                    <img
                                            className="w-100 mg-mt-5 image-load bg-light overlay-image position-absolute"
                                            src={'http://localhost:1234' + dataList[itemKey].flagship.link_image[1].media_path + '/' + dataList[itemKey].flagship.link_image[1].media_file}
                                            onError={(e) => {
                                                e.target.src = BaseImage;
                                            }}
                                            alt={dataList[itemKey].flagship.link_image[1].media_file}
                                        /> 
                                    }
                                </div>

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

                <Row className="">
                    {Object.values(dataFilter).map((item) => (
                        <Col
                            xs={12}
                            md={4}
                            className={
                                `mb-3 text-center 
                                ${
                                    (item.length >= valueLength[0] && item.length <= valueLength[1]) &&
                                    (item.height >= valueHeight[0] && item.height <= valueHeight[1]) &&
                                    (item.diameter >= valueDiameter[0] && item.diameter <= valueDiameter[1])  
                                    ? '' : 'd-none'
                                }`
                            }
                            key={item.flagship.item_uuid}
                            length={item.length}
                        >
                            <Link to={'/product-detail/' + item.flagship.item_slug} className="product-title">
                                 <div className="product-list-image position-relative">
                                    <img
                                        className="w-100 mg-mt-5 image-load bg-light"
                                        src={'http://localhost:1234' + item.flagship.link_image[0].media_path + '/' + item.flagship.link_image[0].media_file}
                                        onError={(e) => {
                                            e.target.src = BaseImage;
                                        }}
                                        alt={item.flagship.link_image[0].media_file}
                                    />
                                     {item.flagship.link_image.length > 1 && 
                                     <img
                                        className="w-100 mg-mt-5 image-load bg-light overlay-image position-absolute"
                                        src={'http://localhost:1234' + item.flagship.link_image[1].media_path + '/' + item.flagship.link_image[1].media_file}
                                        onError={(e) => {
                                            e.target.src = BaseImage;
                                        }}
                                        alt={item.flagship.link_image[1].media_file}
                                    />
                                     }
                                </div>
                                {item.flagship.item_name}
                                <br></br>
                                <div className="price-container mt-1">
                                    <span>
                                        <sup className="from">From </sup>
                                        {parseInt(item.price.link_price.product_price).toLocaleString().replace(/,/g, '.')}
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
