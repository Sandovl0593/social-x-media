<script lang="ts" setup>
interface Trend {
  localTrend: string,
  title: string,
  count: string,
};

const { trendsDefault } = useDefaults()
const Trendings = ref<Trend[]>(trendsDefault)

</script> 

<template>
  <aside class="flex flex-col">
    <!-- Trends for you-->
    <SidebarRightCard title="Trends for you">
      <SidebarRightCardItem v-for="trend in Trendings">
        <div>
          <p> Trending in {{ trend.localTrend }}</p>
          <h1> {{ trend.title }}</h1>
          <p> {{ trend.count }} posts </p>
        </div>
      </SidebarRightCardItem>
    </SidebarRightCard>
    
    <!-- Who to follow -->
    <SidebarRightCard title="Who to follow">
      <SidebarRightCardItem>
        Follow 1
      </SidebarRightCardItem>
    </SidebarRightCard>

  </aside>
</template>