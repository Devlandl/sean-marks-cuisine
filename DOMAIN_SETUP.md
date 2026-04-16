# Domain Setup - Sean Mark's Cuisine

**Project:** Sean Mark's Cuisine  
**Domain:** seanmarkscuisine.com  
**Vercel Project:** sean-marks-cuisine  
**Status:** Ready for domain connection  

---

## Overview

This document guides you through connecting seanmarkscuisine.com to your Vercel deployment. The process has two main steps:

1. **Add the domain in Vercel Dashboard** (5 minutes)
2. **Update DNS records at your registrar** (5 minutes, then 5-48 hours for propagation)

DNS propagation time varies - often 10-30 minutes, but can take up to 48 hours in rare cases.

---

## Step 1: Add Domain in Vercel Dashboard

### Prerequisites
- Vercel project "sean-marks-cuisine" must be created and linked to your GitHub repository
- You have admin access to the Vercel project
- Domain is registered at a registrar (GoDaddy, Namecheap, etc.)

### Instructions

1. **Go to Vercel Dashboard**
   - Open https://vercel.com/dashboard
   - Select the "sean-marks-cuisine" project

2. **Navigate to Settings > Domains**
   - Click Settings in the left sidebar
   - Click the Domains tab
   - You should see any current deployments listed

3. **Add Root Domain**
   - Click "Add Domain"
   - Enter: `seanmarkscuisine.com` (without www)
   - Click "Add"
   - Vercel will validate ownership and show DNS instructions

4. **Add WWW Subdomain**
   - Click "Add Domain" again
   - Enter: `www.seanmarkscuisine.com`
   - Click "Add"
   - Vercel will show DNS instructions

### What Vercel Shows You

Vercel will display DNS records like:

