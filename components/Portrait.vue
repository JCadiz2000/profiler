<script lang="ts" setup>

</script>

<template>
  <div class="portrait-container">
    <div class="portrait-container-margin">
      <div class="portrait">
        <div class="portrait-image"></div>
      </div>
      <div class="portrait-greetings-container">
        <div class="portrait-greetings">Hi, I'm <span class="portrait-greetings-name">Jayson</span></div>
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
  height: 800px;
  width: 100%;
  background-image: linear-gradient(
    0deg,
    hsl(263deg 85% 18%) 0%,
    hsl(264deg 41% 32%) 20%,
    hsl(264deg 24% 47%) 40%,
    hsl(264deg 24% 62%) 60%,
    hsl(263deg 30% 77%) 80%,
    hsl(262deg 61% 93%) 100%
  );
  /* border-bottom-right-radius: 25%;
  border-bottom-left-radius: 25%; */
}
.portrait-image{
  position: absolute;
  height: 700px;
  width: 700px;
  background-image: url("../assets/portrait.jpg");
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
  position: absolute;
  top: 50px;
  left: 50px;
}
.portrait-greetings{
  font-family: "Poppins", sans-serif;
  font-weight: 900;
  font-style: normal;
  position: relative;
  font-size: 64px;
}
.portrait-greetings-container{
  position: absolute;
  top: 100px;
  right: 200px;
}
.portrait-greetings-name{
  color: white;
}
</style>