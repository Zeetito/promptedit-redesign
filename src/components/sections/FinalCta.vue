<script setup lang="ts">
import { SITE } from '../../data/content'
</script>

<template>
  <section class="relative py-20 sm:py-28">
    <div class="container-x">
      <div
        v-reveal
        class="relative overflow-hidden rounded-[2rem] border border-white/8 bg-gradient-to-br from-ink-800 to-ink-900 px-6 py-16 text-center sm:px-12 sm:py-20"
      >
        <div class="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
          <div class="absolute left-1/2 top-[-20%] h-80 w-[680px] -translate-x-1/2 rounded-full bg-accent-500/20 blur-[110px]" />
          <div class="absolute bottom-[-30%] left-[20%] h-72 w-72 rounded-full bg-brand-500/20 blur-[100px]" />
        </div>

        <!-- guarantee badge -->
        <div class="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-ink-200">
          <svg viewBox="0 0 24 24" class="h-4 w-4 text-brand-400" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 2 4 6v6c0 5 3.4 8.3 8 10 4.6-1.7 8-5 8-10V6l-8-4Z" stroke-linejoin="round" />
            <path d="m9 12 2 2 4-4" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          {{ SITE.guaranteeDays }}-day money-back guarantee
        </div>

        <h2 class="mx-auto max-w-2xl text-display font-extrabold text-balance text-white">
          Start creating with every AI tool today
        </h2>
        <p class="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink-300 sm:text-lg">
          Join {{ SITE.creators }} creators. Buy credits once, use them across every model.
          No subscription required.
        </p>

        <div class="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href="#pricing" class="btn-primary px-8 py-4 text-base">{{ SITE.ctaPrimary }}</a>
          <a href="#tools" class="btn-ghost px-8 py-4 text-base">Explore the tools</a>
        </div>
      </div>
    </div>
  </section>
</template>
