import Link from 'next/link'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export default function Header() {
    return (
        <>
        <Navbar bg="light" expand="lg">
        <Navbar.Brand>Nathan Hittesdorf</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Navbar.Text><Link href="/"><a style={{color: "#1E90FF", marginRight: "5px"}}>Home</a></Link></Navbar.Text>
            <Navbar.Text><Link href="/about"><a style={{color: "#1E90FF", marginRight: "5px"}}>About</a></Link></Navbar.Text>
            <Navbar.Text><Link href="/blog"><a style={{color: "#1E90FF", marginRight: "5px"}}>Blog</a></Link></Navbar.Text>

          </Nav>
          
        </Navbar.Collapse>
      </Navbar>
        </>
    )
}