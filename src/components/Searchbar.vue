<template>
  <div id="container">
    <b-form-group
      id="searchBar"
      label-for="input-1"
      valid-feedback="Thank you!"
      :invalid-feedback="invalidFeedback"
      :state="state"
    >
      <b-form-input id="input-1" v-model="text" :state="state" trim></b-form-input>
    </b-form-group>
    <router-link :to="'/search'">
      <b-button variant="secondary" @click="onClick">Search</b-button>
    </router-link>
  </div>
</template>

<script>
import axios from 'axios';

  export default {
    computed: {
      state() {
        return this.text.length >= 3
      },
      invalidFeedback() {
        if (this.text.length > 0) {
          return 'Enter at least 3 characters.'
        }
        return 'Enter at least 3 characters.'
      }
    },
    data() {
      return {
        text: '',
        searchResults: [],
        lists:[]
      }
    },
    methods: {
      onClick(){
        //Clear array for new search
        this.lists = []
        if(this.text.length < 3){
          return
        } else{
          let query = this.text
          for(let i=0; i<15; i++)
          axios.get(`https://api.jikan.moe/v3/search/anime?q=${query}`)
          .catch(function (error) {
          // handle error
          console.log(error); 
          })
          .then(response => response.data)
          .then(result =>{
              this.searchResults=result
              this.lists.push({ title: this.searchResults.results[i].title})
              this.$emit('get-result', this.lists)
          })
        }
        console.log(this.lists)
      }
    }
  }
</script>

<style scoped>
#container{
  text-align: right;
  display: flex;
  align-items: baseline;
}
#searchBar{
  vertical-align: middle;
  width: 25em;
  text-align: center;
  padding-right: 1em;
  
}
.mb-2{
  max-width: 50%;
  max-height: 50%;
  margin: 1em;
}
</style>