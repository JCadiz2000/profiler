<script lang="ts" setup>
const shape = ref(Math.floor(Math.random()*3)+1)
</script>

<template>
  <div class="divider">
    <div class="flex gap-8 items-center justify-center">
      <div class="line">
        <div class="line-inner"></div>
      </div>
      <div v-if="shape === 1">
        <div class="shape-star bg-[#EAE2F8]"></div>
      </div>
      <div v-if="shape === 2">
        <div class="shape-starburst bg-[#EAE2F8]"></div>
      </div>
      <div v-if="shape === 3">
        <div class="shape-yin-yang bg-[#EAE2F8]"></div>
      </div>
      <div class="line rotate-180">
        <div class="line-inner"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.divider{
  margin: 0 20%;
  position: relative;
}
.inner{
  height: auto;
  width: 50%;
  background-color: #724BB7;
  border-radius: 25px;
}

.line{
  width: 100%;
  height: 2px;
  background-color: #EAE2F8;
  border-radius: 5px;
  overflow: hidden;
}

.line-inner{
  height: 100%;
  width: 100%;
  background-image: linear-gradient(to right, #724BB7,#A081D9, #EAE2F8) ;
  border-radius: 5px;
  transition: all 0.4s ease;
}

/* SHAPES */
.shape-star{
  width: 100px;  
  aspect-ratio: 1;
  clip-path: polygon(50% 0,
    calc(50%*(1 + sin(.4turn))) calc(50%*(1 - cos(.4turn))),
    calc(50%*(1 - sin(.2turn))) calc(50%*(1 - cos(.2turn))),
    calc(50%*(1 + sin(.2turn))) calc(50%*(1 - cos(.2turn))),
    calc(50%*(1 - sin(.4turn))) calc(50%*(1 - cos(.4turn))) 
   ); 
  /* or more simple
  clip-path: polygon(50% 0,79% 90%,2% 35%,98% 35%,21% 90%); 
   */
  animation: spin 16s infinite linear;
}

/* HTML: <div class="spiral"></div> */
.shape-starburst{
  width: 100px; /* adjust to control the size */
  aspect-ratio: 1;
  clip-path: polygon(100% 50%,22.28% 38.52%,85.36% 85.36%,38.52% 22.28%,50% 100%,61.48% 22.28%,14.64% 85.36%,77.72% 38.52%,0% 50%,77.72% 61.48%,14.64% 14.64%,61.48% 77.72%,50% 0%,38.52% 77.72%,85.36% 14.64%,22.28% 61.48%);
  animation: spin 16s infinite linear;
}
.shape-yin-yang{
  height: 100px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: 
   radial-gradient(25% 25% at 50% 25%,#724BB7 24%,#EAE2F8 26% 99%,#0000 101%), 
   radial-gradient(25% 25% at 50% 75%,#EAE2F8 24%,#724BB7 26% 99%,#0000 101%), 
   conic-gradient(#724BB7 50%, #EAE2F8 0);
  border: 1px solid;
  animation: spin 16s infinite linear;
}
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>