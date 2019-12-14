<template>
  <div id="imgResult">
    <div class="imgResult__wrapper">
      <div class="imgResult__container">
        <div class="imgResult__originAndScore">
          <div class="imgResult__imgContainer">
            <img src="https://dummyimage.com/600x400/000/fff">
          </div>
          <div class="imgResult__scoreContainer">
            <div class="imgResult__score">
              <div class="imgResult__text">POSI SCORE</div>
              <div class="imgResult__text imgResult__text--right"><span class="imgResult__num">50</span>%</div>
            </div>
            <div class="imgResult__score">
              <div class="imgResult__text">NEGA SCORE</div>
              <div class="imgResult__text imgResult__text--right"><span class="imgResult__num">50</span>%</div>
            </div>
          </div>
        </div>
        <div class="imgResult__yume"><span>夢</span><span>な</span><span>ら</span><span>ば</span><span>ど</span><span>れ</span><span>ほ</span><span>ど</span><span>良</span><span>か</span><span>っ</span><span>た</span><span>で</span><span>し</span><span>ょ</span><span>う</span><span>...</span></div>
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
window.addEventListener('DOMContentLoaded', (event) => {
  let nega = true; // ネガポジ判定結果をここに
  if (nega) {
    yumeAnim();
  }
});

const scoreAnim = () => {
};

const yumeAnim = () => {
  const text = document.querySelector('.imgResult__yume');
  text.style.visibility = 'visible';
  const character = text.querySelectorAll('span');
  character.forEach((chara, i) => {
    setTimeout(() => {
      chara.classList.add('imgResult__yumeText');
    }, 150 * i);
  });
};
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

.imgResult__score {
}

.imgResult__text {
  font-size: 1.4rem;
  text-align: right;
}

.imgResult__text--right {
}

.imgResult__num {
  font-size: 2.4rem;
  font-weight: bold;
}

.imgResult__yume {
  visibility: hidden;
  margin-top: 30px;
  font-size: 2.4rem;
  text-align: center;
}

.imgResult__yume span {
  opacity: 0;
}

.imgResult__yumeText {
  animation: fadeIn 0.5s linear forwards;
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
