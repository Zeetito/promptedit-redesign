<script setup lang="ts">
import TheNav from './components/sections/TheNav.vue'
import HeroSection from './components/sections/HeroSection.vue'
import BeforeAfter from './components/sections/BeforeAfter.vue'
import ToolsSection from './components/sections/ToolsSection.vue'
import LibrarySection from './components/sections/LibrarySection.vue'
import PricingSection from './components/sections/PricingSection.vue'
import TestimonialsSection from './components/sections/TestimonialsSection.vue'
import FaqSection from './components/sections/FaqSection.vue'
import FinalCta from './components/sections/FinalCta.vue'
import TheFooter from './components/sections/TheFooter.vue'
</script>

<template>
  <TheNav />
  <main>
    <HeroSection />
    <BeforeAfter />
    <ToolsSection />
    <LibrarySection />
    <PricingSection />
    <TestimonialsSection />
    <FaqSection />
    <FinalCta />
  </main>
  <TheFooter />
</template>
