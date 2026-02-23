---
name: visual-compare
description: Visual feedback loop - screenshot local site, compare with Framer original, identify differences, and auto-correct. Use after building any section to match the original Framer design.
---

# Visual Comparison Feedback Loop

Compare the local Astro build against the original Framer site at https://www.hustlrr.ai/ and iterate until they match closely.

## Steps

1. **Start the preview server** if not already running using `preview_start`
2. **Determine which page to compare** from $ARGUMENTS (default: homepage `/`)

### Desktop Comparison

3. **Resize to desktop** (1280x800) and take a screenshot of the local build
4. **Fetch the original** page from `https://www.hustlrr.ai/` using WebFetch for reference
5. **Inspect specific CSS values** on the local build using `preview_inspect`:
   - Background colors (should be `#0a0c16` primary, `#111327` secondary)
   - Accent color (`#5e6cff`)
   - Font families (Inter for body, Figtree for headings)
   - Font sizes and weights
   - Spacing/padding between sections
   - Border radius values
   - Box shadows
6. **Compare and list differences** between local and original:
   - Layout structure (section order, grid columns)
   - Color accuracy
   - Typography (sizes, weights, line-height)
   - Spacing (margins, padding, gaps)
   - Border/shadow treatments
   - Component placement

### Auto-Correction

7. **For each difference found**:
   - Identify the source file and CSS class/property to change
   - Make the fix in the source code
   - Re-screenshot to verify improvement
8. **Repeat steps 3-7** until the page closely matches the original

### Responsive Check

9. **Resize to mobile** (375x812) and repeat comparison
10. **Resize to tablet** (768x1024) and repeat comparison
11. Fix any responsive-specific issues

### Final Report

12. Summarize what was compared, what was fixed, and any remaining differences that require user input (e.g., content/images they need to provide)
