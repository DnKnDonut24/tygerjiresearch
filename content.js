/*
  TYGER JI RESEARCH — EDITABLE CONTENT FILE

  This is the only file you usually need to edit.

  Edit:
  - profile text
  - blog posts
  - ticker thesis notes
  - ticker list
  - images
  - framework cards

  Live prices:
  - Each ticker has a `yahoo` field.
  - The Vercel function at /api/market pulls the latest quote/chart data.
  - Static prices below are only fallback data in case the live endpoint fails.
*/

window.SITE_CONTENT = {
  profile: {
    name: "Tyger Ji",
    brand: "Tyger Ji Research",
    role: "NYU Stern finance student · investment research · markets notebook",
    location: "New York, NY",
    email: "tygerji0619@gmail.com",
    headline: "Market notes for people who want the reasoning, not just the headline.",
    subheadline:
      "This is where I share what I’m watching in the market, how I’m thinking through risk, and where I think the market may be mispricing something.",
    heroImage:
      "https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&w=1600&q=80",
    avatarImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
  },

  nav: ["Notes", "Markets", "Frameworks", "About"],

  marketIndicators: [
    {
      label: "My Market Tone",
      value: "Cautiously Constructive",
      note: "I’m not bearish just to be bearish, but I do think the market needs broader participation."
    },
    {
      label: "Main Variable",
      value: "Rates",
      note: "Inflation prints, the 10-year, and Fed language still drive a lot of equity multiple risk."
    },
    {
      label: "Theme I’m Watching",
      value: "Narrow Leadership",
      note: "Index strength can hide how concentrated the actual rally is underneath."
    },
    {
      label: "Process",
      value: "Thesis → Risk → Catalyst",
      note: "Every idea needs a reason, a downside case, and something that can change the market’s view."
    }
  ],

  featuredNote: {
    kicker: "Latest Outlook",
    title: "I’m constructive, but I don’t want to confuse index strength with real breadth.",
    summary:
      "The market can keep moving higher if earnings hold up and rates cooperate. But if leadership stays concentrated in a few large-cap names, the risk is that portfolios are less diversified than they look.",
    date: "Live notebook",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80"
  },

  tickers: {
    SPX: {
      yahoo: "^GSPC",
      name: "S&P 500 Index",
      sector: "Broad Market",
      price: 5480.0,
      change: 0.54,
      view: "Core benchmark",
      conviction: "Market Barometer",
      thesis:
        "This is the headline index everyone watches, but I don’t want to stop at the headline. The important question is whether the rally is broadening or still being carried by a small number of mega-cap names.",
      risks:
        "Multiple compression if rates move higher, earnings revisions roll over, or mega-cap leadership weakens.",
      data: [4820, 5010, 5170, 5300, 5410, 5480]
    },
    NDX: {
      yahoo: "^IXIC",
      name: "Nasdaq Composite",
      sector: "Growth / Technology",
      price: 17600.0,
      change: 0.92,
      view: "Momentum leader",
      conviction: "Rate Sensitive",
      thesis:
        "Nasdaq is still the cleanest read on growth and AI risk appetite. I’m watching whether the move is supported by earnings revisions or just multiple expansion.",
      risks:
        "Real yields, crowded positioning, and AI capex disappointment.",
      data: [15400, 16050, 16600, 17100, 17400, 17600]
    },
    DJI: {
      yahoo: "^DJI",
      name: "Dow Jones Industrial Average",
      sector: "Blue-Chip / Industrials",
      price: 39200.0,
      change: 0.25,
      view: "Old-economy read-through",
      conviction: "Breadth Check",
      thesis:
        "The Dow is not my preferred benchmark, but it is useful as a read on industrials, financials, and more traditional market leadership.",
      risks:
        "Slower industrial demand, weaker cyclicals, and less exposure to the AI winners.",
      data: [37000, 38200, 38700, 39100, 38900, 39200]
    },
    RUT: {
      yahoo: "^RUT",
      name: "Russell 2000",
      sector: "Small Caps",
      price: 2100.0,
      change: -0.35,
      view: "Rate-sensitive laggard",
      conviction: "Rotation Watch",
      thesis:
        "Small caps are one of the best tells for whether the market believes in a real soft landing. If rates fall and credit stays stable, this group could finally participate.",
      risks:
        "Higher funding costs, weaker balance sheets, and less pricing power.",
      data: [1960, 2020, 2080, 2130, 2090, 2100]
    },
    VIX: {
      yahoo: "^VIX",
      name: "CBOE Volatility Index",
      sector: "Risk Gauge",
      price: 17.8,
      change: -2.15,
      view: "Complacency check",
      conviction: "Macro Signal",
      thesis:
        "A low VIX does not automatically mean the market is safe. Sometimes it means investors are underpricing risk. I use it with credit spreads, rates, and breadth.",
      risks:
        "Can spike quickly around inflation, geopolitical, or liquidity shocks.",
      data: [22, 20, 18, 21, 19, 18]
    },
    AAPL: {
      yahoo: "AAPL",
      name: "Apple",
      sector: "Consumer Tech",
      price: 214.38,
      change: 1.42,
      view: "Neutral / quality",
      conviction: "Watchlist",
      thesis:
        "The ecosystem is obviously strong, but for me the stock needs clearer evidence of growth acceleration. I don’t want to pay a premium multiple for a company that is mostly defending its base.",
      risks:
        "iPhone replacement cycles, China exposure, and services growth slowing.",
      data: [184, 190, 188, 196, 205, 214]
    },
    MSFT: {
      yahoo: "MSFT",
      name: "Microsoft",
      sector: "Cloud / AI Infrastructure",
      price: 426.91,
      change: 0.88,
      view: "Constructive",
      conviction: "High Quality",
      thesis:
        "This is one of the cleaner AI stories because the company already has enterprise distribution. My question is not whether AI matters. It is how fast AI becomes visible in revenue and margin.",
      risks:
        "Capex intensity, slower Azure growth, and valuation sensitivity.",
      data: [380, 395, 404, 412, 419, 427]
    },
    NVDA: {
      yahoo: "NVDA",
      name: "NVIDIA",
      sector: "Semiconductors / AI",
      price: 132.65,
      change: -1.16,
      view: "Positive, but crowded",
      conviction: "Event Driven",
      thesis:
        "NVIDIA is still the center of the AI infrastructure cycle. The challenge is that expectations are extremely high, so the stock needs continued evidence that demand is durable and not just pulled forward.",
      risks:
        "Supply normalization, hyperscaler digestion, and margin normalization.",
      data: [98, 108, 119, 126, 139, 133]
    },
    AMD: {
      yahoo: "AMD",
      name: "Advanced Micro Devices",
      sector: "Semiconductors",
      price: 156.4,
      change: 1.21,
      view: "Watchlist",
      conviction: "AI Optionality",
      thesis:
        "AMD is interesting because it gives investors AI optionality without owning the clear leader. I need to see more proof that customers are adopting the accelerator roadmap at scale.",
      risks:
        "Execution versus NVIDIA, weaker margins, and semi-cycle volatility.",
      data: [118, 124, 131, 147, 151, 156]
    },
    META: {
      yahoo: "META",
      name: "Meta Platforms",
      sector: "Digital Ads / AI",
      price: 512.18,
      change: 1.77,
      view: "Selective buy",
      conviction: "Cash Flow",
      thesis:
        "The core ad business still throws off a lot of cash. The debate is whether AI spend becomes another capex overhang or actually improves engagement, targeting, and monetization.",
      risks:
        "Regulation, ad cyclicality, and open-ended AI investment.",
      data: [410, 438, 470, 492, 505, 512]
    },
    AMZN: {
      yahoo: "AMZN",
      name: "Amazon",
      sector: "Cloud / Consumer",
      price: 188.74,
      change: 2.04,
      view: "Constructive",
      conviction: "Operating Leverage",
      thesis:
        "Amazon still has multiple earnings levers: AWS, retail margin discipline, ads, and logistics efficiency. I like situations where the market can see operating leverage coming through.",
      risks:
        "Consumer slowdown, AWS competition, and reinvestment pressure.",
      data: [156, 163, 171, 177, 183, 189]
    },
    GOOGL: {
      yahoo: "GOOGL",
      name: "Alphabet",
      sector: "Search / Cloud / AI",
      price: 176.24,
      change: -0.31,
      view: "Balanced",
      conviction: "Risk-Reward",
      thesis:
        "Alphabet is one of the more debated names because search is both incredibly profitable and potentially exposed to AI behavior changes. I think the risk-reward is still reasonable, but it is not risk-free.",
      risks:
        "Regulatory pressure, AI search disruption, and cloud competition.",
      data: [146, 152, 164, 172, 181, 176]
    },
    MELI: {
      yahoo: "MELI",
      name: "MercadoLibre",
      sector: "LatAm E-commerce / Fintech",
      price: 1670.0,
      change: 2.34,
      view: "High-conviction growth",
      conviction: "Core Thesis",
      thesis:
        "This is one of my favorite frameworks: commerce creates data, data improves underwriting, credit increases purchasing power, and that drives more commerce. The market may still be underappreciating how strong that flywheel can become.",
      risks:
        "Emerging-market credit losses, FX volatility, and a recession that tests the loan book.",
      data: [1320, 1410, 1505, 1580, 1620, 1670]
    },
    JPM: {
      yahoo: "JPM",
      name: "JPMorgan Chase",
      sector: "Financials",
      price: 225.2,
      change: 0.46,
      view: "Quality financial",
      conviction: "Cycle Monitor",
      thesis:
        "JPM is a good read on credit, deposits, capital markets, and consumer health. It is not just a bank stock to me; it is a macro dashboard.",
      risks:
        "Credit normalization, regulation, and rate sensitivity.",
      data: [198, 203, 211, 217, 222, 225]
    },
    BABA: {
      yahoo: "BABA",
      name: "Alibaba",
      sector: "China Internet",
      price: 82.4,
      change: -0.72,
      view: "Contrarian",
      conviction: "High Risk",
      thesis:
        "The valuation looks cheap, but cheap alone is not enough. I need to see a cleaner path around China macro, capital allocation, and investor confidence.",
      risks:
        "Policy risk, consumer weakness, ADR sentiment, and competition.",
      data: [76, 79, 84, 88, 85, 82]
    },
    GLD: {
      yahoo: "GLD",
      name: "SPDR Gold Shares",
      sector: "Gold / Hedge",
      price: 220.5,
      change: 0.15,
      view: "Portfolio hedge",
      conviction: "Risk Offset",
      thesis:
        "Gold is useful as a signal for uncertainty and inflation fear. I do not want to overweight it, but I do think it has a role when policy and geopolitical risk are high.",
      risks:
        "No cash flow, rate sensitivity, and crowded safe-haven positioning.",
      data: [188, 196, 205, 213, 218, 221]
    },
    TLT: {
      yahoo: "TLT",
      name: "20+ Year Treasury ETF",
      sector: "Rates / Duration",
      price: 92.1,
      change: -0.44,
      view: "Duration watch",
      conviction: "Macro Hedge",
      thesis:
        "TLT is the cleanest way to watch the market’s view on long-duration bonds. If inflation cools and growth slows, duration can work. If rates stay higher, it remains painful.",
      risks:
        "Sticky inflation, higher term premium, and fiscal concerns.",
      data: [88, 91, 94, 90, 93, 92]
    },
    BTC: {
      yahoo: "BTC-USD",
      name: "Bitcoin",
      sector: "Digital Asset",
      price: 65000.0,
      change: 1.5,
      view: "High beta liquidity asset",
      conviction: "Speculative",
      thesis:
        "I think of Bitcoin less as a traditional asset and more as a liquidity/risk-appetite instrument. It can work when liquidity improves, but sizing has to be disciplined.",
      risks:
        "Volatility, regulation, and drawdown risk.",
      data: [42000, 50000, 58000, 69000, 62000, 65000]
    }
  },

  posts: [
    {
      id: "current-market-view",
      category: "Market Outlook",
      title: "My current market view: cautiously constructive, but not blindly bullish.",
      date: "Updated regularly",
      readTime: "5 min",
      image:
        "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1400&q=80",
      summary:
        "I think the market can keep working if earnings hold up and rates cooperate, but the real risk is that people look at the index and miss how concentrated the rally is underneath.",
      body: [
        "The way I’m thinking about the market right now is pretty simple: I’m constructive, but I’m not blindly bullish. If earnings continue to hold up and rates move lower, risk assets can still work. But I don’t want to confuse a strong index with a healthy market.",
        "The biggest thing I’m watching is breadth. If the S&P 500 is being carried by a small number of mega-cap names, a passive investor may think they are diversified when they are actually more concentrated than they realize. That creates hidden risk.",
        "The second thing is rates. When rates move higher, growth stocks get hit through multiples. When rates move lower, fixed income changes, borrowing behavior changes, and risk appetite comes back. I saw this even in my own trading business: when money feels tighter, people become much more cautious with discretionary purchases.",
        "So my base case is not to be all-in or all-out. It is to stay invested, but be much more selective. I want companies with real earnings power, strong balance sheets, and catalysts that are not purely dependent on the market staying euphoric."
      ]
    },
    {
      id: "market-leadership",
      category: "Market Structure",
      title: "The risk is not just valuation. It is narrow leadership.",
      date: "Market note",
      readTime: "4 min",
      image:
        "https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&w=1400&q=80",
      summary:
        "When a few names drive most of the return, the market can look stronger than the average stock actually feels.",
      body: [
        "A lot of people talk about whether the market is expensive. That matters, but I think the bigger issue is leadership. If returns are coming from a small group of large-cap tech names, then the market is more fragile than the headline index suggests.",
        "This is why I like watching equal-weight indexes, small caps, financials, and industrials. If those start participating, that tells me the rally is healthier. If they keep lagging, then the market is still relying on a narrow group of companies to do all the work.",
        "For portfolio construction, this matters a lot. A client can own the S&P 500 and think they are broadly diversified, but if the biggest names dominate the index, their actual exposure is more concentrated. That is where good risk management matters."
      ]
    },
    {
      id: "ai-capex",
      category: "Technology",
      title: "AI capex is real, but the market still needs to see the return.",
      date: "Technology note",
      readTime: "6 min",
      image:
        "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=1400&q=80",
      summary:
        "I do not think AI is fake. But I also do not think every dollar of AI spending automatically creates shareholder value.",
      body: [
        "AI is clearly the biggest growth theme in the market. I don’t think that is just hype. Companies are spending real money because they believe AI can improve productivity, customer experience, and margins.",
        "But from an investment perspective, I care about who captures the economics. Is the spending turning into revenue? Is it improving margins? Is it strengthening customer retention? Or is it just becoming another capital expense that investors are giving too much credit for?",
        "This is why I separate the infrastructure winners from the application winners. NVIDIA is the clearest infrastructure winner. Microsoft has distribution. Meta may use AI to make ads more effective. But for every company, I want to see the bridge from spending to earnings.",
        "My view is that AI can still be a major earnings engine, but expectations are high. The more crowded the trade gets, the more important it is to understand what is already priced in."
      ]
    },
    {
      id: "meli-flywheel",
      category: "Single Name",
      title: "Why I keep coming back to MercadoLibre.",
      date: "Single-name note",
      readTime: "7 min",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=80",
      summary:
        "The part I like most is not just e-commerce. It is the loop between marketplace activity, payments, credit, and data.",
      body: [
        "MercadoLibre is interesting to me because it is not just an e-commerce company. It is building both the commerce layer and the financial infrastructure layer in Latin America.",
        "The thesis is the flywheel. Marketplace transactions create proprietary data. That data helps Mercado Pago underwrite credit. Credit increases purchasing power. More purchasing power creates more marketplace activity. That is a much stronger setup than just saying, 'e-commerce penetration is low.'",
        "The risk is also clear: credit. If the loan book gets tested in a real emerging-market downturn and losses spike, investor confidence can change quickly. That is why I would never frame this as a risk-free compounder.",
        "But the market may still be underappreciating the value of the ecosystem. If the credit model keeps working and the advertising business keeps scaling, I think the earnings power can be much higher than what people assume today."
      ]
    },
    {
      id: "cash-pullbacks",
      category: "Portfolio Process",
      title: "How I think about cash, pullbacks, and entry points.",
      date: "Process note",
      readTime: "5 min",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80",
      summary:
        "Trying to perfectly time the bottom usually sounds better than it works. I would rather have a deployment plan before volatility hits.",
      body: [
        "I used to think the goal was to wait for the perfect entry. The problem is that markets rarely give you a clean signal. By the time everything feels safe, the opportunity is usually much smaller.",
        "The way I think about it now is tranche-based. If I like a name long term, I would rather start with a small position, add on weakness, and define what would make me stop adding. That makes the process less emotional.",
        "This comes from my own trading experience. When I overcommitted capital too quickly, I learned that being right on the asset is not enough. Liquidity, sizing, and timing matter. A good thesis can still become a bad trade if the process is wrong.",
        "So for public markets, I do not want to ask only, 'Is this cheap?' I want to ask: how much do I want to own, what is my time horizon, what would prove me wrong, and do I have liquidity to take advantage of a pullback?"
      ]
    },
    {
      id: "rates-real-world",
      category: "Macro",
      title: "Rates matter because they change behavior.",
      date: "Macro note",
      readTime: "4 min",
      image:
        "https://images.unsplash.com/photo-1565372918675-997c5bd018c2?auto=format&fit=crop&w=1400&q=80",
      summary:
        "Rates are not just a valuation input. They affect borrowing, spending, cash returns, fixed income, and how investors feel about risk.",
      body: [
        "People usually talk about rates in a formula: higher discount rate, lower present value. That is true, but it is not the full story. Rates also change how people behave.",
        "When rates are high, cash feels attractive. Fixed income becomes more competitive. Borrowing becomes more expensive. People get more selective with discretionary purchases. You can see that in consumers, in businesses, and in investors.",
        "For wealth management, this matters because rates touch almost everything: portfolio construction, securities-based lending, mortgages, estate planning tools, and client psychology.",
        "That is why I watch the 10-year, inflation prints, Fed language, gold, and the VIX together. No single indicator tells the whole story, but together they give a much better read on what the market is pricing in."
      ]
    }
  ],

  frameworks: [
    {
      title: "Thesis",
      prompt: "What is the market missing?",
      detail: "A good note should clearly say what the market is underappreciating or overpricing."
    },
    {
      title: "Evidence",
      prompt: "What data actually supports it?",
      detail: "I want numbers, earnings drivers, margins, growth, liquidity, or behavior — not just a story."
    },
    {
      title: "Risk",
      prompt: "What would make me wrong?",
      detail: "If the risk section is weak, the thesis is probably not ready."
    },
    {
      title: "Catalyst",
      prompt: "What changes perception?",
      detail: "Earnings, guidance, rate cuts, margin inflection, credit data, or capital allocation."
    }
  ],

  about: {
    title: "Why this site exists",
    paragraphs: [
      "I built this as a personal research notebook — not a place to pretend I know exactly where the market is going.",
      "My background is a mix of investment research, market mapping, investor-facing work, and my own trading venture. That combination made me care a lot about process: sizing, liquidity, downside, and how people actually make decisions under uncertainty.",
      "The goal is knowledge exchange. I want to put out my thoughts clearly enough that other people can challenge them, add to them, or push back."
    ],
    facts: [
      "NYU Stern · Finance",
      "Investment research",
      "Trading venture: $16K to $45K working capital",
      "85+ market diligence project",
      "Market notes + single-name analysis"
    ]
  }
};
