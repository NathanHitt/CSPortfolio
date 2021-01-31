import matter from 'gray-matter'

import Layout from '../components/Layout'
import PostList from '../components/PostList'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'

const Blog = ({ posts, title, description, ...props }) => {
  return (
    <Layout pageTitle={title}>
    <Jumbotron fluid>
    <Container>
      <h1>Fully Functional Markdown Blog</h1>
      <p>
        This blogging application is fully functional and easily integrated with a headless CMS such as Netlify. Built using a tutorial by Netilfy using NextJS.
      </p>
    </Container>
  </Jumbotron>
      <br/>
      <main>
        <PostList posts={posts} />
      </main>
    </Layout>
  )
}

export default Blog

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`)

  const posts = ((context) => {
    const keys = context.keys()
    const values = keys.map(context)

    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3)
      const value = values[index]
      const document = matter(value.default)
      return {
        frontmatter: document.data,
        markdownBody: document.content,
        slug,
      }
    })
    return data
  })(require.context('../posts', true, /\.md$/))

  return {
    props: {
      posts,
      title: configData.default.title,
      description: configData.default.description,
    },
  }
}