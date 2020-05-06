<script>
export default {
  name: "GeneralImage",
  data: ()=>({
    GeneralImage_imageNames: null
  }),
  created() {
    this.GeneralImage_imageNames = new Set([
      "What's in the Fridge"
    ])
  },
  methods: {
    isGeneralImage(imgName) {
      return this.GeneralImage_imageNames.has(imgName)
    },
    getImageName(imageName) {
      return !imageName? this.generalImageName : imageName
    }
  },
  computed: {
    generalImageName: function() {
      return '/images/' + Array.from(this.GeneralImage_imageNames)[0] + '.png'
    }
  }
}
</script>