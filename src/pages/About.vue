<template>
  <Layout>
    <div class="resizeable-element flex justify-center items-center">
      <div class="w-10/12">
        <h2>Hello</h2>
        <p>
        This is a collection of recipes reflecting some 50+ years of personal cooking in some form.  Few are original, most are passed on from other sources, likely with a few tweaks on my part to personalize.  I try to credit the sources where applicable.</p>
        <p>
        The goal, here, is to simply make them available in a centralized place that I can access from anywhere.</p>
        <p>
        Most of these recipes are for two people &ndash; the bulk of my cooking is for myself and my wife.  In truth, I have a hard time cooking in quantity.  But, I can do pretty well for the two of us.</p>
        <p>
        If you find these interesting, terrific! Feel free to modify and copy them to your own purposes.</p>
        <p>
        Cheers and <em>Buon Appetito</em> (from my southern Italian heritage).</p>
        <p>
        rickb</p>
      </div>
    </div>
  </Layout>
</template>

<style scoped>
</style>>
</style>

<script>
import ResizeMixin from '@/mixins/ResizeMixin'
export default {
  metaInfo: {
    title: 'About us'
  },
  mixins: [ResizeMixin]
}
</script>
