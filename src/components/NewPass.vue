<template>
    <b-container class="d-flex justify-content-center">
    <b-form-group style="width: 500px"  >
      <p class="text-center my-3"> For recover password, please enter your email</p>
      E-Mail : 
      <p class="mb-2">{{email}} </p>
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
    const result = await this.$store.dispatch('fetchEmailUser', this.$route.params.token)
    this.email = result.userEmail
  },
  data () {
    return {
      email:'unknown',
      newPass:'',
      newPassRepeat:''
    }
  },
  methods: {
    async saveNewPass() {
      if (this.newPass===this.newPassRepeat) {  // here might be another solution(maybe via v-model)
        const userData = { email: this.email, pass: this.newPass }
        const result = await this.$store.dispatch('updateUser', userData)
        if(result=='success') { 
          alert('Allright! Your password have been saved.')
        }
        alert('Pass not saved. Please try again later.')
      }
   }
  }
}
</script>