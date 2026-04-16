# Vercel Deployment Setup - Sean Mark's Cuisine

**Project Name:** sean-marks-cuisine
**Framework:** Next.js 15
**Build Command:** npm run build
**Start Command:** npm start
**Node Version:** 20.x

## Status: BUILD BLOCKED - Missing Dependencies

### Issue Summary
The project cannot build due to missing component and utility files. The build fails with 13 errors related to unresolved imports.

### Missing Files (Must Be Created)

**Admin Components:**
- `components/admin/CateringInquiriesTable.tsx`
- `components/admin/CustomersTable.tsx`
- `components/admin/EventsTable.tsx`
- `components/admin/MessagesTable.tsx`
- `components/admin/OrdersTable.tsx`
- `components/admin/OrderDetailModal.tsx`

**Utilities:**
- `lib/store/useCartStore.ts` (Zustand store for cart)
- `lib/reports/sampleReportData.ts`

**Structure Issue:**
- Files in `app/lib/` should be in root `lib/` directory
- Need to move `app/lib/reports/*` to `lib/reports/`

### Build Output
```
Error: Turbopack build failed with 13 errors
- Module not found: @/components/admin/CateringInquiriesTable
- Module not found: @/components/admin/CustomersTable
- Module not found: @/components/admin/EventsTable
- Module not found: @/components/admin/MessagesTable
- Module not found: @/components/admin/OrdersTable
- Module not found: @/components/admin/OrderDetailModal
- Module not found: @/lib/store/useCartStore
- Module not found: @/lib/reports/sampleReportData
```

## Next Steps

1. **Create missing components** in `components/admin/`
2. **Create missing utilities** in `lib/`
3. **Fix directory structure** - move `app/lib/reports/` to `lib/reports/`
4. **Re-run build:** `npm run build`
5. **Link to Vercel:** `npx vercel link`
6. **Create .vercelignore** file
7. **Deploy:** `npx vercel`

## Vercel Configuration Ready

When the build issue is resolved, these settings will be used:

- **Framework Preset:** Next.js
- **Build Command:** `npm run build`
- **Output Directory:** `.next`
- **Install Command:** `npm install`
- **Development Command:** `npm run dev`

## Environment Variables Needed

(To be set in Vercel dashboard)
- CONVEX_URL
- NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
- CLERK_SECRET_KEY
- STRIPE_PUBLIC_KEY
- STRIPE_SECRET_KEY
- RESEND_API_KEY

---
**Status:** BLOCKED - Fix build errors before proceeding with deployment
**Date:** 2026-04-15
