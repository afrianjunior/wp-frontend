import React, { useEffect } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { Div, Text, Input, Icon } from 'atomize'
import { PokemonCard, Label } from '@/app/components'

import POKEMON_QUERY from '@/gql/pokemonQuery'

function Weaknesses ({ value }) {
  return value.map(weakness => <Label color="warning">{weakness}</Label>)
}

function Resistant ({ value }) {
  return value.map(resistant => <Label color="success">{resistant}</Label>)
}

function Details ({ location }) {
  function extractQuery () {
    return new URLSearchParams(location.search)
  }
  const query = extractQuery()
  const id = query.get('id')

  const { loading, error, data } = useQuery(POKEMON_QUERY, {
    variables: {
      id
    }
  })

  function mounted () {
  }

  useEffect(mounted, [])

  if (loading) return <Text tag="p" textAlign="center" textSize="body">Loading..</Text>

  const { pokemon } = data
  return (
    <Div>
      <Div textAlign="center">
        <PokemonCard {...pokemon} />
      </Div>

      <Div
        p="1rem"
        m={{ b: '.5rem' }}
        bg="gray100"
        rounded="md"
        cursor="pointer"
      >
        <Text tag="p">
          Weaknesses: <Weaknesses value={pokemon.weaknesses} />
        </Text>
        <Text tag="p">
          Resistant: <Resistant value={pokemon.resistant} />
        </Text>
      </Div>
    </Div>
  )
}

export default Details
