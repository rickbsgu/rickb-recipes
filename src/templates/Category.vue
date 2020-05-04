<template>
  <Layout>
    <div class="flex justify-center">
      <div class="w-8/12 sm:w-full">
        <div>
          <div class="font-thin italic text-6xl pt-2 text-center text-green-600 capitalize
                      sm:text-4xl">{{ $context.categoryName }}
          <sub class="font-normal text-gray-600 text-3xl -ml-4 sm:text-2xl">Recipes</sub></div>
        </div>
        <div class="px-8 sm:px-0">
          <div class="border-4 bg-yellow-100 border-gray-500 py-4 px-8 rounded-xl mt-8"
              v-html="$context.categoryContent">
          </div>
          <div class="flex justify-center"> <!-- separator -->
            <div class="bg-gray-500 mt-8 mb-4 w-1/2" style="min-height:2px"/>
          </div>
          <div
            class="flex border-2 border-gray-500 mt-4 rounded-r-xlbreakfasts/eggs-benedict/"
            v-for="(recipe, ix) in recipesForCategory" :key="ix">
            <g-image style="height:120px;width:120px" :src="'/images/' + recipe.image"/>
            <div class="pl-4 py-2 text-2xl bg-yellow-100 rounded-r-xl w-full">
              <div> 
                <g-link :to="recipe.path">
                  {{recipe.title}}
                </g-link>
              </div>
            <p class="sm:text-sm">{{recipe.description}}</p>
            </div>
          </div>
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
        title
        path
        image
        category
        description
      }
    }
  }
}
</page-query>

<script>
export default {
  computed: {
    recipesForCategory: function() {
      let recipeNodes = []
      for (const edge of this.$page.recipes.edges)
        if (edge.node.category === this.$context.categoryName)
          recipeNodes.push(edge.node)

      return recipeNodes
    }
  }
}
</script>