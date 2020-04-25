<template>
  <Layout>
    <div class="flex justify-center items-center"
        ref="recipesCtnr">
      <div>
        <div class="grid grid-cols-4 shadow-xl">
          <img v-for="(pic, ix) of thumbs" :key="ix" :src="pic" />
        </div>
        <div class="w-full text-right text-3xl italic pt-1">
          <g-link class="text-green-700 hover:text-blue-600" :to="'#'">Let's Cook &mdash;></g-link>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Welcome'
  },
  data: () => ({
    thumbs: [
      "/images/3-Pepper Quiche_t.png",
      "/images/Camp Potatoes on Lake Powell_t.png",
      "/images/Eggs Benedict_t.png",
      "/images/Gallette_t.png" ,
      "/images/Hamburger and Onion on Dome Grill_t.png",
      "/images/Pancakes on Sailboat_t.png",
      "/images/Sausage and Peppers_t.png",
      "/images/Shrimp in Lime and Garlic_t.png"
    ]
  }),
  created() {
    window.addEventListener('resize', this.onWinResized)
  },
  mounted() {
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

