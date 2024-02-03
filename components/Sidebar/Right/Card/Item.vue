<script lang="ts" setup>
const { transition } = useDefaults();
</script>

<template>
  <div class="p-3 cursor-pointer hover:bg-hovcard" :class="transition">
      <slot></slot>
  </div>
</template>