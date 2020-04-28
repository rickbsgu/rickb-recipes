<template>
  <Layout>
    <div text-4xl pt-10>Recipes from: <span class="capitalize">{{ $context.categoryName }}</span> </div>
    <li v-for="(recipe, ix) in recipesForCategory" :key="ix">
      <g-link :to="recipe.path">
        {{recipe.title}}
      </g-link>
    </li>
  </Layout>
</template>

<page-query>
query {
  recipes:allRecipe {
    edges {
      node {
        title
        path
        category
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
          recipeNodes.push({
            title: edge.node.title,
            path: edge.node.path
          })

      return recipeNodes
    }
  }
}
</script>