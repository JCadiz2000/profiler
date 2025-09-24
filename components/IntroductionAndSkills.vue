<script lang="ts" setup>
import { introduction } from '../assets/data.json'
</script>

<template>
  <div class="flex flex-col gap-16 ias-container">
    <div data-aos="fade-up" data-aos-once="true">
      <h1 class="ias-title">About Me</h1>
      <p class="ias-text">{{ introduction.description }}</p>
    </div>
    <div class="flex flex-wrap p-[5%] items-center justify-center gap-32">
      <div v-for="i in introduction.favorites" class="tech-card flex flex-col items-center gap-8" data-aos="fade-up" data-aos-once="true"><div :style="{'--image': `url(${i.logo})`}" class="tech-card-logo"></div>{{i.name}}</div>
    </div>
  </div>
</template>

<style scoped>
.ias-container {
  margin: 0 15%;
}
.ias-title {
  font-family: "Poppins", sans-serif;
  font-size: 64px;
  font-weight: 900;
  color: #EAE2F8;
}
.ias-text {
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  color: #EAE2F8;
  opacity: 0.6;
}
.tech-card{
  height: 400px;
  width: 300px;
  background-color: #240754;
  /* border-radius: 20px; */
  transition: transform 0.3s ease;
  box-shadow: 0 6px 12px rgba(234, 226, 248, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Poppins", sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: #EAE2F8;
  border: 2px solid transparent; /* Set a transparent border */
  border-image: linear-gradient(to right, #EF4E4E,#F7C948, #2DCCA7) 1; /* Apply the gradient */
  border-image-slice: 1;
}
.tech-card-logo{
  height: 100px;
  width: 100px;
  background-image: var(--image);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
.tech-card:hover{
  transform: scale(1.1);
}
</style>