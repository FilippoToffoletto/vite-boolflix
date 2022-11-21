<script>
export default {
    name:'DynamicCards',
    props:{
        titolo:String,
        titoloOriginale: String,
        lingua: String,
        voto:Number
    }
}
</script>

<template>
  <li>
    <h3>titolo: {{titolo}}</h3>
    <h3>titolo originale:  {{titoloOriginale}}</h3>
    <h3>lingua: 
        <span :class="getClassName">{{languageNotExist}}</span>
    </h3>
    <h3>voto: {{voto / 2}}</h3>
  </li>
</template>



<style lang="scss" scoped>

</style>