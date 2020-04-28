<template>
  <Layout>
    <div class="resizeable-element flex justify-center items-center">
        <div class="tracking-widest font-normal absolute top-0 mt-40 w-9/12 flex justify-around
                    text-2xl italic">
          <g-link class="block-inline capitalize" v-for="edge of $page.categories.edges" :key="edge.node.name"
                  :to="'/category/' + edge.node.name">
            {{edge.node.name}}
          </g-link>
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
  categories:allCategory {
    edges {
      node {
        name
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

