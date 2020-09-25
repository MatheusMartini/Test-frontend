import React from "react";
import { Row, Container, Card } from "react-bootstrap";

export default function card(Iten, Key) {
  return (
    <Container fluid>
      <Row>
        <Card style={{ width: "18rem" }}>
          <Card.Body key={Key}>
            <img src={Iten.iten.Poster} alt="" />
            <Card.Title>{Iten.iten.Title}</Card.Title>
            <div>Year: {Iten.iten.Year}</div>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}
