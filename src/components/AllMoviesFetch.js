import  Container from "react-bootstrap/Container";
import  Row from "react-bootstrap/Row";
import  Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import axios from "axios";
import {useState, useEffect} from 'react';
// import data from "./movies.json";

function AllMoviesFetch() {

    const [data,setData] =  useState([]);

    useEffect(async () => {
        try {
                  const response = await axios.get('http://localhost:5000/movies');
                  console.log(response);
                  setData([response.data]);

                } catch (error) {
                  console.error(error);
                }
             
       
    }, []);

 
    return(
        <div>
            <Container fluid style={{padding:"8%",background:"#fff"}}>
                <Row style={{textAlign:"center"}}>
                    {data.map((mov)=>{
                     return(
                    <Col onClick={()=>window.location.href="/Movies/"+mov._id} id={mov._id} key={mov._id} xs={6} md={4} lg={3} style={{marginBottom:"2%"}}>
                        <Card  >
                            <Card.Img variant="top" src={mov.imageurl} />
                            <Card.Title>{mov.title}</Card.Title>
                            <Card.Text>
                                {mov.actor}
                            
                            </Card.Text>
                        </Card>
                    </Col>
                     )
                     })}
                </Row>
            </Container>

        </div>
    );
}

export default AllMoviesFetch;