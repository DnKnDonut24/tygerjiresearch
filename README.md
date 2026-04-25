# Tyger Ji Research — Live Market Website

This version includes:

- Editable content in `content.js`
- Live market data through `api/market.js`
- Yahoo Finance chart endpoint proxy through a Vercel serverless function
- Searchable live market board
- Blog posts rewritten in Tyger's personal market-outlook style
- No API key required for the Yahoo endpoint version

## How live data works

The browser calls:

`/api/market?items=SPX:^GSPC,AAPL:AAPL,...`

The Vercel serverless function fetches Yahoo Finance chart data server-side, then returns:
- latest price
- daily percentage move
- 6-month chart data
- chart labels
- update timestamp

The static numbers inside `content.js` are only fallback values.

## How to update your deployed Vercel site

1. Replace your current GitHub repo files with the files in this folder.
2. Commit and push to GitHub.
3. Vercel will redeploy automatically.
4. Open your website and check the "Live market board" status.

## Editing blog posts

Open `content.js`.
Find `posts: [...]`.
Each post has:
- `title`
- `summary`
- `body`
- `category`
- `image`

## Editing tickers

Open `content.js`.
Find `tickers: {...}`.

Each ticker uses:
- `yahoo`: the Yahoo Finance symbol used by the live function
- static fallback `price`, `change`, and `data`
- your thesis notes

Examples:
- S&P 500: `yahoo: "^GSPC"`
- Nasdaq Composite: `yahoo: "^IXIC"`
- VIX: `yahoo: "^VIX"`
- Bitcoin: `yahoo: "BTC-USD"`
