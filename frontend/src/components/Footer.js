import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

/**
 * Component for displaying the footer of the web application
 * @returns copyright footer at the bottom of the web applications.
 */

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">Copyright &copy; WebShop</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
