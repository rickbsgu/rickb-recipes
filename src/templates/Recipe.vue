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
          <div class="pl-2 pr-4 py-2 mb-4 border-2 border-gray-500
                      text-xl bg-yellow-200">
            <div class="table">
              <div class="table-row">
                <div class="table-cell px-0" style="width:10%"><h4 class="text-right">Date:</h4></div>
                <div class="table-cell px-2 text-base text-left" style="width:20%">{{$page.recipe.date}}</div>
                <div class="table-cell" style="width:20%"/>
                <div class="table-cell px-0" style="width:10%"><h4 class="text-right">Source:</h4></div>
                <div class="table-cell px-2 text-base text-left" style="width:40%">{{$page.recipe.source}}</div>
              </div>
              <div class="table-row">
                <div class="table-cell px-0" style="width:10%"><h4 class="text-right">By:</h4></div>
                <div class="table-cell px-2 text-base text-left" style="width:20%">{{$page.recipe.author}}</div>
                <div class="table-cell" style="width:20%"/>
                <div class="table-cell px-0" style="width:10%"><h4 class="text-right">Serves:</h4></div>
                <div class="table-cell px-2 text-base text-left" style="width:40%">{{$page.recipe.serves}}</div>
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
  }
}
</page-query>

<style>
  .recipe-content h3 {}
  .recipe-content h4 { @apply mt-4 italic text-xl; }


  .recipe-content dt { @apply italic; }
  .recipe-content dd { @apply ml-6;}
  .recipe-content dd { @apply mb-4; }

  .recipe-content ul, ol { @apply ml-4 my-4; }
  .recipe-content ul li { @apply list-disc; }
  .recipe-content ol li { @apply list-decimal; }
  .recipe-content ul li + li { @apply mt-0; }
  .recipe-content ol li + li,
  .recipe-content ol + ul li + li{ @apply mt-2; }
  .recipe-content ol + ul { @apply ml-8 }

  .recipe-subctnr { background-color: rgba(255,255,255, .85)}
</style>

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