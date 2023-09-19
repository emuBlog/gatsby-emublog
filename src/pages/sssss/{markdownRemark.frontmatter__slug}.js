import { graphql } from 'gatsby';
import * as React from 'react';
import Layout from '../../components/layout';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';

export default function BlogPostTemplate({ data: { markdownRemark } }) {
  const { frontmatter, html } = markdownRemark;
  const image = getImage(frontmatter.hero_image);
  return (
    <Layout>
      {/* <GatsbyImage image={image} alt="Hero Image" /> */}
      <h1 className='title'>{frontmatter.title}</h1>
      <div className='body' dangerouslySetInnerHTML={{ __html: html }} />
      <div className='postdate'>投稿日：{frontmatter.date}</div>
    </Layout>
  );
}
//date(formatString: "MMMM DD, YYYY")
export const query = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date
        title
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;