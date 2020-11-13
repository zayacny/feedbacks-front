<template>
  <!-- screen where we see all feedbacks -->
  <div class="container mt-3">
    <b-card class="overflow-hidden">
      <b-row no-gutters>
        <b-col md="3">
          <b-card-img style="max-width: 250px; max-height: 400px;" src="https://picsum.photos/400/400/" alt="Image" class="rounded-0">
          </b-card-img>
        </b-col>
        <b-col md="9">
          <b-card-body title="Company name">
            <b-card-text>
              This is a wider card with supporting text as a natural lead-in to additional content.
              This content is a little bit longer. Some quick example text to build on the card title and make up the
              bulk of the card's content.
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, dignissimos eum. Sunt, labore qui?
              Neque excepturi soluta alias, labore error deleniti similique ipsa nulla iste maxime dignissimos quia quas
              ipsum.
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
    <b-card class="overflow-hidden">
      <b-row no-gutters>
        <b-col md="3">
          <b-card-img style="max-width: 250px" src="https://picsum.photos/400/300/" alt="Image" class="rounded-0">
          </b-card-img>
        </b-col>
        <b-col md="9">
          <b-card-body title="Company name">
            <b-card-text>
              This is a wider card with supporting text as a natural lead-in to additional content.
              This content is a little bit longer. Some quick example text to build on the card title and make up the
              bulk of the card's content.
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, dignissimos eum. Sunt, labore qui?
              Neque excepturi soluta alias, labore error deleniti similique ipsa nulla iste maxime dignissimos quia quas
              ipsum.
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
    <b-card class="overflow-hidden">
      <b-row no-gutters>
        <b-col md="3">
          <b-card-img style="max-width: 250px; max-height: 400px;" src="https://picsum.photos/300/400/" alt="Image" class="rounded-0">
          </b-card-img>
        </b-col>
        <b-col md="9">
          <b-card-body title="Company name">
            <b-card-text>
              This is a wider card with supporting text as a natural lead-in to additional content.
              This content is a little bit longer. Some quick example text to build on the card title and make up the
              bulk of the card's content.
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, dignissimos eum. Sunt, labore qui?
              Neque excepturi soluta alias, labore error deleniti similique ipsa nulla iste maxime dignissimos quia quas
              ipsum.
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>
<script>
import { mapActions, mapMutations, mapState } from 'vuex'
 
  export default {
    computed: mapState(['rowsFeedbacks']),
    created() {
      // this.$store.dispatch('nmaeFeunc');
      this.nmaeFeunc();
    },
    methods:{
      ...mapActions(['nmaeFeunc'])
    }
  }
</script>
<style>

</style>