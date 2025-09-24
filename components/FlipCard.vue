<script lang="ts" setup>
const flipped = ref(false)
defineProps({
  contactLogo: {
    type: String,
    required: true
  },
  contactLink: {
    type: String,
    required: true
  },
  contactName: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="group perspective w-[300px] h-[150px]">
    <div
      class="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-x-180"
    >
      <!-- Front -->
      <div
        class="absolute w-full h-full bg-[#EAE2F8] text-white rounded-lg flex items-center justify-center backface-hidden"
      >
        <div :style="{'--image': `url(${contactLogo})`}" class="contact-logo"></div>
      </div>

      <!-- Back -->
      <div
        class="absolute w-full h-full bg-[#240754] text-white rounded-lg flex items-center justify-center backface-hidden rotate-x-180"
      >
        <div class="contact-link">
          <div v-if="contactName !== ''">
            <a :href="contactLink">{{ contactName }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.fc-container{
  font-family: "Poppins", sans-serif;
}
.perspective {
  perspective: 1000px;
}

.transform-style-preserve-3d {
  transform-style: preserve-3d;
}

.backface-hidden {
  backface-visibility: hidden;
}

.rotate-x-180 {
  transform: rotateX(180deg);
}

.contact-logo{
  height: 100px;
  width: 100px;
  background-image: var(--image);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
.contact-link{
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  color: #EAE2F8;
}
</style>