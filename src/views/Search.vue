<template>
  <div id="container">
    <div class="search">
      <router-link to="/">
        <img alt="Vue logo" src="../assets/logo.png">
      </router-link>
      <Searchbar @get-result="onGetResult"></Searchbar>
    </div>
    <div>
      <ResultsComponent :lists="lists"></ResultsComponent>
    </div>
  </div>
</template>
<script>
import Searchbar from '@/components/Searchbar.vue'
import ResultsComponent from '@/components/ResultsComponent.vue'
export default{
  name: 'Search',
  data(){
    return{
      lists: []
    }
  },
  components: {
    ResultsComponent,
    Searchbar
  },
  methods: {
    onGetResult(lists){
      this.lists=lists
      // console.log(this.searchResults.searchResults)
    }
  }
}
</script>
<style scoped>
.search {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  align-content: flex-end;
}
img {
  border-radius: 4px;
  padding: 5px;
  width: 14em;
}
</style>