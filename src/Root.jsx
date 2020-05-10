import React from 'react'
import { MainProvider } from './context/mainContext'

import App from './app/App'

export default function Root () {
  return (
    <MainProvider>
      <App />
    </MainProvider>
  )
}
