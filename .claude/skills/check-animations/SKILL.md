---
name: check-animations
description: Verify micro-animations are working correctly. Use after adding or modifying animations on any page or component.
---

# Micro-Animation Verification

Verify all micro-animations are present, correctly configured, and respect accessibility preferences.

## Steps

1. **Start the preview server** if not already running using `preview_start`
2. **Check scroll-reveal animations**:
   - Use `preview_inspect` on elements with `.animate-reveal` class
   - Verify they have `animation-timeline: view()` and `animation-range` properties
   - Verify `@keyframes` include `opacity` and `transform: translateY` transitions
3. **Check hover micro-interactions**:
   - Inspect buttons for `transition` property (should include `transform`, `box-shadow`)
   - Inspect cards for hover `translateY` and `box-shadow` transitions
   - Inspect links for `background-size` transition (underline slide effect)
   - Verify transition durations match design tokens:
     - Buttons: 150ms
     - Cards: 200ms
     - Nav items: 100ms
4. **Check page load animations**:
   - Verify hero section children have `animation: fadeSlideUp` with staggered `animation-delay`
   - Check navigation fade-in animation
5. **Check View Transitions**:
   - Verify `<ViewTransitions />` is present in the base layout
   - Check blog cards have `transition:name` for card→article morph
6. **Check reduced motion support**:
   - Use `preview_eval` to emulate `prefers-reduced-motion: reduce`
   - Verify animations are disabled/instant when reduced motion is preferred
   - Check that the site remains fully usable without animations
7. **Report findings** and fix any issues immediately

## Animation Design Tokens Reference

```css
--ease-smooth: cubic-bezier(0.19, 1, 0.22, 1);
--ease-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);
--duration-fast: 100ms;
--duration-base: 200ms;
--duration-slow: 400ms;
--duration-reveal: 600ms;
```
