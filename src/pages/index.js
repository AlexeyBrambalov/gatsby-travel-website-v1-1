import React from "react"
import HeroSection from "../components/HeroSection"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Trips from '../components/Trips'
import Stats from '../components/Stats'
import Email from '../components/Email'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroSection/>
    <Trips heading="QUELQUES-UNS
DE NOS PROJETS"/>   
    <Stats />
    <Email />
  </Layout>
)

export default IndexPage
