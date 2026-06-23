<script setup lang="ts">
import Logo from '../ui/Logo.vue'
import { NAV_LINKS } from '../../data/content'
</script>

<template>
  <footer class="border-t border-white/5 bg-ink-950 py-12">
    <div class="container-x">
      <div class="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
        <Logo />
        <nav class="flex flex-wrap gap-x-6 gap-y-2">
          <a
            v-for="link in NAV_LINKS"
            :key="link.href"
            :href="link.href"
            class="text-sm text-ink-400 transition-colors hover:text-ink-100"
          >
            {{ link.label }}
          </a>
        </nav>
      </div>

      <div class="hairline my-8" />

      <div class="flex flex-col gap-4 text-xs text-ink-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2025 Paul Xavier International LLC. All rights reserved.</p>
        <div class="flex gap-5">
          <a href="#" class="transition-colors hover:text-ink-300">Terms</a>
          <a href="#" class="transition-colors hover:text-ink-300">Privacy</a>
          <a href="#" class="transition-colors hover:text-ink-300">Earnings Disclaimer</a>
        </div>
      </div>

      <p class="mt-6 max-w-3xl text-[11px] leading-relaxed text-ink-600">
        This site is not part of the Facebook website or Facebook Inc., and is not endorsed by
        Facebook in any way. FACEBOOK is a trademark of Facebook, Inc. Results are not typical
        and will vary based on your background, experience and effort.
      </p>
    </div>
  </footer>
</template>
