<template>
  <div @click="setActiveImage" class="row">
    <div class="col-4 align-content-center">
      <img :src="image.url" alt="" class="img-fluid" type="">
      <hr>
      <h4 class="text-left">{{image.copyright}}</h4>
    </div>
    <div class="col-8 pt-2">
      <h1 class="text-center font-italic">{{image.title}}</h1>
      <hr>
      <div class="font-weight-lighter">{{image.explanation}}</div>
    </div>
  </div>
  
</template>

<script>
import { computed, reactive } from 'vue'
import { imagesService } from '../services/ImagesService'
import { AppState } from '../AppState'

export default {
  name: 'Image',
  // props: {image:{type: Image, required: true}},
  setup(){
const state = reactive({})
  return { state,
  setActiveImage(){
    imagesService.setActiveImage()

  },
  image: computed(()=> AppState.activeImage)
  }
  }
}
</script>

