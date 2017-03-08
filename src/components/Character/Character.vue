<template>
  <div class="container">
    <div class="title">Scribe</div>
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><router-link :to="{ path: 'home' }">Home</router-link></a></li>
      <li class="breadcrumb-item active">Character Creator</li>
    </ol>
    <div class="jumbotron">
      Create Your Next Character Below!
    </div>
    <div class="row lightGreen">
      Qualities - Top Row
      <div class="jumbotron darkTeal">
        <br>
        * Name
        <input v-model="name">
        <br>
        <div class="square" v-on:click="createChar">
          submit character here
        </div>
        <br>
        * Characteristics/Description
        <br>
        * Real Life Counterparts/Comparisons?
        <br>
        * Pos -- Neg?
        <br>
        * Relations/Groups?
      </div>
    </div>
    <br>
    <div class="row">
      Center Row
      <div class="jumbotron purple">
        Jumbotron
        <div class="square" v-on:click="getChars">
          get characters
        </div>
      </div>
    </div>
    <br>
    <div class="row">
      Bottom Row
      <div class="jumbotron teal">
        Jumbotron
      </div>
    </div>
    <div class="row lightGreen">
      Row 4
      <div class="jumbrotron">
        <div class="col-md-3">
          col-3-left
        </div>
        <div class="col-md-3">
          col-3-left-middle
        </div>
        <div class="col-md-3">
          col-3-right-middle
        </div>
        <div class="col-md-3">
          col-3-right
        </div>
        <br>
        <div class="">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'character',
    data() {
      return {
        name: ''
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
          console.log('ERROR;', response);
        });
        this.name = '';
      },
      getChars: function() {
        this.$http.get('/api/characters').then(response => {
          console.log("characters:", response.body);
        }, response => {
          console.log('ERROR;', response);
        })
      }
    }
  }
</script>

<style scoped>
.square {
  cursor: pointer;
}
</style>
