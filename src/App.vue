<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import headers from './components/header.vue'
import footers from './components/footer.vue'
import sidebar from './components/sidebar.vue'
import bodys from './components/bodyComp/list_of_cont.vue'
 

// import signin from '../screens/signin.vue'
// import NotFound from '../screens/notfound.vue'

// const routes = {
//   '/': Home,
//   '/signin': signin
// }

// const currentPath = ref(window.location.hash)

// window.addEventListener('hashchange', () => {
//   currentPath.value = window.location.hash
// })

// const currentView = computed(() => {
//   return routes[currentPath.value.slice(1) || '/'] || NotFound
// })

</script>

<template>  
<div class="flex min-h-screen"> 
  <sidebar />

   <div class="flex-1"> 
     <headers /> 

      <bodys />
   </div>
  
 
</div>
  <footers />

</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #000000;
  margin-top: 0px; 
}
</style>
