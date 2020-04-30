<template>
  <Layout>
    <div>
      <div class="font-thin italic text-6xl pt-2 text-center text-green-600 capitalize">{{ $context.categoryName }}
      <sub class="font-normal text-gray-600 text-3xl -ml-4">Recipes</sub></div>
    </div>
    <div class="px-8">
    <div class="border-4 bg-yellow-100 border-gray-500 py-4 px-8 rounded-xl my-8">
      <p>I used to be a devotee of package sauces.  They were easy &ndash; just peel open a package, dump it into a pan, add some water or milk, heat and stir.</p>
      <p>This was before I learned how to make real hollandaise, with real egg yolks and lemon juice.</p>
      <p>It was a transformative experience.  Looking at the package ingredients, there was no eggs or lemon juice to be found.  Same thing with the alfredo packets we used to crave &ndash; no cream, no parmesan, none of that.</p>
    </div>
    <div
      class="flex border border-gray-500 border-2 rounded-r-lg"
      v-for="(recipe, ix) in recipesForCategory" :key="ix">
      <img style="height:120px;width:120px" :src="'/images/' + recipe.image"/>
      <div class="pl-4 py-2 text-2xl">
        <div> 
          <g-link :to="recipe.path">
          {{recipe.title}}
          </g-link>
        </div>
      <p>{{recipe.description}}</p>
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