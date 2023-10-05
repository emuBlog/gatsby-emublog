const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const _ = require("lodash")

const categoryPath = path.resolve(`src/template/category.js`)
const tagPath = path.resolve(`src/template/tag.js`)
const topArticlepath = path.resolve(`src/template/topArticle.js`)
const categoryArticlepath = path.resolve(`src/template/categoryArticle.js`)
const tagArticlepath = path.resolve(`src/template/tagArticle.js`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

    const resultCategories = await graphql(`
      query {
          allMarkdownRemark {
            distinct(field: {frontmatter: {category: SELECT}})
          }
        }
    `)
    const resultTags = await graphql(`
      query {
          allMarkdownRemark {
            distinct(field: {frontmatter: {tags: SELECT}})
          }
        }
    `)
    const resultTopCategoryArticle = await graphql(`
      query {
        allMarkdownRemark {
          nodes {
            frontmatter {
              title
              category
              tags
              slug
              date
              hero_image {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
            id
            html
          }
        }
      }
    `)
    const resultTagsArticle = await graphql(`
      query {
        allMarkdownRemark(filter: {}) {
          group(field: {frontmatter: {tags: SELECT}}) {
            fieldValue
            nodes {
              frontmatter {
                title
                category
                tags
                slug
                date
                hero_image {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
              id
              html
            }
          }
        }
      }
    `)
    

  resultCategories.data.allMarkdownRemark.distinct.forEach((category) => {
    createPage({
      path: `/category/${_.kebabCase(category)}`,
      component: categoryPath,
      context: {
        category: category
      },
    })
  })

  resultTags .data.allMarkdownRemark.distinct.forEach((tag) => {
    createPage({
      path: `/tag/${_.kebabCase(tag)}`,
      component: tagPath,
      context: {
        tag: tag
      },
    })
  })

  resultTopCategoryArticle.data.allMarkdownRemark.nodes.forEach((node) => {
    createPage({
      path: `/${node.frontmatter.slug}`,
      component: topArticlepath,
      context: {
        id: node.id
      },
    })
  })

  resultTopCategoryArticle.data.allMarkdownRemark.nodes.forEach((node) => {
    createPage({
      path: `/category/${_.kebabCase(node.frontmatter.category)}/${node.frontmatter.slug}`,
      component: categoryArticlepath,
      context: {
        id: node.id
      },
    })
  })

  resultTagsArticle.data.allMarkdownRemark.group.forEach((group) => {
    const  tmp = group.fieldValue;
    group.nodes.forEach((node) => {
      createPage({
        path: `/tag/${_.kebabCase(tmp)}/${node.frontmatter.slug}`,
        component: tagArticlepath,
        context: {
          id: node.id
        },
      })
    })
  })

}


/**
 * @type {import('gatsby').GatsbyNode['onCreateNode']}
 */
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

/**
 * @type {import('gatsby').GatsbyNode['createSchemaCustomization']}
 */
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
      ogpImgPath: String
    }

    type Fields {
      slug: String
    }
  `)
}

