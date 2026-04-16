# Convex Backend Setup - Next Steps

The Convex schema has been created and committed. Now you need to deploy it to the Convex cloud.

## What's Done

- ✅ Created `convex/schema.ts` with 12 tables (menus, orders, customers, events, etc.)
- ✅ Created `convex.json` with project configuration
- ✅ Committed to git

## What You Need to Do (Interactive Steps)

### Step 1: Run Convex Dev Setup

Open your terminal in the project and run:

```bash
npm run dev
```

Wait for the dev server to start. Then in a **separate terminal**, run:

```bash
npx convex dev
```

This will:
1. Open your browser to Convex dashboard (you may need to log in)
2. Create a new Convex project called "sean-marks-cuisine"
3. Deploy your schema to the cloud
4. Generate the `NEXT_PUBLIC_CONVEX_URL` environment variable

### Step 2: Copy the Convex URL

When `npx convex dev` finishes, it will print your deployment URL:

```
Deployment URL: https://your-project-name.convex.cloud
```

Copy that URL and add it to `.env.local`:

```
NEXT_PUBLIC_CONVEX_URL=https://your-project-name.convex.cloud
```

### Step 3: Generate API Types

After deployment, generate TypeScript types for Convex:

```bash
npx convex codegen
```

This creates `convex/_generated/api.d.ts` with type definitions for all your tables and functions.

### Step 4: Test the Connection

Restart your dev server:

```bash
npm run dev
```

If there are no errors, Convex is connected!

## Database Schema Overview

Your schema includes:

- **menus** - Weekly meal menus with cutoff dates
- **menuItems** - Individual dishes with prices (half/full portions)
- **addOns** - Side items, upgrades, extras
- **orders** - Customer orders with line items, delivery address, payment status
- **customers** - Customer profiles with order history
- **events** - Dinner events, classes, special gatherings
- **eventRegistrations** - Sign-ups for events
- **cateringInquiries** - Catering requests from customers
- **messages** - Contact form submissions
- **galleryImages** - Photos organized by category
- **faqs** - Frequently asked questions by section
- **settings** - Business settings (address, hours, delivery zones, etc.)

## If You Get Stuck

Common issues:

1. **"You don't have access to the selected project"**
   - Run `npx convex logout` then `npx convex dev` again
   - Make sure you're logged into the correct Convex account

2. **"CONVEX_DEPLOYMENT not set"**
   - This means the project hasn't been deployed yet
   - Run `npx convex dev` in a separate terminal while the app is running

3. **Can't connect to http://localhost:3000**
   - Make sure you ran `npm run dev` first in a separate terminal
   - Check that port 3000 is not in use

## What's Next

After Convex is deployed:

1. Create Convex functions (queries, mutations, actions) in `convex/`
2. Set up authentication with Clerk
3. Wire up Stripe for payments
4. Build admin pages to manage menus, orders, events

See the main project plan for more details.
