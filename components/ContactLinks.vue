<script lang="ts" setup>
import {contacts} from '../assets/data.json'
const config = useRuntimeConfig()
</script>

<template>
  <div class="contacts-container">
    <div data-aos="fade-up" data-aos-once="true">
      <div class="contacts-title">Social Links</div>
      <p class="contacts-text">You can find me here</p>
    </div>
    <div class="flex flex-wrap p-[5%] items center justify-center gap-32" data-aos="fade-up" data-aos-once="true">
      <FlipCard v-for="i in contacts" :contactLogo="config.app.baseURL+i.logo" :contactLink="i.link" :contactName="i.name"/>
    </div>
  </div>
</template>

<style scoped>
.contacts-container{
  margin: 0 10%;
  position: relative;
  color: #EAE2F8;
}
.contacts-title{
  font-family: "Poppins", sans-serif;
  font-size: 64px;
  font-weight: 900;
  color: #EAE2F8;
}
.contacts-text{
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  color: #EAE2F8;
  opacity: 1;
}
.contact-card{
  width: 300px;
  height: 100px;
  border-radius: 10px;
  background-color: #240754;
  box-shadow: 0 5px 20px rgba(234, 226, 248, 0.5);
}
</style>