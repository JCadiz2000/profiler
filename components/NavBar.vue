<script lang="ts" setup>
import image from '../assets/portrait.jpg'
function scrollToSection(sectionId: string) {
  const section = document.getElementById(sectionId);
  const offset = 100; // adjust this value as needed (px)
  const bodyTop = window.pageYOffset; // current scroll position
  const elementTop = section?.getBoundingClientRect().top; // position relative to viewport
  const scrollTo = bodyTop + elementTop! - offset;

  window.scrollTo({
    top: scrollTo,
    behavior: "smooth"
  });
}
</script>

<template>
  <div class="nav-box flex items-center justify-between gap-8">
    <div class="flex items-center gap-8">
      <div @click="scrollToSection('ias')" class="nav-btn">About</div>
      <div @click="scrollToSection('we')" class="nav-btn">Experience</div>
      <div @click="scrollToSection('tse')" class="nav-btn">Skills</div>
      <div @click="scrollToSection('pc')" class="nav-btn">Projects</div>
      <div @click="scrollToSection('cl')" class="nav-btn">Contact</div>
    </div>
    <div @click="scrollToSection('port')" class="flex items-center gap-2 nav-btn">
      <img class="w-[30px] h-[30px] rounded-full" src="/images/portrait.jpg" alt="">
      <div class="">Jayson</div>
    </div>
  </div>
</template>

<style scoped>
.nav-box{
  display: flex;
  padding: 0 10%;
  height: 60px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  position: sticky;
  top: 0;
  z-index: 100;
  color: white;
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  font-weight: 600;
  backdrop-filter: blur(10px);
}
.nav-btn{
  width: auto;
  height: auto;
  padding: 8px 16px;
  cursor: pointer;
  border-radius: 50px;
  transition: all 0.2s ease;
}
.nav-btn:hover{
  background-color: rgba(255, 255, 255, 0.2);
}
.nav-btn:active{
  background-color: rgba(255, 255, 255, 0.4);
}
</style>