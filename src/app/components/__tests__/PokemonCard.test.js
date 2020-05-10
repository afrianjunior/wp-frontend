import React from 'react'
import { render } from '@testing-library/react'
import PokemonCard from '../PokemonCard'

it('PokemonCard component rendered properly', () => {
  const _expected = {
    id: 'UG9rZW1vbjowMDE=',
    name: 'Bulbasaur',
    types: [
      'Grass',
      'Poison'
    ],
    classification: 'Seed Pokémon',
  }
  const { getByText } = render(<PokemonCard {..._expected}></PokemonCard>)
  expect(getByText(_expected.name)).toBeInTheDocument
  expect(getByText(_expected.types[0])).toBeInTheDocument
  expect(getByText(_expected.types[1])).toBeInTheDocument
  expect(getByText(_expected.classification)).toBeInTheDocument
})