// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const fs = require('fs')

function makeCategoriesCollection(actions) {
  let recipes = actions.getCollection("Recipe")
  let categories = actions.addCollection("Category")
  let nodes = recipes.findNodes()
  let thisCategory

  for (let node of nodes) {
    thisCategory = node.fileInfo.path.split('/').slice(-2, -1)[0]
    if (node.fileInfo.name.startsWith('+')) {    
      console.log('Adding: ' + thisCategory)   
      categories.addNode({
        name: thisCategory,
        content: node.content,
        slug: thisCategory
      })

      recipes.removeNode(node.id)
    } else {
      recipes.removeNode(node.id)
      node.category = thisCategory
      recipes.addNode(node)
    }
  }
}

module.exports = function (api) {
  api.loadSource((actions) => {
    makeCategoriesCollection(actions)
    console.log('created collections')
  })

  api.createPages(async ({graphql, createPage }) => {
    console.log('in createPages')
    let edges
    try {
      const rsp = await graphql(
      `{
        allCategory {
          edges {
            node {
              id
              name
              content
              }
            }
          }
        }`
      )

      for (edge of rsp.data.allCategory.edges) {
        createPage({
          path: '/category/' + edge.node.name,
          component: './src/templates/Category.vue',
          context: {
            categoryName: edge.node.name,
            categoryContent: edge.node.content
          }
        })
      }

    } catch(err) {
      console.error('Error in createPages: ' + err)
    }
  })
}
