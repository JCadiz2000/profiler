<script lang="ts" setup>
import data from '../assets/data.json'
// console.log(data)
</script>

<template>
  <NavBar/>
  <StarsBackground 
    style="position: fixed; z-index: 0;"
    starColor="#EAE2F8"
  />
  <!-- <FlickeringGrid
    color="#EAE2F8" 
    :maxOpacity="0.1" 
    style="position: fixed; z-index: -10;"/> -->
  <ClientOnly>
    <div class="flex flex-col gap-32">
      <Portrait id="port"/>
      <Divider data-aos="fade-up" data-aos-once="true"/>
      <IntroductionAndSkills id="ias"/>
      <Divider data-aos="fade-up" data-aos-once="true"/>
      <WorkExperience id="we"/>
      <Divider data-aos="fade-up" data-aos-once="true"/>
      <TechSkillExperience id="tse"/>
      <Divider data-aos="fade-up" data-aos-once="true"/>
      <ProjectCarousel id="pc"/>
      <Divider data-aos="fade-up" data-aos-once="true"/>
      <ContactLinks id="cl"/>
    </div>
  </ClientOnly>
  <Footer />
  <!-- <SwitchButton /> -->
</template>

<style scoped>

</style>