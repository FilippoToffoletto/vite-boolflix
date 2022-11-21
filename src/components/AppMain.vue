<script>
import {store} from  '../data/store';
import DynamicCards from './DynamicCards.vue';

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
  <main>Main</main>
</template>



<style lang="scss" scoped>

</style>