<script setup lang="ts">
import SectionHeading from '../ui/SectionHeading.vue'
import { PLANS } from '../../data/content'

const payments = ['Apple Pay', 'Visa', 'Amex', 'Discover', 'Mastercard', 'PayPal', 'G Pay']
</script>

<template>
  <section id="pricing" class="relative py-20 sm:py-28">
    <div class="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
      <div class="absolute left-1/2 top-0 h-72 w-[600px] -translate-x-1/2 rounded-full bg-brand-500/10 blur-[120px]" />
    </div>

    <div class="container-x">
      <SectionHeading
        align="center"
        eyebrow="Pricing"
        title="Simple credits. No lock-in."
        subtitle="Start with a one-time pack, or go monthly for the best rate plus 100,000+ premium assets. Cancel whenever you want."
      />

      <div class="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-2">
        <article
          v-for="(plan, i) in PLANS"
          :key="plan.id"
          v-reveal="i * 120"
          class="relative flex flex-col gap-6 p-8 sm:p-9"
          :class="
            plan.highlight
              ? 'rounded-[var(--radius-card)] border border-brand-500/40 bg-gradient-to-b from-brand-500/10 to-ink-800/70 shadow-[0_0_0_1px_rgba(22,176,106,0.15),0_30px_70px_-30px_rgba(22,176,106,0.5)]'
              : 'card'
          "
        >
          <span
            v-if="plan.highlight"
            class="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-500 px-4 py-1 text-[11px] font-bold uppercase tracking-wider text-[#04130c]"
          >
            {{ plan.badge }}
          </span>

          <div class="flex flex-col gap-1">
            <span class="text-xs font-semibold uppercase tracking-wider" :class="plan.highlight ? 'text-brand-300' : 'text-ink-400'">
              {{ plan.highlight ? plan.name : plan.badge }}
            </span>
            <div class="flex items-baseline gap-2">
              <span class="text-5xl font-extrabold tracking-tight text-white">{{ plan.price }}</span>
              <span class="text-sm text-ink-400">{{ plan.period }}</span>
            </div>
            <p class="mt-1 text-sm font-medium text-brand-300">{{ plan.credits }}</p>
          </div>

          <div class="hairline" />

          <ul class="flex flex-1 flex-col gap-3">
            <li v-for="f in plan.features" :key="f" class="flex items-start gap-3 text-sm text-ink-200">
              <svg viewBox="0 0 24 24" class="mt-0.5 h-4 w-4 shrink-0" :class="plan.highlight ? 'text-brand-400' : 'text-ink-400'" fill="none" stroke="currentColor" stroke-width="2.5">
                <path d="m5 13 4 4L19 7" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              {{ f }}
            </li>
          </ul>

          <a href="#pricing" :class="plan.highlight ? 'btn-primary w-full py-4' : 'btn-ghost w-full py-4'">
            {{ plan.cta }}
          </a>
        </article>
      </div>

      <!-- Payment trust + guarantee microcopy -->
      <div v-reveal class="mx-auto mt-10 flex max-w-4xl flex-col items-center gap-4">
        <div class="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          <span v-for="p in payments" :key="p" class="text-xs font-medium text-ink-500">{{ p }}</span>
        </div>
        <p class="text-center text-sm text-ink-400">
          Backed by a 30-day money-back guarantee on unused credits. No catch, no questions asked.
        </p>
      </div>
    </div>
  </section>
</template>
