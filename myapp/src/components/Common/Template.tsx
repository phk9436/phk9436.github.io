import React, { ReactNode } from "react"
import styled from "@emotion/styled"
import GlobalStyle from "components/Common/GlobalStyle"
import Footer from "components/Common/Footer"
import { Helmet } from "react-helmet"

interface TemplateProps {
  title: string
  description: string
  url: string
  image: string
  children: ReactNode
}

function Template({ title, description, url, image, children }: TemplateProps) {
  return (
    <Container>
      <Helmet>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content={title} />
      </Helmet>
      <GlobalStyle />
      {children}
      <Footer />
    </Container>
  )
}

export default Template

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`
