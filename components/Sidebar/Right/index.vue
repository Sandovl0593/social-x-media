<script lang="ts" setup>
interface Trend {
  localTrend: string,
  title: string,
  count: string,
};

interface Follow {
  name: string,
  handle: string,
  image: string
}

const { trendsDefault, followDefault } = useDefaults()
const Trendings = ref<Trend[]>(trendsDefault)
const Follows = ref<Follow[]>(followDefault)

</script> 

<template>
  <aside class="flex flex-col">
    <!-- Trends for you-->
    <SidebarRightCard title="Trends for you">
      <SidebarRightCardItem v-for="trend in Trendings">
        <div>
          <p class="text-sm text-gray-400"> Trending in {{ trend.localTrend }}</p>
          <h2 class="text-lg font-bold text-white"> {{ trend.title }}</h2>
          <p class="text-sm text-gray-400"> {{ trend.count }} posts </p>
        </div>
      </SidebarRightCardItem>
    </SidebarRightCard>
    
    <!-- Who to follow -->
    <SidebarRightCard title="Who to follow">
      <SidebarRightCardItem v-for="follow in Follows">
        <div class="flex flex-row justify-between">
          <div class="flex flex-row">
            <img class="size-10 rounded-full" :src="follow.image" :alt="follow.name"/>

            <div class="flex flex-col ml-2">
              <h1 class="text-md font-bold text-white">{{ follow.name }}</h1>
              <p class="text-sm text-gray-400">{{ follow.handle }}</p>
            </div>
          </div>
          
          <div class="flex items-center h-full">
            <button class="px-4 py-2 text-sm font-bold border-white text-black bg-white rounded-full">Follow</button>
          </div>
        </div>
      </SidebarRightCardItem>
    </SidebarRightCard>

  </aside>
</template>