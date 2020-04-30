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
          <g-image width="300" v-for="(imageName, ix) of gridImages" :key="ix"
               :src="'/images/' + imageName + '.png'"
               v-tooltip="{content:getTooltip(imageName),
                           placement:'bottom', offset:'-50%'}"
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
}
</page-query>

<script>
import ResizeMixin from '@/mixins/ResizeMixin.vue'
export default {
  metaInfo: {
    title: 'Welcome'
  },
  mixins: [ResizeMixin],
  methods: {
    getTooltip(str) {
      return `<div class="bg-yellow-200 text-sm p-1 border-gray-600 border">${str}</div>`
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

