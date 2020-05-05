<script>
export default {
  name: "CategoryExclusions",
  data: ()=>({
    CATEGORY_EXCLUSIONS: new Set([
      "tips"
    ])
  }),
  methods: {
    excludedCategory(name) {
      return this.CATEGORY_EXCLUSIONS.has(name)
    } 
  }
}
</script>