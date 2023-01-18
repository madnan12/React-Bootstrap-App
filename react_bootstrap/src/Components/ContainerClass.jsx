import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ContainerClass = () => {
  return (
    <div>
      
      <br /><br /> 
      <Container >
        <Row>
            <Col xs={12}>
            <Row>
            <Col xs={4}>
            <Card>
            <Card.Img variant="top" src="https://thumbs.dreamstime.com/z/bee-flower-27533578.jpg/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go</Button>
            </Card.Body>
          </Card>

          </Col>

          <Col xs={4}>
          <Card >
            <Card.Img variant="top" src="https://thumbs.dreamstime.com/z/purple-flower-2212075.jpg/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go</Button>
            </Card.Body>
          </Card>
          </Col>

          <Col xs={4}>
          <Card >
            <Card.Img variant="top" src="https://thumbs.dreamstime.com/z/swan-reflections-08298.jpg/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go</Button>
            </Card.Body>
          </Card>
          </Col>

        </Row>
            </Col>
        </Row>
      </Container>
      
    </div>
  )
}

export default ContainerClass
