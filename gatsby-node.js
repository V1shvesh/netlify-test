exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const results = await graphql(`
    query CreatePages {
      allContentfulBlogPage {
        nodes {
          slug
        }
      }
    }
  `)

  results.data.allContentfulBlogPage.nodes.forEach(blogPage => {

    createPage({
      path: `/${blogPage.slug}/`,
      component: require.resolve("./src/templates/BlogTemplate/index.tsx"),
      context: {
        slug: blogPage.slug,
      },
    })
  })
}
