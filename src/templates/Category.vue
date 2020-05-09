<template>
  <Layout>
    <div class="flex justify-center pb-8">
      <div class="w-8/12 sm:w-full">
        <div>
          <div class="font-thin italic text-6xl pt-2 text-center text-green-600 capitalize
                      sm:text-4xl">{{ $context.categoryName }}
            <sub v-if="!excludedCategory($context.categoryName)" class="font-normal text-gray-600 text-3xl -ml-4 sm:text-2xl">Recipes</sub>
          </div>
        </div>
        <div class="px-8 sm:px-0">
          <div class="border-4 bg-yellow-100 border-gray-500 py-4 px-8 rounded-xl mt-8
                      sm:rounded-none sm:border-l-0 sm:border-r-0"
              v-html="$context.categoryContent">
          </div>
          <div class="flex justify-center"> <!-- separator -->
            <div class="bg-gray-500 mt-8 mb-4 w-1/2" style="min-height:2px"/>
          </div>
          <div class="sm:px-4"
            v-for="(recipe, ix) in recipesForCategory" :key="ix">
              <RecipeItem :recipe="recipe"/>
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
import GeneralImage from '@/mixins/GeneralImage'
import CategoryExclusions from '@/mixins/CategoryExclusions'
import RecipeItem from '@/components/RecipeItem'

export default {
  metaInfo() {
    return {
      title: this.$context.categoryName.charAt(0).toUpperCase() +
             this.$context.categoryName.slice(1),
      meta: [
        { name: 'description',
          content: 'A list of ' + this.$context.categoryName + ' recipes'
        }
      ]
    }
  },
  components: { RecipeItem },
  mixins: [GeneralImage, CategoryExclusions],
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