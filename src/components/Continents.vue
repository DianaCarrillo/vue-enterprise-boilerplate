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
  list-style-type: none;
  margin: 1%

}
#name{
  margin: 3%;
  font-weight: bolder;
  background-color: black;
  color: white;
  border-color: black;
  padding: 3%
}
#code{
  margin-left: 1%
}
</style>
