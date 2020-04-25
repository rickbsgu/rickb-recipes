// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const fs = require('fs')

module.exports = function (api) {
  api.loadSource((actions) => {
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
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}
