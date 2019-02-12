<template>
  <div>
    <ContinentTitle/>
    <input v-model="searchCode" type="text" placeholder="Write a code continent e.g. EU, AS, AN, NA, SA, AF, OC">
      <!-- <template v-if="loading > 0">
        Loading...
      </template> -->
      <template>
         <div>
          <ul v-if="searchCode" >
              <li id="name">
                 <p id="code-p">{{ continent.code }} - {{ continent.name }}</p>
               </li>
          </ul>
           <Country
              v-for ="country in continent.countries"
              :key="country.id"
              :country="country"/>
         </div>

      </template>
  </div>
</template>

<script>
import Country from './Country.vue'
import ContinentTitle from './ContinentTitle.vue'
import gql from 'graphql-tag';
// import { ALL_CONTINENTS_SEARCH_QUERY } from './graphql'
const ALL_CONTINENTS_SEARCH_QUERY = gql`
query continent ($code: String!) {
  continent (code: $code){
    name
    code
    countries {
      name
      languages{
        name
      }
    }
  }
}
`
export default {
  name: 'Continents',
  components: {
    Country,
    ContinentTitle
  },
  data() {
   return {
    continent: {},
    loading: 0,
    search: "",
    contCode: {
      code: 'DEFAULTNAME'
     }
    }
  },
  computed: {
    searchCode: {
      get(){
        return this.search
      },
      set(search){
        this.search = search.toUpperCase()
      }
    }
  },
  // methods: {
  //   continentFuntion (){
  //     this.continents.map(continent =>{
  //       if(this.search === continent.name){
  //      return continent
  //       }
  //     })
  //   }
  // },
  apollo: {
    continent:{
      query: ALL_CONTINENTS_SEARCH_QUERY,
      loadingKey: 'loading',
        variables () {
        return {
          code: this.search
        }
      }
    }
  }
}
</script>
<style>
li{
  margin: 1%;
}
#code-p{
/* text-align: center; */
font-size: 25px;
}
ul{
  list-style: none;
}
input {
  height: 40px;
  width: 80%;
  padding: 5px;
  font-size: 14px;
  text-align: center;
  margin-left: 10%
}
#name{
  /* padding: 3%; */
  margin: 3%;
  font-weight: bolder;
  color:black;
  /* background-color: black; */
  border-color: black
}
#code{
  margin-left: 1%
}
</style>
