<script setup lang="ts">
import FilterBar from '@/components/FilterBar.vue'
import JobCard from '@/components/JobCard.vue'
import { useJobFilters } from '@/composables/useJobFilters'
import { jobs as jobsData } from '@/data/jobs'
import type { Job } from '@/types/job'
import { ref } from 'vue'

const jobs = ref<Job[]>(jobsData)

const { activeFilters, filteredJobs, addFilter, removeFilter, clearFilters } = useJobFilters(
  jobs.value,
)
</script>

<template>
  <div class="min-h-screen bg-background">
    <header class="header-bg h-[156px] relative mb-8">
      <FilterBar
        v-if="activeFilters.size"
        class="absolute left-4 right-4 -bottom-8 md:left-1/2 md:-translate-x-1/2 md:w-[1110px] max-w-[calc(100%-2rem)]"
        :filters="activeFilters"
        :onRemoveFilter="removeFilter"
        :onClearFilters="clearFilters"
      />
    </header>

    <main class="container mx-auto px-6 py-[25px] md:py-[76px]">
      <div class="max-w-[1110px] mx-auto space-y-6">
        <JobCard v-for="job in filteredJobs" :key="job.id" :job="job" :onTagClick="addFilter" />
      </div>
    </main>
  </div>
</template>
