import { gql } from 'apollo-boost'

export default gql`
  query getPokemons($first: Int!) {
    pokemons(first: $first) {
      id
      name
      image
      types
      classification
    }
  }
`
