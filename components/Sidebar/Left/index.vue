<script lang="ts" setup>
const { hoverDefault } = useDefaults();
</script>

<template>
  <div class="flex flex-col h-screen">

    <div class="p-2 my-2 rounded-full" :class="hoverDefault">
      <NuxtLink to="/">
        <div class="w-8 h-8">
          <IconX />
        </div>
      </NuxtLink>
    </div>

    <SidebarLeftTab>
      <template v-slot:icon>
        <IconHome />
      </template>
      <template v-slot:name>
        Home
      </template>
    </SidebarLeftTab>
  </div>
</template>