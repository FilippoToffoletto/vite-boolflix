<script>
import {store} from  '../data/store';
import DynamicCards from './DynamicCards.vue'

export default {
    name:'AppMain',
    components:{
      DynamicCards,
    },
    data(){
      return{
        store
      }
    }
}
</script>

<template>
  <main>
    <div class="container ft-container" v-if="store.isSearch">
      <h2>Films</h2>
      <ul class="d-flex flex-wrap justify-content-evenly">
        <DynamicCards 
          v-for="(films, index) in store.arrayFilms"
          :key="index"
          :titolo="films.title"
          :lingua="films.original_language"
          :voto="films.vote_average"
          :trama="films.overview"
          :path-img="films.poster_path"
        />

      </ul>
    </div>

    <div class="container ft-container" v-if="store.isSearch">
      <h2>Serie Tv</h2>
      <ul class="d-flex flex-wrap justify-content-start">
        <DynamicCards 
          v-for="(serieTv, index) in store.arraySerieTv"
          :key="index"
          :titolo="serieTv.title"
          :lingua="serieTv.original_language"
          :voto="serieTv.vote_average"
          :path-img="serieTv.poster_path"
        />

      </ul>
    </div>
  </main>
</template>



<style lang="scss" scoped>
@use '../styles/partials/variabiles' as *;

.ft-container{
  max-width: 1200px;
  h2{
    // box-shadow: 0px 0px 36px 2px rgba(0,0,0,0.75);
    border: 1px solid white;
    padding: 2px 2px;
    margin-top: 40px;
  }
}


</style>