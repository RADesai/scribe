<template>
  <div class="container">
    <router-link :to="{ path: 'home' }">Home</router-link>
    <div class="jumbotron">
      Create Your Next Character Below!
    </div>
    <div class="row">
      Qualities
      <br>
      * Characteristics/Description
      <br>
      * Pos -- Neg?
      <br>
      * Relations/Groups?
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
.container {}
.jumbotron {
  background-color: transparent;
}
</style>
