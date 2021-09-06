import React from "react"
import { graphql } from 'gatsby'
import { Link, StaticQuery } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import IndexToc from "../components/IndexToc"
import Container from "../components/Box"

const Chapter = styled.div`
  display: grid;
  /* align-items: flex-end;
  justify-content: space-between; */
  grid-template-columns: 1fr minmax(40px, 120px);
  grid-template-rows: min-content 1fr min-content;
  grid-template-areas: "heading downloads"
  "summary summary"
  "toc toc";
  margin-bottom: 1rem;
  border-bottom: 1px solid #ddd;
  padding-bottom:1rem;
`

const ChapterHeading = styled.h3`
  font-weight: normal!important;
  margin: 0;
  max-width:60%;
`
const ChapterSummary = styled.p`
   font-size: 0.8rem;
   margin:1em 0 0 0 ;
   max-width: 60em;
   grid-area:summary;
`

const TocWrapper = styled.div`
   grid-area: toc;
   margin-top: 1rem;
`
const Hero = styled.div`
  background: #ff6e61;
  padding-top: 120px;
  padding-bottom: 120px;

`
const Heading = styled.h1`
  margin:0;
  padding:0;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

const HeroBox = styled.div`
  max-width: 50%;
`

const TocBox = styled.div`
  background-color: #fff;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  padding: 3em;
  margin-top: -5em;
  margin-bottom: -5em;
`

const Intro = styled.div`
  padding-top: 4em;
  padding-right: 4em;
  font-size: 18px;
`

export default function Home({ data }) {

  const allModelCode = data.allMarkdownRemark.edges;
  const allLegislationHeadings = data.markdownRemark.headings;
  const modelLegHeadings = allLegislationHeadings.map((heading) => {
    return heading.value;
  })
  console.log(modelLegHeadings)
  const modelCodeHeadings = allModelCode.map((edge) => {
    return edge.node.headings[0].value;
  })

  console.log(modelCodeHeadings)
  return <Layout>
    <Hero>
      <Container>

        <HeroBox>
          <Heading>A framework for legalizing and regulating home cooking businesses.</Heading>
        </HeroBox>

      </Container>
    </Hero>
    <Container>
      <Grid>
        <Intro>
          <p>COOK Alliance’s model legislation and model code provides a guide for legalizing and regulating home cooking businesses. </p>
          <p>Currently, there are no standardized regulations to help guide states or regulatory officials in allowing cooks to prepare and sell meals from their homes. While several states have passed or are in the process of passing home cooking legislation (such as California, Utah, and Wyoming), the FDA model food code is silent on the activity.</p>
          <p>COOK Alliance provides two different documents, a model bill and a model regulatory code. Every state has different rules and regulations and these documents must be updated and amended to integrate into relevant state and municipal laws.</p>
        </Intro>
        <TocBox>
          <h2>Table of contents</h2>
          {
            <div>
              <Chapter>
                <ChapterHeading>
                  <Link to="acknowledgements">Introduction</Link>
                </ChapterHeading>
                <div>
                  <small style={{ fontSize: `11px` }}><Link to={`/introduction.pdf`}>Download PDF</Link> </small>
                </div>
                <ChapterSummary>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a faucibus metus. Morbi fermentum turpis ac sem porttitor ornare. Ut est mi, dictum et ultricies vel, accumsan id elit.
                </ChapterSummary>

              </Chapter>

              <Chapter>
                <ChapterHeading>
                  <Link to="model-legislation">Model Legislation</Link>
                </ChapterHeading>
                <div>
                  <small style={{ fontSize: `11px` }}><Link to={`/model-legislation.pdf`}>Download PDF</Link> </small>
                </div>
                <ChapterSummary>
                  This model bill creates a framework for the inspection and permitting of Home Cooking Operations and the regulation of Online Food Platforms that serve as marketplaces for home cooks.
                </ChapterSummary>
                <TocWrapper>
                  <IndexToc headings={modelLegHeadings} prefix="model-legislation" />
                </TocWrapper>
              </Chapter>
              <Chapter>
                <ChapterHeading>
                  <Link to="model-code">Model Code</Link>
                </ChapterHeading>
                <div>
                  <small style={{ fontSize: `11px` }}><Link to={`/model-code.pdf`}>Download PDF</Link> </small>
                </div>
                <ChapterSummary>
                  Based on the FDA Model Food Code, this is a detailed set of regulations that right-sizes the food code for the home kitchen. It is for use by state and regulatory agencies to ensure appropriate safeguards and to add detail to the model legislation.
                </ChapterSummary>
                <TocWrapper>
                  <IndexToc style={{ gridArea: `toc` }} headings={modelCodeHeadings} prefix="model-code" />
                </TocWrapper>
              </Chapter>
            </div>
          }
        </TocBox>
      </Grid>
    </Container>



  </Layout>
}

export const query = graphql`
query chapterHeadings {
  markdownRemark(frontmatter: {slug: {eq: "model-legislation"}}) {
    headings(depth: h2) {
      value
    }
  }
  allMarkdownRemark(
    filter: {frontmatter: {theme: {eq: "model-code"}}}
    sort: {fields: frontmatter___numberingStart}
  ) {
    edges {
      node {
        id
        headings(depth: h1) {
          depth
          value
        }
      }
    }
  }
}
`
