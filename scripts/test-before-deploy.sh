#!/bin/bash

# Sean Mark's Cuisine - Pre-Deployment Test Script
# Run this before deploying to Vercel to catch issues early
# Usage: bash scripts/test-before-deploy.sh

set -e  # Exit on first error

echo "==================================="
echo "Pre-Deployment Test Suite"
echo "Sean Mark's Cuisine"
echo "==================================="
echo ""

# Color codes for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Track test results
PASSED=0
FAILED=0

# Function to print test results
test_passed() {
  echo -e "${GREEN}✓ PASSED${NC}: $1"
  ((PASSED++))
}

test_failed() {
  echo -e "${RED}✗ FAILED${NC}: $1"
  ((FAILED++))
}

test_warning() {
  echo -e "${YELLOW}⚠ WARNING${NC}: $1"
}

# === TEST 1: Check .env.local exists ===
echo "1. Checking environment variables..."
if [ -f ".env.local" ]; then
  test_passed ".env.local file exists"

  # Check for required variables
  if grep -q "NEXT_PUBLIC_CONVEX_URL" .env.local; then
    test_passed "NEXT_PUBLIC_CONVEX_URL is set"
  else
    test_warning "NEXT_PUBLIC_CONVEX_URL may be missing"
  fi

  if grep -q "CLERK_SECRET_KEY" .env.local; then
    test_passed "CLERK_SECRET_KEY is set"
  else
    test_warning "CLERK_SECRET_KEY may be missing"
  fi

  if grep -q "RESEND_API_KEY" .env.local; then
    test_passed "RESEND_API_KEY is set"
  else
    test_warning "RESEND_API_KEY may be missing"
  fi
else
  test_failed ".env.local file not found"
fi
echo ""

# === TEST 2: Check git status ===
echo "2. Checking git status..."
if git status --short | grep -q "^."; then
  test_warning "Uncommitted changes exist"
  git status --short
else
  test_passed "Git status is clean (no uncommitted changes)"
fi
echo ""

# === TEST 3: Run linter ===
echo "3. Running linter..."
if npm run lint > /dev/null 2>&1; then
  test_passed "Lint check passed (0 errors)"
else
  test_failed "Lint check failed - see details above"
  npm run lint
fi
echo ""

# === TEST 4: Run build ===
echo "4. Building for production..."
if npm run build > /tmp/build.log 2>&1; then
  test_passed "Production build successful"

  if [ -d ".next" ]; then
    test_passed "Build output (.next folder) created"
  else
    test_warning "Build output folder (.next) not found"
  fi
else
  test_failed "Production build failed"
  echo ""
  echo "Build errors:"
  tail -50 /tmp/build.log
fi
echo ""

# === TEST 5: Check node_modules ===
echo "5. Checking dependencies..."
if [ -d "node_modules" ]; then
  test_passed "node_modules folder exists"
else
  test_warning "node_modules not found - run 'npm install' before deploying"
fi
echo ""

# === TEST 6: Check for secrets in code ===
echo "6. Checking for secrets in code (basic check)..."
if grep -r "STRIPE_SECRET\|sk_live\|sk_test" --include="*.tsx" --include="*.ts" app/ 2>/dev/null | grep -v "STRIPE_SECRET_KEY" | grep -q .; then
  test_failed "Found potential secrets in code (Stripe keys hardcoded)"
else
  test_passed "No obvious hardcoded secrets found"
fi
echo ""

# === TEST 7: Check for console logs ===
echo "7. Checking for debug logs in production code..."
DEBUG_LOGS=$(grep -r "console\." --include="*.tsx" --include="*.ts" app/ 2>/dev/null | grep -v "node_modules" | grep -v "console.error\|console.warn" | wc -l)
if [ "$DEBUG_LOGS" -gt 0 ]; then
  test_warning "Found console logs in production code (consider removing for production)"
else
  test_passed "No console.log statements found"
fi
echo ""

# === SUMMARY ===
echo "==================================="
echo "Test Summary"
echo "==================================="
echo -e "${GREEN}Passed: $PASSED${NC}"
echo -e "${RED}Failed: $FAILED${NC}"

if [ "$FAILED" -eq 0 ]; then
  echo ""
  echo -e "${GREEN}✓ All pre-deployment checks passed!${NC}"
  echo ""
  echo "Next steps:"
  echo "1. Push to git: git push"
  echo "2. Watch Vercel dashboard for auto-deploy"
  echo "3. Once deployed, run SMOKE_TESTS.md checklist"
  echo ""
  exit 0
else
  echo ""
  echo -e "${RED}✗ Some checks failed. Fix issues before deploying.${NC}"
  echo ""
  echo "For detailed smoke tests after deployment, see: SMOKE_TESTS.md"
  echo ""
  exit 1
fi
