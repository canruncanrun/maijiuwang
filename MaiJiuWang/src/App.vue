<script setup>

import { reqindex } from "./request/api";
reqindex().then((res) => {
  console.log(res);
})



</script>

<template>
  <div class="app">
    <nav class="app_nav">

    </nav>
  </div>
</template>

<style scoped lang="scss">
// @import "./assets/style/globalVar.scss";
.app {
  width: 100%;
  /* background-color: #fff; */
}

.app_nav {
  width: 100%;
  height: 40px;
  background-color:$c_6 ;
  font-size: 12px;
  /* color: #b4b4b4; */
  cursor: pointer;
  
}
</style>
