import React from "react"
import Layout from "../components/layout";
import { Link, graphql } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';

const _ = require("lodash")

const Category = ({ pageContext,data}) => {
    const { category } = pageContext
    const { edges } = data.allMarkdownRemark
  return (
    <Layout>
    <h1 className='listTitle'>{`カテゴリ：${_.kebabCase(category)}　記事一覧`}</h1>
        {/* 投稿したページをリスト化して表示する部分 */}
        {edges.map(( edge )=>(
        <div key={edge.node.id} className = 'article'>
            <Link to={`/category/${_.kebabCase(category)}/${edge.node.frontmatter.slug}`}>
            {/* <Link to={`/posts/${edge.node.frontmatter.slug}`}> */}
            {/* mdファイルで指定したhero_imageの画像を表示 */}
            <figure　className='image'><GatsbyImage image={getImage(edge.node.frontmatter.hero_image)} alt="Hero Image" /></figure>
            </Link>
            <div className='right'>
            <h2 className='pagetitle'>
                {/* mdファイルでslugに指定したURLに遷移 */}
                <Link to={`/category/${_.kebabCase(category)}/${edge.node.frontmatter.slug}`}>
                {edge.node.frontmatter.title}
            </Link></h2>
            <p className='text'>{edge.node.frontmatter.article_explain}</p>
            <p className='date'>投稿日：{edge.node.frontmatter.date}</p>
            </div>
            
        </div>
         ))}
    </Layout>
  );
};
export const query = graphql`
query($category: String){
  allMarkdownRemark(filter: {frontmatter: {category: {in: [$category]}}}) {
    totalCount
    edges {
      node {
        frontmatter {
          category
          date
          title
          slug
          hero_image {
            childImageSharp {
              gatsbyImageData(width: 200, height: 200)
            }
          }
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
export default Category ;