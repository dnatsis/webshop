import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
/**
 * A Component that creaters a bootstrap container with a Row and Col
 * @Component
 * @param {Object} children children to be displaying inside a row and col inside of a container
 * @returns {Bootstrap:Container} returns a Bootstrap Container Row and Col
 */
const FormContainer = ({ children }) => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          {children}
        </Col>
      </Row>
    </Container>
  );
};

export default FormContainer;
