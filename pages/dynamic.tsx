import { GetServerSideProps } from "next";

/**
 * Called always on every page request, even in production.
 * So this is considered a bad practice and should be avoided
 * if possible. When using it, NextJS is not going to create
 * a static HTML page to its file system to serve it faster.
 */
export const getServerSideProps: GetServerSideProps = async context => {
  return {
    props: {
      myFavNum: Math.random()
    }
  }
}

export default function Dynamic(props) {
  return <h1>Dynamic Number - {props.myFavNum}</h1>
}