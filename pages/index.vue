<script lang="ts" setup>
import data from '../assets/data.json'
// console.log(data)
</script>

<template>
  <!-- <NavBar/> -->
  <FlickeringGrid
    color="#EAE2F8" 
    :maxOpacity="0.1" 
    style="position: fixed; z-index: -10;"/>
  <ClientOnly>
    <div class="flex flex-col gap-32">
      <Portrait />
      <IntroductionAndSkills />
      <WorkExperience />
      <TechSkillExperience />
      <ContactLinks />
    </div>
  </ClientOnly>
  <!-- <SwitchButton /> -->
</template>

<style scoped>

</style>