import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'atomize'

import PokemonCard from './PokemonCard'

const _COLUMN_SIZE_SETTING = {
  xs: 12, lg: 6
}

function Pokemons ({ pokemons, redirect }) {
  const Link = redirect

  function RenderPokemons () {
    return pokemons.map(pokemon => (
      <Col key={pokemon.id} size={_COLUMN_SIZE_SETTING}>
        <Link to={`/details?id=${pokemon.id}`}>
          <PokemonCard {...pokemon} />
        </Link>
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
  pokemons: PropTypes.array,
  redirect: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func
  ])
}

export default Pokemons
