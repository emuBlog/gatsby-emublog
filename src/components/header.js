import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { header, blogtitle, navigation } from './styles/header.module.css'
import blogTiteleImage from '../images/blog_title_image.png';
// import { getImage, GatsbyImage } from 'gatsby-plugin-image';
const _ = require("lodash")

const Header = ( ) => {
  const data = useStaticQuery(graphql`
  
    query {
      allMarkdownRemark {
        distinct(field: {frontmatter: {category: SELECT}})
      }
      site {
        siteMetadata {
          title
        }
      }
    }
  `) 

  return (
    <header>
      <div className={header}>
      <Link to="/"><img src = {blogTiteleImage} className ="blog-logo" alt = "ブログアイコン"　class={blogtitle}/></Link>
        {/* <h1 className='title'>{data.site.siteMetadata.title}</h1> */}
        <nav className={navigation}>
          <ul>
            <li>
              <Link to="/">top</Link>
            </li>
            {data.allMarkdownRemark.distinct.map((category) => (
              <li>
              <Link to={`/category/${_.kebabCase(category)}/`}>{category}</Link>
            </li>
        
            ))}
          </ul>
        </nav>
      </div>
      
    </header>
  );
};

export default Header;