<template>
  <div>
    <input v-model="search" type="text"  placeholder="Search continents, countries, languages">
      <template v-if="loading > 0">
        Loading...
      </template>
      <template>
        <ContinentTitle/>
         <div>
          <ul >
            <li v-for="continent in continents" :key="continent.code">
              <button id="name">{{ continent.name }}</button>
              <Languages
              v-for ="c in continent.countries"
              :key="c.id"
              :c="c"/>
            </li>
          </ul>
         </div>
          <!-- <div v-if="loading">Loading...</div>
          <EachMovie
              v-for="films in allFilms"
              :key="films.id"
              :films = films
              />
        </div> -->
      </template>
  </div>
</template>

<script>
import Languages from './Languages.vue'
import ContinentTitle from './ContinentTitle.vue'
import gql from 'graphql-tag';

// import { ALL_CONTINENTS_SEARCH_QUERY } from './queries'

const ALL_CONTINENTS_SEARCH_QUERY = gql`
query continents ($name: String!) {
  continents (name: $name) {
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
    Languages,
    ContinentTitle
  },
  data: () =>({
    continents: [],
    loading: 0,
    country: "",
    search: ""
  }),
  apollo: {
    continents:{
      query: ALL_CONTINENTS_SEARCH_QUERY,
      loadingKey: 'loading',
           variables () {
        return {
          name: this.search
        }
      },
      skip (){
        return !this.search
      }
    }
  }
}
</script>
<style>
li{
  margin: 1%;
  list-style-type: none

}
input {
  height: 40px;
  width: 80%;
  padding: 5px;
  font-size: 14px;
}
#name{
  padding: 3%;
  margin: 3%;
  font-weight: bolder;
  color: white;
  background-color: black;
  border-color: black
}
#code{
  margin-left: 1%
}
</style>
