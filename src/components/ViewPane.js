import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./ViewPane.css";
import React from "react";

function ViewPane(props) {
  return (
    <Row className="panel resizeToScreen">
      <Col className="label">{props.label}</Col>
      <Row>
        <Col className="content">{props.text}</Col>
      </Row>
    </Row>
  );
}

export default ViewPane;
