import { Link,graphql } from 'gatsby';
import * as React from 'react';
import Layout from '../components/layout';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import categoryLogo from '../images/common/category.png';
import tagLogo from '../images/common/tag.png';
import dateLogo from '../images/common/date.png';
import Seo from '../components/seo';
import Share from '../components/share';
import { useLocation } from "@reach/router";

const _ = require("lodash")

const TagArticle = ({ pageContext, data:{ markdownRemark,site } }) => {
  const { id } = pageContext
  const { frontmatter, html } = markdownRemark;
  const image = getImage(frontmatter.hero_image);
  const imagePath = frontmatter.hero_image.childImageSharp.original.src;
  const { pathname } = useLocation();
  const url = `${site.siteMetadata.siteUrl}${pathname}`;
  return (
    <>
    <Seo title = {frontmatter.title} description={frontmatter.description} image = {imagePath} type="article"/>
      <Layout>
        {/* <GatsbyImage image={image} alt="Hero Image" /> */}

        <h1 className='pagetitle'>{frontmatter.title}</h1>
        <div className='mini-info'>
            <div className='mini-info-item-box'><div class = "logo"><img src = {dateLogo} alt = "日付アイコン"　width="20px" height = "20px"/></div>{frontmatter.date}</div>
            <Link to={`/category/${_.kebabCase(frontmatter.category)}/`}>
              <div className='mini-info-item-box'><div class="logo"><img src={categoryLogo} alt="カテゴリアイコン" width="20px" height="20px" /></div>{frontmatter.category}</div></Link>
              {frontmatter.tags.map(tag => (
              <Link to={`/tag/${_.kebabCase(tag)}/`}><div className='mini-info-item-box'><div class="logo"><img src={tagLogo} alt="タグアイコン" width="20px" height="20px" /></div>{tag}</div></Link>
              ))}
              
        </div>
        <div className='body' dangerouslySetInnerHTML={{ __html: html }} />

        <div className='shs_share'>
        <h3>SNSでシェア</h3>
        <Share title={frontmatter.title} url={url} />
      </div>
      </Layout>
    </>
    
  );
}
//date(formatString: "MMMM DD, YYYY")
export const query = graphql`
  query($id: String!){
    site {
      siteMetadata {
        siteUrl
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date
        title
        category
        tags
        hero_image {
          childImageSharp {
            gatsbyImageData
            original {
              src
            }
          }
        }
        description
      }
    }
  }
`
export default TagArticle ;