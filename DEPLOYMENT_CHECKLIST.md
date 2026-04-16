# Deployment Checklist - Sean Mark's Cuisine

Complete this checklist before and after deploying to production. This ensures nothing is missed and you can quickly troubleshoot if needed.

---

## Pre-Deployment: Code & Environment

### 1. Code Review & Commits
- [ ] All code changes committed to git
- [ ] Run `git status` - shows clean (no uncommitted changes)
- [ ] Review recent commits: `git log --oneline -5`
- [ ] No sensitive data in commits (API keys, passwords)
- [ ] All code follows linting rules: `npm run lint`

### 2. Build Verification
- [ ] `npm run build` completes without errors
- [ ] Build output exists: check for `.next/` folder
- [ ] No TypeScript errors
- [ ] No missing dependencies

### 3. Local Testing
- [ ] `npm run dev` starts successfully
- [ ] Open http://localhost:3000 - homepage loads
- [ ] Navigate through key pages (menu, contact, admin)
- [ ] Test cart functionality (add item, view cart)
- [ ] Test contact form submission
- [ ] Check browser console (F12) - no red errors

### 4. Environment Variables
**Important:** Never commit `.env.local` to git. It's gitignored.

- [ ] `.env.local` file exists locally (not in git)
- [ ] File contains all required variables:
  - [ ] `NEXT_PUBLIC_CONVEX_URL`
  - [ ] `CONVEX_DEPLOYMENT`
  - [ ] `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
  - [ ] `CLERK_SECRET_KEY`
  - [ ] `STRIPE_SECRET_KEY`
  - [ ] `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
  - [ ] `RESEND_API_KEY`
  - [ ] `ADMIN_EMAIL`
- [ ] Verify all values are correct (not from another project)
- [ ] Verify keys are valid (not expired or revoked)

### 5. Git Push
- [ ] Commit final changes (if any)
- [ ] Push to git: `git push origin [branch]`
- [ ] GitHub shows latest commit successfully pushed
- [ ] No push errors or conflicts

---

## Deployment: Vercel Setup

### 1. Vercel Dashboard Access
- [ ] Go to https://vercel.com
- [ ] Log in with correct account
- [ ] Find "sean-marks-cuisine" project
- [ ] You have access to deploy (Owner or Admin role)

### 2. Environment Variables in Vercel

**Navigate to:** Project Settings > Environment Variables

- [ ] Add `NEXT_PUBLIC_CONVEX_URL` = [your Convex URL]
- [ ] Add `CONVEX_DEPLOYMENT` = [your deployment name]
- [ ] Add `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` = [Clerk key]
- [ ] Add `CLERK_SECRET_KEY` = [Clerk secret]
- [ ] Add `STRIPE_SECRET_KEY` = [Stripe secret]
- [ ] Add `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` = [Stripe public key]
- [ ] Add `RESEND_API_KEY` = [Resend key]
- [ ] Add `ADMIN_EMAIL` = [your admin email]

**Each variable should have:**
- [ ] Value entered correctly (no typos, extra spaces)
- [ ] Applied to: Production, Preview, Development
- [ ] Saved successfully

### 3. Domain Configuration (Optional)
- [ ] If using custom domain (e.g., seanmarkscuisine.com):
  - [ ] Add domain in Vercel > Settings > Domains
  - [ ] Update DNS records if needed
  - [ ] Wait for SSL certificate (5-10 minutes)
  - [ ] Verify domain shows green checkmark

### 4. Trigger Deployment
**Option A: Auto-Deploy (Recommended)**
- [ ] Git push triggers auto-deploy automatically
- [ ] Watch Vercel dashboard for build to start
- [ ] Wait for "Deployment Successful" message

**Option B: Manual Deploy**
- [ ] Go to Vercel dashboard > Deployments
- [ ] Click "Deploy" or "Redeploy" button
- [ ] Select branch (usually `main` or `master`)
- [ ] Click "Deploy"

