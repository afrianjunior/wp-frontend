import React from 'react'
import PropTypes from 'prop-types'
import { UIText } from 'ui'

function UITitle ({ children }) {
  return (
    <UIText tag="h1" weight="lite" size="xxl" align="center" className="ui-title">
      { children }
    </UIText>
  )
}

UITitle.propTypes = {
  children: PropTypes.node
}

export default UITitle
