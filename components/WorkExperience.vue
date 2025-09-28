<script lang="ts" setup>
import {experience} from '../assets/data.json'
const config = useRuntimeConfig()
</script>

<template>
  <div class="experience-container">
    <div class="flex flex-col justify-center items-center">
      <p class="experience-text" data-aos="fade-up" data-aos-once="true">MY JOURNEY IN THE TECH INDUSTRY</p>
      <h1 class="experience-title mb-16" data-aos="fade-up" data-aos-once="true">Work Experience</h1>
      <div class="experience-wrapper">
        <!-- <div class="experience-tree"></div> -->
        <div v-for="(i,idx) in experience" class="experience-timeline" data-aos="fade-up" data-aos-once="true">
          <div :class="(idx+1)%2 === 0 ? 'experience-date text-right':'experience-card'" data-aos="fade-right" data-aos-once="true" data-aos-delay="300">
            <!-- <div v-for="i in Math.ceil(Math.random()*10)" class="p-4">CONTENT HERE</div> -->
            <div v-if="(idx+1)%2 !== 0" :class="i%2 === 0 ? '':'p-4'">
              <div class="flex flex-col gap-4">
                <div class="mb-4 text-2xl">{{i.role}} - {{i.type}}</div>
                <div v-for="item in i.tasks" class="item-list">{{item}}</div>
              </div>
            </div>
            <div v-else>{{i.date}}</div>
          </div>
          <div class="experience-tree"></div>
          <div :style="{'--image': `url(${config.app.baseURL}${i.company})`}" class="experience-bubble"></div>
          <div :class="(idx+1)%2 !== 0 ? 'experience-date':'experience-card'" data-aos="fade-left" data-aos-once="true" data-aos-delay="300">
            <div v-if="(idx+1)%2 !== 0" :class="i%2 !== 0 ? '':'p-4'">{{i.date}}</div>
            <div v-else :class="i%2 === 0 ? '':'p-4'">
              <div class="flex flex-col gap-4">
                <div class="mb-4 text-2xl">{{i.role}} - {{i.type}}</div>
                <div v-for="item in i.tasks" class="item-list">{{item}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.experience-container{
  margin: 0 15%;
  position: relative;
}
.experience-text{
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  color: #EAE2F8;
  opacity: 0.6;
}
.experience-title{
  font-family: "Poppins", sans-serif;
  font-size: 64px;
  font-weight: 900;
  color: #EAE2F8;
}
.experience-bubble{
  width: 80px;
  height: 80px;
  background-color: white;
  border-radius: 50%;
  z-index: 2;
  animation: pulse 1s ease-in-out infinite alternate-reverse;

  background-image: var(--image);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

@keyframes pulse{
  0%{
    transform: scale(1);
  }
  100%{
    transform: scale(1.1);
  }
}
.experience-card{
  flex: 1;
  height: auto;
  /* border-radius: 10px; */
  background-color: #240754;
  box-shadow: 0 6px 12px rgba(234, 226, 248, 0.8);
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 600;
  border: 2px solid transparent; /* Set a transparent border */
  border-image: linear-gradient(to right, #724BB7,#A081D9, #EAE2F8) 1; /* Apply the gradient */
  border-image-slice: 1;
}
.experience-date{
  flex:1;
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  font-weight: 900;
}
.experience-wrapper {
  position: relative;
  width: 100%;
  color: #EAE2F8;
}

.experience-tree {
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  width: 5px;
  background-color: white;
  height: 100%; /* match the height of the wrapper */
  z-index: 0;
}

.experience-timeline {
  display: flex;
  justify-content: space-between;
  width: 1300px;
  margin: 0 auto;
  position: relative;
  z-index: 1; /* sits above the tree line */
  gap: 50px;
  padding: 50px 0;
}

.item-list::before{
  content: "•";
  margin-right: 10px;
}
</style>