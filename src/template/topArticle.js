import { Link,graphql } from 'gatsby';
import * as React from 'react';
import Layout from '../components/layout';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import categoryLogo from '../images/common/category.png';
import tagLogo from '../images/common/tag.png';
import dateLogo from '../images/common/date.png';
import Seo from '../components/seo';

const _ = require("lodash")

const TopArticle = ({ pageContext, data:{ markdownRemark } }) => {
  const { id } = pageContext
  const { frontmatter, html } = markdownRemark;
  const image = getImage(frontmatter.hero_image);
  const imagePath = frontmatter.featuredimage?.childImageSharp?.gatsbyImageData?.images?.fallback?.src || ""
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
    </Layout>
    </>

  );
}
//date(formatString: "MMMM DD, YYYY")
export const query = graphql`
  query($id: String!){
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date
        title
        category
        tags
        ogpImgPath
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
        description
      }
    }
  }
`
export default TopArticle ;