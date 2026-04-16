# Smoke Tests - Sean Mark's Cuisine

Comprehensive verification checklist to ensure the application is ready for production deployment. Run the pre-deployment checklist before pushing to Vercel, and the post-deployment checklist after deployment succeeds.

---

## Pre-Deployment Checklist

Run these tests locally before deploying to Vercel.

### Code Quality & Build
- [ ] `npm run lint` passes with 0 errors
- [ ] `npm run build` completes without errors
- [ ] No TypeScript compilation errors
- [ ] All imports resolve correctly
- [ ] No console warnings during build

### Development Server
- [ ] `npm run dev` starts successfully
- [ ] Server listens on http://localhost:3000
- [ ] No console errors on startup
- [ ] Page loads without hanging or timing out
- [ ] Console shows no red errors (F12 to check)

### Git Status
- [ ] All code committed with `git status` showing clean
- [ ] Latest code matches what you intend to deploy
- [ ] No uncommitted changes in critical files

### Environment Variables
- [ ] `.env.local` file exists (not in git)
- [ ] `NEXT_PUBLIC_CONVEX_URL` is set
- [ ] `CONVEX_DEPLOYMENT` is set
- [ ] `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` is set
- [ ] `CLERK_SECRET_KEY` is set
- [ ] `STRIPE_SECRET_KEY` is set (for Stripe webhook)
- [ ] `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` is set (if using Stripe on frontend)
- [ ] `RESEND_API_KEY` is set
- [ ] `ADMIN_EMAIL` is set (for notifications)

---

## Post-Deployment Checklist

Run these tests after successful deployment to Vercel. Test the live deployed URL.

### Public Pages Load
- [ ] Homepage (/) loads and displays correctly
- [ ] About page (/about) loads
- [ ] Menu page (/menu) loads with menu items visible
- [ ] Catering page (/catering) loads
- [ ] Events page (/events) loads
- [ ] Event detail page (/events/[id]) loads
- [ ] Gallery page (/gallery) loads with images
- [ ] FAQ page (/faq) loads with questions and answers
- [ ] Contact page (/contact) loads with contact form

### Navigation & Links
- [ ] Navigation menu displays correctly
- [ ] All header links are clickable and navigate correctly
- [ ] Footer links work
- [ ] Back buttons and internal links navigate properly
- [ ] No broken links (404 errors)

### Shopping Cart
- [ ] Add menu item to cart succeeds
- [ ] Cart shows correct item and price
- [ ] Cart shows correct subtotal/total
- [ ] Remove item from cart works
- [ ] Update item quantity works
- [ ] Cart persists after page refresh
- [ ] Navigate to checkout (/checkout) succeeds

### Checkout Flow
- [ ] Checkout page loads
- [ ] Form fields render (name, email, phone, address)
- [ ] Form validation works (try submitting empty)
- [ ] Coupon code input visible and functional
- [ ] Stripe payment element loads (if Stripe keys configured)
- [ ] Submit button is clickable and sends to payment processor

### Forms
- [ ] Contact form (/contact) loads
- [ ] Contact form submits successfully
- [ ] Success message appears after form submission
- [ ] Catering inquiry form works
- [ ] Event registration form works
- [ ] Form validation prevents empty submissions
- [ ] Form error messages display correctly

### Admin Dashboard
- [ ] Admin dashboard (/admin) requires authentication
- [ ] Cannot access /admin without logging in
- [ ] Admin login with valid credentials succeeds
- [ ] Admin menu page (/admin/menu) loads and displays items
- [ ] Admin orders page (/admin/orders) loads
- [ ] Admin catering page (/admin/catering) loads with inquiries
- [ ] Admin events page (/admin/events) loads
- [ ] Admin customers page (/admin/customers) loads
- [ ] Admin gallery page (/admin/gallery) loads
- [ ] Admin FAQ page (/admin/faq) loads
- [ ] Admin messages page (/admin/messages) loads
- [ ] Admin analytics page (/admin/analytics) loads
- [ ] Admin settings page (/admin/settings) loads
- [ ] Admin users page (/admin/users) loads
- [ ] Admin reports page (/admin/reports) loads

### Admin Features
- [ ] Can create new menu item
- [ ] Can edit existing menu item
- [ ] Can delete menu item
- [ ] Can manage gallery images
- [ ] Can manage FAQ entries
- [ ] Can view customer information
- [ ] Can view orders and process them
- [ ] Can manage catering inquiries
- [ ] Can manage events
- [ ] Analytics dashboard shows data correctly

### Browser Console (F12)
- [ ] No JavaScript errors (red messages)
- [ ] No 404 errors for assets (CSS, JS, images)
- [ ] No CORS errors
- [ ] No authentication errors
- [ ] No network timeouts

