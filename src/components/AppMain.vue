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
    <div class="container" v-if="store.isSearch">
      <h2>Films</h2>
      <ul class="d-flex flex-wrap justify-content-evenly">
        <DynamicCards 
          v-for="(films, index) in store.arrayFilms"
          :key="index"
          :titolo="films.title"
          :lingua="films.original_language"
          :voto="films.vote_average"
        />

      </ul>
    </div>

    <div class="container" v-if="store.isSearch">
      <h2>Serie Tv</h2>
      <ul class="d-flex flex-wrap justify-content-evenly">
        <DynamicCards 
          v-for="(serieTv, index) in store.arraySerieTv"
          :key="index"
          :titolo="serieTv.title"
          :lingua="serieTv.original_language"
          :voto="serieTv.vote_average"
        />

      </ul>
    </div>
  </main>
</template>



<style lang="scss" scoped>

</style>