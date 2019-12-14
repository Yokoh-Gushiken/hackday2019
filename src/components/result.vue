<template>
  <div class="Result">
    <div class="Result__text">{{text}}</div>
    <div class="Result__text"><span class="Result__num">{{result}}</span><span v-if="perFlag">%</span></div>
  </div>
</template>

<script>
export default {
  props: ['text', 'result'],
  data() {
    return {
      perFlag: true,
    }
  },
  mounted: function() {
    if (this.text === 'CATEGORY') {
      this.perFlag = false;
    }
  },
}
</script>

<style>
.Result {
}

.Result__text {
  font-size: 1.4rem;
  text-align: right;
}

.Result__num {
  font-size: 2.4rem;
  font-weight: bold;
}
</style>
