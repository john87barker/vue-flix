<template>
  <div class="row p-2 border bg-dark text-light rounded border-primary shadow-sm mt-2">
    <form @submit.prevent="getImages">
      <input v-model="state.query" type="date" placeholder="wait for it...!">
      <button type="Submit">Search</button>
    </form>
  </div>
  <div class="ImageDetails row border border-secondary rounded p-2 mt-2">
    <h2 class="col-12">{{activeImage.title}}</h2>
    <div class="col-6">
      <img :src="activeImage.url" alt="" srcset="" class="img-fluid">
    </div>
 
    <div class="col-6">{{activeImage.explanation}}</div>
    <div class="col-6">{{activeImage.copyright}}</div>
  </div>
</template>


<script>
import { computed, reactive } from 'vue';
import { AppState } from '../AppState';
export default {
  name: 'ImageDetails',
  setup(){
const state = reactive({
})
    return { state,
    activeImage: computed(()=> AppState.activeImage)
    }
  }
};
</script>