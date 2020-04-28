<template>
  <Layout>
    <div class="recipe-ctnr min-h-full w-full pl-40 py-40
                bg-no-repeat bg-repeat-y bg-contain"
         :style="backgroundImageStyle"
         @click="showRecipe = !showRecipe">
      <div v-show="showRecipe">
      <div class="rounded-t-xl font-display font-light bg-green-800
                  text-center text-3xl text-white tracking-widest
                  opacity-100 w-8/12 py-2">
          {{$page.recipe.title}}
      </div>
      <div class="recipe-subctnr w-8/12 px-12
                  rounded-b-xl text-gray-800 border-2 border-gray-600
                  border-t-0 text-lg text-justify"
        @click.capture.stop="(evt)=>{}">
        <div class="pt-4">
          <div class="flex justify-between px-8 py-2 mb-4 border-2 border-gray-500
                      text-xl bg-yellow-200">
            <div class="table">
              <div class="table-row">
                <div class="table-cell px-1"><h4 class="text-right">Date:</h4></div>
                <div class="table-cell px-1">{{$page.recipe.date}}</div>
              </div>
              <div class="table-row">
                <div class="table-cell px-1"><h4 class="text-right">By:</h4></div>
                <div class="table-cell px-1">{{$page.recipe.author}}</div>
              </div>
            </div>
            <div class="table">
              <div class="table-row">
                <div class="table-cell px-1"><h4 class="text-right">Source:</h4></div>
                <div class="table-cell px-1">{{$page.recipe.source}}</div>
              </div>
              <div class="table-row">
                <div class="table-cell px-1"><h4 class="text-right">Serves:</h4></div>
                <div class="table-cell px-1">{{$page.recipe.serves}}</div>
              </div>
            </div>
          </div>
          <div class="recipe-content pl-4" v-html="$page.recipe.content">
          </div>
        </div>
      </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Recipe ($path: String!) {
  recipe: recipe (path: $path) {
    title
    date (format: "D-MMM-YYYY")
    author
    source
    image
    serves
    content
    description
  }
}
</page-query>

<script>
export default {
  data: ()=> ({
    showRecipe: true
  }),
  computed: {
    backgroundImageStyle: function() {
      return 'background-image: url("/images/' + this.$page.recipe.image + '")'
    }
  }
}
</script>