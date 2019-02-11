<template>
  <div>
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
import gql from 'graphql-tag';
import Languages from './Languages.vue'
import ContinentTitle from './ContinentTitle.vue'

const contQuery = gql`
  query continents {
    continents{
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
    country: ""
  }),
  apollo: {
    continents:{
      query: contQuery,
      loadingKey: 'loading'
    }
  }
}
</script>
<style>
li{
  margin: 1%;
  list-style-type: none

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
