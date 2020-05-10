import React from 'react'
import ReactDOM from 'react-dom'
import Root from './Root'

import './assets/main.css'

function createElementRoot () {
  let div = document.createElement('div')
  div.setAttribute('id', 'root')
  return div
}

const elementRoot = createElementRoot()

const root = document.querySelector('body').appendChild(elementRoot)

ReactDOM.render(<Root />, root)
