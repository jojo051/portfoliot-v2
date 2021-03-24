import Head from 'next/head';
import Link from 'next/link';

export default function Layout({ children, page }) {
  return(
    <div>
      <Head>
        <title> {page} </title>
      </Head>
      <header>
        <div>
          <h1>RODIER Joël</h1>
          <Link href="/moncv">
            <button> 
              Mon cv
            </button>  
          </Link>
          <Link href="/contact">
            <button>
              Contact
            </button>  
          </Link>
        </div>
      </header>
      <main>{children}</main>
      <footer>
        <p>RODIER Joel</p>
        <a href="https://linkedin.com/in/joel-rodier-6280b41a4" target="_blank">Linked In</a>
        <a href="https://github.com/jojo051" target="_blank">Git Hub</a>
      </footer>
    </div>
  )
}