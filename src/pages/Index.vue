<template>
  <Layout>
    <div class="flex justify-center items-center"
        ref="recipesCtnr">
      <div>
        <div class="grid grid-cols-4 shadow-xl">
          <img v-for="(edge, ix) of $page.thumbs.edges" :key="ix"
               :src="edge.node.path" />
        </div>
        <div class="w-full text-right text-3xl italic pt-1">
          <g-link class="text-green-700 hover:text-blue-600" :to="'#'">Let's Cook &mdash;></g-link>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query {
  thumbs:allImages(filter:{type: {eq: "thumb"}}) {
    edges {
      node {
        name
        path
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Welcome'
  },
  mounted() {
    window.addEventListener('resize', this.onWinResized)
    this.$nextTick(this.onWinResized)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onWinResized)
  },
  methods: {
    onWinResized(evt) {
      this.$refs.recipesCtnr.style.maxHeight = 
      this.$refs.recipesCtnr.style.minHeight =
        (window.innerHeight - this.$refs.recipesCtnr.offsetTop) + 'px'
    }
  }
}
</script>

