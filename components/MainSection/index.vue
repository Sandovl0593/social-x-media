<script lang="ts" setup>
const props = defineProps({
  title: { type: String, required: true },
  loading: { type: Boolean, required: true },
})
</script>

<template>
  <div>
    <div class="sticky px-4 py-5 border-b border-l border-r border-gray-600" >
      <h1 class="text-lg font-bold"> {{ props.title }}</h1>
      <!-- Future change to routers For you and Folllowing -->
    </div>
    
    <div class="flex p-4 h-full items-center justify-center" v-if="loading"><IconSpinner/></div>
    <div v-else>
      <slot></slot>
    </div>
  </div>
</template>