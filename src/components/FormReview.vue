<template>
   <b-container fluid="sm">
      <b-row>
         <b-col sm="3">
            <label for="name">Your full name :</label>
         </b-col>
         <b-col sm="9">
            <b-form-input id="name" :state="null" v-model="user.userName" placeholder="example: John Smith"></b-form-input>
         </b-col>
      </b-row>
      <b-row>
         <b-col sm="3">
            <label for="input-valid">What is Feedback about :</label>
         </b-col>
         <b-col sm="9">
            <b-form-input id="input-valid" v-model="user.orgName" :state="null" placeholder="Place or Company"></b-form-input>
         </b-col>
      </b-row>
      <b-row>
         <b-col sm="3">
            <label for="address">Address of organization :</label>
         </b-col>
         <b-col sm="9">
            <b-form-input id="address" v-model="user.address" :state="null" placeholder="Write here">
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
               v-model="user.feedbackText"
               :state="user.feedbackText.length >= 50"
               placeholder="Enter at least 50 characters"
               rows="3">
            </b-form-textarea>
         </b-col>
         <b-col sm="1">
            Date of event : 
         </b-col>
         <b-col sm="3">
            <div>
               <b-form-datepicker id="datepicker" v-model="user.date" class="mb-2">
               </b-form-datepicker>
            </div>
         </b-col>
      </b-row>
      <b-row>
         <b-col sm="3">
            <label for="input-valid">Please, load Photo from that place :</label>
         </b-col>
         <b-col sm="9">
            <div>
              <b-form-file 
               size = "sm"
               v-model="user.fileImg"
               :state="Boolean(user.fileImg)"
               placeholder="Click here for choose"
               accept=".jpg, .png, .gif, jpeg">   
               </b-form-file>
            </div>
         </b-col>
      </b-row>
      <div class="text-center">
         <b-form-rating class="mt-3" 
            v-model="user.rate" 
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
import { mapActions } from 'vuex'
export default {
  data(){
    return {
       user: {
         userName: '',
         orgName: '',
         feedbackText:'',
         address: '',
         date: Date,
         rate: null,
         fileImg: null
       }
    }
  },
  methods: {
     ...mapActions(['saveUser', 'writeFeedback', 'savePhoto', 'saveCompany', 'fetchIdCompany']),

    async saveForm(){
      const filename_img = await this.savePhoto(this.fileImg)
      const oneFeedback = {
        ...this.user,
        id_company: 0,
        filename_img: filename_img
      }
      await this.saveUser(oneFeedback)
      oneFeedback.id_company = await this.saveCompany(oneFeedback)
      this.writeFeedback(oneFeedback)
    }
  }
}
</script>

<style>
 .container-sm .row{
 margin-top: 12px;
}
</style>