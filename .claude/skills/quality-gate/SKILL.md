---
name: quality-gate
description: Comprehensive quality check before deployment. Runs responsive check, animation check, SEO audit, and all tests. Use before deploying or merging important PRs.
disable-model-invocation: true
---

# Quality Gate - Full Check

Run all quality checks to ensure the site is ready for deployment.

## Steps

### 1. Build Validation
- Run `npm run build` — the site must build without errors or warnings

### 2. Responsive Layout Check
Run the check-responsive skill workflow:
- Screenshot all key pages at mobile (375x812), tablet (768x1024), desktop (1280x800)
- Pages to check: `/`, `/blog`, one blog article, `/privacy`, `/imprint`
- Verify no layout breaks, overlapping content, or horizontal scrolling
- Verify mobile navigation (hamburger menu) works

### 3. Animation Check
Run the check-animations skill workflow:
- Verify scroll-reveal animations have correct CSS properties
- Verify hover micro-interactions on buttons, cards, links
- Verify page load animations on hero section
- Verify View Transitions are configured
- Verify reduced motion support works

### 4. SEO Audit
Run the check-seo skill workflow:
- Every page has proper meta tags (title, description, canonical)
- Hreflang tags are correct on all EN and DE pages
- Open Graph and Twitter Card tags present
- JSON-LD structured data on blog articles
- Sitemap exists and contains all pages
- robots.txt exists and is correct
- RSS feeds are valid
- Images have alt, width, height attributes
- Semantic HTML is correct (one h1 per page, proper hierarchy)

### 5. Test Suite
Run the run-tests skill workflow:
- All Vitest unit tests pass
- All Playwright E2E tests pass
- No visual regressions detected

### 6. Final Report

Produce a summary table:

| Check | Status | Issues |
|---|---|---|
| Build | PASS/FAIL | ... |
| Responsive | PASS/FAIL | ... |
| Animations | PASS/FAIL | ... |
| SEO | PASS/FAIL | ... |
| Unit Tests | PASS/FAIL | ... |
| E2E Tests | PASS/FAIL | ... |

**Overall: PASS / FAIL**

If any check fails, list the specific issues and suggest fixes.
