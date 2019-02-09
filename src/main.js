import Vue from 'vue'
import App from './app'
import { ApolloClient } from 'apollo-client'
import VueApollo from 'vue-apollo'
import router from '@router'
import store from '@state/store'
import '@components/_globals'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

// Don't warn about using the dev version of Vue in development.
Vue.config.productionTip = false

const httpLink = new HttpLink({
  uri: 'https://countries.trevorblades.com/',
})
// const cors = require('cors')
const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true,
})

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

Vue.use(VueApollo)

// If running inside Cypress...
if (window.Cypress) {
  // Ensure tests fail when Vue emits an error.
  Vue.config.errorHandler = window.Cypress.cy.onUncaughtException
}

const app = new Vue({
  router,
  store,
  apolloProvider,
  render: (h) => h(App),
}).$mount('#app')

// If running inside Cypress...
if (window.Cypress) {
  // Attach the app to the window, which can be useful
  // for manually setting state in Cypress commands
  // such as `cy.logIn()`.
  window.__app__ = app
}
