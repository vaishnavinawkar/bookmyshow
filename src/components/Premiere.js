import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Image  from "react-bootstrap/Image";



function Premiere() {
  return (
    <div style={{ background: "#2b3148"}}> 
      <div >
        <Image src="stream2.webp" alt="primereimges" style={{width:"80%",margin:"0 10rem",paddingTop:"2rem"}}/>
      </div>
       <div style={{ color:"whitesmoke",padding:"0 10rem",paddingTop:"3rem"}}>
         <h3>Premieres</h3>
         <h6>Brand new releases every Friday<span > <a href="#">See All</a></span></h6>
         
       </div>
       
      
      <Carousel >

    
        <Carousel.Item active
          style={{ padding: "0 10rem",paddingBottom:"10rem", marginBottom: "10rem", background: "#2b3148" }}
        >
          <CardGroup style={{ gap: "3rem" ,borderRadius: "40%" ,border:"none"}}>
            <Card
              className="bg-dark text-white"
              style={{ height: "100px", width: "50px"}}
            >
              <Card.Img src="pri1.jpg" alt="Card image" />
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>

            <Card
              className="bg-dark text-white"
              style={{ height: "100px", width: "50px" }}
            >
              <Card.Img src="pri2.jpg" alt="Card image" />
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>

            <Card
              className="bg-dark text-white"
              style={{ height: "100px", width: "50px" }}
            >
              <Card.Img src="pri3.jpg" alt="Card image" />
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>

            <Card
              className="bg-dark text-white"
              style={{ height: "100px", width: "50px" }}
            >
              <Card.Img src="pri4.jpg" alt="Card image" />
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>

            <Card
              className="bg-dark text-white"
              style={{ height: "100px", width: "50px" }}
            >
              <Card.Img src="pri5.jpg" alt="Card image" />
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          </CardGroup>
        </Carousel.Item>




        {/* --------------------------------------------------------------------------- */}
        <Carousel.Item   style={{ padding: "0 10rem",paddingBottom:"10rem", marginBottom: "10rem", background: "#2b3148" }}>
          <CardGroup style={{ gap: "3rem" }}>
            <Card
              className="bg-dark text-white"
              style={{ height: "100px", width: "60px", borderRadius: "20%" }}
            >
              <Card.Img src="pri6.jpg" alt="Card image" />
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>

            <Card
              className="bg-dark text-white"
              style={{ height: "50px", width: "50px" }}
            >
              <Card.Img src="pri7.jpg" alt="Card image" />
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>

            <Card
              className="bg-dark text-white"
              style={{ height: "50px", width: "50px" }}
            >
              <Card.Img src="pri8.jpg" alt="Card image" />
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>

            <Card
              className="bg-dark text-white"
              style={{ height: "50px", width: "50px" }}
            >
              <Card.Img src="pri9.jpg" alt="Card image" />
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>

            <Card
              className="bg-dark text-white"
              style={{ height: "50px", width: "50px" }}
            >
              <Card.Img src="pri10.jpg" alt="Card image" />
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

export default Premiere;
