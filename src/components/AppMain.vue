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
      <h3>Films</h3>
      <ul>
        <DynamicCards 
          v-for="(films, index) in store.arrayFilms"
          :key="index"
          :titolo="films.title"
          :lingua="films.original_language"
          :voto="films.vote_average"
        />

      </ul>
    </div>
  </main>
</template>



<style lang="scss" scoped>

</style>