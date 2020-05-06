<template>
  <div class="container mx-auto px-4 pt-4 h-screen text-gray-600">
    <header class="flex justify-between items-center border-b-2 border-green-600">
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
        <g-link class="px-4 text-xl" to="/category/tips">Tips</g-link>
        <g-link class="px-4 text-xl" to="/">Home</g-link>
        <g-link class="px-4 text-xl" to="/about/">About</g-link>
      </nav>
    </header>
    <div v-if="showDropDown" class="fixed z-10 right-0 bg-green-600 w-2/12 text-right
                                    px-4 pt-2 pb-4 mr-4 -mt-2">
      <g-link class="block text-yellow-200 text-xl" to="/category/tips">Tips</g-link>
      <g-link class="block text-yellow-200 text-xl" to="/">Home</g-link>
      <g-link class="block mt-2 text-yellow-200 text-xl" to="/about/">About</g-link>
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
  })
}
</script>