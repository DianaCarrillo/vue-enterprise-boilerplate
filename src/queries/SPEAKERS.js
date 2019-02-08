import { gql } from 'apollo-boost'

export default gql`
  query allSpeakers($name: String) {
    allSpeakers(orderBy: name_ASC, filter: { name_contains: $name }) {
      id
      name
      photo {
        url
      }
    }
  }
`
