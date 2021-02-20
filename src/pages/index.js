import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import { Carousel } from 'react-bootstrap';
import Img from "gatsby-image"
import "bootstrap/dist/css/bootstrap.min.css";
import SEO from "../components/seo"
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'


const IndexPage = (props) => (
  <Layout>
    <SEO title="Home" />
    <Carousel className="full-width-md d-none d-md-block">
      <Carousel.Item>
      <Img fluid={props.data.image1.childImageSharp.fluid} />
        <Carousel.Caption>
        <Button href="#">View Details</Button>
        <h3>First slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Img fluid={props.data.image2.childImageSharp.fluid} />
        <Carousel.Caption>
        <Button href="#">View Details</Button>
        <h3>Second slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Img fluid={props.data.image3.childImageSharp.fluid} />
        <Carousel.Caption>
        <Button href="#">View Details</Button>
        <h3>Third slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <h1>Bemvindo mai Pazina Foun Portal Ministeriu das Financas</h1>
    <p>Welcome to Our new MoF Site.</p>
    <p>This is under Development.</p>



<Container>
  <Row md={4}>
    <Col>
    <Card style={{ width: '18rem' }}>
  
    <Card.Body>
      <Card.Title>News 1</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
      </Card.Text>
      <Button variant="primary">View News</Button>
    </Card.Body>
  </Card>
    </Col>
    <Col>
    <Card style={{ width: '18rem' }}>
   
    <Card.Body>
      <Card.Title>News 2</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
      </Card.Text>
      <Button variant="primary">View News</Button>
    </Card.Body>
  </Card>
    </Col>
    <Col>
    <Card style={{ width: '18rem' }}>
    
    <Card.Body>
      <Card.Title>News 3</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
      </Card.Text>
      <Button variant="primary">View News</Button>
    </Card.Body>
  </Card>
    </Col>
    <Col>
    <Card style={{ width: '18rem' }}>
    
    <Card.Body>
      <Card.Title>News 4</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
      </Card.Text>
      <Button variant="primary">View News</Button>
    </Card.Body>
  </Card>
    </Col>
  </Row>
</Container>

<br />
    <Link to="/page-2/">View All News</Link> <br />
    
  </Layout>
)

export default IndexPage


  export const data = graphql`
    query {
      image1: file(relativePath: { eq: "1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image2: file(relativePath: { eq: "2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      image3: file(relativePath: { eq: "3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `