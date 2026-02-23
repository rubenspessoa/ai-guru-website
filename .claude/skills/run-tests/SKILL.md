---
name: run-tests
description: Run all tests - Vitest unit tests and Playwright E2E tests. Use after any code change to catch regressions.
disable-model-invocation: true
---

# Run All Tests

Execute the full test suite and report results.

## Steps

1. **Run Vitest unit tests**:
   ```bash
   npx vitest run
   ```
   - Report pass/fail count
   - For any failures, show the test name, expected vs received, and the relevant source file

2. **Build the site** (required for Playwright):
   ```bash
   npm run build
   ```
   - If build fails, report the error and stop

3. **Run Playwright E2E tests**:
   ```bash
   npx playwright test
   ```
   - Report pass/fail count by test file
   - For any failures, show the test name, error message, and screenshot if available

4. **Analyze failures**:
   - For each failing test, identify the root cause
   - Suggest a specific fix with the file path and code change
   - If the fix is straightforward, apply it and re-run the failing test

5. **Report summary**:
   - Total tests: X passed, Y failed
   - List of any remaining failures that need manual attention
