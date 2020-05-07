<template>
  <div class="flex border-2 border-gray-500 mt-4 rounded-r-xl">
  <img :src="makeImagePathName(recipe.image, 120)"/>
  <div class="pl-4 py-2 pr-4 text-2xl bg-yellow-100 rounded-r-xl w-full">
    <div> 
      <g-link :to="recipe.path">
        {{recipe.title}}
      </g-link>
    </div>
    <p class="sm:text-sm">{{recipe.description}}</p>
  </div>
  </div>
</template>

<script>
import GeneralImage from '@/mixins/GeneralImage'

export default {
  name: 'RecipeItem',
  props: {
    recipe: {
      type: Object,
      required: true
    }
  },
  mixins: [GeneralImage]
}
</script>