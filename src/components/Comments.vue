<template>
  <div id="hyvor-talk-view"></div>
</template>

<script>
  export default {
    name: 'Comments',
    created() {
      if (process.isClient) {
        window.HYVOR_TALK_WEBSITE = 611
        window.HYVOR_TALK_CONFIG = {
          url: this.url? window.location.href : false,
          id: this.id | false
        }
      }
    },
    metaInfo() { return {
      script: [,
        { src: "//talk.hyvor.com/web-api/embed",
          async: true}
      ]
    }},
    props: {
      id: {
        type: String,
        required: false,
        default: ''
      },
      url: {
        type: Boolean,
        required: false,
        default: false
      }
    }
  }
</script>
