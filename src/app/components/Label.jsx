import React from 'react'
import PropTypes from 'prop-types'
import { Tag } from 'atomize'

function Label ({ children, color }) {
  const selectedColor = color || 'info'

  return (
    <Tag
      bg={`${selectedColor}900`}
      textColor="gray100"
      p={{ x: '0.75rem', y: '0.25rem' }}
      m={{ r: '0.5rem', b: '0.5rem' }}
      rounded="lg"
      textSize="tiny"
    >
      {children}
    </Tag>
  )
}

Label.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string
}

export default Label
