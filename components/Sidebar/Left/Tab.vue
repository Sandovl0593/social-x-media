<script lang="ts" setup>
const { hoverDefault } = useDefaults();
</script>

<template>
  <NuxtLink to="#" class="flex items-center p-3 w-min" :class="hoverDefault">
    <div class="size-6">
      <slot name="icon"></slot>
    </div>
    <div>
      <slot name="name"></slot>
    </div>
  </NuxtLink>
</template>