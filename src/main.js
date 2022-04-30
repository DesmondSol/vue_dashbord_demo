
import App from './App.vue'
import './index.css'
import {apolloClient} from './apollo-client'
//import { router } from "./router/router.vue"
import { createApp, provide, h } from 'vue'
import { DefaultApolloClient } from '@vue/apollo-composable'



const app = createApp({
  setup () {
    provide(DefaultApolloClient, apolloClient)
  },

  render: () => h(App),
})

app.mount('#app')