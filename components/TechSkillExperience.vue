<script lang="ts" setup>
import {technology} from '../assets/data.json'
const config = useRuntimeConfig()
</script>

<template>
  <div class="tse-container">
    <div class="tse-title" data-aos="fade-up" data-aos-once="true">Tech Skills Experience</div>
    <!-- <p class="tse-text">My techical arsenal</p> -->
    <div class="flex flex-wrap p-[5%] items center justify-center gap-16">
      <div v-for="i in technology" data-aos="fade-up" data-aos-once="true">
        <div class="tse-card flex flex-col items-center">
          <div class="tse-card-panel flex flex-wrap items-center justify-center gap-8">
            <div v-for="item in i.techs" :style="{'--image': `url(${config.app.baseURL}${item})`}" class="tech-logo"></div>
          </div>
          <div class="tse-card-title">{{i.type}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tse-container{
  margin: 0 15%;
  position: relative;
  color: #EAE2F8;
}
.tse-title{
  font-family: "Poppins", sans-serif;
  font-size: 64px;
  font-weight: 900;
  color: #EAE2F8;
}
.tse-text{
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  color: #EAE2F8;
  opacity: 0.6;
}
.tse-card-panel{
  padding: 40px;
  width: 100%;
  height: 100%;
}
.tse-card-title{
  padding: 20px 0;
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  font-weight: 600;
}
.tse-card{
  height: 400px;
  width: 300px;
  /* border-radius: 10px; */
  background-color: #240754;
  transition: transform 0.3s ease;
  box-shadow: 0 6px 12px rgba(234, 226, 248, 0.8);

  border: 2px solid transparent; /* Set a transparent border */
  border-image: linear-gradient(to right, #EF4E4E,#F7C948, #2DCCA7) 1; /* Apply the gradient */
  border-image-slice: 1;
}
.tse-card:hover{
  transform: scale(1.1);
}
.tech-logo{
  height: 60px;
  width: 60px;
  background-image: var(--image);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
</style>