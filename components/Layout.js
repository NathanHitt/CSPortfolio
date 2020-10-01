import Link from 'next/link'
import Head from 'next/head'
import Header from './Header'

export default function Layout({ children, pageTitle, ...props}) {
    return (
        <div style={{position: "relative", minHeight: "100vh"}}>
            <div style={{paddingBottom: "4rem"}}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>{pageTitle}</title>
            </Head>
            <section className="layout">

                <Header />
                <div className="content">{children}</div>
            </section>
            </div>
            <div class="footer-container" style={{}}>
            <div class="footer"  style={{backgroundColor: "rgba(220, 220, 220, 0.6)", display: "flex", flexdirection: "column", fontSize: "0.6rem",
            justifyContent: "center", fontFamily: "Calibri", position: "absolute", width: "100%", bottom: "0", maxHeight: "4rem", minHeight: "2rem"}}>
                <div class="footer-heading footer-1" style={{marginRight: "10vh", marginLeft: "10vh"}}>
                    
                    <h5>Nav</h5>
                    <div style={{fontSize: "0.5rem"}}>
                    <Link href="/">Home   </Link>
                    <br/>
                    <Link href="/about">About   </Link>
                    <br/>
                    <Link href="/blog">Blog   </Link>
                    <br/>
                    </div>
                </div>
                <div class="footer-heading footer-3" style={{marginRight: "10vh", marginLeft: "0vh", width: "0.6vw", height: "0.6vh",}}>
                    
                    <h5>Socials</h5>
                    <div style={{display: "flex", flexDirection: "center"}}>
                    <a href="https://twitter.com"><img src="https://img.icons8.com/fluent-systems-regular/24/000000/twitter.png"/>
                  </a>
              
                    <a href="https://facebook.com"><img src="https://img.icons8.com/fluent-systems-regular/24/000000/facebook-new.png"/></a>
                   
                    <a href="https://snapchat.com"><img src="https://img.icons8.com/material-outlined/24/000000/snapchat.png"/></a>
                    </div>

                </div>

            </div>

        </div>
        </div>
    )
}