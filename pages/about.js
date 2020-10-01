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
              I am a student at Jones College Prep interested in Computer Science. I built this website as a way to demonstrate some of my skills.
            </p>
          </Container>
        </Jumbotron>
        <div style={{display: "flex", justifyContent: "center"}}>
        <Card style={{maxHeight: "40%", maxWidth: "40%"}}>
        <Card.Img variant="top" src="https://media-exp1.licdn.com/dms/image/C4D03AQEZhfYeKz8G5A/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=GRLfKY7KufIcF-RAPdrO0bqqStwh3bX6pCXNgqdH-IU" />
        <Card.Body>
          <Card.Text>
            An old picture of me.
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
      <Card style={{maxHeight: "40%", maxWidth: "40%"}}>
        <Card.Body>
          <Card.Text>
            Rock climbing is something I am interested in.
          </Card.Text>
        </Card.Body>
        <Card.Img variant="bottom" src="https://www.outsideonline.com/sites/default/files/styles/img_600x600/public/2019/11/22/rock-climbing-palestine-main_s.jpg?itok=BCE0xt-8" />
      </Card>
      </div>

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