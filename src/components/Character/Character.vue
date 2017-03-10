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
        <span class="header">Traits</span>
        <div class="bg" v-for="(item, index) in bg">
          <div class="well well-sm">{{ item.note }}</div>
          <span class="tooltiptext">
            <span class="label label-default" v-for="(tag, index) in item.tags">
              {{ tag.name }}
            </span>
          </span>
        </div>
      </div>
      <!-- CENTER -->
      <div class="col-md-6">
        <div class="cent" v-for="(item, index) in bg">
          <div class="col-md-12">
            <div class="col-md-6">
              <div class="well well-sm">{{ item.note }}</div>
            </div>
            <div class="col-md-6">
              <span class="label label-default" v-for="(tag, index) in item.tags">
                {{ tag.name }}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="bg">
          <span class="header">Goals</span>
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
        char: {},
        name: 'Dr. Interesto Characterstein',
        bg: [
          { note: 'From NYC', tags: [{"name": 'ben'}] },
          { note: 'From CHI', tags: [{"name": 'bin'}] },
          { note: 'From NJ', tags: [{"name": 'bit'}] },
          { note: 'Has 27 siblings that all live in another country', tags: [{"name": 'mamu'}] },
          { note: 'MIT Professor', tags: [{"name": 'billy'},{"name": 'bob'},{"name": 'jax'},{"name": 'max'},{"name": 'bob'},{"name": 'jax'},{"name": 'max'},{"name": 'bob'},{"name": 'jax'},{"name": 'max'},{"name": 'jax'}] },
          { note: 'Cuts hair', tags: [{"name": 'jax'},{"name": 'max'}] }
        ],
        traits: []
      }
    },
    props: [],
    mounted() {},
    methods: {
      createChar: function() {
        let data = {
          'name': this.name,
          'bg': this.bg,
          'traits': this.traits
        }
        this.$http.post('/api/characters', data).then(response => {
          console.log(`${this.name} was posted to db!`);
          this.char = response.body;
        }, response => {
          console.log('ERROR:', response);
        });
      },
      // updateChar: function() {
      //   this.$http.put('api/characters/')
      // }
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

/*Scroll through background notes*/
/*overflow: scroll;
overflow-y: scroll;*/
.bg {
  position: relative;
  align-items: center;
}

/* Tooltip text */
.bg .tooltiptext {
    visibility: hidden;
    background-color: transparent;
    color: #3c474d;
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    border-radius: 4px 4px 6px 6px;
    position: absolute;
    z-index: 1;
    bottom: 100%;
    left: 0;
    opacity: 0;
    transition: opacity 0.5s;
}
.bg .tooltiptext .label {
  background-color: transparent;
  color: #45b39d;
}

.bg:hover .tooltiptext {
    visibility: visible;
    opacity: 0.8;
}

.well {
  opacity: 0.8;
  background-color: transparent;
  border-radius: 6px 6px 12px 12px;
  border-width: 2px;
  border-color: transparent;
  color: #FFD877;
  transition: .4s ease-out;
}
.well:hover {
  opacity: 1;
  cursor: pointer;
  border-color: #45b39d;
  transform: translateY(-5%);
}

.header {
  font-family: 'Supermercado One', sans-serif;
}

.cent .label {
    visibility: hidden;
    background-color: transparent;
    color: #3c474d;
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    border-radius: 4px 4px 6px 6px;
    position: absolute;
    z-index: 1;
    bottom: 100%;
    left: 0;
    opacity: 0;
    transition: opacity 0.5s;
}
.cent .label {
  background-color: transparent;
  color: #45b39d;
}

.cent:hover .label {
    visibility: visible;
    opacity: 0.8;
}
</style>
