<template>
  <div class="col-sm-10 col-sm-offset-1">
    <div class="title">Scribe</div>
    <hr class="teal">
    <div class="header">Create</div>
    <hr class="orange">
    <div class="row">
      <div class="col-md-4 col-md-offset-2">
        <router-link :to="{ path: 'character' }">
          <div class="square">
            <img src="./assets/user.svg" class="icon">
            <hr class="orange">
            Character
          </div>
        </router-link>
      </div>
      <div class="col-md-4">
        <router-link :to="{ path: 'setting' }">
          <div class="square">
            <img src="./assets/map-marker.svg" class="icon">
            <hr class="orange">
            Setting
          </div>
        </router-link>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4 col-md-offset-2">
        <router-link :to="{ path: 'scene' }">
          <div class="square">
            <img src="./assets/acting-class.svg" class="icon">
            <hr class="orange">
            Scene
          </div>
        </router-link>
      </div>
      <div class="col-md-4">
        <router-link :to="{ path: 'story' }">
          <div class="square">
            <img src="./assets/books.svg" class="icon">
            <hr class="orange">
            Story
          </div>
        </router-link>
      </div>
    </div>
    <br>
    <div class="header">Timeline</div>
    <hr class="darkTeal">

    <div class="row">

    </div>
  </div>
  <!-- <div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div> -->
  <!-- <div>Icons made by <a href="http://www.flaticon.com/authors/simpleicon" title="SimpleIcon">SimpleIcon</a> from <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div> -->
  <!-- <div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div> -->
  <!-- <div>Icons made by <a href="http://www.flaticon.com/authors/zlatko-najdenovski" title="Zlatko Najdenovski">Zlatko Najdenovski</a> from <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div> -->
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
  border-color: #3c474d;
  color: #3c474d;
}
.teal {
  background-color: #45b39d;
  border-color: #45b39d;
  color: #45b39d;
}
.lightGreen {
  background-color: #DAF7A6;
}
.orange {
  background-color: #ff5733;
  border-color: #ff5733;
  color: #ff5733;
}
/* ^^^ APP STYLES ^^^ */

.title {
  font-family: 'Supermercado One', sans-serif;
  font-size: 4em;
}

.header {
  font-family: 'Supermercado One', sans-serif;
  font-size: 2em;
}

.row {
  text-decoration: none;
  text-align: center;
  align-items: center;
}

.square {
  background-color: #3c474d;
  color: #f1f4ff;
  font-family: 'Supermercado One', sans-serif;
  font-size: 1.5em;
  margin: 40px 20px 0px auto;
  width: 60%;
  display: inline-block;
  padding: 30px;
  border-radius: 4px 4px 6px 6px;
  border-top: 5px solid #ff5733;
  transition: .3s ease-out;
}

.square:hover {
  opacity: 0.95;
  box-shadow: 0px 3px 6px #ff5733;
  color: #ff5733;
  transform: translateY(-5px);
}

.icon {
  width: 50%;
}

</style>
