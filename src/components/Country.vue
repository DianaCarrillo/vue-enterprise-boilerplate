<template>
  <div>
    <ul>
      <li id="cont-name"><button class="country-a" @click="languageFunction">{{ country.name }}</button></li>
    </ul>
    <p>{{this.language}}</p>
 <!-- <p>Lenguages:</p> -->
    <InfoCountry
     v-for ="language in country.languages"
              :key="language.id"
              :language="language"/>
  </div>
</template>

<script>
import gql from 'graphql-tag';
import InfoCountry from './InfoCountry.vue'

const CountryQuery = gql`
  query country ($code: String){
    country (code: $code){
        languages{
          name
        }
      }
    }
`
export default {
  name: "Country",
  components: {
     InfoCountry
  },
  props: {
    country: {
      type: Object,
      required: true
    }
  },
   data: () =>({
    country: [],
    loading: 0,
    language: null
  }),
  methods: {
    languageFunction: function (){
   this.country.languages.forEach(element => {
     this.language = element.name
     console.log(element.name)
   });
    }
  },
  apollo: {
    country:{
      query: CountryQuery
    }
  }
}
</script>

<style>
#blue{
  color: rgb(255, 98, 182)
}
#color{
  font-weight: bolder
}
.country-a{
  text-decoration: none
}
button{
  background-color: gray;
  border-color:black;
  color:white
}
</style>
