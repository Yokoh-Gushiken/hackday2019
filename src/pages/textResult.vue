<template>
  <div id="textResult">
    <div class="textResult__wrapper">
      <div class="textResult__container">
        <div class="textResult__originAndScore">
          <div class="textResult__textContainer">
            testaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          </div>
          <div class="textResult__scoreContainer">
            <result text="POSI SCORE" :result="posiScore"></result>
            <result text="NEGA SCORE" :result="negaScore"></result>
          </div>
        </div>
        <lemon-lylic></lemon-lylic>
        <div class="textResult__newAndBtn">
          <div class="textResult__textContainer">
            testaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          </div>
          <div class="textResult__btnContainer">
            <div class="textResult__btn">SHARE</div>
            <router-link to="/" class="textResult__link">
              <div class="textResult__btn">HOME</div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Result from '../components/result.vue';
import LemonLylic from '../components/lemonLylic.vue';
export default {
  components: {
    Result,
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

.textResult__wrapper {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.textResult__container {
  width: 60%;
}

.textResult__originAndScore {
  display: flex;
  align-items: stretch;
  justify-content: space-between;
}

.textResult__textContainer {
  width: 50%;
  height: 30vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #000
}

.textResult__scoreContainer {
  display: flex;
  align-items: flex-end;
  justify-content: space-evenly;
  flex-direction: column;
}

.textResult__newAndBtn {
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  margin-top: 30px;
}

.textResult__btnContainer {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
}

.textResult__btn {
  width: 150px;
  height: 50px;
  background: #333;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.textResult__link {
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
