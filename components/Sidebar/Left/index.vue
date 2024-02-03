<script lang="ts" setup>
const { hoverDefault } = useDefaults();
</script>

<template>
  <div class="flex flex-col h-screen">

    <div :class="`p-2 my-2 w-14 ${hoverDefault}`">
      <NuxtLink to="/">
        <div class="w-8 h-8">
          <IconX />
        </div>
      </NuxtLink>
    </div>

    <div class="mt-2 space-y-3"></div>

    <SidebarLeftTab active>
      <template v-slot:icon><IconHome /></template>
      <template v-slot:name>Home</template>
    </SidebarLeftTab>
    
    <SidebarLeftTab>
      <template v-slot:icon><IconExplore /></template>
      <template v-slot:name>Explore</template>
    </SidebarLeftTab>

    <SidebarLeftTab>
      <template v-slot:icon><IconMessages /></template>
      <template v-slot:name>Messages</template>
    </SidebarLeftTab>
    
    <SidebarLeftTab>
      <template v-slot:icon><IconLists /></template>
      <template v-slot:name>Lists</template>
    </SidebarLeftTab>
  
    <SidebarLeftTab>
      <template v-slot:icon><IconBookmarks /></template>
      <template v-slot:name>Bookmarks</template>
    </SidebarLeftTab>
    
    <SidebarLeftTab>
      <template v-slot:icon><IconProfile /></template>
      <template v-slot:name>Profile</template>
    </SidebarLeftTab>

    <SidebarLeftTab>
      <template v-slot:icon><IconMore /></template>
      <template v-slot:name>More</template>
    </SidebarLeftTab>

  </div>
</template>