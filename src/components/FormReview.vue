<template>
   <b-container fluid="sm">
      <b-row>
         <b-col sm="3">
            <label for="name">Your full name :</label>
         </b-col>
         <b-col sm="9">
            <b-form-input id="name" :state="null" v-model="userName" placeholder="example: John Smith"></b-form-input>
         </b-col>
      </b-row>
      <b-row>
         <b-col sm="3">
            <label for="input-valid">What is Feedback about :</label>
         </b-col>
         <b-col sm="9">
            <b-form-input id="input-valid" v-model="orgName" :state="null" placeholder="Place or Company"></b-form-input>
         </b-col>
      </b-row>
      <b-row>
         <b-col sm="3">
            <label for="address">Address of organization :</label>
         </b-col>
         <b-col sm="9">
            <b-form-input id="address" v-model="address" :state="null" placeholder="Write here">
            </b-form-input>
         </b-col>
      </b-row>
      <b-row>
         <b-col sm="3">
            <label for="input-invalid">Write your Feedback : </label>
         </b-col>
         <b-col sm="3">
            <b-form-textarea
               id="textarea-state"
               v-model="feedbackText"
               :state="feedbackText.length >= 50"
               placeholder="Enter at least 50 characters"
               rows="3">
            </b-form-textarea>
         </b-col>
         <b-col sm="1">
            Date of event : 
         </b-col>
         <b-col sm="3">
            <div>
               <b-form-datepicker id="datepicker" v-model="date" class="mb-2">
               </b-form-datepicker>
            </div>
         </b-col>
      </b-row>
      <div class="text-center">
         <b-form-rating class="mt-3" 
            v-model="rate" 
            color="orange" 
            stars="10" 
            show-value 
            show-value-max
            inline value="4">
         </b-form-rating>
        <div class="my-3 mx-3 text-center">
          <b-button class="mr-3" to="/donefeedback" @click='saveForm()'> Save Feedback </b-button>
          <b-button> Cancel </b-button>
        </div>
      </div>
   </b-container>
</template>

<script>
import { saveUser, additionFeedback } from '@/services/feedbacks.js'
export default {
  data(){
    return {
      userName: '',
      orgName: '',
      feedbackText:'',
      address: '',
      date: Date,
      rate: null
    }
  },
  methods: {
    saveForm(){
      const oneFeedback = {
        userName: this.userName,
        orgName: this.orgName,
        feedbackText: this.feedbackText,
        address: this.address,
        date: this.date,
        rate: this.rate
      }
      console.log('form.vue : Press SaveForm')
      saveUser( oneFeedback )
      additionFeedback(oneFeedback)
    }
  }
}
</script>

<style>
 .container-sm .row{
 margin-top: 12px;
}
</style>