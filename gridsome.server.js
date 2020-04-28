// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const fs = require('fs')

function makeImagesCollection(actions) {
    let dir = fs.opendirSync(process.cwd() + '/static/images')
    let fd, fn, nameParts
    const imagesColl = actions.addCollection('images')
    while (!!(fd = dir.readSync())) {
      fn = fd.name
      nameParts = fn.split('_')
      imagesColl.addNode({
        name: nameParts[0],
        path: '/images/' + fn,
        type: nameParts[1][0] === 't'? 'thumb' : 'article'
      })
    }

    dir.close()
}

function makeCategoriesCollection(actions) {
  let recipes = actions.getCollection("Recipe")
  let nodes = recipes.findNodes()
  let categoryNames = new Set()
  for (node of nodes) {
    categoryNames.add(node.category.toLowerCase())
  }
  let categories = actions.addCollection("Category")
  for (let categoryName of categoryNames)
    categories.addNode({
      name: categoryName
    })
}

module.exports = function (api) {
  api.loadSource((actions) => {
    makeImagesCollection(actions)
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
            categoryName: edge.node.name
          }
        })
      }

    } catch(err) {
      console.error('Error in createPages: ' + err)
    }

  })
}
