<template>
  <b-container class="d-flex justify-content-center">
    <b-form-group style="width: 500px"  >
      <p class="text-center my-3"> Registration</p>
      Name :
      <b-form-input class="mb-2" v-model="name"> </b-form-input>
      E-Mail : 
      <b-form-input class="mb-2" v-model="email"> </b-form-input>
      Password: 
      <b-form-input class="mb-2" v-model="pass"> </b-form-input>
      <b-button class="w-40 my-4" @click="regIn()"> Registration </b-button>
    </b-form-group> 
  </b-container>
</template>
<script>
export default {
  data(){
    return {
      name: '',
      email: '',
      pass: ''
    }
  },
 methods: {
   regIn() {
     window.localStorage.setItem('accessToken', '' )
     const userData = { name:this.name, email:this.email, pass: this.pass }
     this.$store.dispatch('regIn', userData)
   }
 }  
}
</script>