import type { Directive } from 'vue'

/**
 * v-reveal — fades + lifts an element into view once, on scroll.
 * Respects prefers-reduced-motion via CSS (.reveal rules in style.css).
 * Optional binding value = stagger delay in ms.
 */
export const reveal: Directive<HTMLElement, number | undefined> = {
  mounted(el, binding) {
    el.classList.add('reveal')
    if (binding.value) {
      el.style.transitionDelay = `${binding.value}ms`
    }

    const io = new IntersectionObserver(
      (entries, observer) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.classList.add('is-visible')
            observer.unobserve(el)
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )
    io.observe(el)
  },
}
