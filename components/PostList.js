import Link from 'next/link'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardGroup'
import Button from 'react-bootstrap/Button'
export default function PostList ({ posts }) {
    if (posts === "undefined") return null

    return (
        <div>
            {!posts && <div>No posts!</div>}

            <CardDeck>
                {posts &&
                    posts.map((post) => {
                        return (
                            <Card style={{marginLeft: "5vw", marginRight: "5vw", marginBottom: "2vh"}}>
                            <Card.Header>{post.frontmatter.title}</Card.Header>
                            <Card.Body>
                              <Card.Title>By {post.frontmatter.author}</Card.Title>
                              <Button variant="primary"><Link href={{ pathname: `/post/${post.slug}` }}>
                              <a>Read it!</a>
                          </Link></Button>
                            </Card.Body>
                          </Card>
                
                        )
                    })
                }
            </CardDeck>
        </div>
    )
};

