<template>
  <div>
      <div class="min-h-full">
        <div class="grid grid-cols-12 mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:gap-5">

          <!-- Left -->
          <div class="hidden md:block xs:col-span-1 xl:col-span-2">
            <div class="sticky top-0">
              <SidebarLeft />
            </div>  
          </div>
          
          <!-- Main -->
          <main class="col-span-12 md:col-span-7 xl:col-span-6">
            <NuxtPage />
          </main>

          <!-- right -->
          <div class="hidden md:block md:col-span-4 xl:col-span-4">
            <div class="sticky top-0">
              <SidebarRight />
            </div>  
          </div>
        
        </div>
      </div>
  </div>
</template>