### 5. Monitor Build
- [ ] Vercel shows "Building..." status
- [ ] Check build logs for any errors
- [ ] Wait for "Deployment Successful" message
- [ ] Build should complete in 2-5 minutes
- [ ] If build fails, note error and fix locally

---

## Post-Deployment: Verification

### 1. Access Deployed Site
- [ ] Click "Visit" in Vercel dashboard
- [ ] Or go to: https://[project].vercel.app
- [ ] Or go to custom domain if configured
- [ ] Page loads without errors
- [ ] No "Building..." or error messages

### 2. Critical Path Testing
- [ ] Homepage (/) loads and displays
- [ ] Navigation menu works
- [ ] Can navigate to menu page
- [ ] Can add item to cart
- [ ] Can view cart
- [ ] Can navigate to checkout
- [ ] Contact form loads
- [ ] Admin page requires login
- [ ] Can access admin dashboard with credentials

### 3. Check Logs
**In Vercel Dashboard:**
- [ ] Go to Deployments > [latest]
- [ ] Open Logs tab
- [ ] Check for any errors (red text)
- [ ] No "Failed" messages
- [ ] No timeout errors

### 4. Browser Console Check (F12)
Open deployed site and press F12:
- [ ] No red JavaScript errors
- [ ] No 404 errors for resources (CSS, JS, images)
- [ ] No CORS errors (orange/yellow warnings are often okay)
- [ ] Network tab shows successful requests (200, 201 status codes)

### 5. Functionality Testing
**Cart & Checkout**
- [ ] Add menu item to cart
- [ ] View cart shows correct item and price
- [ ] Can proceed to checkout
- [ ] Checkout form displays

**Forms**
- [ ] Contact form submits
- [ ] Success message appears
- [ ] Catering inquiry form works
- [ ] No form submission errors

**Admin**
- [ ] Navigate to /admin
- [ ] Redirects to login if not authenticated
- [ ] Can log in with admin credentials
- [ ] Admin pages load (menu, orders, settings, etc.)

### 6. Mobile Responsiveness
- [ ] Resize browser to 375px (mobile size)
- [ ] Navigation menu responsive
- [ ] Forms visible and usable
- [ ] Text readable (no overflow)
- [ ] Images load correctly

### 7. SSL & Security
- [ ] URL shows https:// (locked padlock icon)
- [ ] No mixed content warnings (F12)
- [ ] Certificate is valid (not expired)

---

## Troubleshooting Deployment Issues

### Build Failed
**Symptoms:** Red error in build logs

**Steps:**
1. Note the exact error message
2. Go back to local code
3. Check the file mentioned in error
4. Run `npm run lint` and `npm run build` locally
5. Fix the error
6. Commit and push to git
7. Vercel should auto-redeploy
8. Check logs again

### Environment Variables Not Working
**Symptoms:** "Cannot read property", "undefined", or blank values

**Steps:**
1. Go to Vercel > Settings > Environment Variables
2. Verify all variables are set
3. Verify values are correct (copy-paste to check for spaces)
4. Check variable is applied to correct environment (Production)
5. Trigger a redeploy (go to Deployments, click "Redeploy" on latest)
6. Wait 2-3 minutes and refresh

### Forms Don't Submit
**Symptoms:** Click submit, nothing happens or error message

**Steps:**
1. Check browser console (F12) for JavaScript errors
2. Go to Vercel logs and look for API errors
3. Verify environment variables are set:
   - RESEND_API_KEY for email
   - CONVEX_DEPLOYMENT and NEXT_PUBLIC_CONVEX_URL for database
4. Check Resend dashboard for errors
5. Check Convex dashboard for errors
6. If error persists, fix locally, commit, and redeploy

### Admin Login Not Working
**Symptoms:** Can't log in to /admin

**Steps:**
1. Verify CLERK_SECRET_KEY is set in Vercel environment
2. Verify NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY is set
3. Go to Clerk dashboard and check API keys are valid
4. Clear browser cache and cookies
5. Try incognito/private browsing
6. If still broken, check Vercel logs for Clerk errors

