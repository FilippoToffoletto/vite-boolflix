<script>
import axios from 'axios';
import {store} from './data/store';

import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

export default { 
  name:'App',
  components:{
    AppHeader,
    AppMain
  },
  data(){
    return{
      store
    }
  },
  methods:{
    getApi(){
      store.isSearch= true;
      axios.get(store.getApiMovie,{
          params: {
            language: store.language,
            query:store.query
          }
      })
        .then(films=>{
          store.arrayFilms=[],
          store.arrayFilms= films.data.results;
        })
      axios.get(store.getApiSerieTv,{
        params: {
          language: store.language,
          query:store.query
        }
      })
      .then(serieTv=>{
        store.arraySerieTv=[],
        store.arraySerieTv= serieTv.data.results;
      })
    }
  },
}
</script>

<template>
  <AppHeader @search="getApi()" />
  <AppMain />
</template>



<style lang="scss">
@use './styles/general.scss';

</style>