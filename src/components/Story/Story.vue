<template>
  <div id='story'>
    <div class="container">
      <router-link :to="{ path: 'home' }">Home</router-link>
      <br>
      Story.vue!
    </div>
  </div>
</template>

<script>
  export default {
    name: 'story',
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
