
import React from 'react'
import Table from 'react-bootstrap/Table';
import { Container, Row, Col } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';

const MyTable = () => {
    return (
        <div>
            <br /><br />
            <Container >
                <Row>
                    <Col xs={12}>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Full Name</th>
                                    <th>Email</th>
                                    <th>Password</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Mark</td>
                                    <td>facebook1@gmail.com</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Jacob</td>
                                    <td>facebook2@gmail.com</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Larry the Bird</td>
                                    <td>facebook3@gmail.com</td>
                                    <td>@twitter</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default MyTable
