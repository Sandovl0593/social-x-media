<script lang="ts" setup>
const props = defineProps({
  title: { type: String, required: true },
  loading: { type: Boolean, required: true },
})
</script>

<template>
  <div>
    <div class="sticky px-4 py-5 border">
      <h1 class="text-lg font-bold"> {{ props.title }}</h1>
      <!-- Future change to routers For you and Folllowing -->
    </div>
    
    <div v-if="loading"><span>Loading ...</span></div>
    <div v-else>
      <slot></slot>
    </div>
  </div>
</template>