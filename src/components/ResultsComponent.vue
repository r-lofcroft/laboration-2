<template>
    <div>
        <h2 @click="test">Search Results</h2>
        <p v-for="list in lists" :key="list.title">{{list.title}}</p>
    </div>
</template>
<script>
export default {
  name: 'ResultsComponent',
   props:{
        lists: {
            type: Array        
        }
    },
    methods: {
        test(){
            console.log(this.lists)
        }
    }
}
</script>
