import Layout from '../components/Layout'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardGroup'

const About = ({ title, description, ...props }) => {
  return (
    <>
      <Layout pageTitle={`${title} | About`} description={description}>
        <Jumbotron fluid>
          <Container>
            <h1>About me</h1>
            <p>
              My name is Nathan Hittedorf and I am a senior at Jones College Prep. I built this website to demonstrate my skills in various areas of computer science. I have background in ReactJs, Javascript, HTML, CSS, Python, Java, Linux, and much more. I intend to major in computer science and use the major to become a Cyber Security Operations Manager in the United States Air Force. For inquiries you may email me at nathanmhitt@gmail.com.
            </p>
          </Container>
        </Jumbotron>
        <div style={{display: "flex", justifyContent: "center"}}>
        <Card style={{maxHeight: "40%", maxWidth: "40%"}}>
        
        <Card.Body>
          <Card.Text>
            My full resume is linked <a href="https://docs.google.com/document/d/1VSRbctZklEDT4GqD_2fjLKAzUT7lCEla93ANa148ay0/edit?usp=sharing">here.</a>
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
      <Card style={{maxHeight: "40%", maxWidth: "40%"}}>
        <Card.Body>
          <Card.Text>
            A Picture of Me:
          </Card.Text>
        </Card.Body>
        <Card.Img variant="bottom" src="https://i.ibb.co/BGHhh40/IMG-0688.jpg" />
      </Card>
      </div>
      <br></br>
      </Layout>
    </>
  )
}

export default About

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`)

  return {
    props: {
      title: configData.default.title,
      description: configData.default.description,
    },
  }
}