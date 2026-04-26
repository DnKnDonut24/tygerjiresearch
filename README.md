# Tyger Ji Research — Static Version

This version intentionally has:

- No live market API
- No serverless functions
- No package.json
- No build step
- No environment variables

It is a plain static website that should deploy cleanly on Vercel.

## Files

- index.html
- styles.css
- content.js
- app.js
- vercel.json
- README.md

## Vercel Settings

Use:

Application Preset: Other  
Root Directory: ./  
Build Command: leave blank  
Output Directory: leave blank or "."  
Install Command: leave blank  
Environment Variables: none

## How to edit

Open `content.js`.

Edit:
- Ticker views
- Manual reference prices / target comments
- Blog posts
- YouTube video IDs
- Market outlook text
- Email/contact text

## Important

Ticker data is manually maintained and intentionally not live. The footer states this clearly.
