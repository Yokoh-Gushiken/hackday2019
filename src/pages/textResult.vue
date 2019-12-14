<template>
  <div id="textResult">
    <div class="textResult__wrapper">
      <div class="textResult__container">
        <div class="textResult__originAndScore">
          <div class="textResult__textContainer">
            <div class="textResult__text">{{originText}}</div>
          </div>
          <div class="textResult__scoreContainer" v-bind:class="{'textResult__scoreContainer--fadeIn': scoreAnimFlag}">
            <result text="POSI SCORE" :result="posiScore"></result>
            <result text="NEGA SCORE" :result="negaScore"></result>
          </div>
        </div>
        <div class="textResult__message" v-bind:class="{'textResult__message--fadeIn': messageAnimFlag}">{{message}}</div>
        <div class="textResult__posiContent" v-bind:class="{'textResult__posiContent--inactive': nega, 'textResult__posiContent--fadeIn': posiContentAnimFlag}">
          <div class="textResult__btnContainer">
            <div class="textResult__btn">SHARE</div>
            <router-link to="/" class="textResult__link">
              <div class="textResult__btn">HOME</div>
            </router-link>
          </div>
        </div>
        <div class="textResult__negaContent" v-bind:class="{'textResult__negaContent--inactive': !nega, 'textResult__negaContent--fadeIn': negaContentAnimFlag}">
          <div class="textResult__newAndBtn">
            <div class="textResult__textContainer">
              <div class="textResult__text">{{newText}}</div>
            </div>
            <div class="textResult__btnContainer textResult__btnContainer--nega">
              <div class="textResult__btn">SHARE</div>
              <router-link to="/" class="textResult__link">
                <div class="textResult__btn">HOME</div>
              </router-link>
            </div>
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
      nega: false, // api叩いた結果の真偽(一旦ベタ)
      superNega: false, // TODO
      posiScore: '50', // べ
      negaScore: '50', // べ
      originText: 'tesssssssssssssssssssssssssssssssssssssssssssssssssssstteatea',
      newText: 'lemonlemonefmlomeomooookoelomeomoooeleoeleleleleoemo',
      message: '',
      scoreAnimFlag: false,
      messageAnimFlag: false,
      posiContentAnimFlag: false,
      negaContentAnimFlag: false,
    }
  },

  mounted: function() {
    if (this.nega) {
      this.message = 'ねが的文言'
    } else {
      this.message = 'そのままtweetしていいよ的文言'
    }

    new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.scoreAnim());
      }, 2000);
    })
    .then((resolve) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          this.messageAnim();
          if (this.nega) {
            this.negaContentAnim();
          } else {
            this.posiContentAnim();
          }
        }, 2000);
      });
    });

    if (this.superNega) {
      this.yumeAnim(); 
    }
  },

  methods: {
    scoreAnim() {
      this.scoreAnimFlag = true;
    },

    messageAnim() {
      this.messageAnimFlag = true;
    },

    posiContentAnim() {
      this.posiContentAnimFlag = true;
    },

    negaContentAnim() {
      this.negaContentAnimFlag = true;
    },

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
  border: 1px solid #000;
  word-break: break-all;
}

.textResult__text {
  padding: 10%;
}

.textResult__scoreContainer {
  display: flex;
  align-items: flex-end;
  justify-content: space-evenly;
  flex-direction: column;
  opacity: 0;
}

.textResult__scoreContainer--fadeIn {
  animation: fadeIn 1s ease forwards; 
}

.textResult__message {
  text-align: center;
  font-size: 1.4rem;
  margin-top: 30px;
  opacity: 0;
}

.textResult__message--fadeIn {
  animation: fadeIn 1s ease forwards;
}

.textResult__posiContent {
  opacity: 0;
}

.textResult__posiContent--inactive {
  display: none;
}

.textResult__posiContent--fadeIn {
  animation: fadeIn 1s ease forwards;
}

.textResult__negaContent {
  opacity: 0;
}

.textResult__negaContent--inactive {
  display: none;
}

.textResult__negaContent--fadeIn {
  animation: fadeIn 1s ease forwards;
}

.textResult__newAndBtn {
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  margin-top: 30px;
}

.textResult__btnContainer {
  display: flex;
  align-items: flex-end;
  justify-content: space-evenly;
  flex-direction: column;
}

.textResult__btnContainer--nega {
  align-items: center;
}

.textResult__btn {
  width: 150px;
  height: 50px;
  background: #333;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
}

.textResult__btnContainer--nega > .textResult__btn {
  margin-top: 0;
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
