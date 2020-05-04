<template>
  <Layout>
    <Dialog v-if="showDlg" @dialogClose="showDlg = false" :title="dlgTitle" :msg="dlgMsg" />
    <div class="relative" ref="homeCtnr">
      <div class="tracking-widest w-full font-normal absolute top-0 py-4 w-9/12 flex justify-around
                  text-2xl italic" ref="navBlock">
        <g-link class="block-inline capitalize" v-for="edge of $page.categories.edges" :key="edge.node.name"
                :to="'/category/' + edge.node.name">
          {{edge.node.name}}
        </g-link>
      </div>
      <div class="absolute w-full" ref="imgBlockCtnr">
        <div class="absolute grid grid-cols-4 shadow-xl" ref="imgBlock">
          <g-image v-for="(imageName, ix) of gridImages" :key="ix"
               :src="'/images/' + imageName + '.png'"
               v-tooltip="{content:getTooltip(imageName),
                           placement:'bottom', offset:'-50%'}"
            @click="gotoRecipeforImage(imageName)"
          />
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query {
  images:allImages {
    edges {
      node {
        name
        path
      }
    }
  }
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
export default {
  metaInfo: {
    title: 'Welcome'
  },
  data: () => ({
    dlgTitle: '',
    dlgMsg: '',
    showDlg: false
  }),
  components: { Dialog },
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
    gotoRecipeforImage(imageName) {
      let imageFull = imageName + '.png'
      for (let edge of this.$page.recipes.edges) {
        if (edge.node.image === imageFull) {
          this.$router.push(edge.node.path)
          return
        }
      }

      this.showDialog("Oops...",
           `<p>Sorry, no recipe yet for <em>${imageName}</em>.</p>
            <p>Please come back later....</p>`)
    },
    showDialog(title, message) {
      this.dlgTitle = title
      this.dlgMsg = message
      this.showDlg = true
    },
    windowResized() {
      const IMG_ASPECT = 2
      let py = 40
      let imgBlockCtnr = this.$refs.imgBlockCtnr,
          navBlock = this.$refs.navBlock,
          imgBlock = this.$refs.imgBlock,
          homeCtnr = this.$refs.homeCtnr

      let navBlockRect = navBlock.getBoundingClientRect()

      let availableHeight = window.innerHeight - navBlockRect.bottom,
          availableWidth = navBlockRect.width
      let imgBlockHeight, imgBlockWidth, imgBlockTopPos

      if (availableWidth / availableHeight > IMG_ASPECT) {
        imgBlockHeight = availableHeight - py
        imgBlockWidth = imgBlockHeight * IMG_ASPECT
      } else {
        imgBlockWidth = availableWidth
        imgBlockHeight = imgBlockWidth / IMG_ASPECT
        py = (availableHeight - imgBlockHeight) / 2
      }

      imgBlockTopPos = availableHeight - imgBlockHeight - py
      //
      // geom values calculated, now set geom
      //
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
      return [
        "3-Pepper Quiche",
        "Carbonara",
        "Eggs Benedict",
        "Sausage and Peppers",
        "Gallette",
        "Shrimp in Lime and Garlic",
        "Hamburger and Onion on Dome Grill",
        "Camp Potatoes on Lake Powell"
      ]
    }
  }
}
</script>

