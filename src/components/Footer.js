import  Container from "react-bootstrap/Container";
import  Row from "react-bootstrap/Row";
import  Col from "react-bootstrap/Col";
import  Button from "react-bootstrap/Button";



function Footer(){
    return (
        <div style={{background:"rgb(49, 48, 53)", color:"white"}}>
            <Container>
                <Row style={{padding:"3% 0"}}>
                    <Col className="d-flex" style={{gap:"5px"}} xs={2}>
                    <img alt="hut" src="https://in.bmscdn.com/webin/common/icons/hut.svg"/> <span><h5>List Your Show</h5></span>
                    </Col>
                    <Col xs={8} >
                       <h6>Got a show,event,activity ora great experience?Partner with us & get listed on BookMyShow </h6>
                    </Col>
                    <Col xs={2} style={{display:"flex",flexDirection:"row-reverse"}}>
                    <Button type="button" className="btn-danger"> Contact today! </Button>
                  </Col>
                </Row>

                <Row style={{textAling:"center",padding:"3%",background:"#404043",color:"#b5b6b2"}}>
                    <Col >
                     24/7 CUSTOMER CARE 
                    </Col>
                    <Col>
                       RESEND BOOKING CONFIRMATION
                    </Col>
                    <Col>
                       SUBSCRIBE TO THE NEWSLETTER
                    </Col>
                </Row>
            </Container>

        </div>
    );
}

export default Footer;