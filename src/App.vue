<template>
  <div class="app">
    <div class="text-center">
      <h1>F e e d b a c k s</h1>
      <b-icon icon="camera" font-scale="3"></b-icon>
      <Nav/>
    </div>
    <div>
        <Content/>
        <Footer/>
    </div>
  </div>
</template>

<script>
import Nav from './components/Nav'
import Content from './components/Content'
// import Sidebar from './components/Sidebar'

export default {
  
  name: 'App',
  components: {
       Nav,
       Content // router here
  },
  data() {
    return {
      
    }
  }
}
</script> 

<style >

.app {
  background-color: lightgreen;
  min-height: 100vh;
}
   
 </style>
