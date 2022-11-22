<script>
import StarRating from 'vue-star-rating';
export default {
    name:'DynamicCards',
    props:{
        titolo:String,
        titoloOriginale: String,
        lingua: String,
        voto:Number,
        trama:String,
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
  <li class="position-relative">
    <div class="text position-absolute start-0">
        <h5>{{titolo}}</h5>
        <h5>titolo-originale:{{titoloOriginal}}</h5>
        <h5>
        lingua: 
        <span :class="getClassName">
            {{languageNotExist}}
        </span>
        <StarRating :rating="getStars" :star-size="20" :read-only="true"></StarRating>
        <p>Trama:{{trama}}</p>
    </h5>
    </div>
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
    width: calc(100% / 5);
    height: 340px;
    list-style: none;
    margin-bottom: 10px;
    img{
        @include centerFlex('both');
        margin-top: 20px;
        box-shadow: 0px 0px 36px 2px rgba(0,0,0,0.75);
        height: 300px;
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
        height: 250px;
    } 
}
li:hover .text{
    margin-top:90px;
    height:230px;
    width: 200px;
	padding-top: 10px;
    overflow: scroll;
}

.text{
    padding: 0px 3px;
    height: 0;
    width: 200px;
    overflow:hidden;
    -webkit-transition: all 0.3s linear;
    -moz-transition: all 0.3s linear;
    -o-transition: all 0.2s linear;
    transition: all .3s linear;
    margin-top:300px;
	position:absolute;
	background-color:rgba(0, 0, 0, 0.502);
	line-height: 20px;
	color: #FFF;
    p{
        font-size: 13px;
        margin-top: 4px;
    }
}

</style>