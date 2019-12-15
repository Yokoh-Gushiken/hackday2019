<template>
  <div id="imgResult">
    <div class="imgResult__wrapper">
      <div class="imgResult__container">
        <div class="imgResult__originAndScore" v-bind:class="{'imgResult__originAndScore--fadeOut': sNegaAnimFinished}">
          <div class="imgResult__imgContainer">
            <img :src="`${originImg}`" v-bind:class="{ 'imgResult__img--wide': originImgWide, 'imgResult__img--tall': originImgTall }">
          </div>
          <div class="imgResult__scoreContainer" v-bind:class="{'imgResult__scoreContainer--fadeIn': scoreAnimFlag}">
            <result text="CATEGORY" :result="category"></result>
            <result text="SCORE" :result="score"></result>
          </div>
        </div>
        <div class="imgResult__normalContent" v-if="!superNega">
          <div class="imgResult__message" v-bind:class="{'imgResult__message--fadeIn': messageAnimFlag}">{{message}}</div>
          <div class="imgResult__posiContent" v-bind:class="{'imgResult__posiContent--inactive': nega, 'imgResult__posiContent--fadeIn': posiContentAnimFlag}">
            <div class="imgResult__btnContainer">
              <div class="imgResult__btn">SHARE</div>
              <router-link to="/" class="imgResult__link">
                <div class="imgResult__btn">HOME</div>
              </router-link>
            </div>
          </div>
          <div class="imgResult__negaContent" v-bind:class="{'imgResult__negaContent--inactive': !nega, 'imgResult__negaContent--fadeIn': negaContentAnimFlag}">
            <div class="imgResult__newAndBtn">
              <div class="imgResult__imgContainer">
                <img :src="`${newImg}`" v-bind:class="{ 'imgResult__img--wide': newImgWide, 'imgResult__img--tall': newImgTall }">
              </div>
              <div class="imgResult__btnContainer imgResult__btnContainer--nega">
                <div class="imgResult__btn">SHARE</div>
                <router-link to="/" class="imgResult__link">
                  <div class="imgResult__btn">HOME</div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="imgResult__superNegaContent" v-if="superNega && !sNegaAnimFinished" v-bind:class="{'imgResult__superNegaContent--fadeIn': superNegaContentAnimFlag}">
          <div class="imgResult__lylic" v-bind:class="{'imgResult__lylic--fadeOut': sNegaAnimFinished}">
            <lemon-lylic></lemon-lylic>
          </div>
<!--
          <audio>
            <source src="../../audio/lemon_mp3.mp3" type="audio/mp3" controls>
          </audio>
-->
        </div>
        <div class="imgResult__superNegaResult" v-if="sNegaAnimFinished" v-bind:class="{'imgResult__superNegaResult--fadeIn': superNegaResultAnimFlag}">
          <div class="imgResult__sNegaMessage">{{sNegaMessage}}</div>
          <div class="imgResult__sNegaImgContainer">
            <img :src="`${newImg}`" v-bind:class="{ 'imgResult__img--wide': newImgWide, 'imgResult__img--tall': newImgTall }">
          </div>
          <div class="imgResult__btnContainer imgResult__btnContainer--sNega">
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
import Result from '../components/result.vue';
import LemonLylic from '../components/lemonLylic.vue';
export default {
  components: {
    Result,
    LemonLylic,
  },

  data() {
    return {
      nega: true, // TODO:api叩いた結果の真偽(一旦ベタ)
      superNega: false, // TODO
      category: 'VIORENCE', // TODO
      score: '70', // TODO
      originImg: 'https://dummyimage.com/600x400/000/fff', //TODO
      newImg: 'https://dummyimage.com/600x400/000/fff', //TODO
      originImgWide: false,
      newImgWide: false,
      originImgTall: false,
      newImgTall: false,
      message: '',
      sNegaMessage: 'あなたが入力した画像はコレでしたよね？？',
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
    this.imgSize(this.originImg, 'origin');
    this.imgSize(this.newImg, 'new');
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
      })
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
      text.style.visibility = 'visible';
      const character = text.querySelectorAll('span');
      character.forEach((chara, i) => {
        setTimeout(() => {
          chara.classList.add('LemonLylic__text');
        }, 150 * i);
      });
    },

    imgSize(path, flag) {
      const imgElm = new Image();
      imgElm.onload = () => {
        const imgWidth = imgElm.naturalWidth;
        const imgHeight = imgElm.naturalHeight;
        if (imgWidth > imgHeight) {
          if (flag === 'origin') {
            this.originImgWide = true;
          } else if (flag === 'new') {
            this.newImgWide = true;
          }
        } else {
          if (flag === 'origin') {
            this.originImgTall = true;
          } else if (flag === 'new') {
            this.newImgTall = true;
          }
        }
      }
      imgElm.src = path;
    },
  }
}
</script>

<style>
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

.imgResult__img {
}

.imgResult__img--wide {
  width: 100%;
  height: auto;
}

.imgResult__img--tall {
  width: auto;
  height: 100%;
}

.imgResult__originAndScore {
  display: flex;
  align-items: stretch;
  justify-content: space-between;
}

.imgResult__originAndScore--fadeOut {
  animation: fadeOut 1s ease forwards;
  display: none;
}

.imgResult__imgContainer {
  width: 50%;
  height: 30vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #000
}

.imgResult__scoreContainer {
  display: flex;
  align-items: flex-end;
  justify-content: space-evenly;
  flex-direction: column;
  opacity: 0;
}

.imgResult__scoreContainer--fadeIn {
  animation: fadeIn 1s ease forwards; 
}

.imgResult__normalContent {
}

.imgResult__message {
  text-align: center;
  font-size: 1.4rem;
  margin-top: 50px;
  opacity: 0;
}

.imgResult__message--fadeIn {
  animation: fadeIn 1s ease forwards;
}

.imgResult__posiContent {
  opacity: 0;
}

.imgResult__posiContent--inactive {
  display: none;
}

.imgResult__posiContent--fadeIn {
  animation: fadeIn 1s ease forwards;
}

.imgResult__negaContent {
  opacity: 0;
}

.imgResult__negaContent--inactive {
  display: none;
}

.imgResult__negaContent--fadeIn {
  animation: fadeIn 1s ease forwards;
}

.imgResult__newAndBtn {
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  margin-top: 50px;
}

.imgResult__btnContainer {
  display: flex;
  align-items: flex-end;
  justify-content: space-evenly;
  flex-direction: column;
}

.imgResult__btnContainer--nega {
  align-items: center;
}

.imgResult__btnContainer--sNega {
  align-items: center;
  flex-direction: row;
  margin-top: 50px;
}

.imgResult__btn {
  width: 150px;
  height: 50px;
  background: #333;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
}

.imgResult__btnContainer--nega > .imgResult__btn {
  margin-top: 0;
}

.imgResult__link {
  display: block;
  color: #fff;
  text-decoration: none;
}

.imgResult__superNegaContent {
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

.imgResult__superNegaContent--fadeIn {
  animation: fadeInIncomplete 2s ease forwards;
}

.imgResult__lylic {
  display: block;
}

.imgResult__lylic--fadeOut {
  display: none;
  animation: fadeOut 1s ease forwards;
}

.imgResult__superNegaResult {
  opacity: 0;
}
.imgResult__superNegaResult--fadeIn {
  animation: fadeIn 1s ease forwards;
}

.imgResult__sNegaMessage {
  text-align: center;
  font-size: 2.4rem;
}

.imgResult__sNegaImgContainer {
  width: 100%;
  height: 55vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #000;
  margin-top: 20px;
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
