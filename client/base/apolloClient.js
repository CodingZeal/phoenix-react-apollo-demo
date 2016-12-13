/* @flow */

import ApolloClient from 'apollo-client'

export default new ApolloClient({
  dataIdFromObject: result => {
    if (result.id && result.__typename) {
      return result.__typename + result.id
    }
    return null
  }
})
