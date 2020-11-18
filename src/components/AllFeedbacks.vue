<template>
  <!-- screen where we see all feedbacks -->
  <div class="container mt-3">
    <b-card class="overflow-hidden" v-for="feedback in rowsFeedbacks" :key="feedback.username">
      <b-row no-gutters>
        <b-col md="3">
          <b-card-img style="max-width: 250px; max-height: 400px;" src="https://picsum.photos/400/400/" alt="Image" class="rounded-0">
          </b-card-img>
        </b-col>
        <b-col md="9">
          <b-card-body :title="feedback.username">
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
import { mapActions, mapState } from 'vuex'
  export default {
    computed: mapState(['rowsFeedbacks']),
    created() {
      this.$store.dispatch('getFeedbacks');
    },
    methods:{
      ...mapActions(['getFeedbacks'])
    }
  }
</script>
<style>

</style>