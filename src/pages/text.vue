<template>
  <div id="text">
    <div class="text__wrapper">
      <div class="text__container">
        <div class="text__areawrap">
          <textarea name="name" maxlength="140"></textarea>
        </div>
        <div class="text__buttonWrap">
          <router-link to="text-result" class="text__button">テキスト結果</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.text__wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100vh;
}

.text__container {
  width: 50%;
}

.text__areawrap {
  display: flex;
  align-items: center;
  justify-content: center;
}

textarea{
  width: 100%;
  height: 200px;
  font-size: 35px;
  padding: 5px;
  border-radius: 5px;
  border: 50px solid #333;
}

.text__buttonWrap {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
}

.text__button { 
  width: 20%;
  padding: 16px;
  text-align: center;
  background-color: #333;
  color: #fff;
  text-decoration: none;
}
</style>