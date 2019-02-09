<template>
  <div>
    <p  id="color">{{c.name}}</p>
    <p v-for=" language in c.languages"
    id="blue"
    :key="language.id">
     {{ language.name }}
    </p>
  </div>
</template>

<script>
import gql from 'graphql-tag';

const contQuery = gql`
  query continents {
    continents{
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
  name: "Languages",
  props: {
    c: {
      type: Object,
      required: true
    }
  },
   data: () =>({
    continents: [],
    loading: 0,
    language: ""
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
#blue{
  color: lawngreen
}
#color{
  font-weight: bolder
}
</style>
