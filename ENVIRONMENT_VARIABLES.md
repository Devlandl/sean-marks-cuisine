# Environment Variables - Sean Mark's Cuisine

## Overview

This document outlines all required environment variables for the Sean Mark's Cuisine application. The project uses four external services that require API keys:

1. **Convex** - Backend database and API
2. **Clerk** - User authentication
3. **Stripe** - Payment processing
4. **Resend** - Email sending

## Current Status

| Variable | Location | Status |
|----------|----------|--------|
| `NEXT_PUBLIC_CONVEX_URL` | Convex | Placeholder |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Clerk | Placeholder |
| `CLERK_SECRET_KEY` | Clerk | Placeholder |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Stripe | Placeholder |
| `STRIPE_SECRET_KEY` | Stripe | Placeholder |
| `STRIPE_WEBHOOK_SECRET` | Stripe | Placeholder |
| `RESEND_API_KEY` | Resend | Placeholder |
| `NEXT_PUBLIC_SITE_URL` | App Config | Set to http://localhost:3000 |

## How to Get Each Key

### 1. Convex Backend URL

**Where to find it:**
1. Go to https://dashboard.convex.dev
2. Select the Sean Mark's Cuisine project
3. Navigate to Settings
4. Copy the "Deployment URL"

**Value format:** Starts with `https://` (e.g., `https://polished-bear-123.convex.cloud`)

**Add to .env.local:**
```
NEXT_PUBLIC_CONVEX_URL=https://polished-bear-123.convex.cloud
```

---

### 2. Clerk Authentication Keys

**Where to find them:**
1. Go to https://dashboard.clerk.com
2. Select the Sean Mark's Cuisine application
3. Click "API Keys" in the left sidebar
4. Copy both keys:
   - **Publishable Key** (starts with `pk_test_` or `pk_live_`)
   - **Secret Key** (starts with `sk_test_` or `sk_live_`)

**Add to .env.local:**
```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_xxxxxxxxxxxxxxxxxxxxx
CLERK_SECRET_KEY=sk_test_xxxxxxxxxxxxxxxxxxxxx
```

---

### 3. Stripe Payment Keys

**Where to find them:**
1. Go to https://dashboard.stripe.com
2. Click "Developers" in the left sidebar
3. Click "API Keys"
4. You'll see two keys:
   - **Publishable Key** (starts with `pk_test_` or `pk_live_`)
   - **Secret Key** (starts with `sk_test_` or `sk_live_`)

**For Webhook Secret:**
1. In Developers section, click "Webhooks"
2. Find the webhook endpoint for this application
3. Click "Reveal" to see the signing secret (starts with `whsec_`)

**Add to .env.local:**
```
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxxxxxxxxxxxxxxxxxxxx
STRIPE_SECRET_KEY=sk_test_xxxxxxxxxxxxxxxxxxxxx
STRIPE_WEBHOOK_SECRET=whsec_xxxxxxxxxxxxxxxxxxxxx
```

**Note:** Keep `STRIPE_SECRET_KEY` and `STRIPE_WEBHOOK_SECRET` completely private. Never commit these to Git.

---

### 4. Resend Email API Key

**Where to find it:**
1. Go to https://resend.com
2. Log in to your account
3. Click "API Keys" in the left sidebar
4. Copy the API key (starts with `re_`)

**Add to .env.local:**
```
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxx
```

**Note:** Keep this completely private. Never commit to Git.

---

## Environment Variables for Vercel Deployment

Once you have all keys, add them to Vercel:

### Steps to Configure Vercel:

1. **Go to Vercel Dashboard**
   - Navigate to https://vercel.com
   - Select the "sean-marks-cuisine" project

2. **Access Environment Variables**
   - Click "Settings"
   - Select "Environment Variables" from the left sidebar

3. **Add Each Variable**
   - Click "Add New"
   - Enter the variable name (e.g., `NEXT_PUBLIC_CONVEX_URL`)
   - Enter the value (the actual API key)
   - Select which environments this applies to:
     - For `NEXT_PUBLIC_*` variables: Production, Preview, Development
     - For secret keys (`STRIPE_SECRET_KEY`, `CLERK_SECRET_KEY`, `RESEND_API_KEY`): Production + Preview (or just Production if preferred)

4. **Apply to All Environments**
   - Make sure each variable is set for:
     - ✓ Production
     - ✓ Preview
     - ✓ Development (optional, but recommended)

5. **Save and Redeploy**
   - Click "Save"
   - Go to "Deployments"
   - Redeploy the latest commit to apply the new variables

---

## Local Development (.env.local)

The `.env.local` file is already in `.gitignore`, so it won't be committed to Git. This is the correct behavior - **never commit API keys**.

**To set up locally:**
1. Create/update `.env.local` in the project root
2. Add all values (as shown above)
3. Run `npm run dev`
4. The app will use these values locally

**This file is git-ignored and safe.**

---

## Testing Environment Variables

After adding variables to Vercel, verify they're working:

### Local Testing:
```bash
# Check that .env.local is loaded (don't commit the file!)
cat .env.local

# Run the dev server
npm run dev

# Open http://localhost:3000 and test:
# - User signup/login (Clerk)
# - Make a purchase (Stripe)
# - Check that email confirmations send (Resend)
```

### After Vercel Deployment:
1. Open https://sean-marks-cuisine-prod.vercel.app (or your domain)
2. Test user authentication (Clerk)
3. Test checkout flow (Stripe)
4. Verify order confirmation emails arrive (Resend)

---

## Security Checklist

Before deploying to production:

- [ ] `NEXT_PUBLIC_CONVEX_URL` is set in Vercel
- [ ] `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` is set in Vercel
- [ ] `CLERK_SECRET_KEY` is set in Vercel (never in code)
- [ ] `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` is set in Vercel
- [ ] `STRIPE_SECRET_KEY` is set in Vercel (never in code)
- [ ] `STRIPE_WEBHOOK_SECRET` is set in Vercel (never in code)
- [ ] `RESEND_API_KEY` is set in Vercel (never in code)
- [ ] `.env.local` is in `.gitignore` (it is)
- [ ] `.env.local` is NOT committed to Git
- [ ] No API keys appear anywhere in the codebase

---

## Reference: What Each Service Does

| Service | Purpose | Key Type | Sensitivity |
|---------|---------|----------|-------------|
| **Convex** | Database & backend API | Deployment URL | Public (safe to expose) |
| **Clerk** | User authentication & sign-up | Publishable + Secret | Secret key is private |
| **Stripe** | Payment processing | Publishable + Secret | Both keys must be protected |
| **Resend** | Transactional email | API Key | Private - never share |

---

## Troubleshooting

### "Convex connection failed"
- Verify `NEXT_PUBLIC_CONVEX_URL` is correct and starts with `https://`
- Check that the Convex deployment is active in the dashboard
- Restart dev server: `npm run dev`

### "Clerk authentication not working"
- Verify both `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY` are set
- Check that the Clerk app is configured with the correct domain (localhost:3000 for local dev)
- Restart dev server

### "Stripe payments failing"
- Verify `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` and `STRIPE_SECRET_KEY` are both set
- Confirm you're using the correct keys (test vs. live)
- Check that the webhook endpoint is configured and secret is correct

### "Emails not sending"
- Verify `RESEND_API_KEY` is correct
- Check that sender email is configured in Resend dashboard
- Verify email addresses in code are correct

---

**Last Updated:** 2026-04-15

