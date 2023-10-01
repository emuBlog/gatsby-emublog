import React from "react"
import {Link, useStaticQuery, graphql } from 'gatsby';
import * as styles from './styles/tag.module.css'
import tagLogo from '../images/common/tag.png';
const _ = require("lodash")

const Tag = () => {
    const data = useStaticQuery(
        graphql`
        query {
            allMarkdownRemark {
            group(field: {frontmatter: {tags: SELECT}}) {
                fieldValue
                totalCount
            }
        }
      }
  `) 
  return (
    <tag > 
        <div className={styles.tag}>
        <h1>タグ</h1>
        <div className={styles.mini_info}>
        {data.allMarkdownRemark.group.map(( edge )=>(
            <Link to={`/tag/${_.kebabCase(edge.fieldValue)}/`}>
                <div className={styles.mini_info_item_box}><div class={styles.logo}><img src={tagLogo} alt="タグアイコン" width="20px" height="20px" /></div>{edge.fieldValue}({edge.totalCount})</div>
                
            </Link>
         ))}
         </div>
        </div>
        
    </tag>
  );
};

export default Tag ;