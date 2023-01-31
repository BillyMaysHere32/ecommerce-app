import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import me from "../assests/me.jpg"
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Button from 'react-bootstrap/Button';

export function About() {
  return (
    <div className='component'>
      <h2 className="component-title fw-bold">About Me</h2>
      <hr></hr>
      <Container className=" mt-5">
      <Row className="d-flex flex-row justify-content-between align-items-center g-5">
          <Col md={12} lg={6} className="d-flex flex-column justify-content-center align-items-center">
            <img src={me} height="200px" style={{ objectFit: "cover"}}
             className="profile mb-5 rounded-circle" alt="me" />
            <p className="lead">I am a MERN full stack developer that enjoys creating responsive applications using modern tools such as React and NodeJs, with focus on user experience. My passion is problem solving and ultimately to develop things that propel businesses forward. I love the outdoors and my other hobbies include golf, video games, garage gyms and anything that is Star Wars.</p>
          </Col>

          <Col className="pt-5">
            
          </Col>
        </Row>
      </Container>
      <div className="component">
        <h2 className="fw-bold">Contact</h2>
        <hr></hr>
        <div className="mt-5 d-flex flex-column justify-content-center align-items-center ">
          <h4 className="mt-3 text-muted">Write me an email at:</h4>
          <h1 className="project-title fw-bold">Kgetz32@gmail.com</h1>
          <h4 className="mt-3 text-muted">Or</h4>
          <h4 className="mt-3 text-muted">Reach me through social media:</h4>
          <div className="mt-3 d-flex flex-row justify-content-center align-items-center">
            <Button size="lg" variant="outline-dark" href="https://www.linkedin.com/in/kevin-getz-06645120b/"><FaLinkedin /></Button>
            <Button size="lg" variant="outline-dark" href="https://github.com/BillyMaysHere32/"><FaGithub /></Button>
          </div>
      </div>
    </div>
    
    </div>
  )
}

