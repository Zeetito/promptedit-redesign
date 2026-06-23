<script setup lang="ts">
defineProps<{
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}>()
</script>

<template>
  <div
    v-reveal
    class="flex max-w-2xl flex-col gap-4"
    :class="align === 'center' ? 'mx-auto items-center text-center' : 'items-start text-left'"
  >
    <span v-if="eyebrow" class="eyebrow">
      <span class="h-1.5 w-1.5 rounded-full bg-accent-400" />
      {{ eyebrow }}
    </span>
    <h2 class="text-title font-bold text-ink-50 text-balance">{{ title }}</h2>
    <p v-if="subtitle" class="text-base leading-relaxed text-ink-300 text-pretty sm:text-lg">
      {{ subtitle }}
    </p>
  </div>
</template>
