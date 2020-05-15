<script>
export default {
  name: "GeneralImage",
  data: ()=>({
    GeneralImage_imageNames: [
      "/v1588802630/rickb-recipes/Whats_in_the_Fridge.png",
      "/v1589232445/rickb-recipes/Default_5.png",
      "/v1589232444/rickb-recipes/Default_2.png",
      "/v1589232443/rickb-recipes/Default_4.png",
      "/v1589232443/rickb-recipes/Default_6.png",
      "/v1589232442/rickb-recipes/Default_3.png"
    ]
  }),
  methods: {
    isGeneralImage(imgName) {
      return this.GeneralImage_imageNames.has(imgName)
    },
    makeImagePathName(imageName, res) {
      let retURL = 'https://res.cloudinary.com/rickbsgu/image/upload'

      if (!imageName) {
        imageName = this.generalImageName
      }

      if (res)
        retURL += '/c_scale,w_' + res + ',h_' + res

      retURL += imageName

      return retURL
    },
  },
  computed: {
    generalImageName: function() {
      let imageIX = Math.floor(Math.random() * this.GeneralImage_imageNames.length)
      return this.GeneralImage_imageNames[imageIX]
    }
  }
}
</script>