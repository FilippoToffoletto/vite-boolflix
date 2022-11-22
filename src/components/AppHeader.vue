<script>
import {store} from '../data/store';
export default {
    name:'AppHeader',
    data(){
        return{
            store
        }
    }
}
</script>

<template>
  <header>
    <div class="container-xl d-flex justify-content-between py-4">
        <h2>Boolflix</h2>
        <nav class="d-flex py-2 gap-5">
            <input @keyup.enter="$emit('search')" type="text" v-model.trim="store.query" placeholder="Cerca Film o Serie TV">
            <button class="btn btn-outline-primary" @click="$emit('search')">
                search
            </button>
        </nav>
    </div>
  </header>
</template>



<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;
@use '../styles/partials/variabiles' as *;

header{
    box-shadow: 0px 103px 40px -42px rgba(0,0,0,0.64) inset;
}

h2{
    color: #E50815;
    font-size: 3rem;
    text-transform: uppercase;
}

button{
    text-transform: uppercase;
}

</style>