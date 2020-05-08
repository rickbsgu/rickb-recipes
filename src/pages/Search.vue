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
          <template
            v-for="(recipe, ix) in searchResults">
            <RecipeItem :key="ix" :recipe="recipe" />
          </template>
        </div>
      </div>
    </div>
  </Layout>
</template>

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
          recipes = results.filter((result)=> result.path.indexOf('category') === -1)
        }
      }

      return recipes
    }
  }
}
</script>