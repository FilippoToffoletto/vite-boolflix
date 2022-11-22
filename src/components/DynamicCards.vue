<script>
export default {
    name:'DynamicCards',
    props:{
        titolo:String,
        titoloOriginale: String,
        lingua: String,
        voto:Number,
        pathImg: String
    },
    data(){
        return{
            languageNotExist: ''
        }
    },
    methods:{

    },
    computed:{
        getClassName(){
            if(this.lingua === 'en'){
                return 'fi fi-' + 'gb';
            }else{
                return 'fi fi-' + this.lingua
            }
        },
        languageNotFound(){
            if(this.languageNotExist.includes(this.lingua)){
                return 'NOT FOUND'
            }
        },
        getStars(){
            return  Math.ceil(this.voto / 2);
        },
        getImg(){
            if(this.pathImg == null){
                return false;
            }return 'https://image.tmdb.org/t/p/w300/' + this.pathImg;
        }
    },
}
</script>

<template>
  <li>
    <h3>titolo: {{titolo}}</h3>
    <h3>titolo originale:  {{titoloOriginale}}</h3>
    <h3>
        lingua: 
        <span :class="getClassName">
            {{languageNotExist}}
        </span>
    </h3>
    <h3>voto: {{getStars}}</h3>
    <img :src="getImg" :alt="titolo" v-if="getImg">
    <h3 v-else>IMAGE NOT EXIST</h3>
  </li>
</template>



<style lang="scss" scoped>

h3{
    text-transform: capitalize;
}

</style>