import React from "react"
import {Link, useStaticQuery, graphql } from 'gatsby';
import {tag}  from './styles/tag.module.css'

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
        
        <div className={tag}>
        <h1>すべてのタグ</h1>
        {data.allMarkdownRemark.group.map(( edge )=>(
            <ul >
            <li><Link to={`/tag/${_.kebabCase(edge.fieldValue)}/`}>{edge.fieldValue}({edge.totalCount})</Link></li>
            </ul>
                
            
         ))}
         </div>
    </tag>
  );
};

export default Tag ;