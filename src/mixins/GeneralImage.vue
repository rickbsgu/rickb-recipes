<script>
export default {
  name: "GeneralImage",
  data: ()=>({
    GeneralImage_imageNames: null
  }),
  created() {
    this.GeneralImage_imageNames = new Set([
      "Whats in the Fridge"
    ])
  },
  methods: {
    isGeneralImage(imgName) {
      return this.GeneralImage_imageNames.has(imgName)
    },
    makeImagePathName(imageName, res) {
      let retURL = 'https://res.cloudinary.com/rickbsgu/image/upload/'

      if (!imageName)
        imageName = this.generalImageName

      if (res)
        retURL += 'c_scale,w_' + res + ',h_' + res + '/'

      retURL += imageName

      return retURL
    },
  },
  computed: {
    generalImageName: function() {
      return Array.from(this.GeneralImage_imageNames)[0]
    }
  }
}
</script>