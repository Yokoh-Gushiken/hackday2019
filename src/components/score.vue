<template>
  <div class="Score">
    <div class="Score__text">{{text}} SCORE</div>
    <div class="Score__text"><span class="Score__num">{{score}}</span>%</div>
  </div>
</template>

<script>
export default {
  props: ['text', 'score'],
}
</script>

<style>
.Score {
}

.Score__text {
  font-size: 1.4rem;
  text-align: right;
}

.Score__num {
  font-size: 2.4rem;
  font-weight: bold;
}
</style>
