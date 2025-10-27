<script lang="ts" setup>
import { projects } from '../assets/data.json'
const myProjects = ref<object[]>([])
// const myProjects = ref([
//   {
//     title: 'My Projects',
//     description: 'My Description',
//     images: [
//       'https://images4.alphacoders.com/100/thumb-1920-1003322.jpg',
//     ],
//     currentIdx: 0
//   },
//   {
//     title: 'My Projects',
//     description: 'My Description',
//     images: [
//       'https://images4.alphacoders.com/100/thumb-1920-1003322.jpg',
//       'https://images4.alphacoders.com/100/thumb-1920-1003322.jpg',
//     ],
//     currentIdx: 0
//   },
//   {
//     title: 'My Projects',
//     description: 'My Description',
//     images: [
//       'https://images4.alphacoders.com/100/thumb-1920-1003322.jpg',
//       'https://images4.alphacoders.com/100/thumb-1920-1003322.jpg',
//       'https://images4.alphacoders.com/100/thumb-1920-1003322.jpg',
//     ],
//     currentIdx: 0
//   }
// ])
function next(project:any){
  project.currentIdx<project.images.length-1 ?  project.currentIdx+=1 : project.currentIdx=0 
}
function prev(project: any){
  project.currentIdx>0 ? project.currentIdx-=1 : project.currentIdx=project.images.length-1
}
function goTo(project:any, goToIdx:number){
  project.currentIdx = goToIdx
}

onMounted(() => {
  myProjects.value = projects
  setInterval(() => {
    myProjects.value.forEach((project:any) => {
      next(project)
    })
  },5000)
})
</script>

<template>
  <div class="pc-container flex flex-col gap-16 self-center">
    <div class="pc-title" id="temp" data-aos="fade-up" data-aos-once="true">My Projects</div>
    <div v-for="project in myProjects" class="project-carousel" data-aos="fade-up" data-aos-once="true">
      <div class="w-[100%] h-[100%] absolute z-1 flex justify-between items-center px-8">
        <div @click="prev(project)" class="flex items-center justify-center">
          <div class="w-[40px] h-[40px] arrow-left"></div>
        </div>
        <div @click="next(project)" class="flex items-center justify-center">
          <div class="w-[40px] h-[40px] arrow-right"></div>
        </div>
      </div>
      <div class="w-[100%] absolute">
        <div class="flex gap-2 justify-center mt-2">
          <div v-for="i in project.images.length" @click="goTo(project,i-1)" :class="i-1===project.currentIdx?'pc-count-active' : 'pc-count-inactive'" class="z-1"></div>
          <!-- <div class="flex gap-2 items-center justify-center w-[auto] h-[30px] bg-[#000] z-1 rounded-4xl px-2">
          </div> -->
        </div>
      </div>
      <div class="flex">
        <img v-for="image in project.images" class="project-image" :src="`/profiler/${image}`" alt="" :style="{'transform': `translateX(-${project.currentIdx*100}%)`}">
      </div>
      

      <div class="flex">
        <!-- <img v-for="i in 3" class="project-image" src="https://images4.alphacoders.com/100/thumb-1920-1003322.jpg" alt="" :style="{'transform': `translateX(-${currentIdx*100}%)`}"> -->
        <div class="project-description absolute bottom-0 left z-1">
          <div class="flex flex-col p-16 gap-16">
            <h1 class="pc-title">{{ project.title }}</h1>
            <p class="pc-description">{{ project.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pc-container{
  margin: 0 10%;
  position: relative;
  color: #EAE2F8;
}
.project-image{
  height: 720px;
  width: 1280px;
  transition: all 0.4s ease;
}
.project-carousel{
  position: relative;
  height: 720px;
  width: 1280px;
  background-color: #240754;
  border: 2px solid transparent; /* Set a transparent border */
  border-image: linear-gradient(to right, #724BB7,#A081D9, #EAE2F8) 1; /* Apply the gradient */
  border-image-slice: 1;
  overflow: hidden;
}
.pc-title{
  font-family: "Poppins", sans-serif;
  font-size:48px;
  font-weight: 900;
  color: #fff;
}
.pc-description{
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: #fff;
}
.project-description{
  height: 200px;
  width: 100%;
  background: linear-gradient(0deg,rgba(0, 0, 0, 0.8) 0, rgba(255, 255, 255, 0) 100%);
  transition: all 0.4s ease;
}
.project-description:hover{
  height: 400px;
}
.pc-count-inactive{
  height: 10px;
  width: 30px;
  border-radius: 25px;
  background-color: #829AB1;
  transition: all 0.4s ease;
  cursor: pointer;
}
.pc-count-active{
  height: 10px;
  width: 40px;
  border-radius: 25px;
  background-color: #102A43;
  transition: all 0.4s ease;
  cursor: pointer;
}
.arrow-right{
  border: solid #102A43;
  border-width: 0 5px 5px 0;
  display: inline-block;
  padding: 3px;
  rotate: -45deg;
  transition: all 0.2s ease;
  cursor: pointer;
}
.arrow-left{
  border: solid #102A43;
  border-width: 0 5px 5px 0;
  display: inline-block;
  padding: 3px;
  rotate: 135deg;
  transition: all 0.2s ease;
  cursor: pointer;
}
.arrow-right:hover{
  transform: scale(1.1);
}
.arrow-left:hover{
  transform: scale(1.1);
}
.arrow-right:active{
  transform: scale(0.9);
  border-color: #fff;
}
.arrow-left:active{
  transform: scale(0.9);
  border-color: #fff;
}
</style>