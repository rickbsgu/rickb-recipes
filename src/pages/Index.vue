<template>
  <Layout>
    <div class="resizeable-element flex justify-center items-center">
        <div class="font-display tracking-widest font-light absolute top-0 mt-40 w-9/12 flex justify-around
                    text-2xl italic">
          <g-link :to="'#'">Italian</g-link>
          <g-link :to="'#'">French</g-link>
          <g-link :to="'#'">Moroccan</g-link>
          <g-link :to="'#'">Breakfast</g-link>
        </div>
      <div>
          <div class="grid grid-cols-4 shadow-xl">
          <img v-for="(edge, ix) of $page.thumbs.edges" :key="ix"
               :src="edge.node.path" />
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
import ResizeMixin from '@/mixins/ResizeMixin.vue'
export default {
  metaInfo: {
    title: 'Welcome'
  },
  mixins: [ResizeMixin]
}
</script>

