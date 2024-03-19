import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
      {/* <img  src="https://www.caratlane.com/jewellery/monthly+new+launches.html" style={{width:1600,height:650}} alt="" /> */}
      <video controls autoPlay style={{width:1600,height:650}}>
        <source src='https://media.istockphoto.com/id/1419850570/video/portrait-of-indian-girl-wuth-brown-eyes-and-with-golden-jewelry-on-face.mp4?s=mp4-640x640-is&k=20&c=7c6SvpDfO12gQmgVEYuwpJjacNdP_W9-oIpdS0UPtpc=' typeof='mp4'/>
      </video>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img  src="https://imageio.forbes.com/specials-images/dam/imageserve/1095813644/0x0.jpg?format=jpg&width=1200" style={{width:1600,height:650}} alt="" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img  src="https://cdn.pixabay.com/photo/2017/03/13/17/26/ecommerce-2140603_1280.jpg" style={{width:1700,height:650}} alt="" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;


