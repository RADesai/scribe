<template>
  <div>
    <div class="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 header">
      <div class="header">
        <p>Scribe</p>
      </div>
      <div class="container">
        Character: <router-link :to="{ path: 'character' }">Create!</router-link>
        Setting: <router-link :to="{ path: 'setting' }">Create!</router-link>
        Scene: <router-link :to="{ path: 'scene' }">Create!</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    components: {},
    data() {
      return {}
    },
  }
</script>

<style>
/*APP STYLES*/
body {
  background-color: #f1f4ff;
  font-family: 'Work Sans', sans-serif;
}
.purple {
  background-color: #8d459b;
}
.offWhite {
  background-color: #f1f4ff;
}
.darkTeal {
  background-color: #3c474d;
}
.teal {
  background-color: #45b39d;
}
.lightGreen {
  background-color: #DAF7A6;
}
.orange {
  background-color: #ff5733;
}
/* ^^^ APP STYLES ^^^ */

.header {
  font-family: 'Supermercado One', sans-serif;
  font-size: 2em;
}
</style>
