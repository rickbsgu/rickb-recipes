// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Rickb Recipes',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'recipes/**/*.md',
        typeName: 'Recipe'
      }
    },
    {
      use: 'gridsome-plugin-tailwindcss'
    },
    {
      use: 'gridsome-plugin-flexsearch',
      options: {
        collections: [
          {
            typeName: 'Recipe',
            indexName: 'Recipe',
            fields: ['title', 'path', 'image', 'description']
          }
        ],
        searchFields: ['category', 'title', 'content'],
    encode: "balance",
    tokenize: "strict",
    threshold: 0,
    resolution: 3,
    depth: 3
      }
    }
  ],
  templates: {
    Recipe: "/recipes/:category/:slug"
  },
  transformers: {
    remark: {
      plugins: [
      ]
    }
  }
}
