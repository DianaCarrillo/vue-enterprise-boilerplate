<template>
  <div>
    <ContinentTitle/>
    <input v-model="searchCode" type="text" placeholder="Write a code continent e.g. EU, AS, AN, NA, SA, AF, OC">
      <template>
         <div>
           <EachContinent v-if="continent"  :continent="continent"/>
         </div>
        <Countries  v-if="continent" :continent="continent"/>
      </template>
  </div>
</template>

<script>
import EachContinent from './EachContinent.vue'
import ContinentTitle from './ContinentTitle.vue'
import Countries from './Countries.vue'
import gql from 'graphql-tag';

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
    // Country,
    EachContinent,
    ContinentTitle,
    Countries
  },
  data() {
   return {
    continent: {},
    search: "",
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
    },
  },
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
