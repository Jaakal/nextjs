import { GetStaticProps, GetStaticPaths } from "next"
import { useRouter } from 'next/router'

// This function executes on server
export const getStaticProps: GetStaticProps = async context => {
  /**
   * Here all the Node functions are available because it runs on server.
   * If you have revalidate set, then after every seconds you set,
   * if a new request is made, it renews the static HTML page.
   */

  return {
    revalidate: 10,
    props: {
      myFavNum: Math.random()
    }
  }
}

/**
 * getStaticProps runs at build time. It does not run at runtime.
 * So for dynamic paths when using getStaticProps you will need
 * to use getStaticPaths to set on which paths getStaticProps runs.
 */
export const getStaticPaths: GetStaticPaths = async () => {
  /**
   * You are able to access here all the Node related functions
   * to create those paths dynamically for instance related to database
   * entries or something.
   * 
   * If you have fallback to set false, then only defined paths are available
   * and their static HTML files are created. If true, then it creates
   * all the static files for the defined paths and stays open for others paths.
   * If a new path is accessed, Next displays the page HTML content without props
   * first, while it runs getStaticProps and then updates the HTML file.
   * Then it adds that path to the paths list and stores the page locally
   * on the filesystem for faster access in the future.
   */

  return {
    paths: [
      { params: { slug: 'activities' } },
      { params: { slug: 'readings' } }
    ],
    fallback: true
  }
}

const Subpath = props => {
  const router = useRouter()

  return (
    <>
      {router.isFallback && <h1>Loading...</h1>}
      {!router.isFallback && <h1>My favorite number: {props.myFavNum}!</h1>}
    </>
  )
}

export default Subpath