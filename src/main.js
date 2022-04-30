
import App from './App.vue'
import './index.css'
import {apolloClient} from './apollo-client'

import { createApp, provide, h } from 'vue'
import { DefaultApolloClient } from '@vue/apollo-composable'

createApp(App).mount('#app')


const app = createApp({
  setup () {
    provide(DefaultApolloClient, apolloClient)
  },

  render: () => h(App),
})
