<template>
  <div id="container">
    <div class="search">
      <img alt="Vue logo" src="../assets/logo.png">
      <b-button variant="secondary" @click="$router.push('search')">Looking for something specific? Click here!</b-button>
    </div>
    <h2>Reserved space for VG-kriterer:</h2>
    <p>• Minst ett datavärde sparas i, uppdateras (via en mutation), och hämtas från, Vuex (Ändra inget state på något annat sätt än via mutations)</p>
    <p> • Använd minst ett Vue Router-adressparametervärde</p>
  </div>
</template>
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