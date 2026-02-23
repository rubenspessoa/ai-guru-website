---
name: check-responsive
description: Verify responsive layout at mobile, tablet, and desktop breakpoints. Use after building or modifying any page or component.
---

# Responsive Layout Verification

Check the current page at all 3 breakpoints and report any layout issues.

## Steps

1. **Start the preview server** if not already running using `preview_start` with the "dev" server name
2. **Take screenshots at 3 viewports**:
   - Mobile: resize to 375x812, take screenshot
   - Tablet: resize to 768x1024, take screenshot
   - Desktop: resize to 1280x800, take screenshot
3. **Check the accessibility snapshot** at each viewport for:
   - Text that overflows or gets cut off
   - Elements that overlap or stack incorrectly
   - Missing content that should be visible
   - Navigation that doesn't collapse properly on mobile
4. **Inspect key CSS properties** using `preview_inspect`:
   - Check container elements have proper `max-width` and padding
   - Verify flex/grid layouts wrap correctly
   - Check font sizes are readable at each breakpoint (min 14px on mobile)
   - Verify tap targets are at least 48x48px on mobile
5. **Report findings**:
   - List any issues found with the specific viewport and element
   - If issues are found, fix them immediately in the source code
   - Re-screenshot to verify the fix

## Key Breakpoints

- Mobile: max-width 639px
- Tablet: 640px - 1023px
- Desktop: 1024px+

## Common Issues to Check

- Header hamburger menu works on mobile
- Images don't overflow containers
- Text remains readable (not too small, not too large)
- Horizontal scrolling doesn't appear
- Footer columns stack on mobile
- Blog cards grid adjusts from 3 cols → 2 cols → 1 col
- Hero section text wraps properly
