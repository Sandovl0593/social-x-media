<script lang="ts" setup>

const props = defineProps({
  title: { type: String, required: true },
})
</script>

<template>
  <div class="m-2 border-white rounded-2xl">
    <h1 class="p-3 text-xl font-bold border-b">
      {{ props.title }}

    </h1>
  </div>
</template>