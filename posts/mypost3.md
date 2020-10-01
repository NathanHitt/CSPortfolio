---
title: 'How does this blog work?'
author: 'Nathan Hittesdorf'
---

This blog works using a combination of NextJS's framework for querying and processing external data, react-markdown, gray-matter, and raw-loader.

Raw-loader and react-markdown are the easiest to explain, with Raw-loader allowing importing files as string and react-markdown adding markdown file support to react. Markdown is an abstraction of HTML which is used for quickly prototyping websites. 

Basically, this app uses the getStaticProps() NextJs function to asynchronously import other files and assign them to different objects. It then returns these objects as props from this function where they can be accessed bsased on the object they are attached to Gray matter also parses the metadata of the markdown files used to generate blog posts so that this data can be imported into a React Component and used to generate dynamic blog pages.

export async function getStaticProps({ ...ctx}) {
    const { postname} = ctx.params

    const content = await import(`../../posts/${postname}.md`)
    const config = await import(`../../siteconfig.json`)
    const data = matter(content.default)

    return {
        props: {
            siteTitle: config.title,
            frontmatter: data.data,
            markdownBody: data.content,
        },
    }
}

Here is an example of passing these objects to a react component, which is then rendered as a subdomain of this website.

xport default function BlogPost({ siteTitle, frontmatter, markdownBody }) {
    if (!frontmatter) return <div></div>

    return (
        <Layout pageTitle={`${siteTitle} | ${frontmatter.title}`}>
            <br/>
            <Link href="/blog">
                <a>Back to post list</a>
            </Link>
            <br/>
            <br/>
            <article>
                <h1>{frontmatter.title}</h1> <------ this informatioin is pulled from the props of the getStaticProps method. It is easy
                <p>By {frontmatter.author}</p> <---| to add more subinformation to the frontmatter object by modifying the YAML of 
                <div>                                markdown files to include more possilbilites.
                    <ReactMarkdown source={markdownBody} />
                </div>
            </article>
        </Layout>
    )
}

This application also generates dynamic subpath (slug) information based on the title of markdown files. It uses the getStaticPaths() method to pull the folder of markdown files. It then pushes these into an array and performs operations on these to get rid of special characters, then maps each of these to the path const. It returns this as part of the getStaticPathsMethod, which is built into the method and designates which paths will be prerendered.

export async function getStaticPaths() {
    const blogSlugs = ((context) => {
      const keys = context.keys()
      const data = keys.map((key, index) => {
        let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3)
  
        return slug
      })
      return data
    })(require.context('../../posts', true, /\.md$/))
  
    const paths = blogSlugs.map((slug) => `/post/${slug}`)
  
    return {
      paths, <----- Returns this to tell NextJs to create all the paths on the subdirectory /posts/{insert slug}
      fallback: false,
    }
  }

  The posts list operates on similar measures, using the getStaticProps method to return posts which it then passes to a React Component that handles the rendering of the blog posts on the blog index page.

  export default function PostList ({ posts )} <--- This is passed down from the react component handling the rendering of the whole blog page. 
    {                                               The posts are passed into this funciton which maps them into a bootstrap card component,
                                                    (my addition) pulling frontmatter subinfomratioin to designate things such as the author and title of the card. This allows for dynamically renderd blog cards, responsive to someone making
                                                    more posts from a CMS such as NETLIFY or directly from markdown posts.
                                                    
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

This all comes together to create a seamless blogging application! :)