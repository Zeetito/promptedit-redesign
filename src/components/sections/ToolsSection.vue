<script setup lang="ts">
import SectionHeading from '../ui/SectionHeading.vue'
import { TOOL_CATEGORIES } from '../../data/content'

const icons: Record<string, string> = {
  image: 'M4 5h16v14H4zM4 15l4-4 3 3 5-5 4 4',
  video: 'm10 8 6 4-6 4V8zM3 5h18v14H3z',
  audio: 'M4 10v4m4-7v10m4-13v16m4-11v6m4-4v2',
  plugins: 'M9 3v4M15 3v4M5 7h14v5a7 7 0 0 1-14 0V7zM12 19v2',
}
</script>

<template>
  <section id="tools" class="relative py-20 sm:py-28">
    <div class="container-x">
      <SectionHeading
        align="center"
        eyebrow="The toolkit"
        title="Everything you need to create — in one interface"
        subtitle="Image, video, audio and editing tools powered by the world's best models. No browser-tab juggling, no five logins."
      />

      <!-- The differentiator: a real-feeling generation UI -->
      <div v-reveal :value="80" class="mx-auto mt-14 max-w-4xl">
        <div class="card overflow-hidden p-0">
          <!-- window chrome -->
          <div class="flex items-center gap-2 border-b border-white/5 px-4 py-3">
            <span class="h-2.5 w-2.5 rounded-full bg-rose-400/70" />
            <span class="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
            <span class="h-2.5 w-2.5 rounded-full bg-brand-400/70" />
            <span class="ml-3 text-xs font-medium text-ink-400">PromptEdit Studio</span>
            <span class="ml-auto rounded-full bg-brand-500/15 px-2.5 py-0.5 text-[11px] font-semibold text-brand-300">
              Veo 3
            </span>
          </div>
          <div class="grid gap-0 sm:grid-cols-[1.3fr_1fr]">
            <!-- prompt side -->
            <div class="flex flex-col gap-4 border-b border-white/5 p-6 sm:border-b-0 sm:border-r">
              <div class="flex items-center justify-between">
                <span class="text-xs font-semibold uppercase tracking-wider text-ink-500">Prompt</span>
                <span class="text-xs text-ink-500">~12 credits</span>
              </div>
              <p class="rounded-xl bg-ink-950/60 p-4 text-sm leading-relaxed text-ink-200">
                A cinematic drone shot gliding over neon Tokyo streets at night, rain-slick
                reflections, 35mm, shallow depth of field
              </p>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="chip in ['16:9', '4K', 'Cinematic', '5s']"
                  :key="chip"
                  class="rounded-lg border border-white/8 bg-white/5 px-2.5 py-1 text-xs text-ink-300"
                >{{ chip }}</span>
              </div>
              <button class="btn-primary mt-1 w-full" type="button" aria-hidden="true" tabindex="-1">
                Generate
              </button>
            </div>
            <!-- result side -->
            <div class="relative grid place-items-center bg-gradient-to-br from-accent-500/10 to-brand-500/10 p-6">
              <div class="relative aspect-video w-full overflow-hidden rounded-xl border border-white/8 bg-ink-950/70">
                <div class="absolute inset-0 bg-gradient-to-tr from-indigo-500/30 via-fuchsia-500/20 to-brand-400/30" />
                <div class="absolute inset-0 grid place-items-center">
                  <span class="grid h-12 w-12 place-items-center rounded-full bg-white/10 backdrop-blur-sm">
                    <svg viewBox="0 0 24 24" class="h-5 w-5 translate-x-0.5 text-white" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                </div>
                <span class="absolute bottom-2 left-2 rounded-md bg-black/50 px-2 py-0.5 text-[10px] font-medium text-white backdrop-blur-sm">
                  generated · 00:05
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Category grid -->
      <div class="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <article
          v-for="(cat, i) in TOOL_CATEGORIES"
          :key="cat.id"
          v-reveal="i * 90"
          class="card group flex flex-col gap-4 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/10"
        >
          <span class="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-accent-500/20 to-brand-500/20 text-accent-400 transition-colors group-hover:text-brand-300">
            <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.8">
              <path :d="icons[cat.id]" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </span>
          <h3 class="text-base font-bold text-ink-50">{{ cat.label }}</h3>
          <p class="text-sm leading-relaxed text-ink-400">{{ cat.blurb }}</p>
          <ul class="mt-auto flex flex-wrap gap-1.5 pt-2">
            <li
              v-for="use in cat.uses"
              :key="use"
              class="rounded-md bg-white/5 px-2 py-1 text-[11px] font-medium text-ink-300"
            >
              {{ use }}
            </li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>
