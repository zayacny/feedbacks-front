<template>
    <b-container class="d-flex justify-content-center">
    <b-form-group style="width: 500px"  >
      <p class="text-center my-3"> For recover password, please enter your email</p>
      E-Mail : 
      <b-form-input class="mb-2" v-model="email"> </b-form-input>
      <b-button @click="recoverPass()"> Send me link on email for recover </b-button>
    </b-form-group> 
  </b-container>
</template>
<script>
export default {
  data () {
    return {
      email:''
    }
  },
  methods: {
    recoverPass() {
      this.$store.dispatch('forgotPass', this.email)
   }
  }
}
</script>