<template>
  <div class="component container-fluid">
    <div class="row">
      <div class="col-12 bg-warning">
        <img class="img-fluid bg-primary" src="../assets/logo.png" alt="vue logo" >ue Space
      </div>
    </div>
  </div>
        <div class="col-md-12">
          <ImageList />
        </div>
        <!-- <div><ImageDetails/></div> -->
</template>

<script>

import {reactive} from 'vue'
import ImageList from '../components/ImageList.vue'
// import ImageDetails from '../components/ImageDetails.vue'

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
  height: 5vh;
}
</style>