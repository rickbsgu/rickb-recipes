<template>
  <Layout>
    <div class="resizeable-element flex justify-center items-center">
      <div>
        <div class="flex flex-wrap justify-center">

        </div>
        <div class="grid grid-cols-4 shadow-xl">
          <img v-for="(edge, ix) of $page.thumbs.edges" :key="ix"
               :src="edge.node.path" />
        </div>
        <div class="w-full text-right text-3xl italic pt-1">
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

