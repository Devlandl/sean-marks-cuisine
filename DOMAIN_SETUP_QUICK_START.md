# Domain Setup - Quick Start Guide

**Domain:** seanmarkscuisine.com  
**Time Required:** 10 minutes (plus 5-48 hours for DNS propagation)

---

## The 5-Minute Process

### 1. Vercel Dashboard (5 minutes)

```
Vercel Dashboard > sean-marks-cuisine project
  > Settings
  > Domains tab
  > Add Domain > seanmarkscuisine.com
  > Add Domain > www.seanmarkscuisine.com
```

**Copy the DNS records Vercel shows you.**

### 2. Domain Registrar (5 minutes)

Go to your registrar's DNS settings and add two DNS records:

**Record 1 - WWW Subdomain:**
```
Type:  CNAME
Name:  www
Value: [Copy from Vercel dashboard]
TTL:   3600 (or default)
```

**Record 2 - Root Domain:**
```
Type:  [As shown by Vercel: A Record, CNAME, or ANAME]
Name:  @ (or leave blank)
Value: [Copy from Vercel dashboard]
TTL:   3600 (or default)
```

Save and done!

### 3. Wait (5-48 hours, usually 10-30 minutes)

DNS propagates across the internet. In the meantime:
- Vercel dashboard shows "yellow pending" or "green verified"
- You can check `nslookup seanmarkscuisine.com` in terminal

### 4. Verify (2 minutes)

```bash
# Check DNS records exist
nslookup seanmarkscuisine.com
nslookup www.seanmarkscuisine.com

# Visit in browser
https://seanmarkscuisine.com
https://www.seanmarkscuisine.com

# Both should load, HTTPS should work (padlock icon)
```

---

## Quick Troubleshooting

| Problem | Solution |
|---------|----------|
| Domain still "pending" in Vercel | Wait 10-30 min, refresh, run `nslookup` |
| DNS records not found | Check registrar settings saved correctly, verify exact values match Vercel |
| Site shows 404 | Verify deployment is live in Vercel (green "Ready" badge) |
| No HTTPS (no padlock) | Wait 5-10 minutes after domain verified, hard refresh browser (Ctrl + Shift + R) |
| www works, root doesn't | Check root domain DNS record exists at registrar |

---

## Common Registrars - DNS Location

| Registrar | DNS Link |
|-----------|----------|
| GoDaddy | Manage Domain > DNS |
| Namecheap | Manage > Advanced DNS |
| Name.com | Manage Domain > DNS |
| AWS Route 53 | Route 53 console > Hosted zones |
| CloudFlare | DNS tab |
| Bluehost | Domains > Manage |
| HostGator | Domains > Manage |

---

## Your Domain Values

**When you're in Vercel dashboard, you'll see:**

Vercel gives you exact values - copy/paste them exactly:

```
CNAME for www:      [Vercel shows this]
A/CNAME for root:   [Vercel shows this]
```

**Do not modify values, copy exactly as shown.**

---

## That's It!

Once DNS propagates (usually 10-30 minutes), your site will be live at:
- https://seanmarkscuisine.com
- https://www.seanmarkscuisine.com

Detailed troubleshooting in `DOMAIN_SETUP.md`.
