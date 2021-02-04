<template>
  <div v-if="error">
    <b-spinner type="grow" label="Loading..."></b-spinner>
  </div>
  <div v-else>
    <b-jumbotron style="background-color: #ece4d9" id="jumbotron">
      <template #header> 
          <img  :src=animeDatas.image_url alt="img">
      </template>
      <template #lead>
        <h2>{{animeDatas.title}}</h2>
      </template>
      <p>Status: {{animeDatas.status}}</p>
      <p>Episodes: {{animeDatas.episodes}}</p>
      <p>{{animeDatas.synopsis}}</p>
      <p>Rating: {{animeDatas.rating}}</p>
      <b-button class="button" variant="primary" @click="onClick">Refresh</b-button>
      <b-button class="button" variant="secondary">Save!</b-button>
    </b-jumbotron>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Jumbotron',
  data(){
      return{
          animeDatas: [],
          error: false
      }
  },
  created(){
    this.reloadRequest()
  },
  methods: {
    onClick(){
        this.reloadRequest()
    },
    //Reloads axios.get when 404 response. (works better than reloading window)
    reloadRequest(){
      let i = Math.round(Math.random() * 1000);
      axios.get(`https://api.jikan.moe/v3/anime/${i}`)
        .then(response => response.data)
        .catch(handleErrors)
        .then(result =>{
            this.animeDatas=result
            console.log(this.animeDatas.title)
        })
        function handleErrors(err){
          if(err.response.status === 404){
            console.log('Problem with response.',err.response.status)
            this.defaultLoad()
          } else{
            console.log('Other Error')
          }
        }
    },
    defaultLoad(){
      axios.get(`https://api.jikan.moe/v3/anime/1`)
      .then(response => response.data)
      .then(result =>{
        this.animeDatas=result
        console.log(this.animeDatas.title)
      })
    }
  }
}
</script>

<style scoped>
.button{
  margin: 1rem
}
#jumbotron{
  margin: 0.5rem;
  border-radius: 2em;
}
img {
  /*  To contain the image to the confines of the div  */
  max-width: 100%;
}
</style>
