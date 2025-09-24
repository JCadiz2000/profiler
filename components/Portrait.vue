<script lang="ts" setup>
import { portrait } from '../assets/data.json'
import image from '../assets/newportrait.jpg'

const displayText = ref('')
const currentTextIndex = ref(0)
const isDeleting = ref(false)

let typingSpeed = 100
let deletingSpeed = 50
let delayBetweenTexts = 1500

const type = () => {
  const fullText = portrait.jobTasks[currentTextIndex.value]
  if (isDeleting.value) {
    displayText.value = fullText.substring(0, displayText.value.length - 1)
  } else {
    displayText.value = fullText.substring(0, displayText.value.length + 1)
  }

  let timeout = isDeleting.value ? deletingSpeed : typingSpeed

  if (!isDeleting.value && displayText.value === fullText) {
    timeout = delayBetweenTexts
    isDeleting.value = true
  } else if (isDeleting.value && displayText.value === '') {
    isDeleting.value = false
    currentTextIndex.value = (currentTextIndex.value + 1) % portrait.jobTasks.length
    timeout = typingSpeed
  }

  setTimeout(type, timeout)
}

onMounted(() => {
  type()
})
</script>

<template>
  <div class="">
    <div class="portrait-container-margin flex p-16 gap-32 items-center">
      <div class="portrait">
        <div :style="{'--image': `url(${image})`}" class="portrait-image"></div>
      </div>
      <div class="portrait-greetings-container w-[50%]">
        <div class="portrait-greetings">Hi, I'm <span class="portrait-greetings-name">Jayson</span></div>
        <!-- <div class="portrait-greetings-title"> {{portrait.role}} </div> -->
        <div class="portrait-greetings-jobs"> I do</div>
        <div class="portrait-greetings-jobs-list">{{displayText}}<span class="blinking-cursor">|</span></div>
      </div> 
    </div>
  </div>
</template>

<style scoped>
.portrait-container-margin {
  margin: 0 10%;
  position: relative;
}
.portrait-container {
  height: auto;
  width: 100%;
  background-image: radial-gradient(rgba(255, 255, 255, 0.2) 10%, transparent 10%),
    radial-gradient(rgba(255, 255, 255, 0.2) 10%, transparent 10%), 
    linear-gradient(
    0deg,
    hsl(263deg 85% 13%) 0%,
    hsl(262deg 84% 17%) 20%,
    hsl(262deg 76% 22%) 40%,
    hsl(262deg 71% 28%) 60%,
    hsl(262deg 67% 33%) 80%,
    hsl(262deg 60% 38%) 100%
  );
  background-size: 30px 30px, 30px 30px, cover;
  /* background-repeat: repeat, no-repeat; */
  background-blend-mode: overlay;
  background-position:
    15px 15px,
    0px 0px, 
    0 0;
  border-bottom-right-radius: 10%;
  border-bottom-left-radius: 10%;
}
.portrait-image{
  position: absolute;
  height: 700px;
  width: 700px;
  background-image: var(--image);
  background-size: cover;
  transform: skew(-10deg);
  top: -40px;
  left: -40px;
}
.portrait{
  height: 600px;
  width: 600px;
  border-radius: 25%;
  background-color: transparent;
  overflow: hidden;
  transform: skew(10deg);
  /* position: absolute;
  top: 50px;
  left: 50px; */
}
.portrait-greetings{
  font-family: "Poppins", sans-serif;
  font-weight: 900;
  font-style: normal;
  position: relative;
  font-size: 64px;
  color: #EAE2F8;
}
.portrait-greetings-title{
  color: #EAE2F8;
  font-family: "Poppins", sans-serif;
  font-weight: 900;
  font-style: normal;
  position: relative;
  font-size: 24px;
}
.portrait-greetings-jobs{
  margin-top: 20px;
  color: #EAE2F8;
  font-family: "Poppins", sans-serif;
  font-weight: 900;
  font-style: normal;
  position: relative;
  font-size: 32px;
}
.portrait-greetings-jobs-list{
  background-image: linear-gradient(#724BB7, #A081D9);
  color: transparent;
  background-clip: text;
  font-family: "Poppins", sans-serif;
  font-weight: 900;
  font-style: normal;
  position: relative;
  font-size: 64px;
}
.portrait-greetings-container{
  border-right: solid #EAE2F8 5px;
  border-radius: 10px;
  /* position: absolute;
  top: 100px;
  right: 200px; */
}
.portrait-greetings-name{
  background-image: linear-gradient(#724BB7, #A081D9);
  color: transparent;
  background-clip: text;
}
.blinking-cursor {
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}
</style>