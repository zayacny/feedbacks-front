<template>
  <b-container class="d-flex justify-content-center">
    <b-form-group style="width: 500px"  >
      <p class="text-center my-3"> Authentication</p>
      E-Mail : 
      <b-form-input class="mb-2" v-model="email"> </b-form-input>
      Password: 
      <b-form-input class="mb-2" type="password" v-model="pass"> </b-form-input>
      <b-button to="/" class="w-100 my-2" @click="logIn()"> Log in </b-button>
      <b-button to="/recover" class="w-100 my-2" > Forgot password </b-button>
    </b-form-group> 
  </b-container>
</template>
<script>
export default {
  data(){
    return {
      email: '',
      pass: ''
    }
  },
 methods: {
   async logIn() {
     const userData = { name:this.name, email:this.email, pass: this.pass }
     let authorization = false
       authorization = await this.$store.dispatch('logIn', userData)
       if (authorization) { 
         alert('Authentication success! ')
        } else {
           alert('Wrong Password/Email or User doesnt exist ! Please, try again.  ') 
           console.error('Wrong pass or user not exist.')
        }
   }
 }  
}
</script>