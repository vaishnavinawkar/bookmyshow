import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Image from "react-bootstrap/Image";


function CardSlider() {
  return (
    <div style={{ background: "#eee" }}>
      <div>
        <Image src="stream.webp"  style={{width:"80%",margin:"0 10rem",paddingTop:"2rem"}}/>
      </div>

      <div style={{ padding:"0 10rem",paddingTop:"3rem"}}>
         <h3>The Best of Entertainment</h3>
         
         
       </div>
      
      <Carousel  style={{ background: "#eee" }}>
    
        <Carousel.Item active
          style={{ padding: " 0 8rem", paddingBottom:"8rem" ,marginBottom: "8rem", background: "#eee" }}
        >
          <CardGroup style={{ gap: "3rem" ,borderRadius: "10px" ,border:"none"}}>
            <Card
              className="bg-dark text-white"
              style={{ height: "50px", width: "50px"}}
            >
              <Card.Img src="img1.webp" alt="Card image" />
            </Card>

            <Card
              className="bg-dark text-white"
              style={{ height: "50px", width: "50px" }}
            >
              <Card.Img src="img2.webp" alt="Card image" />
            </Card>

            <Card
              className="bg-dark text-white"
              style={{ height: "50px", width: "50px" }}
            >
              <Card.Img src="img3.webp" alt="Card image" />
            </Card>

            <Card
              className="bg-dark text-white"
              style={{ height: "50px", width: "50px" }}
            >
              <Card.Img src="img6.webp" alt="Card image" />
            </Card>

            <Card
              className="bg-dark text-white"
              style={{ height: "50px", width: "50px" }}
            >
              <Card.Img src="img5.webp" alt="Card image" />
            </Card>
          </CardGroup>
        </Carousel.Item>
        {/* --------------------------------------------------------------------------- */}
        <Carousel.Item    style={{ padding: " 0 8rem", paddingBottom:"8rem" ,marginBottom: "8rem", background: "#eee" }}>
          <CardGroup style={{ gap: "3rem" }}>
            <Card
              className="bg-dark text-white"
              style={{ height: "50px", width: "50px", borderRadius: "20%" }}
            >
              <Card.Img src="img7.webp" alt="Card image" />
            </Card>

            <Card
              className="bg-dark text-white"
              style={{ height: "50px", width: "50px" }}
            >
              <Card.Img src="img8.webp" alt="Card image" />
            </Card>

            <Card
              className="bg-dark text-white"
              style={{ height: "50px", width: "50px" }}
            >
              <Card.Img src="img9.webp" alt="Card image" />
            </Card>

            <Card
              className="bg-dark text-white"
              style={{ height: "50px", width: "50px" }}
            >
              <Card.Img src="img10.webp" alt="Card image" />
            </Card>

            <Card
              className="bg-dark text-white"
              style={{ height: "50px", width: "50px" }}
            >
              <Card.Img src="img11.webp" alt="Card image" />
            </Card>
          </CardGroup>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CardSlider;
