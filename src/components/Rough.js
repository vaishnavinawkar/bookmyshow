import  Container from "react-bootstrap/Container";
import  Row from "react-bootstrap/Row";
import  Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

function AllMovies() {
    return(
        <div>
            <Container fluid style={{padding:"8%",background:"#fff"}}>
                <Row style={{textAlign:"center"}}>
                    <Col xs={6} md={4} lg={3} style={{marginBottom:"2%"}}>
                    <Card  >
                        <Card.Img variant="top" src="mov1.jpg" />
                        <Card.Title>Card title</Card.Title>
                        <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    </Col>
                    <Col xs={6} md={4} lg={3} style={{marginBottom:"2%"}}>

                    <Card>
                        <Card.Img variant="top" src="mov2.jpg" />
                        <Card.Title>Card title</Card.Title>
                        <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    </Col>
                    <Col xs={6} md={4} lg={3} style={{marginBottom:"2%"}}>
                    <Card>
                        <Card.Img variant="top" src="mov3.jpg" />
                        <Card.Title>Card title</Card.Title>
                        <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    </Col>
                    <Col xs={6} md={4} lg={3} style={{marginBottom:"2%"}}> 
                    <Card>
                        <Card.Img variant="top" src="mov4.jpg" />
                        <Card.Title>Card title</Card.Title>
                        <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    </Col>

                    <Col xs={6} md={4} lg={3} style={{marginBottom:"2%"}}>

                        <Card>
                            <Card.Img variant="top" src="mov2.jpg" />
                            <Card.Title>Card title</Card.Title>
                            <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                    </Col>

                    <Col xs={6} md={4} lg={3} style={{marginBottom:"2%"}}>

                        <Card>
                            <Card.Img variant="top" src="mov2.jpg" />
                            <Card.Title>Card title</Card.Title>
                            <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                    </Col>

                    <Col xs={6} md={4} lg={3} style={{marginBottom:"2%"}}>

                        <Card>
                            <Card.Img variant="top" src="mov2.jpg" />
                            <Card.Title>Card title</Card.Title>
                            <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                    </Col>

                    <Col xs={6} md={4} lg={3} style={{marginBottom:"2%"}}>

                        <Card>
                            <Card.Img variant="top" src="mov2.jpg" />
                            <Card.Title>Card title</Card.Title>
                            <Card.Footer>
                               <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </div>
    );
}

export default AllMovies;