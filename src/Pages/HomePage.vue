<template>
  <div class="component container-fluid">
    <div class="row">
      <div class="col-12 bg-success">
        <img class="img-fluid bg-primary" src="../assets/logo.png" alt="vue logo" >ue Space
        
      </div>
    </div>
  </div>
</template>

<script>

import {reactive} from 'vue'

export default {
  name: 'HomePage',
  setup(){
const state = reactive({
})
    return { state }
  },
  
};
</script>


<style scoped>
.img-fluid{
  height: 5vh;
}
</style>