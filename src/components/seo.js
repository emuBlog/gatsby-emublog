/**
 * SEO component that queries for data with
 * Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {Helmet} from "react-helmet";
import { useLocation } from "@reach/router"
import PropTypes from 'prop-types';

const Seo = ({ title, description, image, article }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            defaultTitle: title
            defaultDescription: description
            siteUrl: siteUrl
            defaultImage: image
            twitterUsername
          }
        }
      }
    `
  )
  const {
    defaultTitle,
    defaultDescription,
    siteUrl,
    defaultImage,
    twitterUsername,
  } = site.siteMetadata;

  const { pathname } = useLocation();

  const seo = {
    title: title ? `${title} | ${defaultTitle}` : defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
  };
  

  return (
  <Helmet>
    <html lang="ja" />
    <title>{seo.title}</title>
    <meta name="description" content={seo.description} />
    <meta name="image" content={seo.image} />
    {seo.url && <meta property="og:url" content={seo.url} />}
    {(article ? true : null) && <meta property="og:type" content="article" />}
    {seo.title && <meta property="og:title" content={seo.title} />}
    {seo.description && (
      <meta property="og:description" content={seo.description} />
    )}
    {seo.image && <meta property="og:image" content={seo.image} />}
    <meta name="twitter:card" content="summary_large_image" />
    {twitterUsername && <meta name="twitter:creator" content={twitterUsername} />}
    {seo.title && <meta name="twitter:title" content={seo.title} />}
    {seo.description && (
      <meta name="twitter:description" content={seo.description} />
    )}
    {seo.image && <meta name="twitter:image" content={seo.image} />}
  </Helmet>
  )
}

export default Seo

Seo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
}
