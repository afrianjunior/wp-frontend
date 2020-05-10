import React, { useState } from 'react'
import { useQuery } from '@apollo/react-hooks'
import POKEMONS_QUERY from '@/gql/pokemonsQuery'
import { Div, Text } from 'atomize'
import { Pokemons } from '@/app/components'

function Home () {
  const [pokemonsVariables] = useState({ first: 20 })
  const { loading, error, data, fetchMore } = useQuery(POKEMONS_QUERY, {
    variables: pokemonsVariables
  })

  return (
    <>
      <Div
        m={{ b: '40px' }}
        textAlign="center"
      >
        <Text tag="h1" textSize="display2">Pokedex</Text>
      </Div>
      {loading ? 'Fetching...' : <Pokemons {...data} />}
    </>
  )
}

export default Home
