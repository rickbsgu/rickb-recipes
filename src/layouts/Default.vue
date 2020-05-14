<template>
  <div class="container mx-auto px-4 pt-4 h-screen text-gray-600 sm:px-0">
    <header class="flex justify-between items-center border-b-2 border-green-600 sm:px-4">
      <div class="font-display text-green-700 font-hairline text-6xl tracking-wider
                  lg:text-5xl sm:text-4xl">
        Rickb Recipes
      </div>
      <div class="hidden sm:block">
        <button @click="showDropDown = !showDropDown" type="button"
          class="block text-green-600 hover:text-green-500 focus:text-green-500
                 focus:outline-none">
          <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path v-if="showDropDown" fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
            <path v-if="!showDropDown" fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
          </svg>
        </button>
      </div>
      <nav class="sm:hidden">
        <g-link class="px-4" to="/search">
          <svg class="inline h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path fill-rule="evenodd" d="M 9 2 C 5.1458514 2 2 5.1458514 2 9 C 2 12.854149 5.1458514 16 9 16 C 10.747998 16 12.345009 15.348024 13.574219 14.28125 L 14 14.707031 L 14 16 L 20 22 L 22 20 L 16 14 L 14.707031 14 L 14.28125 13.574219 C 15.348024 12.345009 16 10.747998 16 9 C 16 5.1458514 12.854149 2 9 2 z M 9 4 C 11.773268 4 14 6.2267316 14 9 C 14 11.773268 11.773268 14 9 14 C 6.2267316 14 4 11.773268 4 9 C 4 6.2267316 6.2267316 4 9 4 z" />
          </svg>
        </g-link>
        <g-link class="px-4 text-xl" to="/category/tips">Tips</g-link>
        <g-link class="px-4 text-xl" to="/">Home</g-link>
        <g-link class="px-4 text-xl" to="/about/">About</g-link>
      </nav>
    </header>
    <div v-if="showDropDown" class="fixed z-10 right-0 bg-green-600 w-3/12 text-right
                                    px-4 pt-2 pb-4 mr-4 -mt-2">

      <g-link class="block mt-2 text-yellow-200 text-xl" to="/category/tips">Tips</g-link>
      <g-link class="block mt-2 text-yellow-200 text-xl" to="/">Home</g-link>
      <g-link class="block mt-2 text-yellow-200 text-xl" to="/search">Search</g-link>
      <g-link class="block mt-4 pt-2 text-yellow-200 text-xl
                     border-t border-yellow-200"
              to="/about/">About</g-link>
    </div>
    <slot/>
  </div>
</template>

<style>
  body { background-color: cornsilk;}
</style>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  data: ()=>({
    showDropDown: false
  }),
  metaInfo() { 
    return {
      link: [
        { rel: 'canonical', href: "https://recipes.rickbsgu.com" + this.$route.fullPath }
      ]
    } 
  }
}
</script>