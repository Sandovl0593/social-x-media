<script lang="ts" setup>
const { transition } = useDefaults();

const props = defineProps({
  active: { type: Boolean, default: false }
})

const textClases = computed(() => props.active ? "font-semibold": "font-normal")
</script>

<template>
  <NuxtLink to="#" :class="`flex items-center p-3 my-1 w-min h-13 rounded-full hover:bg-white/10 ${transition}`">
    <div class="size-6">
      <slot name="icon"></slot>
    </div>

    <div class="hidden ml-4 xl:block text-lg" :class="textClases">
      <slot name="name"></slot>
    </div>
  </NuxtLink>
</template>