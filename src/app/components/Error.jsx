import React from 'react'
import PropTypes from 'prop-types'
import { Div, Text } from 'atomize'

function Error ({ message }) {
  return (
    <Div
      w="100%"
      rounded="sm"
      bg="danger900"
      textColor="gray100"
      p={{ x: '0.75rem', y: '0.25rem' }}
      m={{ b: '10px' }}
    >
      <Text>{message}</Text>
    </Div>
  )
}

Error.propTypes = {
  message: PropTypes.string
}

export default Error
