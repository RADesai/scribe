<template>
  <div class="col-sm-10 col-sm-offset-1">
    <div class="title">Scribe</div>
    <hr class="teal">
    <div class="header">Project Title: 'New Project'</div>
    <div class="row">
      <div class="col-md-2">
        2-col OFFSET
        <br>
        <----------------------
        <br>
        ROW 1
        <br>
        <----------------------
      </div>
      <div class="col-md-4">
        <router-link :to="{ path: 'character' }">
          <div class="square">
            <img src="./assets/004-circle.svg" class="bottom">
            <img src="./assets/user.svg" class="top">
            <hr class="offWhite">
            Character
          </div>
        </router-link>
      </div>
      <div class="col-md-4">
        <router-link :to="{ path: 'setting' }">
          <div class="square">
            <img src="./assets/003-tool.svg" class="bottom">
            <img src="./assets/map-marker.svg" class="top">
            <hr class="offWhite">
            Setting
          </div>
        </router-link>
      </div>
      <div class="col-md-2">
        2-col OFFSET
        <br>
        ---------------------->
        <br>
        ROW 1
        <br>
        ---------------------->
      </div>
    </div>
    <div class="row">
      <div class="col-md-2">
        2-col OFFSET
        <br>
        <----------------------
        <br>
        ROW 2
        <br>
        <----------------------
      </div>
      <div class="col-md-4">
        <router-link :to="{ path: 'scene' }">
          <div class="square">
            <img src="./assets/001-people.svg" class="bottom">
            <img src="./assets/acting-class.svg" class="top">
            <hr class="offWhite">
            Scene
          </div>
        </router-link>
      </div>
      <div class="col-md-4">
        <router-link :to="{ path: 'story' }">
          <div class="square">
            <img src="./assets/002-book.svg" class="bottom">
            <img src="./assets/books.svg" class="top">
            <hr class="offWhite">
            Story
          </div>
        </router-link>
      </div>
      <div class="col-md-2">
        2-col OFFSET
        <br>
        ---------------------->
        <br>
        ROW 1
        <br>
        ---------------------->
      </div>
      <br>
    </div>

    <div class="header">Timeline</div>
    <hr class="darkTeal">
    <div class="row">

    </div>
    <div class="row">
      <div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a>, <a href="http://www.flaticon.com/authors/simpleicon" title="SimpleIcon">SimpleIcon</a>, && <a href="http://www.flaticon.com/authors/zlatko-najdenovski" title="Zlatko Najdenovski">Zlatko Najdenovski</a> from <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a> are licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0</a></div>
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
  background-color: #3c474d;
  /*background-color: #f1f4ff;*/
  font-family: 'Work Sans', sans-serif;
  color: #f1f4ff;
}
.purple {
  background-color: #8d459b;
  color: #DAF7A6;
}
.offWhite {
  background-color: #f1f4ff;
  color: #3c47cd;
}
.darkTeal {
  background-color: #3c474d;
  border-color: #3c474d;
  color: #ff5733;
}
.teal {
  background-color: #45b39d;
  border-color: #45b39d;
  color: #DAF7A6;
}
.lightGreen {
  background-color: #DAF7A6;
}
.orange {
  background-color: #ff5733;
  border-color: #ff5733;
  color: #3c474d;
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
  position: relative;
  background-color: #3c474d;
  color: #3c474d;
  font-family: 'Supermercado One', sans-serif;
  font-size: 1.5em;
  margin: 40px 20px 0px auto;
  width: 60%;
  display: inline-block;
  padding: 30px;
  border-radius: 4px 4px 6px 6px;
  border-top: 5px solid #45b39d;
  transition: .4s ease-out;
}
.square hr {
  transition: .4s ease-out;
}
img {
  transition: .4s ease-out;
  width: 100px
}
.square img.top {}
.square img.bottom {
  position: absolute;
  opacity: 0;
}
.square:hover {
  opacity: 0.95;
  box-shadow: 0px 2px 4px #45b39d;
  color: #45b39d;
  transform: translateY(-5px);
}
.square:hover hr {
  background-color: #8d459b;
  border-color: #8d459b;
  color: #8d459b;
  transform: scaleX(0) scaleY(0);
}
.square:hover img.top {
  opacity:0;
}
.square:hover img.bottom {
  opacity:1;
}

.icon {
  width: 50%;
}

</style>
