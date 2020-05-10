import React from 'react'
import client from '@/lib/gql-client'
import { ApolloProvider } from '@apollo/react-hooks'

import App from './app/App'

export default function Root () {
  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  )
}