```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

And for the root domain, one of these options:

**Option A: CNAME (easiest, but not standard)**
```
Type: CNAME
Name: @
Value: cname.vercel-dns.com
```

**Option B: A Record (standard approach)**
```
Type: A
Name: @
Value: 76.76.19.120 (example IP - verify in Vercel dashboard)
```

**Option C: ANAME/ALIAS (some registrars)**
```
Type: ANAME or ALIAS
Name: @
Value: cname.vercel-dns.com
```

The exact approach depends on your registrar. Vercel shows the correct records for your specific domain.

---

## Step 2: Update DNS Records at Your Registrar

### Find Your Registrar

Common registrars and their DNS management links:

- **GoDaddy:** https://mypapps.godaddy.com/domains/ (Manage > DNS)
- **Namecheap:** https://ap.namecheap.com/dashboard/domains (Manage > Advanced DNS)
- **Name.com:** https://www.name.com/account/domain (Manage)
- **Bluehost:** Control Panel > Domains > Manage
- **HostGator:** Control Panel > Domains > Manage
- **AWS Route 53:** https://console.aws.amazon.com/route53/home
- **CloudFlare:** https://dash.cloudflare.com (DNS tab)
- **Others:** Search "[Your Registrar] DNS settings"

### Instructions (General Steps)

1. **Log in to your domain registrar**

2. **Find DNS Management**
   - Look for "DNS Settings," "Manage DNS," "Advanced DNS," or "Name Servers"
   - Select seanmarkscuisine.com

3. **Add/Update DNS Records**

   **For www subdomain:**
   - Type: CNAME
   - Name/Host: www
   - Value: [Vercel provides this - e.g., cname.vercel-dns.com]
   - TTL: 3600 (or default)
   - Save/Update

   **For root domain (@):**
   - Follow Vercel's specific instructions (varies by registrar)
   - Most common: CNAME, A Record, or ANAME/ALIAS
   - Copy exact values from Vercel dashboard
   - TTL: 3600 (or default)
   - Save/Update

4. **Save Changes**
   - Some registrars update immediately
   - Others take 5-48 hours to propagate globally

### Registrar-Specific Notes

**GoDaddy:**
- DNS > Zone File tab
- Add records or edit existing ones
- "A" records point to IP, "CNAME" records point to domains

**Namecheap:**
- Advanced DNS tab
- Add "A Record" or "CNAME Record"
- TTL dropdown usually on the right
- DNS records can take 10-30 minutes to update

**CloudFlare (if you use it):**
- DNS tab
- Type: CNAME for www
- Type: A Record for root (pointing to Vercel IP)
- Proxy status: "DNS only" (orange cloud), not proxied

---

## Step 3: Verify Domain Connection

### Immediate Check (in Vercel)

1. Go back to Vercel Dashboard > Settings > Domains
2. Look for your domain seanmarkscuisine.com
3. Status shows:
   - **Green checkmark** = DNS verified, site live
   - **Yellow pending** = DNS records detected, waiting for propagation
   - **Red error** = DNS records not found or incorrect

### Command-Line Checks

**Check if DNS records exist:**
```bash
nslookup seanmarkscuisine.com
nslookup www.seanmarkscuisine.com
```

Expected output shows CNAME or A record pointing to Vercel.

**Check DNS propagation:**
```bash
nslookup seanmarkscuisine.com 8.8.8.8
nslookup www.seanmarkscuisine.com 8.8.8.8
```

**Check from multiple DNS servers:**
```bash
dig seanmarkscuisine.com
dig www.seanmarkscuisine.com
```

### Browser Test

1. **Wait 10-30 minutes** after DNS update (propagation varies)
2. Visit https://seanmarkscuisine.com in your browser
3. Should load your Vercel deployment
4. Check browser address bar shows no warnings
5. Visit https://www.seanmarkscuisine.com - should also work
6. Open browser DevTools (F12) > Console tab - check for errors

### SSL/HTTPS Check

- Vercel automatically provisions SSL certificates
- Should be active within minutes of domain verification
- If HTTPS doesn't work immediately, wait 5-10 minutes and refresh

---

## Troubleshooting

### Domain Shows "Yellow Pending" in Vercel

**Cause:** DNS records are being processed.

**Solution:**
- Wait 10-30 minutes (can take up to 48 hours)
- Refresh Vercel dashboard
- Run `nslookup` command to verify records exist
- If records aren't showing, check your registrar DNS settings again

### Site Shows 404 or "Page Not Found"

**Cause:** Domain points to Vercel, but Vercel doesn't have deployment yet.

**Solution:**
- Verify GitHub repo is deployed to Vercel project
- Check Vercel Dashboard > Deployments
- Ensure latest commit is deployed (green "Ready" status)
- Trigger new deployment by pushing to GitHub

### DNS Records Don't Update

**Cause:** TTL (Time To Live) is high, or registrar didn't save changes.

**Solution:**
- Refresh registrar page, verify changes were saved
- Check multiple DNS servers: `nslookup @ 8.8.8.8` and `nslookup @ 1.1.1.1`
- Lower TTL to 300 if possible, then update
- Wait full TTL duration, then check again

### HTTPS Certificate Not Issued

**Cause:** Domain DNS not fully verified, or certificate issuance delayed.

**Solution:**
- Wait 5-10 minutes after DNS verification
- Check Vercel dashboard for certificate status
- Force refresh browser (Ctrl + Shift + R)
- Check for subdomain issues (www. must also resolve)

### www Subdomain Works, Root Domain Doesn't (or vice versa)

**Cause:** One DNS record is missing or incorrect.

**Solution:**
- Check both records exist in registrar:
  - `www.seanmarkscuisine.com` (CNAME)
  - `seanmarkscuisine.com` (A record, ANAME, or CNAME per Vercel)
- Verify exact values match Vercel dashboard
- Test each with `nslookup`

---

## Checklist

- [ ] Domain registered at a registrar
- [ ] Vercel project "sean-marks-cuisine" exists and is linked to GitHub
- [ ] GitHub repo pushed with latest code
- [ ] Vercel shows a successful deployment (green "Ready")
- [ ] Domain added in Vercel Dashboard > Settings > Domains
- [ ] Noted DNS records Vercel displays
- [ ] Logged into domain registrar
- [ ] Added/updated DNS records (www CNAME and root domain)
- [ ] DNS records saved at registrar
- [ ] Waited 10-30 minutes for propagation
- [ ] Verified in Vercel: domain shows green checkmark
- [ ] Tested https://seanmarkscuisine.com in browser
- [ ] Tested https://www.seanmarkscuisine.com in browser
- [ ] Checked browser console for errors (F12)
- [ ] HTTPS working (padlock icon in browser)

---

## What's Next After Domain Connection?

Once the domain is live and HTTPS is working:

1. **Update Links in Code**
   - Replace localhost:3000 with seanmarkscuisine.com in environment variables
   - Update any hardcoded URLs in frontend code
   - Update social media links and email templates

2. **Test End-to-End**
   - Submit contact forms (should arrive via Resend)
   - Test any payment flows (Stripe)
   - Check admin pages work

3. **Monitor Logs**
   - Check Vercel Analytics for traffic
   - Review Convex logs for backend errors
   - Monitor error tracking in Sentry (if enabled)

4. **Create DNS Records for Email** (Optional)
   - If you plan to send email from @seanmarkscuisine.com
   - Add SPF, DKIM, DMARC records (Resend provides these)
   - Needed for email deliverability

---

## Reference

- **Vercel Docs:** https://vercel.com/docs/projects/domains
- **How DNS Works:** https://www.cloudflare.com/learning/dns/
- **SSL Certificate Info:** https://vercel.com/docs/security/ssl
- **Troubleshooting Guide:** https://vercel.com/support/articles/domain-troubleshooting

---

## Questions?

If something doesn't work:

1. **Check Vercel status:** Are DNS records showing as verified?
2. **Run nslookup:** Do DNS records exist globally?
3. **Wait longer:** DNS can take up to 48 hours (usually 10-30 minutes)
4. **Verify values:** Do registrar DNS values exactly match Vercel's?
5. **Check GitHub:** Is the latest code deployed to Vercel?

Status last updated: 2026-04-15
