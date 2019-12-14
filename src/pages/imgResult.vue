<template>
  <div id="imgResult">
    <div class="imgResult__wrapper">
      <div class="imgResult__container">
        <div class="imgResult__originAndScore">
          <div class="imgResult__imgContainer">
            <img src="https://dummyimage.com/600x400/000/fff">
          </div>
          <div class="imgResult__scoreContainer">
            <score text="POSI" :score="posiScore"></score>
            <score text="NEGA" :score="negaScore"></score>
          </div>
        </div>
        <lemon-lylic></lemon-lylic>
        <div class="imgResult__newAndBtn">
          <div class="imgResult__imgContainer">
            <img src="https://dummyimage.com/600x400/000/fff">
          </div>
          <div class="imgResult__btnContainer">
            <div class="imgResult__btn">SHARE</div>
            <router-link to="/" class="imgResult__link">
              <div class="imgResult__btn">HOME</div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Score from '../components/score.vue';
import LemonLylic from '../components/lemonLylic.vue';
export default {
  components: {
    Score,
    LemonLylic,
  },

  data() {
    return {
      nega: true, // api叩いた結果の真偽(一旦ベタ)
      posiScore: '50', // べ
      negaScore: '50', // べ
    }
  },

  mounted: function() {
    if (this.nega) {
      this.yumeAnim(); 
    }
  },

  methods: {
    yumeAnim() { // 一旦ここに書いてる
      const text = document.querySelector('.LemonLylic');
      console.log('aaa', text);
      text.style.visibility = 'visible';
      const character = text.querySelectorAll('span');
      character.forEach((chara, i) => {
        setTimeout(() => {
          chara.classList.add('LemonLylic__text');
        }, 150 * i);
      });
    }
  }
}

</script>

<style>
img {
  height: 100%;
}

.imgResult__wrapper {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.imgResult__container {
  width: 60%;
}

.imgResult__originAndScore {
  display: flex;
  align-items: stretch;
  justify-content: space-between;
}

.imgResult__imgContainer {
  height: 30vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #000
}

.imgResult__scoreContainer {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
}

.imgResult__newAndBtn {
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  margin-top: 30px;
}

.imgResult__btnContainer {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
}

.imgResult__btn {
  width: 150px;
  height: 50px;
  background: #333;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.imgResult__link {
  display: block;
  color: #fff;
  text-decoration: none;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

</style>
