<template>
  <div class="col-sm-10 col-sm-offset-1">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><router-link :to="{ path: 'home' }"><div class="title">Scribe</div></router-link></a></li>
      <li class="breadcrumb-item active">Character Creator</li>
    </ol>
    <div class="row">
      <div class="col-md-2">
        <------- Col-2 ------->
        <-Link to realated Char
      </div>
      <div class="col-md-8">
        <div class="name">
          <input v-model="name">
        </div>
      </div>
      <div class="col-md-2">
        <------- Col-2 ------->
        Link to realated Char->
      </div>
    </div>
    <br>
    <div class="row">
      <div class="col-md-3">
        <div class="background">
          Background
        </div>
      </div>
      <div class="col-md-6">
        <div class="jumbotron purple">
          Characteristics / Traits
          <br>
        </div>
      </div>
      <div class="col-md-3">
        <div class="background">
          Goals
        </div>
      </div>
    </div>
    <br>
    <div class="row">
      <div class="col-md-6">
        col-6
      </div>
      <div class="col-md-6">
        col-6
        <br>
        <div class="square" v-on:click="getChars">
          get characters
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4">
        col-4-left
      </div>
      <div class="col-md-4">
        col-4-mid
        <br>
        <div class="square" v-on:click="createChar">
          submit character
        </div>
      </div>
      <div class="col-md-4">
        col-4-right
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'character',
    data() {
      return {
        name: 'Dr. Interesto Characterstein'
      }
    },
    props: [],
    mounted() {},
    methods: {
      createChar: function() {
        let data = {
          'name': this.name
        }
        this.$http.post('/api/characters', data).then(response => {
          console.log(`${this.name} was posted to db!`);
          console.log(response.body);
        }, response => {
          console.log('ERROR:', response);
        });
        this.name = 'Give me a name!';
      },
      getChars: function() {
        this.$http.get('/api/characters').then(response => {
          console.log("characters:", response.body);
        }, response => {
          console.log('ERROR:', response);
        })
      }
    }
  }
</script>

<style scoped>
.container {}
.breadcrumb {
  background-color: transparent;
}
.name {
  font-family: 'Supermercado One', sans-serif;
  font-size: 3em;
}
input {
  width: 100%;
  background-color: transparent;
  border-color: transparent;
  border-radius: 6px 6px 8px 8px;
  color: #FFD877;
  text-align: center;
}
input:hover {
  border-color: #FFD877;
}
input:focus {
  box-shadow: inset 0px 0px 0px 4px #ffd877;
  outline: none;
}
.square {
  cursor: pointer;
  background-color: transparent;
  color: #FFD877;
}

/* Tooltip text */
.square .tooltiptext {
    visibility: hidden;
    background-color: #f1f4ff;
    color: #3c474d;
    text-align: center;
    padding: 3px 3px;
    border-radius: 4px 4px 6px 6px;
    /*width: 120px;*/

    /* Position the tooltip text */
    position: absolute;
    z-index: 1;
    bottom: 50%;
    left: -25%;
    /*margin-left: -60px;*/
    margin: 0 auto;

    /* Fade in tooltip */
    opacity: 0;
    transition: opacity 1s;
}

/* Tooltip arrow */
.square .tooltiptext::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #555 transparent transparent transparent;
}

/* Show the tooltip text when you mouse over the tooltip container */
.square:hover .tooltiptext {
    visibility: visible;
    opacity: 1;
}
</style>
