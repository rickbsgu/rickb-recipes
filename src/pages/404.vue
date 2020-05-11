<template>
  <Layout>
    <div class="flex flex-col justify-center items-center">
      <div class="text-4xl text-green-600 mt-10">Whoops!  That page doesn't exist...</div>
      <img class="my-8 shadow-2xl" :src="makeImagePathName('/v1589232439/KitchenDisaster.png', 500)" />
      <div class="text-3xl text-gray-700">Back to <g-link to="/">Home</g-link></div>
    </div>
  </Layout>
</template>

<script>
import GeneralImage from '@/mixins/GeneralImage'

export default {
  mixins: [ GeneralImage ]
}
</script>