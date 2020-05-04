<template>
  <div class="container mx-auto px-4 pt-4 h-screen text-gray-600">
    <header class="flex justify-between items-center border-b-2 border-green-600">
      <div class="font-display text-green-700 font-hairline text-6xl tracking-wider
                  sm:text-4xl">
        Rickb Recipes
      </div>
      <nav>
        <g-link class="px-4 text-xl" to="/">Home</g-link>
        <g-link class="px-4 text-xl" to="/about/">About</g-link>
      </nav>
    </header>
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

