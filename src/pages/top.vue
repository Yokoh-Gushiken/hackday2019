<template>
  <div id="top">
    <div class="Top__wrapper">
      <div class="Top__twocolumn">
        <div class="Top__mainBtn Top__mainBtn--left">
          <router-link to="text" class="Top__link">TEXT</router-link>
        </div>
        <div class="Top__cover Top__cover--right">
          <div class="Top__coverDesc">テキストでみる的文言</div>
        </div>
      </div>
      <div class="Top__twocolumn">
        <div class="Top__mainBtn Top__mainBtn--right">
          <router-link to="img" class="Top__link">IMG</router-link>
        </div>
        <div class="Top__cover Top__cover--left">
          <div class="Top__coverDesc">画像をみる的文言</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.Top__wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.Top__twocolumn {
  width: 50%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.Top__mainBtn--left:hover + .Top__cover--right {
  right: 0;
}
.Top__mainBtn--right:hover + .Top__cover--left {
  left: 0;
}

.Top__mainBtn {
  font-size: 108px;
}

.Top__link {
  text-decoration: none;
  color: #000;
}

.Top__cover {
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100vh;
  background: #333;
  color: #fff;
}

.Top__cover--left {
  left: -50%;
  transition: left 1s ease;
}

.Top__cover--right {
  right: -50%;
  transition: right 1s ease;
}

.Top__coverDesc {

}
</style>
