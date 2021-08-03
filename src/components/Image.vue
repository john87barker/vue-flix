<template>
  <div @click="setActiveImage" class="row">
    <div class="col-4">
      <img :src="image.url" alt="" class="img-fluid">
    </div>
    <div class="col-8">
      <div>{{image.title}}</div>
      <div>{{image.copyright}}</div>
      <div>{{image.explanation}}</div>
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