### Stripe Not Working
**Symptoms:** Payment form shows error, or shows test mode

**Steps:**
1. Verify STRIPE_SECRET_KEY is set in Vercel
2. Verify NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is set
3. Go to Stripe dashboard > API Keys
4. Verify you're using LIVE keys (not test keys)
5. Copy-paste keys carefully (no extra spaces)
6. Trigger redeploy in Vercel
7. Test with Stripe test card if using test mode

### Database Not Working
**Symptoms:** "Cannot connect to database", blank data, errors in admin

**Steps:**
1. Verify CONVEX_DEPLOYMENT is set correctly
2. Verify NEXT_PUBLIC_CONVEX_URL is set
3. Go to Convex dashboard
4. Check deployment status (should be green)
5. Check if database has data (go to Data tab)
6. Verify API keys/secrets are correct
7. Trigger redeploy

---

## Rollback Plan

If something is broken in production and you need to revert:

### Quick Rollback
1. Go to Vercel dashboard > Deployments
2. Find the previous working deployment (usually just before the broken one)
3. Click the "..." menu on that deployment
4. Click "Redeploy"
5. Vercel redeploys the old version (same code, same config)
6. Wait for "Deployment Successful"
7. Site is now reverted to previous version

### Manual Fix & Redeploy
1. Go back to local code
2. Find and fix the issue
3. Test locally: `npm run dev`
4. Verify: `npm run lint` and `npm run build`
5. Commit: `git commit -m "fix: [what you fixed]"`
6. Push: `git push`
7. Vercel auto-deploys
8. Verify in production

---

## Deployment Verification Checklist

| Step | Status | Notes |
|------|--------|-------|
| Pre-deployment checks | ✓ / ✗ | Code clean, lint passes, build succeeds? |
| Environment variables in Vercel | ✓ / ✗ | All 8 variables set and correct? |
| Deployment triggered | ✓ / ✗ | Git push or manual deploy? |
| Build successful | ✓ / ✗ | Deployment shows "Successful"? |
| Site loads | ✓ / ✗ | Homepage loads at live URL? |
| Key pages work | ✓ / ✗ | Menu, contact, admin pages load? |
| Forms submit | ✓ / ✗ | Contact form and checkout work? |
| Console clean | ✓ / ✗ | No red errors in browser F12? |
| Mobile responsive | ✓ / ✗ | Works on 375px width? |
| HTTPS working | ✓ / ✗ | Shows https://, padlock icon visible? |

---

## Final Sign-Off

When ALL checks are complete and passing:

- [ ] Pre-deployment checklist completed
- [ ] Deployment successful in Vercel
- [ ] Post-deployment testing completed
- [ ] All critical features verified working
- [ ] No blocking errors or issues
- [ ] **Status: READY FOR PRODUCTION**

**Deployed By:** _______________
**Date & Time:** _______________
**Deployment ID:** _______________
**URL:** _______________

**Notes / Issues Encountered:**
```
[Document any issues, fixes applied, or notes for future reference]
```

---

## Quick Reference: Common Commands

```bash
# Pre-deployment
npm run lint        # Check for code errors
npm run build       # Build for production
npm run dev         # Test locally

# Git
git status          # See what changed
git log --oneline   # See recent commits
git push            # Push to GitHub (triggers Vercel deploy)

# After pushing, watch Vercel dashboard for auto-deploy
```

---

## Support Resources

- **Vercel Dashboard:** https://vercel.com/dashboard
- **Clerk Docs:** https://clerk.com/docs
- **Stripe Docs:** https://stripe.com/docs
- **Resend Docs:** https://resend.com/docs
- **Convex Docs:** https://docs.convex.dev
- **Next.js Docs:** https://nextjs.org/docs

For questions or errors, check the relevant dashboard (Vercel, Stripe, Clerk, Resend, Convex) and look for error logs.
