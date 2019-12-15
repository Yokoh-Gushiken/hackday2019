<template>
  <div id="textResult">
    <div class="textResult__wrapper">
      <div class="textResult__container">
        <div class="textResult__originAndScore" v-bind:class="{'textResult__originAndScore--fadeOut': sNegaAnimFinished}">
          <div class="textResult__textContainer">
            <div class="textResult__text">{{originText}}</div>
          </div>
          <div class="textResult__scoreContainer" v-bind:class="{'textResult__scoreContainer--fadeIn': scoreAnimFlag}">
            <result text="POSI SCORE" :result="posiScore"></result>
            <result text="NEGA SCORE" :result="negaScore"></result>
          </div>
        </div>
        <div class="textResult__normalContent" v-if="!superNega">
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
        <div class="textResult__superNegaContent" v-if="superNega && !sNegaAnimFinished" v-bind:class="{'textResult__superNegaContent--fadeIn': superNegaContentAnimFlag}">
          <div class="textResult__lylic" v-bind:class="{'textResult__lylic--fadeOut': sNegaAnimFinished}">
            <lemon-lylic></lemon-lylic>
          </div>
<!--
          <audio>
            <source src="../../audio/lemon_mp3.mp3" type="audio/mp3" controls>
          </audio>
-->
        </div>
        <div class="textResult__superNegaResult" v-if="sNegaAnimFinished" v-bind:class="{'textResult__superNegaResult--fadeIn': superNegaResultAnimFlag}">
          <div class="textResult__sNegaMessage">{{sNegaMessage}}</div>
          <div class="textResult__sNegaTextContainer">
            <div class="textResult__text">{{newText}}</div>
          </div>
          <div class="textResult__btnContainer textResult__btnContainer--sNega">
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
      nega: false, // api叩いた結果の真偽(一旦ベタ)
      superNega: false, // TODO
      posiScore: 0, // べ
      negaScore: 0, // べ
      originText: this.$store.getters.text,
      newText: this.$store.getters.text,
      message: '',
      sNegaMessage: 'あなたが入力した文章はコレでしたよね？？',
      scoreAnimFlag: false,
      messageAnimFlag: false,
      posiContentAnimFlag: false,
      negaContentAnimFlag: false,
      superNegaContentAnimFlag: false,
      superNegaResultAnimFlag: false,
      sNegaAnimFinished: false,
    }
  },

  mounted: function() {
    this.posiScore = Math.floor(this.$store.getters.positive * 100);
    this.negaScore = Math.floor(this.$store.getters.negative * 100);
    
    if (this.negaScore >= 90){
      this.superNega = true;
    }
    else if (this.negaScore < 90 && this.negaScore >= 80) {
      this.nega = true;
      this.message = 'LOSERになりかけてませんか？'
    } else {
      this.message = 'そのままtweetしなよっ！'
    }

    new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.scoreAnim());
      }, 2000);
    })
    .then((resolve) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          if (!this.superNega) {
            this.messageAnim();
            if (this.nega) {
              resolve(this.negaContentAnim());
            } else {
              resolve(this.posiContentAnim());
            }
          } else {
            resolve(this.superNegaContentAnim());
          }
        }, 2000);
      });
    })
    .then((resolve) => {
      setTimeout(() => {
        if (this.superNega) {
          this.superNegaResultAnim();
        }
      }, 5000);
    });
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

    superNegaContentAnim() {
      this.superNegaContentAnimFlag = true;
      this.yumeAnim();
    },

    superNegaResultAnim() {
      this.superNegaResultAnimFlag = true;
      this.sNegaAnimFinished = true;
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

.textResult__originAndScore--fadeOut {
  animation: fadeOut 1s ease forwards;
  display: none;
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

.textResult__normalContent {
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

.textResult__btnContainer--sNega {
  align-items: center;
  flex-direction: row;
  margin-top: 50px;
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

.textResult__superNegaContent {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #000;
  color: #fff;
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.textResult__superNegaContent--fadeIn {
  animation: fadeInIncomplete 2s ease forwards;
}

.textResult__lylic {
  display: block;
}

.textResult__lylic--fadeOut {
  display: none;
  animation: fadeOut 1s ease forwards;
}

.textResult__superNegaResult {
  opacity: 0;
}
.textResult__superNegaResult--fadeIn {
  animation: fadeIn 1s ease forwards;
}

.textResult__sNegaMessage {
  text-align: center;
  font-size: 2.4rem;
}

.textResult__sNegaTextContainer {
  width: 100%;
  height: 55vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #000;
  margin-top: 20px;
  word-break: break-all;
  font-size: 3.2rem;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fadeInIncomplete {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.9;
  }
}

@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

</style>
