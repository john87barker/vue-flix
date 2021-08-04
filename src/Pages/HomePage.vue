<template>
  <div class="component container-fluid sticky-top">
    <div class="row">
      <div class="col-12 bg-dark text-light d-flex justify-content-center">
        <img class="img-fluid align-items-center " src="../assets/logo.png" alt="vue logo" ><h1>ue Space</h1>
      </div>
    </div>
  </div>
  <div class="col-md-12">
    <ImageList />
    
  </div>
  <div class="row bg-dark text-light fixed-bottom d-flex justify-content-center pb-0">⭐ 🌌 🛰 Space ☄ 🚀 🌛</div>
</template>

<script>

import {reactive} from 'vue'
import ImageList from '../components/ImageList.vue'


export default {
  name: 'HomePage',
  setup(){
const state = reactive({
})
    return { state }
  },
  components: {ImageList}
  
};
</script>


<style scoped>
.img-fluid{
  height: 10vh;
}

</style>