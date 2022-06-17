<template>
  <Layout>
    <div class="flex w-full justify-center">
      <div class="w-8/12">
        <div class="text-2xl py-8 text-center">
          <label class="mr-8" for="search-input">Input search term:</label>
          <input
            id="search"
            name="search-input"
            v-model="searchTerm"
            class="input"
            type="text"
            placeholder="Search">
        </div>
        <div>
            <RecipeItem 
               v-for="(recipe, ix) in searchResults"
              :key="ix" :recipe="recipe" />
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query {
  recipes:allRecipe {
    edges {
      node {
        path
        image
        title
        description
      }
    }
  }
}
</page-query>

<script>
import RecipeItem from '@/components/RecipeItem'
export default {
  metaInfo() { 
    return {
      title: 'Search',
      meta: [
        { name: 'description', content: 'Search for recipes'}
      ]
    }
  },
  data: () => ({
    searchTerm: ''
  }),
  components: { RecipeItem },
  computed: {
    searchResults () {
      let recipes = []
      if (process.isClient) {
        const searchTerm = this.searchTerm
        if (searchTerm.length > 2) {
          let results = this.$search.search({ query: searchTerm, limit: 10 })
          recipes = results.filter((result)=> result.node.path.indexOf('category') === -1).map((result) => result.node)
        } else {
          recipes = this.$page.recipes.edges.map(edge => edge.node)
        }
      }

      return recipes.sort((r1, r2) =>  r1.title < r2.title? -1 :
                                       r2.title > r2.title? 1 :
                                       0
                         )
    }
  }
}
</script>