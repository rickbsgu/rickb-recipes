<script> 
  export default {
    data: () => ({
      resizeMixin_resizeItem: null
    }),
    mounted() {
      this.resizeMixin_resizeItem =
        document.getElementsByClassName('resizeable-element')[0]

      window.addEventListener('resize', this.resizeMixin_onWinResized)
      this.$nextTick(this.resizeMixin_onWinResized)
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.resizeMixin_onWinResized)
    },
    methods: {
      resizeMixin_onWinResized(evt) {
        this.resizeMixin_resizeItem.style.maxHeight = 
        this.resizeMixin_resizeItem.style.minHeight =
          (window.innerHeight - this.resizeMixin_resizeItem.offsetTop) + 'px'
      },

    }
  }
</script>