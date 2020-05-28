<template>
  <Layout>
    <div class="recipe-ctnr min-h-full w-full pl-40 py-20
                bg-no-repeat bg-repeat-y bg-contain md:pl-20 sm:pl-0 sm:pb-4 sm:pt-0"
         :style="backgroundImageStyle">
      <div>
      <div class="rounded-t-xl bg-green-800 opacity-100 w-8/12 py-2 text-white px-4
                  lg:w-10/12 sm:w-full sm:rounded-none">
          <h1 class="font-display font-light
                  text-center text-3xl tracking-widest">
            {{$page.recipe.title}}
          </h1>
      </div>
      <div class="recipe-subctnr w-8/12 px-12 pb-8
                  rounded-b-xl text-gray-800 border-2 border-gray-600
                  border-t-0 text-lg text-justify lg:w-10/12 sm:w-full
                  sm:text-gray-600"
        >
        <div class="flex justify-between text-sm pt-2 text-green-600">
          <div>
            Back to:
             <g-link :to="'/category/' + $page.recipe.category"
                     class="italic capitalize">{{$page.recipe.category}}
             </g-link>
          </div>
          <button class="block hover:underline focus:outline-none"
            @click="showingImage=true">
            Show Image
          </button>
        </div>
        <div class="pt-4">
          <div class="pl-2 pr-4 py-2 mb-4 border-2 border-gray-500
                      text-xl bg-yellow-200 sm:text-base">
            <div class="table">
              <div class="table-row">
                <div class="table-cell px-0" style="width:10%"><h4 class="text-right">Date:</h4></div>
                <div class="table-cell px-2 text-base text-left sm:text-sm" style="width:20%">{{date}}</div>
                <div class="table-cell" style="width:20%"/>
                <div class="table-cell px-0" style="width:10%"><h4 class="text-right">Source:</h4></div>
                <div class="table-cell px-2 text-base text-left sm:text-sm" style="width:40%" v-html="$page.recipe.source"></div>
              </div>
              <div class="table-row">
                <div class="table-cell px-0" style="width:10%"><h4 class="text-right">By:</h4></div>
                <div class="table-cell px-2 text-base text-left sm:text-sm" style="width:20%">{{$page.recipe.author}}</div>
                <div class="table-cell" style="width:20%"/>
                <div class="table-cell px-0" style="width:10%"><h4 class="text-right">Serves:</h4></div>
                <div class="table-cell px-2 text-base text-left sm:text-sm" style="width:40%">{{$page.recipe.serves}}</div>
              </div>
            </div>
          </div>
          <div class="recipe-content pl-4" v-html="$page.recipe.content + '<h3>Comments</h3>'">
          </div>
          <Comments :url="true"
                    :id="$page.recipe.slug"/>
        </div>
      </div>
      </div>
    </div>
    <div v-if="showingImage" class="overlay fixed top-0 left-0 w-full h-full flex items-center">
      <div class="mx-auto w-1/2 border-2 border-gray-400 bg-white text-xl sm:w-3/4">
        <g-image :src="makeImagePathName($page.recipe.image, 800)" />
        <div class="flex justify-between mx-4">
          <div>{{$page.recipe.title}}</div>
          <button class="text-green-600 hover:underline focus:outline-none"
                  @click="showingImage=false">close</button>
        </div>
      </div>
    </div>
    </Layout>
</template>

<page-query>
query Recipe ($path: String!) {
  recipe: recipe (path: $path) {
    slug
    title
    date
    author
    source
    image
    serves
    content
    category
    description
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

  .overlay { background-color: rgba(0, 0, 0, .75)}
</style>

<script>
import GeneralImage from '@/mixins/GeneralImage'
import Comments from '@/components/Comments'

export default {
  data: ()=> ({
    showingImage: false
  }),
  mixins: [GeneralImage],
  components: { Comments },
  metaInfo() { return {
      title: this.$page.recipe.title,
      meta: [
        { name: 'description', content: this.$page.recipe.description }
      ]
    }
  },
  computed: {
    backgroundImageStyle: function() {
      if (process.isClient && window.innerWidth >= 640)
        return 'background-image: url("' +
                this.makeImagePathName(this.$page.recipe.image) + '")'
      
      return ''
    },
    date: function() {
      let mdate = this.$moment(this.$page.recipe.date)
      return process.isClient && window.innerWidth < 640?
        mdate.format("MM/DD/YY") : mdate.format("DD-MMM-YYYY")
    }
  },
  methods: {
    showImage() {
      this.showingImage = true
    }
  }
}
</script>