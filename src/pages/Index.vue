<template>
  <Layout>
    <Dialog v-if="showDlg" @dialogClose="showDlg = false" :title="dlgTitle" :msg="dlgMsg" />
    <div class="relative" ref="homeCtnr">
      <div class="tracking-widest w-full font-normal absolute top-0 py-4
                  flex justify-center flex-wrap
                  text-2xl lg:text-xl italic sm:text-lg sm:leading-loose" ref="navBlock">
        <div v-for="category of categories" :key="category"
          class="px-8">
          <g-link class="capitalize"
                :to="'/category/' + category">
          {{category.replace(/ /g, '&nbsp;')}}
          </g-link>
        </div>
      </div>
      <div class="absolute w-full" ref="imgBlockCtnr">
        <div class="absolute grid grid-cols-4 shadow-xl sm:grid-cols-2" ref="imgBlock">
          <g-image v-for="(imageItem, ix) of gridImages" :key="ix"
               :src="imageItem.imagePath"
               v-tooltip="{content:getTooltip(imageItem.name),
                           placement:'bottom', offset:' w-9/12-50%'}"
            @click="gotoRecipe(imageItem.name, imageItem.recipePath)"
          />
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query {
  categories:allCategory {
    edges {
      node {
        name
      }
    }
  }
  recipes:allRecipe {
    edges {
      node {
        path
        image
      }
    }
  }
}
</page-query>

<script>
import Dialog from '@/components/Dialog'
import GeneralImage from '@/mixins/GeneralImage'
import CategoryExclusions from '@/mixins/CategoryExclusions'

export default {
  metaInfo: {
    title: 'Welcome'
  },
  data: () => ({
    dlgTitle: '',
    dlgMsg: '',
    showDlg: false,
    GRID_IMAGES: [
        "3-Pepper Quiche",
        "Carbonara",
        "Eggs Benedict",
        "Sausage and Peppers",
        "Gallette",
        "Shrimp in Lime and Garlic",
        "Hamburger and Onion on Dome Grill",
        "Camp Potatoes on Lake Powell",
        "Pressure Pot Chicken Soup",
        "Gluten Free Fiber Waffles",
        "Egg Poacher",
        "Blender Mayonnaise",
        "Aglio Olio + Crispy Italian Chicken"
    ]
  }),
  components: { Dialog },
  mixins: [GeneralImage, CategoryExclusions],
  mounted() {
    let _this = this
    this.$nextTick(()=>{
      _this.windowResized()
      window.addEventListener('resize', _this.windowResized)
    })
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.windowResized)
  },
  methods: {
    getTooltip(str) {
      return `<div class="bg-yellow-200 text-sm p-1 border-gray-600 border">${str}</div>`
    },
    showDialog(title, message) {
      this.dlgTitle = title
      this.dlgMsg = message
      this.showDlg = true
    },
    gotoRecipe(name, recipePath) {
      if (recipePath)
        this.$router.push(recipePath)

      else
        this.showDialog("Oops...",
           `<p>Sorry, no recipe yet for <em>${name}</em>.</p>
            <p>Please come back later....</p>`)
    },
    getRecipeForImagePath(imagePath) {
      let imageParts = imagePath.split('/')
      let baseImageName = imageParts[imageParts.length - 1]

      for (let edge of this.$page.recipes.edges)
        if (
            edge.node.image &&
            decodeURIComponent(edge.node.image).endsWith(baseImageName))
          return edge.node

      return null
    },
    makeGridImagePathName(imageName, res) {
      let fullName = '/v1588802620/' + imageName.replace(/ /g,'_') + '.png'
      let imagePathName = this.makeImagePathName(fullName, res)
      return imagePathName
    },
    windowResized() {
      const IMG_ASPECT = window.innerWidth < 640? 1 : 2
      let padY= window.innerWidth < 640? 16 : 40
      let imgBlockCtnr = this.$refs.imgBlockCtnr,
          navBlock = this.$refs.navBlock,
          imgBlock = this.$refs.imgBlock,
          homeCtnr = this.$refs.homeCtnr

      let navBlockRect = navBlock.getBoundingClientRect()

      let availableHeight = window.innerHeight - navBlockRect.bottom,
          availableWidth = navBlockRect.width
      let imgBlockHeight, imgBlockWidth, imgBlockTopPos

      if (availableWidth / availableHeight > IMG_ASPECT) {
        imgBlockHeight = availableHeight - padY
        imgBlockWidth = imgBlockHeight * IMG_ASPECT
      } else {
        imgBlockWidth = availableWidth
        imgBlockHeight = imgBlockWidth / IMG_ASPECT
        padY = (availableHeight - imgBlockHeight) / 2
      }

      imgBlockTopPos = availableHeight - imgBlockHeight - padY
      //
      // geom values calculated, now set geomavailableHeightmaxHeight = 
      homeCtnr.style.minHeight = homeCtnr.style.maxHeight = 
        (window.innerHeight - homeCtnr.offsetTop) + 'px'

      imgBlockCtnr.style.top = navBlockRect.height + 'px'
      imgBlockCtnr.style.minHeight = imgBlockCtnr.style.maxHeight =
        availableHeight + 'px'

      imgBlock.style.minWidth = imgBlock.style.maxWidth =
        imgBlockWidth

      imgBlock.style.top = imgBlockTopPos + 'px'
      imgBlock.style.maxWidth = imgBlock.style.minWidth =
        imgBlockWidth + 'px'
      imgBlock.style.maxHeight = imgBlock.style.minHeight =
        imgBlockHeight + 'px'
      imgBlock.style.left = (navBlockRect.width - imgBlockWidth) / 2 + 'px'
    }
  },
  computed: {
    gridImages: function() {
      let images = []
      if (process.isClient) {
                // so what we want here is a random set of images
                //

        let numImages = window.innerWidth < 640? 4 : 8

        let imageNameSet = new Set()
        let imageName, imageIX, imageNode

        while (images.length < numImages) {
          imageIX = Math.floor(Math.random() * this.GRID_IMAGES.length)
          imageName = this.GRID_IMAGES[imageIX]
          if (!imageNameSet.has(imageName)) {
            let gridImagePath = this.makeGridImagePathName(imageName, 350)
            let recipe = this.getRecipeForImagePath(gridImagePath)
            imageNameSet.add(imageName)
            images.push({
              name: imageName,
              imagePath: gridImagePath,
              recipePath: recipe? recipe.path : ''
            })
          }
        }
/*
        // save following until enough recipes with unique images
        // would still rather do this way, if possible
        //
        while (numImagesSet < numImages) {
                  // get a set of random recipes
                  //
          recipeIX = Math.floor(Math.random() * numRecipes)
          recipe = this.$page.recipes.edges[recipeIX].node
          imageName = recipe.image.split('.')[0]
          if (!imageNameSet.has(imageName)) {
            for (let imageEdge of this.$page.images.edges) {
              if (imageEdge.node.name === imageName) {
                imageNameSet.add(imageName)   // bookkeeping
                imageIX = imageIXArray[numImagesSet++]
                images[imageIX] = {
                  name: imageName,
                  recipePath: recipe.path,
                  imagePath:imageEdge.node.path 
                  }
                break;           
              }
            }
          }
        }
*/
      }

      return images
    },
    categories: function() {
      let categories = [], newCat

      for (let edge of this.$page.categories.edges) {
        if (!this.excludedCategory(edge.node.name))
          categories.push(edge.node.name)
      }

      return categories.sort((c1, c2)=> {
        return c1 === "other"? 1 : c2 === "other"? -1 : c1 === c2? 0 : c1 < c2? -1 : 1
      })
    }
  }
}
</script>