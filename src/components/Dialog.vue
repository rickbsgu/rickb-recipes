<template>
    <div class="dialog fixed top-0 left-0 z-10 w-full h-full flex
               justify-center items-center">
      <div class="w-1/3">
        <div class="rounded-t-xl bg-green-800 opacity-100 py-2 text-white px-4">
            <h1 class="font-display font-light
                    text-center text-3xl tracking-widest">
              {{title}}
            </h1>
        </div>
        <div class="bg-gray-200 py-4 px-8 rounded-b-xl">
          <div v-html="msg" />
          <div class="text-right pt-4">
            <button class="bg-green-600 text-white px-6 py-1 rounded-xl
                           hover:bg-green-500 leading-tight"
                    @click="closeDlg">Ok</button>
          </div>
        </div>
      </div>
    </div>
</template>

<style>
  .dialog { background: rgba(0, 0, 0, 0.8); }
</style>

<script>
  export default {
    name: "Dialog",
    props: {
      title: {
        type: String,
        required: true
      },
      msg: {
        type: String,
        required: true
      }
    },
    methods: {
      closeDlg() {
        this.$emit('dialogClose')
      }
    }
  }
</script>