### Responsive Design
- [ ] Resize browser to 375px width (mobile)
- [ ] Navigation menu responsive (hamburger/mobile menu works)
- [ ] Forms accessible and usable on mobile
- [ ] Images load and scale correctly on mobile
- [ ] Text is readable (no overflow or squashed content)
- [ ] Buttons are clickable on mobile
- [ ] Tabs and size to 768px (tablet) and 1024px (desktop)

### Images & Media
- [ ] All images load correctly
- [ ] No broken image icons
- [ ] Gallery images display with correct aspect ratio
- [ ] Menu item images load
- [ ] Logo loads in header
- [ ] Favicon displays in browser tab

### Performance
- [ ] Page loads in under 3 seconds on decent connection
- [ ] No infinite loading spinners or hung requests
- [ ] Network requests complete successfully (no timeouts)
- [ ] CSS and JavaScript load without errors

### Security
- [ ] HTTPS is enforced (URL shows https://, not http://)
- [ ] Forms submit over HTTPS
- [ ] No mixed content warnings (F12)
- [ ] Admin pages require authentication
- [ ] Cannot access admin pages without login
- [ ] Logout clears authentication

---

## Critical User Flows

Test these end-to-end scenarios to verify core functionality.

### Flow 1: Browse and Order
1. [ ] Start at homepage
2. [ ] Navigate to Menu
3. [ ] Select and add item to cart
4. [ ] View cart
5. [ ] Update quantity
6. [ ] Navigate to checkout
7. [ ] Fill form with test data
8. [ ] Attempt payment (use Stripe test card if available)
9. [ ] See order confirmation (or success page)

### Flow 2: Contact Inquiry
1. [ ] Navigate to Contact page
2. [ ] Fill contact form (name, email, message)
3. [ ] Submit form
4. [ ] See success message
5. [ ] Verify email received (check Resend or email client)

### Flow 3: Catering Request
1. [ ] Navigate to Catering page
2. [ ] Fill catering inquiry form
3. [ ] Submit
4. [ ] See confirmation message
5. [ ] Admin can view in /admin/catering

### Flow 4: Admin Menu Management
1. [ ] Log in to /admin with admin credentials
2. [ ] Go to /admin/menu
3. [ ] Click "Add New Item" or similar
4. [ ] Fill form and submit
5. [ ] See item appear in menu
6. [ ] Go back to /menu and see new item listed
7. [ ] Edit item and verify changes appear
8. [ ] Delete item and verify it's removed

---

## Troubleshooting

### If a test fails:

1. **Note the specific failure** - which page, which action, what error?
2. **Check browser console (F12)** - Look for JavaScript errors
3. **Check Vercel logs** - Go to Vercel dashboard > Deployments > [latest] > Logs
4. **Fix locally:**
   ```bash
   npm run dev
   # Reproduce the failure locally
   # Look for error messages
   # Fix the code
   npm run lint
   npm run build
   ```
5. **Re-test locally** - Verify the fix works with `npm run dev`
6. **Commit and redeploy** - Push to git, Vercel auto-deploys
7. **Re-test on live deployment** - Verify the fix is live

### Common Issues

**"Cannot read property of undefined"**
- Page component is trying to access data that doesn't exist
- Check Convex connection and database

**"CORS error"**
- Backend API is not accessible from frontend
- Check environment variables (CONVEX_URL)
- Check Convex deployment status

**"Stripe error"**
- Stripe keys missing or incorrect
- Check Vercel environment variables
- Verify Stripe key is in correct Vercel environment

**"Form won't submit"**
- Check for validation errors in browser console
- Verify form fields have correct names
- Check Resend API key is set

**"Images won't load"**
- Check image paths in code
- Verify images are in public/ folder (if using static images)
- Check for CORS if loading from external source

---

## Deployment Verification Summary

| Category | Status | Notes |
|----------|--------|-------|
| Pre-Deployment | ✓ / ✗ | All checks passed before deploy? |
| Build & Lint | ✓ / ✗ | `npm run lint` and `npm run build` successful? |
| Public Pages | ✓ / ✗ | All 9 public pages load? |
| Forms | ✓ / ✗ | Contact, catering, checkout forms work? |
| Admin Dashboard | ✓ / ✗ | Authentication works, all admin pages load? |
| Cart & Checkout | ✓ / ✗ | Add to cart, checkout flow works? |
| Console | ✓ / ✗ | No JavaScript errors? |
| Responsive | ✓ / ✗ | Works on mobile (375px), tablet, desktop? |
| Security | ✓ / ✗ | HTTPS enforced, admin protected? |
| Live Testing | ✓ / ✗ | One complete user flow tested end-to-end? |

---

## Sign-Off

**When all tests pass:**
- [ ] Initial build verification complete
- [ ] Post-deployment testing complete
- [ ] All critical flows verified
- [ ] No blocking errors found
- [ ] Ready for production use

**Date Tested:** _______________
**Tested By:** _______________
**Notes:** _______________________________________________
