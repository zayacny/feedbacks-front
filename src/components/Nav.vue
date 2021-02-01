<template>
  <div>
  <b-navbar class="d-flex p-2 justify-content-center" toggleable="lg" type="dark" variant="info">
    <b-navbar-brand to="/"> Home </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item  to="/write-review"> Write Feedback </b-nav-item>
        <b-nav-item  to="/allfeedbacks"> All Feedbacks </b-nav-item>
        <b-nav-item  to="/rating"> Rating </b-nav-item>
        <b-nav-item  to="/bottom"> Bottom </b-nav-item>
        <b-nav-item  to="/rules"> Rules </b-nav-item>
        <b-nav-item  to="/about"> About </b-nav-item>
      </b-navbar-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <div class="mx-3 my-auto">Total Feedbakcs : {{$store.getters.getCountFeedbacks}}</div>
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <em>User</em>
          </template>
          <b-dropdown-item v-if="this.$store.state.login===false" to="/authentication">Log In</b-dropdown-item>
          <b-dropdown-item v-if="this.$store.state.login===true" to="/" @click="logOut()">Log Out</b-dropdown-item>
          <b-dropdown-item to="/registration">Registration</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
  
  export default {
    methods: {
      logOut() {
        this.$store.dispatch('logOut')
      }
    }
  }
</script>

<style scoped>

</style>