<script lang="ts" setup>
const { transition } = useDefaults();

const props = defineProps({
  title: { type: String, required: true },
})
</script>

<template>
  <section class="m-2 overflow-hidden border-white rounded-2xl bg-card">
    <h1 class="p-5 text-xl font-bold ">
      {{ props.title }}
    </h1> 
    <slot></slot>

    <div class="p-5 text-md text-blue-300 cursor-pointer hover:bg-hovcard" :class="transition">
      Show more
    </div>
  </section>
</template>