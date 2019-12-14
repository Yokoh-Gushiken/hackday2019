<template>
  <div id="img">
    <div class="img__wrapper">
      <div class="img__container">
        <label for="imgInput" class="">
          <input type="file" ref="file" id="imgInput" @change="setImage" style="display:none;">
        </label>
        <div class="img__areawrap">
          <img :src="data.image">
        </div>
        <div class="img__buttonWrap">
          <router-link to="img-result" class="img__button"></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: {
        image: "",
        name: "",
      }
    };
  },
  methods: {
    setImage(e) {
      const files = this.$refs.file;
      const fileImg = files.files[0];
      if (fileImg.type.startsWith("image/")) {
        this.data.image = window.URL.createObjectURL(fileImg);
        this.data.name = fileImg.name;
        this.data.type = fileImg.type;
      }
    },
  }
};
</script>

<style>
.img__wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100vh;
}

.img__container {
  width: 50%;
}

.img__container label {
  display: block;
  height: 56px;
  width: 64px;
  background-image: url(../../img/folder.png);
  background-repeat: no-repeat;
  background-position: center center;
}

.img__box {
  display: flex;
  align-items: center;
  justify-content: start;
}

.img__title {
  z-index: 1;
  margin: auto;
  font-size: 35px;
  color: #fff;
}

.img__areawrap {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
}

.img__areawrap img{
  width: 100%;
  height: 300px;
  font-size: 35px;
  object-fit: cover;
}

.img__folder {
  height: 56px;
  width: 64px;
  background-image: url(../../img/folder.png);
  background-repeat: no-repeat;
  background-position: center center;
}

textarea{
  width: 100%;
  height: 200px;
  font-size: 35px;
  padding: 5px;
  border-radius: 5px;
  border: 50px solid #333;
}

.img__buttonWrap {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
}

.img__button { 
  height: 56px;
  width: 25%;
  background-image: url(../../img/arrow-white.png);
  background-repeat: no-repeat;
  background-position: center center;
  background-color: #333;
  background-size: 30px 30px;
  text-decoration: none;
}
</style>