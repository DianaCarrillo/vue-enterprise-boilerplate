import gql from 'graphql-tag'

export const ALL_CONTINENTS_SEARCH_QUERY = gql`
  query continents($search: String!) {
    continents(filter: { OR: [{ name: $search }, { code: $search }] }) {
      name
      code
      countries {
        name
        languages {
          name
        }
      }
    }
  }
`
