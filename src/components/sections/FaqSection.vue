<script setup lang="ts">
import { ref } from 'vue'
import SectionHeading from '../ui/SectionHeading.vue'
import { FAQS } from '../../data/content'

const openIndex = ref<number | null>(0)
function toggle(i: number) {
  openIndex.value = openIndex.value === i ? null : i
}
</script>

<template>
  <section id="faq" class="relative py-20 sm:py-28">
    <div class="container-x">
      <div class="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions, answered"
          subtitle="Still unsure? Everything you need to know before you start creating."
        />

        <div v-reveal class="flex flex-col gap-3">
          <div
            v-for="(faq, i) in FAQS"
            :key="faq.q"
            class="overflow-hidden rounded-2xl border border-white/5 bg-ink-800/40 transition-colors"
            :class="{ 'border-white/10 bg-ink-800/70': openIndex === i }"
          >
            <button
              class="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              :aria-expanded="openIndex === i"
              @click="toggle(i)"
            >
              <span class="text-sm font-semibold text-ink-100">{{ faq.q }}</span>
              <span
                class="grid h-6 w-6 shrink-0 place-items-center rounded-full border border-white/10 text-ink-300 transition-transform duration-300"
                :class="{ 'rotate-45 border-brand-500/40 text-brand-300': openIndex === i }"
              >
                <svg viewBox="0 0 24 24" class="h-3.5 w-3.5" fill="none" stroke="currentColor" stroke-width="2.4">
                  <path d="M12 5v14M5 12h14" stroke-linecap="round" />
                </svg>
              </span>
            </button>
            <Transition
              enter-active-class="grid transition-all duration-300 ease-out"
              enter-from-class="grid-rows-[0fr] opacity-0"
              enter-to-class="grid-rows-[1fr] opacity-100"
              leave-active-class="grid transition-all duration-200 ease-in"
              leave-from-class="grid-rows-[1fr] opacity-100"
              leave-to-class="grid-rows-[0fr] opacity-0"
            >
              <div v-show="openIndex === i" class="grid">
                <div class="overflow-hidden">
                  <p class="px-5 pb-5 text-sm leading-relaxed text-ink-400">{{ faq.a }}</p>
                </div>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
