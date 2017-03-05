<template>
  <div id='character'>
    <div class="container">
      <router-link :to="{ path: 'home' }">Home</router-link>
      <br>
      Character.vue!
    </div>
  </div>
</template>

<script>
  export default {
    name: 'character',
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
