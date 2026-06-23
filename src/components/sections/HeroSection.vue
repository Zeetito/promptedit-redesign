<script setup lang="ts">
import { AI_TOOLS, SITE } from '../../data/content'

// Duplicate the list so the marquee loops seamlessly.
const marquee = [...AI_TOOLS, ...AI_TOOLS]
</script>

<template>
  <section id="top" class="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
    <!-- Ambient background glow -->
    <div class="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
      <div class="absolute left-1/2 top-[-10%] h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-accent-500/15 blur-[120px]" />
      <div class="absolute right-[8%] top-[30%] h-[320px] w-[320px] rounded-full bg-brand-500/15 blur-[110px]" />
      <div
        class="absolute inset-0 opacity-[0.035]"
        style="background-image: radial-gradient(circle at 1px 1px, #fff 1px, transparent 0); background-size: 38px 38px"
      />
    </div>

    <div class="container-x">
      <div class="mx-auto flex max-w-3xl flex-col items-center text-center">
        <a
          href="#tools"
          v-reveal
          class="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 py-1.5 pl-1.5 pr-4 text-xs font-medium text-ink-200 backdrop-blur-sm transition-colors hover:border-white/20"
        >
          <span class="rounded-full bg-brand-500 px-2.5 py-0.5 text-[11px] font-bold text-[#04130c]">New</span>
          Veo 3, Kling & Nano Banana Pro — now on one bill
        </a>

        <h1 v-reveal :value="80" class="text-hero font-extrabold text-balance text-white">
          Every AI creation tool.<br />
          <span class="bg-gradient-to-r from-brand-300 via-brand-400 to-accent-400 bg-clip-text text-transparent">
            One marketplace.
          </span>
        </h1>

        <p v-reveal :value="160" class="mt-6 max-w-xl text-lg leading-relaxed text-ink-300 text-pretty">
          Generate images, video, voice and music with the best AI models — without stacking
          a dozen subscriptions. Buy credits once, use them anywhere. Pay only for what you create.
        </p>

        <div v-reveal :value="240" class="mt-9 flex flex-col items-center gap-3 sm:flex-row">
          <a href="#pricing" class="btn-primary px-8 py-4 text-base">{{ SITE.ctaPrimary }}</a>
          <a href="#tools" class="btn-ghost px-8 py-4 text-base">{{ SITE.ctaSecondary }}</a>
        </div>

        <p v-reveal :value="300" class="mt-5 text-center text-sm text-ink-400">
          No subscription required · {{ SITE.guaranteeDays }}-day money-back guarantee
        </p>

        <!-- Social proof -->
        <div v-reveal :value="360" class="mt-8 flex items-center gap-4">
          <div class="flex -space-x-2.5">
            <span
              v-for="i in 5"
              :key="i"
              class="grid h-9 w-9 place-items-center rounded-full border-2 border-ink-950 bg-gradient-to-br text-[11px] font-bold text-white"
              :class="[
                ['from-rose-400 to-orange-400','from-sky-400 to-indigo-400','from-emerald-400 to-teal-400','from-fuchsia-400 to-purple-400','from-amber-400 to-yellow-400'][i-1]
              ]"
            >{{ ['M','J','A','S','K'][i-1] }}</span>
          </div>
          <p class="text-left text-sm text-ink-300">
            <span class="font-bold text-ink-50">{{ SITE.creators }}</span> content creators<br class="sm:hidden" />
            already creating on PromptEdit
          </p>
        </div>
      </div>
    </div>

    <!-- Tool marquee -->
    <div v-reveal :value="420" class="relative mt-16 sm:mt-20">
      <p class="container-x mb-5 text-center text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">
        One wallet · every major model
      </p>
      <div class="group relative overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div class="flex w-max animate-[marquee_38s_linear_infinite] gap-3 group-hover:[animation-play-state:paused]">
          <span
            v-for="(t, i) in marquee"
            :key="i"
            class="flex items-center gap-2.5 rounded-xl border border-white/8 bg-ink-800/60 px-4 py-2.5 backdrop-blur-sm"
          >
            <span class="grid h-7 w-7 place-items-center rounded-md bg-gradient-to-br from-accent-500/30 to-brand-500/30 text-xs font-bold text-ink-100">
              {{ t.name.charAt(0) }}
            </span>
            <span class="whitespace-nowrap text-sm font-semibold text-ink-100">{{ t.name }}</span>
            <span class="rounded-full bg-white/5 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-ink-400">{{ t.tag }}</span>
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes marquee {
  to {
    transform: translateX(-50%);
  }
}
</style>
