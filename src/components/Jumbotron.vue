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
    //only filter of top 100 hits but has potential to go past 2500
    let i = Math.round(Math.random() * 100);
    console.log(i)
    axios.get(`https://api.jikan.moe/v3/anime/${i}`)
        .catch(error => {
        //Currently 50/50 solution. When error: 50% shows jumbotron 50% shows loading
        this.error = true
        console.log(error)
        //Feels like dirty fix for 404-error + pretty slow (Look for alternative fix)
        window.location.reload()
        })
        .then(response => response.data)
        .then(result =>{
            this.animeDatas=result
            console.log(this.animeDatas.title)
        })
        
  },
  methods: {
    onClick(){
        window.location.reload()
    },
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
