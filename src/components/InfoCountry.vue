<template>
  <div>
   <!-- <ul>
   {{ language.name }}
    </ul> -->
  </div>
</template>

<script>
import gql from 'graphql-tag';

const contQuery = gql`
  query continents {
    continents{
      countries {
        languages{
          name
        }
      }
    }
  }
`
export default {
  name: "Info",
  props: {
    language: {
      type: Object,
      required: true
    }
  },
   apollo: {
    continents:{
      query: contQuery,
      loadingKey: 'loading'
    }
  }
}
</script>
