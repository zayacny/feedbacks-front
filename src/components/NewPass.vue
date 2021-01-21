<template>
    <b-container class="d-flex justify-content-center">
    <b-form-group style="width: 500px"  >
      <p class="text-center my-3"> For recover password, please enter your email</p>
      E-Mail : 
      <b-form-input class="mb-2" :placeholder="email" v-model="email"> </b-form-input>
      New Password :
      <b-form-input class="mb-2" v-model="newPass"> </b-form-input>
      Repeat password : 
      <b-form-input class="mb-2" v-model="newPassRepeat"> </b-form-input>
      <b-button @click="saveNewPass()"> Save my new password </b-button>
    </b-form-group> 
  </b-container>
</template>
<script>
export default {
  async created() {
    console.log('token route params 1 ::: ', this.$route.params.token)
    this.email = await this.$store.dispatch('fetchEmailUser', this.$route.params.token)
  },
  data () {
    return {
      email:'unknown',
      newPass:'',
      newPassRepeat:''
    }
  },
  methods: {
    saveNewPass() {
      if (this.newPass===this.newPassRepeat) {  // here might be another solution(maybe via v-model)
        const userData = { email: this.email, pass: this.newPass }
        this.$store.dispatch('updateUser', userData)
      }
      
   }
  }
}
</script>