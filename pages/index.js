import Layout from '../components/Layout'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel'

const Index = ({ posts, title, description, ...props }) => {
  return (
    <Layout pageTitle={title}>
      <Jumbotron fluid>
      <Container>
        <h1>Interested in my skills?</h1>
        <p>
          This is a website dedicated to showing off what I have learned.
        </p>
      </Container>
    </Jumbotron>

    <Carousel style={{maxHeight: "80rem", maxWidth: "80rem", marginLeft: "auto", marginRight: "auto"}}>

  <Carousel.Item>
    <a href="https://hopeful-heisenberg-eb6cbd.netlify.app/">
    <img
      className="d-block w-100"
      src="https://analyticsindiamag.com/wp-content/uploads/2020/05/aim_snake.gif"
      alt="Third slide"
    />
    </a>
    <Carousel.Caption>
      <h3>Snake in React</h3>
      <p>Credit to ChigaBiga on Youtube</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <a href="https://pensive-montalcini-2e2b74.netlify.app/">
    <img
      className="d-block w-100"
      src="https://i.ytimg.com/vi/HWCFJP6C4bk/maxresdefault.jpg"
      alt="Third slide"
    />
    </a>
    <Carousel.Caption>
      <h3>Javascript Quiz Game</h3>
      <p>Built in pure javascript. Credit to WebDevSimplified</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <a href="https://keen-ride-27280c.netlify.app/">
    <img
      className="d-block w-100"
      src="https://www.interhacktives.com/wp-content/uploads/2014/04/codepen-1024x576.png"
      alt="Third slide"
    />
    </a>

    <Carousel.Caption style={{display: "inline"}}>
      <h3 style={{backgroundColor: "grey"}}>Codepen Clone</h3>
      <p style={{backgroundColor: "grey"}}>Built in React. Credit to WebDevSimplified</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
<br/>

    </Layout>
  )
}

export default Index

