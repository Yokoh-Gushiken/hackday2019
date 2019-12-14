<template>
  <div id="text">
    <div class="text__wrapper">
      <div class="text__container">
        <div class="text__areawrap">
          <textarea name="name" maxlength="140" v-model.trim="message"></textarea>
        </div>
        <div class="text__buttonWrap">
          <div class="text__button" v-bind:class="{'text__button--inactive': !nextFlag}">
            <router-link v-if="nextFlag" to="text-result" class="text__link"></router-link>
            <button v-on:click="handlePostText" class="text__button"></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: '',
      nextFlag: false,
    }
  },

  updated: function() {
    if (this.message.length > 0) {
      this.nextFlag = true;
    } else {
      this.nextFlag = false;
    }
  },

  methods: {
    handlePostText() {
      return this.$store.dispatch('postText', { 
        'message': 'ffffff'
        })
      .then(() => {
        this.$router.push({ path: '/text-result' })
      })
      .catch();
    }
  }
}
</script>

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
  outline: none;
}

.text__buttonWrap {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 50px;
}

.text__button { 
  height: 56px;
  width: 25%;
  background-image: url(../../img/arrow-white.png);
  background-repeat: no-repeat;
  background-position: center center;
  background-color: #333;
  background-size: 30px 30px;
}

.text__button--inactive {
  background-color: #ddd;
}

.text__link {
  display: block;
  width: 100%;
  height: 100%;
  text-decoration: none;
}
</style>
