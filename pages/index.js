import React from 'react'
import Layout from "../components/Layout";
import Link from "../components/Link";

const Index = () => {

  return (
    <Layout>
      <h1>batman list</h1>
      <ul>
        <li key={`975`}>
          <Link href={`/show/975`} as={`/show/975`}>
            <a>Batman</a>
          </Link>
        </li>
        <li key={`481`}>
          <Link href={`/show/481`} as={`/show/481`}>
            <a>The Batman</a>
          </Link>
        </li>
        <li key={`504`}>
          <Link href={`/show/504`} as={`/show/504`}>
            <a>Batman Beyond</a>
          </Link>
        </li>
        <li key={`757`}>
          <Link href={`/show/757`} as={`/show/757`}>
            <a>Batman: The Animated Series</a>
          </Link>
        </li>
        <li key={`3557`}>
          <Link href={`/show/3557`} as={`/show/3557`}>
            <a>Beware the Batman</a>
          </Link>
        </li>
        <li key={`11464`}>
          <Link href={`/show/11464`} as={`/show/11464`}>
            <a>Batman Unlimited</a>
          </Link>
        </li>
        <li key={`900`}>
          <Link href={`/show/900`} as={`/show/900`}>
            <a>Batman: The Brave and the Bold</a>
          </Link>
        </li>
        <li key={`22309`}>
          <Link href={`/show/22309`} as={`/show/22309`}>
            <a>Batman: Black and White</a>
          </Link>
        </li>
        <li key={`5951`}>
          <Link href={`/show/5951`} as={`/show/5951`}>
            <a>The New Batman Adventures</a>
          </Link>
        </li>
        <li key={`33618`}>
          <Link href={`/show/33618`} as={`/show/33618`}>
            <a>The Adventures of Batman</a>
          </Link>
        </li>
      </ul>
    </Layout>
  )
}

export default Index;
