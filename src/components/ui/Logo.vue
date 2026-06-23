<script setup lang="ts">
defineProps<{ class?: string }>()
</script>

<template>
  <a href="#top" class="group inline-flex items-center gap-2.5" :class="$props.class" aria-label="PromptEdit home">
    <span
      class="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-brand-400 to-accent-500 shadow-[0_6px_20px_-6px_rgba(91,120,246,0.7)] transition-transform duration-300 group-hover:scale-105"
    >
      <svg viewBox="0 0 24 24" class="h-4.5 w-4.5 text-[#04130c]" fill="none" aria-hidden="true">
        <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" fill="currentColor" />
      </svg>
    </span>
    <span class="text-lg font-bold tracking-tight">
      Prompt<span class="text-brand-400">Edit</span>
    </span>
  </a>
</template>
