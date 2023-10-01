import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import categoryLogo from '../images/common/category.png';
import tagLogo from '../images/common/tag.png';
import dateLogo from '../images/common/date.png';
// import * as styles from './styles/postlist.module.css';
const _ = require("lodash")

const PostList = () => {
    const data = useStaticQuery(
        graphql`
        query {
            allMarkdownRemark {
              edges {
                node {
                  id
                  html
                  timeToRead
                  frontmatter {
                    title
                    date
                    slug
                    category
                    tags
                    hero_image {
                      childImageSharp {
                        gatsbyImageData(width: 400, height: 250)
                      }
                    }
                    article_explain
                  }
                }
              }
            }
          }
        `
      );
  return (
    <>
      <h1 className='listTitle'>記事一覧</h1>
      <div className='box'>
        {/* 投稿したページをリスト化して表示する部分s */}
      {data.allMarkdownRemark.edges.map((edge) =>(
        <div key={edge.node.id} className = 'article'>
          <Link to={`/${edge.node.frontmatter.slug}`}>
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
            <h2 className='pagetitle'>
              {/* mdファイルでslugに指定したURLに遷移 */}
              <Link to={`/${edge.node.frontmatter.slug}`}>
              {edge.node.frontmatter.title}
            </Link></h2>
            {/* <div dangerouslySetInnerHTML = {{__html:edge.node.html}}/> */}
            {/* <p className='text'>{edge.node.frontmatter.article_explain}</p> */}
            
          </div>
          
        </div>

      ))}
      </div>
      
    </>
  );
};

export default PostList;