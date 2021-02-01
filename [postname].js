import Link from 'next/link'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import styles from '../../styles/QuantumComputing.module.css'

import Layout from '../../components/Layout'  

export default function BlogPost({ siteTitle, frontmatter, markdownBody }) {
    let whoo
    if (!frontmatter) return <div></div>
    if (frontmatter.title == 'Introduction to Quantum Computing') {
        whoo = styles.error
    } else {
        whoo = styles.tabloid
    }

    return (
        <Layout pageTitle={`${siteTitle} | ${frontmatter.title}`}>
            <br/>
            <Link href="/blog">
                <a>Back to post list</a>
            </Link>
            <br/>
            <br/>
            <article>
                <h1>{frontmatter.title}</h1>
                <p>By {frontmatter.author}</p>
                <div>
                    <ReactMarkdown source={markdownBody} className={whoo}/>
                </div>
            </article>
        </Layout>
    )
}

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
      paths,
      fallback: false,
    }
  }