<script setup lang="ts">
import SectionHeading from '../ui/SectionHeading.vue'
import { TESTIMONIALS } from '../../data/content'

const gradients = ['from-rose-400 to-orange-400', 'from-sky-400 to-indigo-400', 'from-emerald-400 to-teal-400']
</script>

<template>
  <section class="relative py-20 sm:py-28">
    <div class="container-x">
      <SectionHeading
        align="center"
        eyebrow="Loved by creators"
        title="Made for people who ship every day"
      />

      <div class="mt-14 grid gap-5 md:grid-cols-3">
        <figure
          v-for="(t, i) in TESTIMONIALS"
          :key="t.name"
          v-reveal="i * 110"
          class="card flex flex-col gap-5 p-7"
        >
          <div class="flex gap-1 text-brand-400" aria-hidden="true">
            <svg v-for="s in 5" :key="s" viewBox="0 0 24 24" class="h-4 w-4" fill="currentColor">
              <path d="m12 2 3 6.5 7 .6-5.3 4.6 1.6 6.8L12 17.5 5.4 20.5 7 13.7 1.7 9.1l7-.6L12 2Z" />
            </svg>
          </div>
          <blockquote class="flex-1 text-sm leading-relaxed text-ink-200">"{{ t.quote }}"</blockquote>
          <figcaption class="flex items-center gap-3">
            <span
              class="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br text-sm font-bold text-white"
              :class="gradients[i]"
            >{{ t.name.charAt(0) }}</span>
            <div>
              <p class="text-sm font-semibold text-ink-50">{{ t.name }}</p>
              <p class="text-xs text-ink-400">{{ t.role }}</p>
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>
