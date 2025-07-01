<script lang="ts" setup>

</script>

<template>
  <div class="flex flex-col gap-16 ias-container">
    <div>
      <h1 class="ias-title">About Me</h1>
      <p class="ias-text">ASDSADASD</p>
    </div>
    <div class="grid grid-cols-4 place-items-center gap-16">
      <div class="tech-card">ASD</div>
      <div class="tech-card">ASD</div>
      <div class="tech-card">ASD</div>
      <div class="tech-card">ASD</div>
      <div class="tech-card">ASD</div>
    </div>
  </div>
</template>

<style scoped>
.ias-container {
  margin: 0 10%;
}
.ias-title {
  font-family: "Poppins", sans-serif;
  font-size: 64px;
  font-weight: 900;
  color: #EAE2F8;
}
.ias-text {
  font-family: "Poppins", sans-serif;
  font-size: 24px;
  font-weight: 100;
  color: #EAE2F8;
}
.tech-card{
  height: 400px;
  width: 300px;
  background-color: #EAE2F8;
  border-radius: 20px;
  transition: transform 0.3s ease;
}
.tech-card:hover{
  transform: scale(1.1);
  box-shadow: 0 10px 20px rgba(234, 226, 248, 0.5);
}
</style>