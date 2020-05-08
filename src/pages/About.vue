<template>
  <Layout>
    <div class="flex justify-center pb-8">
      <div class="w-10/12">
        <div class="w-full flex justify-center">
          <div class="w-5/12 mt-8 mb-4 p-2">
            <g-image class="shadow" 
              :src="makeImagePathName('In Paris with Bagette and Wine')" />
            <p class="text-center text-sm pt-1">Your's truly, returning from market in Paris with the necessities</p>
          </div>
        </div>
        <h2>Hello...</h2>
        <p>
        This is a collection of recipes reflecting some 50+ years of personal cooking in some form.  Few are original, most are passed on from other sources, likely with a few tweaks on my part to personalize.  I try to credit the sources where applicable.</p>
        <p>
        The goal, here, is to simply make them available in a centralized place that I can access from anywhere.</p>
        <p>
        Most of these recipes are for two people &ndash; the bulk of my cooking is for myself and my spouse.  In truth, I have a hard time cooking in quantity.  But, I can do pretty well for the two of us.</p>
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

<script>
import GeneralImage from '@/mixins/GeneralImage'
export default {
  metaInfo() { return {
      title: 'About',
      meta: [
        { name: 'description', content: 'A personal collection of recipes' }
      ]
    }
  },
  mixins: [GeneralImage]
}
</script>
