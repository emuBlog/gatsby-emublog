import React from "react"
import Layout from "../components/layout";
import { Link, graphql } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import categoryLogo from '../images/common/category.png';
import tagLogo from '../images/common/tag.png';
import dateLogo from '../images/common/date.png';

const _ = require("lodash")

const Tag = ({ pageContext,data}) => {
    const { tag } = pageContext
    const { edges } = data.allMarkdownRemark
  return (
    <Layout>
    <h1 className='listTitle'>{`タグ：${_.kebabCase(tag)}`}</h1>
    <div className='box'>
      {/* 投稿したページをリスト化して表示する部分 */}
      {edges.map(( edge )=>(
        <div key={edge.node.id} className = 'article'>
            <Link to={`/tag/${_.kebabCase(tag)}/${edge.node.frontmatter.slug}`}>
            {/* mdファイルで指定したhero_imageの画像を表示 */}
            <div　className='image'><GatsbyImage image={getImage(edge.node.frontmatter.hero_image)} alt="Hero Image" /></div>
            </Link>
            <div className='mini-info'>
          <div className='mini-info-item-box'><div class = "logo"><img src = {dateLogo} alt = "日付アイコン"　width="20px" height = "20px"/></div>{edge.node.frontmatter.date}</div>
          <Link to={`/category/${_.kebabCase(edge.node.frontmatter.category)}/`}>
            <div className='mini-info-item-box'><div class="logo"><img src={categoryLogo} alt="カテゴリアイコン" width="20px" height="20px" /></div>{edge.node.frontmatter.category}</div></Link>
            {edge.node.frontmatter.tags.map(tag => (
            <Link to={`/tag/${_.kebabCase(tag)}/`}><div className='mini-info-item-box'><div class="logo"><img src={tagLogo} alt="タグアイコン" width="20px" height="20px" /></div>{tag}</div></Link>
            ))}
            
          </div>
            <div className='right'>
            <h2 className='pagetitle'>{/* mdファイルでslugに指定したURLに遷移 */}
                <Link to={`/tag/${_.kebabCase(tag)}/${edge.node.frontmatter.slug}`}>
                {edge.node.frontmatter.title}
            </Link></h2>
            </div>
            
        </div>
         ))}
    </div>
        
    </Layout>
  );
};
export const query = graphql`
  query($tag: String){
    allMarkdownRemark(filter: {frontmatter: {tags: {in: [$tag]}}}) {
      edges {
        node {
          frontmatter {
            tags
            category
            slug
            title
            hero_image {
              childImageSharp {
                gatsbyImageData(width: 200, height: 200)
              }
            }
            date
            article_explain
          }
          html
          id
          timeToRead
        }
      }
    }
  }
`
export default Tag ;