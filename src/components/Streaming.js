import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Image  from "react-bootstrap/Image";



function Streaming() {
  return (
    <div style={{ background: "#eee"}}> 
     
       <div style={{color:"#333" ,padding:"0 10rem",paddingTop:"3rem"}}>
         <h3>Online Streaming Events</h3>
         
       </div>
       
      
      <Carousel >

    
        <Carousel.Item active
          style={{ padding: "0 10rem",paddingBottom:"10rem"}}
        >
          <CardGroup style={{ gap: "3rem" ,borderRadius: "40%" ,border:"none"}}>
            <Card
              className="bg-light "
              style={{ borderRadius: "10px"  }}
            >
              <Card.Img src="event1.jpg" alt="Card image" />
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>

            <Card
              className="bg-light"
              style={{ borderRadius: "10px"  }}
            >
              <Card.Img src="event2.jpg" alt="Card image" />
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>

            <Card
              className=""
              style={{ borderRadius: "10px"  }}
            >
              <Card.Img src="event3.png" alt="Card image" />
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>

            <Card
              className="bg-light"
              style={{ borderRadius: "10px"  }}
            >
              <Card.Img src="event4.jpg" alt="Card image" />
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>

            <Card
              className="bg-light"
              style={{ borderRadius: "10px"  }}
            >
              <Card.Img src="event5.jpg" alt="Card image" />
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          </CardGroup>
        </Carousel.Item>




        {/* --------------------------------------------------------------------------- */}
        <Carousel.Item   style={{ padding: "0 10rem",paddingBottom:"10rem"}}>
          <CardGroup style={{ gap: "3rem" }}>
            <Card
              className="bg-light"
              style={{ borderRadius: "20px"  }}
            >
              <Card.Img src="event6.jpg" alt="Card image" />
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>

            <Card
              className="bg-light"
              style={{ borderRadius: "10px"  }}
            >
              <Card.Img src="event7.jpg" alt="Card image" />
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>

            <Card
              className="bg-light"
              style={{ borderRadius: "10px"  }}
            >
              <Card.Img src="event8.jpg" alt="Card image" />
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>

            <Card
              className="bg-light"
              style={{ borderRadius: "10px"  }}
            >
              <Card.Img src="event9.jpg" alt="Card image" />
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>

            <Card
              className=" bg-light"
              style={{ borderRadius: "10px"  }}
            >
              <Card.Img src="event10.jpg" alt="Card image" />
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          </CardGroup>
        </Carousel.Item>
      </Carousel>


    </div>


    

    
  );
}

export default Streaming;
