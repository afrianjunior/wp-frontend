import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'atomize'

import PokemonCard from './PokemonCard'

const _COLUMN_SIZE_SETTING = {
  xs: 12, lg: 6
}

function Pokemons ({ pokemons }) {
  function RenderPokemons () {
    return pokemons.map(pokemon => (
      <Col key={pokemon.id} size={_COLUMN_SIZE_SETTING}>
        <PokemonCard {...pokemon} />
      </Col>
    ))
  }

  return (
    <Row>
      <RenderPokemons />
    </Row>
  )
}

Pokemons.propTypes = {
  pokemons: PropTypes.array
}

export default Pokemons
