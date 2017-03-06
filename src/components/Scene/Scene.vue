<template>
  <div id='scene'>
    <div class="container">
      <router-link :to="{ path: 'home' }">Home</router-link>
      <br>
      Scene.vue!
    </div>
  </div>
</template>

<script>
  export default {
    name: 'scene',
    data() {
      return {}
    },
    props: [],
    mounted() {},
    methods: {}
  }
</script>

<style scoped>

</style>
