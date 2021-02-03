<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/saved">Saved</router-link>
      <div v-if="online">
      <b-icon-shield-fill-check v-b-tooltip.hover title="Online"  style="float: right; padding: 2em"></b-icon-shield-fill-check>
      </div>
      <div v-else>
      <b-icon-shield-fill-x v-b-tooltip.hover title="Offline" style="float: right; padding: 2em" ></b-icon-shield-fill-x>
      </div>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
    data() {
      return{
        online: true
      }
    },
    mounted(){
      addEventListener('offline', () => {
        this.online = false
        console.log('Offline')
      }),
      window.addEventListener('online', () => {
        this.online = true
        console.log('Online')
      })
    },
    watch: {
      online(online, offline){
        if(this.online === true){
        console.log(`You have gone ${online}!.`)
      } else if(this.online === false){
        console.log(`You have gone ${offline}!`)
      }
    }
  }
}
</script>
<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 85em;
  margin: auto;
  padding-bottom: 50px;
}
#nav{
  text-align: left;
}
#nav a {
  font-weight: bold;
  color: #5b403f;
}

#nav a.router-link-exact-active {
  color: #A87674;
}
</style>
