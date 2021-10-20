import Carousel from "react-bootstrap/Carousel";





function SliderImages() {
  return (
    <div style={{padding:"13px 13px 0" , marginBottom:"20px"}} >
        <Carousel  style={{ marginBottom:"16px"}}>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="slider2.jpg"
                alt="First slide"
                />
                
            </Carousel.Item>
            <Carousel.Item>
                <img 
                className="d-block w-100"
                src="slider1.webp"
                alt="Second slide"
                />

               
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="slider4.jpg"
                alt="Third slide"
                />

              
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="slider5.jpg"
                alt="fourth slide"
                />

              
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="slider6.jpg"
                alt="fifth slide"
                />

              
            </Carousel.Item>
</Carousel>
</div>
  );
}

export default SliderImages;