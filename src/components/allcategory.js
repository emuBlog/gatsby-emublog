import React from "react"
import {Link, useStaticQuery, graphql } from 'gatsby';
import * as styles from './styles/category.module.css'
import categoryLogo from '../images/common/category.png';

const _ = require("lodash")

const Category = () => {
    const data = useStaticQuery(
        graphql`
        query {
            allMarkdownRemark {
            group(field: {frontmatter: {category: SELECT}}) {
                fieldValue
                totalCount
            }
        }
      }
  `) 
  return (
    <category > 
        
        <div className={styles.category}>
        <h1>カテゴリ</h1>
        <div className={styles.mini_info}>
        {data.allMarkdownRemark.group.map(( edge )=>(
            
            <Link to={`/category/${_.kebabCase(edge.fieldValue)}/`}>
            <div className={styles.mini_info_item_box}><div class={styles.logo}><img src={categoryLogo} alt="カテゴリアイコン" width="20px" height="20px" /></div>{edge.fieldValue}</div></Link>
            
         ))}
         </div>
         </div>
    </category>
  );
};

export default Category ;