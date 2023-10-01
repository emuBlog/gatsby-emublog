import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import * as styles from './styles/header.module.css'
import './styles/global.css'

import blogTiteleImage from '../images/common/blog_title_image.png';
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

      <div className={styles.header}>
      <Link to="/"><img src = {blogTiteleImage} className ={styles.blogtitle} alt = "ブログアイコン"　/></Link>
        {/* <h1 className='title'>{data.site.siteMetadata.title}</h1> */}
        {/* <nav className={styles.navigation}>
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
        </nav> */}
      </div>
      
    </header>
  );
};

export default Header;