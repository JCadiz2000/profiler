<script lang="ts" setup>
const year = ref(new Date().getFullYear())
</script>

<template>
  <div class="footer-box flex items-center justify-between gap-8">
    <h1 class="footer-text">© {{ year }} Jayson V. Cadiz. All rights reserved.</h1>
  </div>
</template>

<style scoped>
.footer-box{
  padding: 0 10%;
  height: 100px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  bottom: 0;
  z-index: 100;
  color: white;
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  font-weight: 600;
  backdrop-filter: blur(10px);
}
.footer-text{
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  font-weight: 600;
  color: #EAE2F8;
  opacity: 0.6;
}
</style>