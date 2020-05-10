import React from 'react'
import PropTypes from 'prop-types'
import { Div, Image, Text } from 'atomize'

import Label from './Label'

function PokemonCard ({ name, classification, image, types }) {
  function Types () {
    if (!types.length) return null

    return (
      <Div m={{ t: '1rem' }}>
        {
          types.map((type, key) => {
            return (
              <Label key={`${type}-${key}`}>
                {type}
              </Label>
            )
          })
        }
      </Div>
    )
  }

  return (
    <Div
      p="1rem"
      m={{ b: '.5rem' }}
      textAlign="center"
      bg="gray100"
      rounded="md"
    >
      <Image
        src={image}
        h="80px"
        w="80px"
        rounded="100%"
        m="10px auto"
        className="image-cover"
      />

      <Div>
        <Text
          tag="span"
          textSize="title"
        >
          {name}
        </Text>
        <Text
          tag="p"
          textColor="gray800"
        >
          {classification}
        </Text>
      </Div>
      <Types />
    </Div>
  )
}

PokemonCard.propTypes = {
  name: PropTypes.string,
  types: PropTypes.arrayOf(
    PropTypes.string
  ),
  classification: PropTypes.string,
  image: PropTypes.string
}

export default PokemonCard
