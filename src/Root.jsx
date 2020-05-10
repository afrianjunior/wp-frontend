import React from 'react'
import client from '@/lib/gql-client'
import { ApolloProvider } from '@apollo/react-hooks'
import { StyleReset } from 'atomize'
import { Provider as StyletronProvider } from 'styletron-react'
import { Client as Styletron } from 'styletron-engine-atomic'

import App from './app/App'

const engine = new Styletron()

export default function Root () {
  return (
    <StyletronProvider value={engine}>
      <ApolloProvider client={client}>
        <StyleReset />
        <App />
      </ApolloProvider>
    </StyletronProvider>
  )
}
