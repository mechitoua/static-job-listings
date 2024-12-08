<script setup lang="ts">
defineProps<{
  filters: Set<string>
  onRemoveFilter: (filter: string) => void
  onClearFilters: () => void
}>()
</script>

<template>
  <div
    v-if="filters.size > 0"
    class="bg-white rounded-[5px] shadow-lg p-5 flex items-center justify-between"
  >
    <div class="flex flex-wrap gap-4">
      <div
        v-for="filter in filters"
        :key="filter"
        class="flex items-center bg-filter-tablets rounded overflow-hidden"
      >
        <span class="px-4 py-[6px] text-primary font-bold">{{ filter }}</span>
        <button
          @click="onRemoveFilter(filter)"
          class="bg-primary text-white p-2 hover:bg-dark transition-colors group"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            viewBox="0 0 14 14"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="M1 1L13 13M1 13L13 1" />
          </svg>
        </button>
      </div>
    </div>
    <button
      @click="onClearFilters"
      class="text-dark-gray hover:text-primary hover:underline font-bold text-[16px]"
    >
      Clear
    </button>
  </div>
</template>
