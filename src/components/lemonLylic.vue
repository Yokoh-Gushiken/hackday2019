<template>
  <div class="LemonLylic"><span>夢</span><span>な</span><span>ら</span><span>ば</span><span>ど</span><span>れ</span><span>ほ</span><span>ど</span><span>良</span><span>か</span><span>っ</span><span>た</span><span>で</span><span>し</span><span>ょ</span><span>う</span><span>.</span><span>.</span><span>.</span></div>
</template>

<style>
.LemonLylic {
  visibility: hidden;
  margin-top: 30px;
  font-size: 3.2rem;
  text-align: center;
}

.LemonLylic span {
  opacity: 0;
  text-shadow: 10px 10px 10px #333;
}

.LemonLylic__text {
  animation: fadeIn 0.5s linear forwards;
}
</style>
