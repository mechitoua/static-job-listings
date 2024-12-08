<script setup lang="ts">
import type { Job } from '@/types/job'
defineProps<{
  job: Job
  onTagClick: (tag: string) => void
}>()
</script>

<template>
  <div
    class="bg-white rounded-[5px] shadow-lg p-6 md:p-8 border-l-[5px] transition-all hover:shadow-xl"
    :class="{ 'border-primary': job.featured, 'border-transparent': !job.featured }"
  >
    <div class="md:flex md:items-center md:justify-between">
      <div class="md:flex md:items-center md:gap-6">
        <img
          :src="job.logo"
          :alt="job.company"
          class="w-12 h-12 md:w-[88px] md:h-[88px] -mt-10 md:mt-0"
        />
        <div class="mt-4 md:mt-0">
          <div class="flex items-center gap-2 flex-wrap">
            <span class="text-primary font-bold text-[14px]">{{ job.company }}</span>
            <div class="flex gap-2">
              <span
                v-if="job.new"
                class="bg-primary text-white px-2 py-1 rounded-full text-[14px] uppercase font-bold"
              >
                New!
              </span>
              <span
                v-if="job.featured"
                class="bg-dark text-white px-2 py-1 rounded-full text-[14px] uppercase font-bold"
              >
                Featured
              </span>
            </div>
          </div>
          <h2 class="text-dark font-bold text-[18px] mt-2 hover:text-primary cursor-pointer">
            {{ job.position }}
          </h2>
          <div class="text-dark-gray mt-2 flex items-center gap-4 text-[16px]">
            <span>{{ job.postedAt }}</span>
            <span class="w-1 h-1 bg-dark-gray rounded-full"></span>
            <span>{{ job.contract }}</span>
            <span class="w-1 h-1 bg-dark-gray rounded-full"></span>
            <span>{{ job.location }}</span>
          </div>
        </div>
      </div>

      <div class="mt-4 md:mt-0 pt-4 border-t border-dark-gray/20 md:border-t-0 md:pt-0">
        <div class="flex flex-wrap gap-4">
          <button
            v-for="tag in [job.role, job.level, ...job.languages, ...job.tools]"
            :key="tag"
            @click="onTagClick(tag)"
            class="bg-filter-tablets text-primary font-bold px-4 py-[6px] rounded hover:bg-primary hover:text-white transition-colors"
          >
            {{ tag }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
