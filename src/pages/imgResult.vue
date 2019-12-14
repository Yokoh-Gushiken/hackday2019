<template>
  <div id="imgResult">
    <div class="imgResult__wrapper">
      <div class="imgResult__container">
        <div class="imgResult__originAndScore">
          <div class="imgResult__imgContainer">
            <img :src="`${originImg}`" v-bind:class="{'imgResult__img--wide': originImgWide, 'imgResult__img--tall': !originImgWide}">
          </div>
          <div class="imgResult__scoreContainer">
            <result text="CATEGORY" :result="category"></result>
            <result text="SCORE" :result="score"></result>
          </div>
        </div>
        <lemon-lylic></lemon-lylic>
        <div class="imgResult__newAndBtn">
          <div class="imgResult__imgContainer">
            <img :src="`${newImg}`" v-bind:class="{'imgResult__img--wide': newImgWide, 'imgResult__img--tall': !newImgWide}">
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
      category: 'VIORENCE', // TODO
      score: '70', // TODO
      originImg: 'https://dummyimage.com/200x400/000/fff', //TODO
      newImg: 'https://dummyimage.com/600x400/000/fff', //TODO
      originImgWide: false,
      newImgWide: false,
    }
  },

  mounted: function() {
    if (this.nega) {
      this.yumeAnim(); 
    }
    this.imgSize(this.originImg, 'this.originImgWide');
    this.imgSize(this.newImg, 'this.newImgWide');
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
    },
    imgSize(path, flag) {
      const element = new Image();
      element.onload = function() {
        const imgWidth = element.naturalWidth;
        const imgHeight = element.naturalHeight;
        if (imgWidth > imgHeight) {
          console.log('test');
          flag = true;
        } else {
          flag = false;
        }
        console.log(imgWidth);
        console.log(imgHeight);
      }
      element.src = path;
    },
  }
}

</script>

<style>
.imgResult__img--wide {
  width: 100%;
}

.imgResult__img--tall {
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
