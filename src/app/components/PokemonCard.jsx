import React from 'react'
import PropTypes from 'prop-types'
import { Div, Image, Text, Tag } from 'atomize'

function PokemonCard ({ name, classification, image, types }) {
  function Types () {
    if (!types.length) return null

    return (
      <Div m={{ t: '1rem' }}>
        {
          types.map((type, key) => {
            return (
              <Tag
                key={`${type}-${key}`}
                bg="info900"
                textColor="gray100"
                p={{ x: '0.75rem', y: '0.25rem' }}
                m={{ r: '0.5rem', b: '0.5rem' }}
                rounded="lg"
                textSize="tiny"
              >
                {type}
              </Tag>
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
