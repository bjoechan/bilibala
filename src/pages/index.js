import * as React from "react"
import 'twin.macro'

import { MenuBar } from "../components/MenuBar";
import { Layout } from "../components/Layout";

const IndexPage = () => {
  return (
    <Layout>
        <MenuBar />
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
