<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
    
    // created() {
    //   this.$store.dispatch('text', {
    //     'message': '今度はあいつを殺す。刑務所行きだ。'
    //   });
    // }
  }
</script>
