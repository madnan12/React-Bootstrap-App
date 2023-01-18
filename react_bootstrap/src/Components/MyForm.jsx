import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container, Row, Col } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';

const MyForm = () => {
    return (

        <Container >
            <Row>
                <Col xs={4}>
                    <br />


                <Card className='shadow-lg'>
                    <Card.Header className='p-3' style={{backgroundColor: 'orange'}}>
                        <h2>Register</h2>


                        </Card.Header>
                        <Card.Body style={{backgroundColor: '##FFFFFF'}}>
                    <Form>

                    <Form.Group className="mb-3" controlId="formBasicEmailFullName">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type="text" placeholder="Full Name" />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
 
                        <Button variant='warning' type="submit">
                            Submit
                        </Button>
                    </Form>
                    </Card.Body>
                    </Card>
                    
                </Col>
            </Row>
        </Container>

    )
}

export default MyForm
