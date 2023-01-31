import React from 'react'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from "react-router-dom"
import basic from "../../public/basic.jpg";
import premium from "../../public/premium.jpg";
import standard from "../../public/standard.jpg";


export function Home() {
  return (
    <div>
      <h1>Home</h1>
      <hr></hr>

      <Row md={1} className="d-flex flex-column justify-content-between align-items-center mb-5">
        <Carousel interval={1700} className='mb-2'>
          <Carousel.Item>
            <img
              height="500px" style={{ objectFit: "cover"}}
              className="d-block w-100"
              src={basic}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Example Item Slide</h3>
              <p>This is the Basic Package.</p>
              <Link to="/ecommerce-app/store">
                <Button variant="outline-light">Shop Now</Button>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              height="500px" style={{ objectFit: "cover"}}
              className="d-block w-100"
              src={standard}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Example Item Slide</h3>
              <p>This is the Standard Package.</p>
              <Link to="/ecommerce-app/store">
                <Button variant="outline-light">Shop Now</Button>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              height="500px" style={{ objectFit: "cover"}}
              className="d-block w-100"
              src={premium}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Example Item Slide</h3>
              <p>This is the Premium Package.</p>
              <Link to="/ecommerce-app/store">
                <Button variant="outline-light">Shop Now</Button>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <div>
          <h3 className="project-title fw-bold">Ecommerce Store Example</h3>
          <p className="lead">Website designed and developed with React and typescript. Store allows user to select as many items as they want and adds order to cart where it can be further manipulated and the total cost is automatically calculated.</p>
        </div>
      </Row>
      
      

    </div>
  )
}

