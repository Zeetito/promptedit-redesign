<script setup lang="ts">
import SectionHeading from '../ui/SectionHeading.vue'
import { LIBRARY, LIBRARY_TOTAL } from '../../data/content'
</script>

<template>
  <section id="library" class="relative border-y border-white/5 bg-ink-900/40 py-20 sm:py-28">
    <div class="container-x">
      <SectionHeading
        eyebrow="Included with Monthly"
        :title="`${LIBRARY_TOTAL} premium assets, ready to drop in`"
        subtitle="The Content Creator Templates Library — LUTs, sound effects, titles, overlays and backgrounds that work in every major editor. Drag, drop, done."
      />

      <div class="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="(cat, i) in LIBRARY"
          :key="cat.name"
          v-reveal="i * 80"
          class="card group relative flex flex-col gap-3 overflow-hidden p-7 transition-all duration-300 hover:-translate-y-1"
        >
          <div class="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-accent-500/10 blur-2xl transition-opacity duration-300 group-hover:opacity-100 opacity-0" />
          <span class="text-3xl font-extrabold tracking-tight text-white">{{ cat.count }}</span>
          <h3 class="text-base font-bold text-ink-100">{{ cat.name }}</h3>
          <p class="text-sm leading-relaxed text-ink-400">{{ cat.desc }}</p>
        </article>

        <!-- closing CTA tile -->
        <article
          v-reveal="LIBRARY.length * 80"
          class="relative flex flex-col justify-between gap-5 overflow-hidden rounded-[var(--radius-card)] border border-brand-500/25 bg-gradient-to-br from-brand-500/15 to-accent-500/10 p-7"
        >
          <p class="text-lg font-bold leading-snug text-ink-50">
            Unlock all {{ LIBRARY_TOTAL }} assets with the monthly plan.
          </p>
          <a href="#pricing" class="btn-primary w-full">See pricing</a>
        </article>
      </div>

      <p v-reveal class="mt-8 text-center text-sm text-ink-500">
        Compatible with Premiere Pro · DaVinci Resolve · Final Cut · and more
      </p>
    </div>
  </section>
</template>
