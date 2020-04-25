<template>
  <div class="container mx-auto px-4 pt-10 h-screen text-gray-600">
    <header class="flex justify-between items-center border-b-2 border-green-600">
      <div class="font-display text-green-700 font-hairline text-6xl tracking-wider">Rickb Recipes</div>
      <nav>
        <g-link class="px-4 text-xl hover:text-blue-600" to="/">Home</g-link>
        <g-link class="px-4 text-xl hover:text-blue-600" to="/about/">About</g-link>
      </nav>
    </header>
    <slot/>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

