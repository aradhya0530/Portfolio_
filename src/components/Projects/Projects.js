import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import ProjectCard from "./ProjectCards";

import cosm from '../../Assets/Projects/cosmetics.jpg'
import kdrama from '../../Assets/Projects/drama.avif'
import college from '../../Assets/Projects/college.jpg'

import "./project.css";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="Fluorescent-Blue">Works </strong>
        </h1>
        <p>Here are a few projects I've worked on recently.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={cosm}
              title="What are you putting on your face?"
              description=" The project's goal is to explore the ingredients used in the cosmertics product and to make a recommendation model based on the ingredients involved."
              ghLink="https://github.com/aradhya0530/Cosmetic-Ingredients-Analysis"
              // demoLink="https://ecart.onrender.com/"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={kdrama}
              title="K-drama Analysis"
              description="Analysis on various Korean dramas & recommendations based on factors like particular Actor, Director , Writer using python & ML Libraries."
              ghLink="https://github.com/aradhya0530/Kdrama-analysis"
              // demoLink="https://rahuljha.tech/"
            />
          </Col>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={college}
              title="EDA on Top Engineering Colleges India"
              description="Project on analysis of top 300 engineering colleges of India by web scraping data and then making exploratory analysis."
              ghLink="https://github.com/aradhya0530/EDA-on-Top-Engineering-Colleges-India."
              // demoLink="https://chat-app-rahuljha4171.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
      <ScrollToTop />
    </Container>
  );
}

export default Projects;
