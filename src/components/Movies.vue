<template>
  <div>
    <ApolloQuery :query="require('../queries/MOVIES.js').default">
      <template slot-scope="{ result: { data, loading } }">
        <div>
          <h3> SW Movies</h3>
          <div v-if="loading">Loading...</div>
          <ul v-else>
            <li v-for="m in data.allFilms" :key="m.id">
              <span>{{ m.Films }}</span>
            </li>
          </ul>
        </div>
      </template>
    </ApolloQuery>
  </div>
</template>

<script>
export default {
  name: 'Movies',
}
</script>
