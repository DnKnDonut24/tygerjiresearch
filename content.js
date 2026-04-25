/*
  TYGERJI RESEARCH — CONTENT FILE

  Edit this file to update the website without touching layout code.

  What you can edit here:
  1. Profile / hero copy
  2. Market indicators
  3. Ticker list and thesis notes
  4. Blog posts / research notes
  5. Images
  6. About section
  7. Contact links

  After editing, save the file and redeploy.
*/

window.SITE_CONTENT = {
  profile: {
    name: "Tyger Ji",
    brand: "Tyger Ji Research",
    role: "NYU Stern finance student · investment research analyst · independent market writer",
    location: "New York, NY",
    email: "tygerji0619@gmail.com",
    headline: "Market notes for people who want the reasoning, not just the headline.",
    subheadline:
      "A personal research notebook for market outlooks, single-name analysis, portfolio thinking, and the questions that actually drive investment decisions.",
    heroImage:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1400&q=80",
    avatarImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80"
  },

  nav: ["Notes", "Markets", "Frameworks", "About"],

  marketIndicators: [
    { label: "Risk Tone", value: "Selective", note: "Quality growth still leads, but breadth matters." },
    { label: "Main Watch", value: "Rates", note: "10Y yield, inflation prints, and Fed language." },
    { label: "Focus Area", value: "AI + Fintech", note: "Earnings durability over narrative momentum." },
    { label: "Portfolio Lens", value: "Process", note: "Thesis, risk, catalyst, sizing." }
  ],

  featuredNote: {
    kicker: "Latest Market Outlook",
    title: "The market is not just expensive. It is concentrated.",
    summary:
      "My current lens: the index can look resilient while the average stock tells a weaker story. That makes portfolio construction more important than headline index levels.",
    date: "April 2026",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1400&q=80"
  },

  tickers: {
    MSFT: {
      name: "Microsoft",
      sector: "Cloud / AI Infrastructure",
      price: 426.91,
      change: 0.88,
      view: "Constructive",
      conviction: "High Quality",
      thesis:
        "Azure, enterprise distribution, and AI workflow integration create durable growth. The key question is whether AI monetization offsets elevated infrastructure capex.",
      risks: "Capex intensity, margin pressure, and valuation sensitivity if revenue acceleration slows.",
      data: [380, 395, 404, 412, 419, 427]
    },
    NVDA: {
      name: "NVIDIA",
      sector: "Semiconductors / AI",
      price: 132.65,
      change: -1.16,
      view: "Positive, but crowded",
      conviction: "Event Driven",
      thesis:
        "The company remains the center of the AI infrastructure cycle, but the stock requires continued earnings revisions and visible demand durability.",
      risks: "Supply normalization, hyperscaler digestion periods, and margin normalization.",
      data: [98, 108, 119, 126, 139, 133]
    },
    META: {
      name: "Meta Platforms",
      sector: "Digital Ads / AI",
      price: 512.18,
      change: 1.77,
      view: "Selective Buy",
      conviction: "Cash Flow",
      thesis:
        "Core advertising remains highly cash generative. The debate is whether AI capex becomes a margin drag or strengthens ad targeting and engagement.",
      risks: "Regulation, ad cycle cyclicality, and open-ended AI spending.",
      data: [410, 438, 470, 492, 505, 512]
    },
    AMZN: {
      name: "Amazon",
      sector: "Cloud / Consumer",
      price: 188.74,
      change: 2.04,
      view: "Constructive",
      conviction: "Operating Leverage",
      thesis:
        "AWS recovery, retail margin discipline, and advertising growth create multiple earnings levers.",
      risks: "Consumer slowdown, cloud competition, and logistics reinvestment.",
      data: [156, 163, 171, 177, 183, 189]
    },
    AAPL: {
      name: "Apple",
      sector: "Consumer Tech",
      price: 214.38,
      change: 1.42,
      view: "Neutral / Quality",
      conviction: "Watchlist",
      thesis:
        "The ecosystem remains durable, but the stock needs stronger evidence of device growth or services acceleration to justify premium multiples.",
      risks: "Replacement cycles, China exposure, and limited growth acceleration.",
      data: [184, 190, 188, 196, 205, 214]
    },
    GOOGL: {
      name: "Alphabet",
      sector: "Search / Cloud / AI",
      price: 176.24,
      change: -0.31,
      view: "Balanced",
      conviction: "Risk-Reward",
      thesis:
        "Search and cloud remain powerful, but AI search disruption and regulatory pressure keep the risk-reward balanced.",
      risks: "Regulatory outcomes, AI search monetization, and cloud margin competition.",
      data: [146, 152, 164, 172, 181, 176]
    },
    AMD: {
      name: "Advanced Micro Devices",
      sector: "Semiconductors",
      price: 156.4,
      change: 1.21,
      view: "Watchlist",
      conviction: "Optionality",
      thesis:
        "AI accelerator share gains could support upside, but the market needs proof of sustained enterprise adoption.",
      risks: "Execution against NVIDIA, margin pressure, and cyclicality.",
      data: [118, 124, 131, 147, 151, 156]
    },
    MELI: {
      name: "MercadoLibre",
      sector: "LatAm E-commerce / Fintech",
      price: 1670.0,
      change: 2.34,
      view: "High Conviction Growth",
      conviction: "Core Thesis",
      thesis:
        "The market may be underappreciating the fintech flywheel: commerce data improves underwriting, credit drives marketplace activity, and the ecosystem compounds.",
      risks: "Emerging market credit losses, FX volatility, and valuation.",
      data: [1320, 1410, 1505, 1580, 1620, 1670]
    },
    JPM: {
      name: "JPMorgan Chase",
      sector: "Financials",
      price: 225.2,
      change: 0.46,
      view: "Quality Financial",
      conviction: "Cycle Monitor",
      thesis:
        "Scale, deposit franchise, and risk management make it a useful read-through for credit, consumer health, and capital markets activity.",
      risks: "Credit normalization, regulation, and rate sensitivity.",
      data: [198, 203, 211, 217, 222, 225]
    },
    BABA: {
      name: "Alibaba",
      sector: "China Internet",
      price: 82.4,
      change: -0.72,
      view: "Contrarian",
      conviction: "High Risk",
      thesis:
        "Valuation is low, but capital allocation, China macro, and geopolitical discount remain central to the setup.",
      risks: "Policy, ADR sentiment, competition, and weak consumer demand.",
      data: [76, 79, 84, 88, 85, 82]
    },
    SPY: {
      name: "S&P 500 ETF",
      sector: "Broad Market",
      price: 548.27,
      change: 0.54,
      view: "Benchmark",
      conviction: "Core Index",
      thesis:
        "Best used as a broad risk-appetite and earnings-breadth gauge, especially when comparing index strength to equal-weight participation.",
      risks: "Mega-cap concentration and multiple compression.",
      data: [482, 501, 517, 530, 541, 548]
    },
    QQQ: {
      name: "Nasdaq 100 ETF",
      sector: "Growth / Technology",
      price: 472.66,
      change: 0.92,
      view: "Momentum Leader",
      conviction: "Rate Sensitive",
      thesis:
        "Tracks large-cap growth and AI sensitivity. Real yields and earnings revisions are the key swing factors.",
      risks: "Duration sensitivity, crowded positioning, and concentration.",
      data: [405, 421, 438, 452, 466, 473]
    },
    VIX: {
      name: "Volatility Index",
      sector: "Risk Gauge",
      price: 17.8,
      change: -2.15,
      view: "Complacency Check",
      conviction: "Macro Signal",
      thesis:
        "A low VIX can signal calm, but also complacency. Useful when paired with credit spreads, rates, and breadth.",
      risks: "Sudden repricing from macro or geopolitical shocks.",
      data: [22, 20, 18, 21, 19, 18]
    }
  },

  posts: [
    {
      id: "market-concentration",
      category: "Market Structure",
      title: "The market is not just expensive. It is concentrated.",
      date: "April 2026",
      readTime: "5 min",
      image:
        "https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&w=1200&q=80",
      summary:
        "Index performance can hide weaker participation underneath. I am watching breadth, earnings dispersion, and whether leadership rotates beyond mega-cap technology.",
      body:
        "The key question is not simply whether the S&P 500 is up or down. The better question is who is carrying the index. When returns are driven by a narrow group of large-cap companies, portfolio construction becomes more important because passive exposure can become concentrated exposure. My framework is to compare index-level performance with equal-weight performance, sector breadth, earnings revisions, and credit conditions."
    },
    {
      id: "ai-capex",
      category: "Technology",
      title: "AI capex: productive investment or future margin problem?",
      date: "April 2026",
      readTime: "6 min",
      image:
        "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=1200&q=80",
      summary:
        "AI infrastructure spending is the market's dominant growth story. The issue is not whether AI matters, but when the returns on that spending become visible.",
      body:
        "AI capex can be productive, but investors need to separate strategic investment from open-ended spending. The framework I use is simple: who captures the economics, how quickly the customer saves money or gains revenue, and whether the incremental margin profile improves or deteriorates over time."
    },
    {
      id: "meli-flywheel",
      category: "Single Name",
      title: "MercadoLibre and the fintech flywheel",
      date: "April 2026",
      readTime: "7 min",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
      summary:
        "The most interesting part of MELI is not just e-commerce. It is the feedback loop between payments, credit, marketplace activity, and data.",
      body:
        "MercadoLibre is interesting because its commerce and fintech businesses reinforce each other. Marketplace activity creates data. Data improves underwriting. Credit increases purchasing power. More purchasing power drives more marketplace activity. The risk is credit performance during stress, but the opportunity is that the ecosystem may be stronger than a standalone e-commerce multiple suggests."
    },
    {
      id: "rates-client-behavior",
      category: "Macro",
      title: "Why rates matter beyond valuation models",
      date: "April 2026",
      readTime: "4 min",
      image:
        "https://images.unsplash.com/photo-1565372918675-997c5bd018c2?auto=format&fit=crop&w=1200&q=80",
      summary:
        "Rates affect behavior. Cash looks better, borrowing changes, discretionary spending slows, and portfolio conversations become more emotional.",
      body:
        "Interest rates are not just a discount-rate input. They change how people behave. Higher rates make cash and fixed income more attractive, raise borrowing costs, and reduce appetite for speculative purchases. That matters for public markets and for real-world decision-making."
    },
    {
      id: "risk-process",
      category: "Portfolio Process",
      title: "Conviction without sizing discipline is not a strategy",
      date: "April 2026",
      readTime: "5 min",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
      summary:
        "A thesis can be right and still be painful if sizing, liquidity, and time horizon are wrong.",
      body:
        "The biggest mistake investors make is confusing confidence with process. A good process defines position size, expected holding period, what would change the thesis, and what evidence would prove you wrong. The goal is not to avoid risk. The goal is to choose risk deliberately."
    },
    {
      id: "knowledge-exchange",
      category: "Knowledge Exchange",
      title: "The point of this site",
      date: "April 2026",
      readTime: "3 min",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
      summary:
        "This is not meant to be a stock-picking billboard. It is meant to be a place to test thinking, share notes, and sharpen investment judgment.",
      body:
        "The best market conversations are not about sounding certain. They are about pressure-testing assumptions. This site is designed as a public notebook: what I am watching, why I am watching it, what could change my mind, and where I think the market may be mispricing risk."
    }
  ],

  frameworks: [
    {
      title: "Thesis",
      prompt: "What does the market misunderstand?",
      detail: "A view needs a clear mispricing, not just a good company."
    },
    {
      title: "Evidence",
      prompt: "What data supports the view?",
      detail: "Track earnings revisions, margins, unit economics, rates, credit, and positioning."
    },
    {
      title: "Risk",
      prompt: "What would make the thesis wrong?",
      detail: "A credible risk section makes the research more trustworthy."
    },
    {
      title: "Catalyst",
      prompt: "What changes investor perception?",
      detail: "Earnings, guidance, margin inflection, policy changes, or capital allocation."
    }
  ],

  about: {
    title: "Why this exists",
    paragraphs: [
      "I built this site as a personal research hub: part market notebook, part investment journal, and part knowledge exchange.",
      "My background combines investment research, founder-style operating experience, and personal capital allocation. I have worked across due diligence, market mapping, investor materials, and my own trading venture.",
      "The goal is not to publish perfect answers. The goal is to make the thinking clear enough that other people can challenge it."
    ],
    facts: [
      "NYU Stern · Finance",
      "Investment research experience",
      "$16K to $45K trading venture",
      "85+ market diligence project",
      "Market notes + single-name analysis"
    ]
  }
};
