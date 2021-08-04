<template>
  <div class="ImageList row p-2 border  text-dark rounded border-primary shadow-sm m-2 text-left">
    <form @submit.prevent="getImages">
      <input v-model="state.query" type="date" class="m-3">
      <button class="btn btn-outline-primary" type="Submit">Search</button>
    </form>
    <div class="col-md-12">
      <Image/>
    </div>
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
// import {AppState} from '../AppState'
import {imagesService } from '../services/ImagesService'
import Image from '../components/Image.vue'
import { AppState } from '../AppState'

export default {
  name: 'ImageList',
  setup(){
    const state = reactive({
      query: ''
    })
  return{
    state,
    images: computed(()=> AppState.images),
    getImages(){
      imagesService.getImages(state.query)
    }
  }
  }, 
  components: {Image}
}
</script>