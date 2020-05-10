import React from 'react'
import PropTypes from 'prop-types'

const metaTags = ['p', 'span', 'h1', 'h2', 'h3', 'h4', 'div']
const alignment = ['left', 'center', 'right']
const weights = ['lite', 'normal', 'bold']
const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl']
const colors = ['default', 'orange', 'green']

function RenderTag (props) {
  const { children, tag, className } = props
  if (!metaTags.includes(tag)) {
    throw Error(`UIText: tag ${tag} not allowed`)
  }

  return React.createElement(tag, { className }, children)
}

function UIText (props) {
  const { children, align, weight, size, color, className } = props
  let selectedAlignment = ` text-align_${alignment[0]}`
  let selectedWeight = ` font-weight_${weights[1]}`
  let selectedSize = ` font-size_${sizes[2]}`
  let selectedColor = ` text-color_${colors[0]}`

  if (alignment.includes(align)) {
    selectedAlignment = ` text-align_${align}`
  }

  if (weights.includes(weight)) {
    selectedWeight = ` font-weight_${weight}`
  }

  if (sizes.includes(size)) {
    selectedSize = ` font-size_${size}`
  }

  if (colors.includes(color)) {
    selectedColor = ` text-color_${color}`
  }

  const customClassName = `ui-text${selectedAlignment || ''}${selectedWeight || ''}${selectedSize || ''}${selectedColor || ''} ${className || ''}`
  const mutatedProps = {
    ...props,
    className: customClassName
  }

  return (
    <RenderTag {...mutatedProps}>
      { children }
    </RenderTag>
  )
}

UIText.propTypes = {
  children: PropTypes.node,
  align: PropTypes.oneOf(alignment),
  tag: PropTypes.oneOf(metaTags),
  weight: PropTypes.oneOf(weights),
  size: PropTypes.oneOf(sizes),
  color: PropTypes.oneOf(colors)
}

export default UIText
