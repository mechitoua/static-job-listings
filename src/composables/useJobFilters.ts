import type { Job } from '@/types/job'
import { computed, ref } from 'vue'

export function useJobFilters(jobs: Job[]) {
  const activeFilters = ref<Set<string>>(new Set())

  const filteredJobs = computed(() => {
    if (activeFilters.value.size === 0) return jobs

    return jobs.filter((job) => {
      const jobTags = [job.role, job.level, ...job.languages, ...job.tools]

      return Array.from(activeFilters.value).every((filter) => jobTags.includes(filter))
    })
  })

  const addFilter = (filter: string) => {
    activeFilters.value.add(filter)
  }

  const removeFilter = (filter: string) => {
    activeFilters.value.delete(filter)
  }

  const clearFilters = () => {
    activeFilters.value.clear()
  }

  return {
    activeFilters,
    filteredJobs,
    addFilter,
    removeFilter,
    clearFilters,
  }
}
