import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
// import * as styles from './styles/postlist.module.css';

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
                    hero_image {
                      childImageSharp {
                        gatsbyImageData(width: 200, height: 200)
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
      {/* 投稿したページをリスト化して表示する部分s */}
      {data.allMarkdownRemark.edges.map((edge) =>(
        <div key={edge.node.id} className = 'article'>
          <Link to={`/${edge.node.frontmatter.slug}`}>
            {/* mdファイルで指定したhero_imageの画像を表示 */}
            <figure　className='image'><GatsbyImage image={getImage(edge.node.frontmatter.hero_image)} alt="Hero Image" /></figure>
          </Link>
          <div className='right'>
            <h2 className='pagetitle'>
              {/* mdファイルでslugに指定したURLに遷移 */}
              <Link to={`/${edge.node.frontmatter.slug}`}>
              {edge.node.frontmatter.title}
            </Link></h2>
            {/* <div dangerouslySetInnerHTML = {{__html:edge.node.html}}/> */}
            <p className='text'>{edge.node.frontmatter.article_explain}</p>
            <p className='date'>投稿日：{edge.node.frontmatter.date}</p>
          </div>
          
        </div>

      ))}
    </>
  );
};

export default PostList;