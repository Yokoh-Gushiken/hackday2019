<template>
    <div id="top">
        <h1>TOPggggg</h1>
        <router-link to="gucci">Go to gucci</router-link>
        <router-link to="yoko">Go to yoko</router-link>
    </div>
</template>

<script>
  export default {
    name: 'top',
    
    created() {
      console.log(this.$store.getters.getTest);
    }
  }
</script>