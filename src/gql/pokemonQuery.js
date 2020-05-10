import { gql } from 'apollo-boost'

export default gql`
  query getPokemon($id: String!) {
    pokemon(id: $id) {
      id
      name
      image
      types
      number
      classification
      weaknesses
      resistant
    }
  }
`
