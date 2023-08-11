import React from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import img3 from '../../assets/img/layout/img3.jpg';
import img1 from '../../assets/img/layout/contenta.jpg';
import img2 from '../../assets/img/layout/banner-promo2.png';
import sanitizeHtml from "sanitize-html";

const formatDate = (inputDate) => {
  const date = new Date(inputDate);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
};

const ArticleComponent = ({data}) => {
    return(
        <Row className="mt-5">
            {data.map((data) => (
                <Col md={4} className='mb-3' key={data.article_uuid}>
                    <div className='article-list'>
                        <Card className="bg-transparent">
                            <Card.Img variant="top" src={'http://localhost:1234' + data.link_image.media_path + data.link_image.media_file} />
                            <div className="mt-3">
                                <span className="article-create">{formatDate(data.created_at)}</span>
                                <p className="article-title text-capitalize">{data.article_title}</p>
                                <p className="article-text">{sanitizeHtml(data.article_content, { allowedTags: [], allowedAttributes: {} }).substring(0, 200)}</p>
                            </div>
                        </Card>
                    </div>
                </Col>
            ))}
        </Row>
    );

}

export default ArticleComponent;