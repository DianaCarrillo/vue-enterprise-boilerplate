import { gql } from 'apollo-boost'

export default gql`
  mutation createSpeaker($name: String!) {
    createSpeaker(name: $name) {
      id
      name
    }
  }
`
