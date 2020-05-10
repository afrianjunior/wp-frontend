import React from 'react'
import { render } from '@testing-library/react'
import Pokemons from '../Pokemons'
import Label from '../Label'

const MockedRedirect = Label

it('Pokemons component rendered properly', () => {
  const _expected = [
    {
      id: 'UG9rZW1vbjowMDE=',
      name: 'Bulbasaur',
      types: [
        'Grass',
        'Poison'
      ],
      classification: 'Seed Pokémon',
    }
  ]

  const { getByText } = render(<Pokemons pokemons={_expected} redirect={MockedRedirect}></Pokemons>)

  expect(getByText(_expected[0].name)).toBeInTheDocument
  expect(getByText(_expected[0].types[0])).toBeInTheDocument
  expect(getByText(_expected[0].types[1])).toBeInTheDocument
  expect(getByText(_expected[0].classification)).toBeInTheDocument
})