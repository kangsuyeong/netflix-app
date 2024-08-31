import React from "react";
import "./NotFoundPage.style.css";
import { Container, Row, Col, Button } from "react-bootstrap";
const NotFoundPage = () => {
  return (
    <section className="page_404">
      <Container>
        <Row>
          <Col xs={12}>
            <div className="text-center">
              <div className="four_zero_four_bg">
                <h1 className="text-center">404</h1>
              </div>

              <div className="contant_box_404">
                <h3 className="h2">Look like you're lost</h3>
                <p>The page you are looking for is not available!</p>
                <Button href="/" className="link_404">
                  Go to Home
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default NotFoundPage;
