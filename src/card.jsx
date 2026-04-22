import React from "react";
import { Card, Carousel, Button } from "react-bootstrap";

function Cards({ title, description, images }) {
  return (
    <Card className="shadow-sm">

      {/* IMAGE SLIDER */}
      <Carousel interval={2000}>
        {images.map((img, index) => (
          <Carousel.Item key={index}>
            <img
              src={img}
              className="d-block w-100"
              style={{ height: "200px", objectFit: "contain" }}
              alt="product"
            />
          </Carousel.Item>
        ))}
      </Carousel>

      {/* CARD BODY */}
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>

        <Button className="btns">
          BUY NOW
        </Button>
      </Card.Body>

    </Card>
  );
}
export default Cards;
