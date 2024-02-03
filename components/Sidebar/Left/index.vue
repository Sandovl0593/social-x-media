<script lang="ts" setup>
const { transition } = useDefaults();
</script>

<template>
  <aside class="flex flex-col h-screen">

    <header :class="`p-2 my-2 w-14 rounded-full hover:bg-white/10 ${transition}`">
      <NuxtLink to="/">
        <div class="size-8">
          <IconX />
        </div>
      </NuxtLink>
    </header>

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

  </aside>
</template>