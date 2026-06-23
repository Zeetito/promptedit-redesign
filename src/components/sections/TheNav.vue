<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import Logo from '../ui/Logo.vue'
import { NAV_LINKS, SITE } from '../../data/content'

const scrolled = ref(false)
const open = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 16
}
onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 transition-all duration-300"
    :class="scrolled ? 'border-b border-white/5 bg-ink-950/80 backdrop-blur-xl' : 'border-b border-transparent'"
  >
    <nav class="container-x flex h-16 items-center justify-between gap-4">
      <Logo />

      <!-- Desktop links -->
      <ul class="hidden items-center gap-1 md:flex">
        <li v-for="link in NAV_LINKS" :key="link.href">
          <a
            :href="link.href"
            class="rounded-full px-4 py-2 text-sm font-medium text-ink-300 transition-colors hover:text-ink-50"
          >
            {{ link.label }}
          </a>
        </li>
      </ul>

      <div class="hidden items-center gap-3 md:flex">
        <a href="#pricing" class="btn-primary">{{ SITE.ctaPrimary }}</a>
      </div>

      <!-- Mobile toggle -->
      <button
        class="grid h-10 w-10 place-items-center rounded-lg text-ink-200 transition-colors hover:bg-white/5 md:hidden"
        :aria-expanded="open"
        aria-label="Toggle menu"
        @click="open = !open"
      >
        <svg v-if="!open" viewBox="0 0 24 24" class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M4 7h16M4 12h16M4 17h16" stroke-linecap="round" />
        </svg>
        <svg v-else viewBox="0 0 24 24" class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M6 6l12 12M18 6 6 18" stroke-linecap="round" />
        </svg>
      </button>
    </nav>

    <!-- Mobile menu -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      leave-active-class="transition duration-150 ease-in"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-if="open" class="border-t border-white/5 bg-ink-950/95 backdrop-blur-xl md:hidden">
        <ul class="container-x flex flex-col gap-1 py-4">
          <li v-for="link in NAV_LINKS" :key="link.href">
            <a
              :href="link.href"
              class="block rounded-lg px-4 py-3 text-sm font-medium text-ink-200 hover:bg-white/5"
              @click="open = false"
            >
              {{ link.label }}
            </a>
          </li>
          <li class="pt-2">
            <a href="#pricing" class="btn-primary w-full" @click="open = false">{{ SITE.ctaPrimary }}</a>
          </li>
        </ul>
      </div>
    </Transition>
  </header>
</template>
