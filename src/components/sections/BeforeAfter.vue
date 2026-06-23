<script setup lang="ts">
const before = [
  '8+ separate subscriptions to track',
  'A new interface to learn for every tool',
  'Paying monthly whether you create or not',
  'Credits and files scattered everywhere',
]
const after = [
  'One marketplace, one login, one wallet',
  'A single interface for every model',
  'Pay only for what you actually generate',
  'Everything you make, in one place',
]
</script>

<template>
  <section class="relative py-20 sm:py-28">
    <div class="container-x">
      <div class="grid items-stretch gap-5 md:grid-cols-2">
        <!-- Before -->
        <div v-reveal class="card flex flex-col gap-5 p-7 sm:p-9">
          <div class="flex items-center gap-3">
            <span class="grid h-10 w-10 place-items-center rounded-xl bg-rose-500/15 text-rose-400">
              <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2.2">
                <path d="M6 6l12 12M18 6 6 18" stroke-linecap="round" />
              </svg>
            </span>
            <div>
              <p class="text-xs font-semibold uppercase tracking-wider text-rose-400/80">Before</p>
              <p class="text-lg font-bold text-ink-50">Subscription overload</p>
            </div>
          </div>
          <ul class="flex flex-col gap-3">
            <li v-for="item in before" :key="item" class="flex items-start gap-3 text-sm text-ink-300">
              <span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-400/60" />
              {{ item }}
            </li>
          </ul>
        </div>

        <!-- After -->
        <div
          v-reveal
          :value="120"
          class="relative flex flex-col gap-5 overflow-hidden rounded-[var(--radius-card)] border border-brand-500/20 bg-gradient-to-br from-brand-500/10 to-ink-800/60 p-7 shadow-[var(--shadow-card)] sm:p-9"
        >
          <div class="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-500/20 blur-3xl" />
          <div class="flex items-center gap-3">
            <span class="grid h-10 w-10 place-items-center rounded-xl bg-brand-500/20 text-brand-300">
              <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2.4">
                <path d="m5 13 4 4L19 7" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </span>
            <div>
              <p class="text-xs font-semibold uppercase tracking-wider text-brand-300/90">With PromptEdit</p>
              <p class="text-lg font-bold text-ink-50">One place to create</p>
            </div>
          </div>
          <ul class="flex flex-col gap-3">
            <li v-for="item in after" :key="item" class="flex items-start gap-3 text-sm text-ink-100">
              <svg viewBox="0 0 24 24" class="mt-0.5 h-4 w-4 shrink-0 text-brand-400" fill="none" stroke="currentColor" stroke-width="2.6">
                <path d="m5 13 4 4L19 7" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
