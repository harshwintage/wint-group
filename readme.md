# Wint Group Website — Setup Guide

## Files Overview

```
wint-group/
├── config.js          ← EDIT THIS (all your settings)
├── index.html         ← Main page (don't edit unless you know HTML/JS)
├── collection.html    ← "View All" page (don't edit)
└── SETUP.md           ← This file
```

---

## Step 1: Deploy to GitHub Pages

1. Go to your `wint-group` repo on GitHub
2. Upload all 3 files: `config.js`, `index.html`, `collection.html`
3. Go to **Settings → Pages**
4. Source: **Deploy from a branch** → **main** → **/ (root)**
5. Save. Your site will be live at `https://yourusername.github.io/wint-group/`

### Connect your domain (wint-group.com)
1. In GitHub Pages settings, add custom domain: `wint-group.com`
2. In your domain registrar (GoDaddy), set DNS:
   - **A records** pointing to:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - **CNAME** record: `www` → `yourusername.github.io`
3. Wait 10-30 minutes for DNS to propagate
4. Enable "Enforce HTTPS" in GitHub Pages settings

---

## Step 2: Set Up Google Sheets Form

### Create the Google Sheet
1. Go to [Google Sheets](https://sheets.google.com) and create a new spreadsheet
2. Name it "Wint Group Leads"
3. In Row 1, add these headers (exactly):
   - A1: `timestamp`
   - B1: `name`
   - C1: `email`
   - D1: `phone`
   - E1: `boutique`
   - F1: `website`
   - G1: `instagram`
   - H1: `comments`

### Create the Apps Script
1. In the sheet, go to **Extensions → Apps Script**
2. Delete any existing code and paste this:

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);
  
  sheet.appendRow([
    new Date().toISOString(),
    data.name || '',
    data.email || '',
    data.phone || '',
    data.boutique || '',
    data.website || '',
    data.instagram || '',
    data.comments || ''
  ]);
  
  return ContentService
    .createTextOutput(JSON.stringify({status: 'ok'}))
    .setMimeType(ContentService.MimeType.JSON);
}
```

3. Click **Deploy → New deployment**
4. Type: **Web app**
5. Execute as: **Me**
6. Who has access: **Anyone**
7. Click **Deploy** and copy the URL
8. Paste this URL into `config.js` as `FORM_ENDPOINT`

---

## Step 3: Set Up Meta Pixel

1. Go to [Facebook Events Manager](https://business.facebook.com/events_manager)
2. Click **Connect Data Sources → Web → Facebook Pixel**
3. Name it "Wint Group Website"
4. Copy the **Pixel ID** (a number like `123456789012345`)
5. Paste into `config.js` as `META_PIXEL_ID`

### What gets tracked automatically:
- **PageView** — every time someone visits any page
- **ViewContent** — when a slider loads or someone views a collection
- **Lead** — when someone submits the form

### Setting up Facebook Ads to optimize for form submissions:
1. When creating an ad, choose **Leads** as your campaign objective
2. Under conversion location, select **Website**
3. Select your Pixel and choose **Lead** as the optimization event
4. Point the ad URL to `https://wint-group.com`

---

## Step 4: Configure Your Sliders

Open `config.js` and edit the `SLIDERS_WOMEN` and `SLIDERS_MEN` arrays.

### Each slider has 3 fields:
```javascript
{
  name: "Boho Dresses",                              // What the buyer sees
  slug: "women-boho-dresses",                         // URL path (no spaces, lowercase)
  sources: [                                          // Where to pull images from
    "indophilia.store/collections/handloom-dresses"   // Shopify store/collection
  ]
}
```

### To add a new slider:
Just add another object to the array. Example:
```javascript
{
  name: "Linen Blazers",
  slug: "women-linen-blazers",
  sources: [
    "talethread.com/collections/blazers",
    "indophilia.store/collections/handloom-blazers"
  ]
}
```

### To remove a slider:
Delete the entire `{ ... }` block for that slider.

### To change where images come from:
Edit the `sources` array. You can have 1 or many sources — they get merged and shuffled.

### Finding collection URLs:
Go to any of your Shopify stores → Collections → click a collection → the URL will be like:
`https://talethread.com/collections/dresses`
In config, write it as: `talethread.com/collections/dresses` (without https://)

---

## Step 5: Add Your Logo

1. Add your logo image to the repo (e.g., `logo.png`)
2. In `config.js`, set: `LOGO_URL: "logo.png"`

---

## Troubleshooting

### Products not loading?
- **CORS error**: Some Shopify stores block cross-origin requests. Fix: set up a free Cloudflare Worker as proxy (ask me for the code).
- **Wrong collection URL**: Make sure the collection exists and is published on the Online Store channel in Shopify.

### Form not submitting to Google Sheets?
- Make sure the Apps Script is deployed as "Anyone can access"
- Check the script URL is correct in config.js
- Open browser console (F12) to see any errors

### Meta Pixel not firing?
- Install the [Meta Pixel Helper](https://chrome.google.com/webstore/detail/meta-pixel-helper/) Chrome extension to verify
- Make sure the Pixel ID is correct (numbers only, no quotes issues)
