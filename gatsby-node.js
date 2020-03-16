/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions

  const oldPage = Object.assign({}, page)
  // Remove trailing slash unless page is /

  if (page.path == "/sdlc/") {
    page.path = "/SDLC"
    deletePage(oldPage)
    createPage(page)
  }

  if (page.path == "/app_security/") {
    page.path = "/app-security"
    deletePage(oldPage)
    createPage(page)
  }
}
