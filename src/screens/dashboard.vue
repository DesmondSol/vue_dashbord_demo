<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import headers from '../components/header.vue'
import footers from '../components/footer.vue'
import sidebar from '../components/sidebar.vue'
</script>

<template> 
<div class="flex min-h-screen">
  <sidebar />

   <div class="flex-1">
     <headers /> 

     <h1>hello</h1> 
   </div>
  

</div>
  <footers />

</template>
