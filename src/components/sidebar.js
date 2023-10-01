//サイドバーの実装
import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import * as styles from './styles/sidebar.module.css';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import Tag  from './alltag';
const _ = require("lodash")

const Sidebar = () => {
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
                        gatsbyImageData(width: 100, height: 100)
                    }
                    }
                }
                }
            }
            }
        }
    `
  );
  return (
    <sidebar>
        <h1 className={styles.listTitle}>最新記事</h1>
        <div className={styles.box}>{/* 投稿したページをリスト化して表示する部分s */}
        {data.allMarkdownRemark.edges.map((edge) =>(
            <div key={edge.node.id} className = {styles.article}>
                <Link to={`/${edge.node.frontmatter.slug}`} className={styles.frame}>
                    {/* mdファイルで指定したhero_imageの画像を表示 */}
                    <div　><GatsbyImage image={getImage(edge.node.frontmatter.hero_image)} alt="Hero Image" /></div>
                </Link>
                <div className={styles.right}>
                    <p className={styles.title}>
                        {/* mdファイルでslugに指定したURLに遷移 */}
                        <Link to={`/${edge.node.frontmatter.slug}`}>
                        {edge.node.frontmatter.title}
                        </Link>
                    </p>
                </div>
            </div>

        ))}</div>
        
        
        <Tag/>

    </sidebar>
   );
};

export default Sidebar;