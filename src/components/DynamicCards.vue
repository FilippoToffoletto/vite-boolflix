<script>
import StarRating from 'vue-star-rating';
export default {
    name:'DynamicCards',
    props:{
        titolo:String,
        titoloOriginale: String,
        lingua: String,
        voto:Number,
        pathImg: String
    },
    components:{
        StarRating
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
            }return 'https://image.tmdb.org/t/p/w200/' + this.pathImg;
        }
    },
}
</script>

<template>
  <li>
    <h5>titolo: {{titolo}}</h5>
    <h5>
        lingua: 
        <span :class="getClassName">
            {{languageNotExist}}
        </span>
    </h5>
    <StarRating :rating="getStars" :star-size="20" :read-only="true" ></StarRating>
    <img :src="getImg" :alt="titolo" v-if="getImg">
    <h4 v-else class="image">IMAGE NOT EXIST</h4>
  </li>
</template>



<style lang="scss" scoped>
@use '../styles/partials/mixins'as *;

h3{
    text-transform: capitalize;
}
li{
    display: block;
    width: calc(100% / 5);
    height: 450px;
    list-style: none;
    padding: 10px 2px;
    img{
        @include centerFlex('both');
    }
    h4{
        width: 300px;
        text-align: center;
        font-weight: 700;
        font-size: .8rem
    }
    h5{
        font-size: .9rem
    }
    .image{
        @include centerFlex('vertical');
        height: 200px;
    }
    
}

</style>