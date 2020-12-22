<template>
  <!-- screen where we see all feedbacks -->
  <div class="container mt-3">
    <b-card class="overflow-hidden" v-for="feedback in $store.getters.updFeedbacks" :key="feedback.id">
      <b-row no-gutters>
        <b-col md="3">
          <b-card-img style="max-width: 250px; max-height: 400px;" :src="'http://localhost:3000/'+feedback.name_img" alt="Image" class="rounded-0">
          </b-card-img>
        </b-col>
        <b-col md="9">
          <b-card-body :title="feedback.name_company">
            <p class="mx-0 my-0">{{feedback.address}}</p>
            <b-form-rating readonly class="my-2" 
              v-model="feedback.rate" 
              color="orange" 
              stars="10" 
              size="sm"
              show-value 
              inline value="4">
            </b-form-rating>
            <div class="d-flex align-items-center fromwho">
              <p class="mb-0">{{feedback.username}}</p>
              <time class="ml-3">{{feedback.date.slice(0, 10)}}</time>
            </div>
            <b-card-text>
              {{feedback.review}}
            </b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>
<script>
import { mapState } from 'vuex'
  export default {
    computed: mapState([
      'rowsFeedbacks'
      ]),
    created() {
      this.$store.dispatch('getFeedbacks');
      // this.$store.dispatch('getCompany');
    }
    // methods:{
    //  ...mapActions(['getFeedbacks', 'getCompany'])
    // }
  }
</script>
<style>
.fromwho{
  margin-left: 10px;
  margin-bottom: 15px;
  font-size: 0.8rem;
  color:#848482;
  font-weight:500;
  font-style: italic;
}
</style>