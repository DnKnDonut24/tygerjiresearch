/*
  TYGER JI RESEARCH — SIMPLE EDIT FILE

  This version is intentionally STATIC.
  No live market API. No serverless functions. No build step.
  This should deploy on Vercel as a plain static website.

  To update the website:
  1. Edit this file.
  2. Commit/push to GitHub.
  3. Vercel redeploys automatically.

  Main editable sections:
  - profile
  - marketSnapshot
  - tickerViews
  - posts
  - videoLibrary
*/

window.SITE_CONTENT = {
  profile: {
    brand: "Tyger Ji Research",
    name: "Tyger Ji",
    role: "NYU Stern Finance · Investment Research · Market Notes",
    email: "tygerji0619@gmail.com",
    headline: "Market notes for people who care about the reasoning, not just the call.",
    subheadline:
      "This is my personal research notebook: market outlooks, ticker views, investment frameworks, and the videos/articles I’m using to sharpen my thinking.",
    heroImage:
      "https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&w=1600&q=80",
    secondaryImage:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1400&q=80"
  },

  marketSnapshot: {
    dateLabel: "Static research snapshot — update manually",
    mainView: "Cautiously constructive",
    paragraph:
      "My view is not that the market is broken. It is that people can get too comfortable when the index is moving higher but leadership is still narrow. I want to stay invested, but I want a clear reason for every position: thesis, risk, catalyst, and sizing.",
    cards: [
      {
        title: "Base Case",
        probability: "55%",
        text:
          "Earnings stay resilient, inflation slowly cools, and large-cap quality keeps leading. Upside exists, but stock selection matters more than just buying the index."
      },
      {
        title: "Bull Case",
        probability: "25%",
        text:
          "Rates move lower, breadth improves, small caps and cyclicals participate, and AI spending starts translating into visible earnings power."
      },
      {
        title: "Bear Case",
        probability: "20%",
        text:
          "Inflation stays sticky, rates remain higher for longer, AI expectations get too stretched, and the market reprices high-multiple growth names."
      }
    ]
  },

  tickerViews: {
    SPY: {
      name: "S&P 500 ETF",
      sector: "Broad Market",
      stance: "Neutral / Core benchmark",
      referencePrice: "Manual",
      targetRange: "Not a single-name target",
      upsideCase: "Breadth improves and earnings revisions stay positive.",
      downsideCase: "Mega-cap leadership weakens and multiples compress.",
      thesis:
        "I use SPY as the main benchmark, but I don’t think owning the index automatically means being diversified. The index can look strong while the average stock feels weak.",
      catalyst:
        "Watch equal-weight performance, earnings breadth, Fed language, and whether cyclicals/small caps begin participating.",
      chart: [482, 501, 517, 530, 541, 548]
    },
    QQQ: {
      name: "Nasdaq 100 ETF",
      sector: "Growth / Technology",
      stance: "Constructive but crowded",
      referencePrice: "Manual",
      targetRange: "High beta to AI and rates",
      upsideCase: "AI capex translates into revenue acceleration and margin durability.",
      downsideCase: "Rates rise or AI leaders fail to justify expectations.",
      thesis:
        "QQQ is still the cleanest way to watch growth and AI risk appetite. The issue is that a lot of good news is already priced into the largest names.",
      catalyst:
        "Watch real yields, mega-cap earnings guidance, AI monetization, and market breadth outside the top few names.",
      chart: [405, 421, 438, 452, 466, 473]
    },
    MSFT: {
      name: "Microsoft",
      sector: "Cloud / AI Infrastructure",
      stance: "Constructive",
      referencePrice: "Manual",
      targetRange: "Base-case: premium compounder",
      upsideCase: "AI becomes visible in Azure growth, Copilot adoption, and operating leverage.",
      downsideCase: "AI capex grows faster than monetization and margins get pressured.",
      thesis:
        "Microsoft is one of the cleaner AI stories because it already has enterprise distribution. My question is not whether AI matters; it is how fast AI shows up in revenue and margin.",
      catalyst:
        "Azure growth, Copilot traction, AI infrastructure margins, and management commentary on capex discipline.",
      chart: [380, 395, 404, 412, 419, 427]
    },
    NVDA: {
      name: "NVIDIA",
      sector: "Semiconductors / AI",
      stance: "Positive, but crowded",
      referencePrice: "Manual",
      targetRange: "High upside / high expectation",
      upsideCase: "Demand remains supply-constrained and earnings revisions keep moving higher.",
      downsideCase: "Hyperscalers digest inventory, margins normalize, or expectations outrun fundamentals.",
      thesis:
        "NVIDIA is still the center of the AI infrastructure cycle. The risk is not that the business is bad. The risk is that the stock already assumes near-perfect execution.",
      catalyst:
        "Data center revenue, gross margins, backlog commentary, Blackwell ramp, and hyperscaler capex plans.",
      chart: [98, 108, 119, 126, 139, 133]
    },
    META: {
      name: "Meta Platforms",
      sector: "Digital Ads / AI",
      stance: "Selective Buy",
      referencePrice: "Manual",
      targetRange: "Upside if AI improves ad efficiency",
      upsideCase: "AI spend improves targeting, engagement, and ad pricing.",
      downsideCase: "Capex stays open-ended and investors start questioning return on AI spend.",
      thesis:
        "Meta is interesting because the core ad business still throws off a lot of cash. The market debate is whether AI capex becomes a real earnings engine or just a margin overhang.",
      catalyst:
        "Ad growth, Reels monetization, AI capex guidance, Reality Labs losses, and engagement trends.",
      chart: [410, 438, 470, 492, 505, 512]
    },
    AMZN: {
      name: "Amazon",
      sector: "Cloud / Consumer",
      stance: "Constructive",
      referencePrice: "Manual",
      targetRange: "Operating leverage setup",
      upsideCase: "AWS reaccelerates and retail margins continue expanding.",
      downsideCase: "Consumer demand weakens or AWS competition pressures growth.",
      thesis:
        "Amazon has multiple levers: AWS, retail efficiency, advertising, and logistics scale. I like the setup because operating leverage can drive earnings even if revenue growth is not perfect.",
      catalyst:
        "AWS growth, advertising revenue, retail operating margin, and fulfillment cost discipline.",
      chart: [156, 163, 171, 177, 183, 189]
    },
    GOOGL: {
      name: "Alphabet",
      sector: "Search / Cloud / AI",
      stance: "Balanced risk-reward",
      referencePrice: "Manual",
      targetRange: "Reasonable if search holds",
      upsideCase: "AI strengthens search and cloud margins keep improving.",
      downsideCase: "AI search changes user behavior and regulation pressures the multiple.",
      thesis:
        "Alphabet is a good example of a company that can be cheap for a reason or cheap because investors are over-discounting risk. I think the core business is still strong, but the AI search question is real.",
      catalyst:
        "Search revenue, cloud profitability, AI product adoption, and antitrust updates.",
      chart: [146, 152, 164, 172, 181, 176]
    },
    AAPL: {
      name: "Apple",
      sector: "Consumer Tech",
      stance: "Neutral / quality watchlist",
      referencePrice: "Manual",
      targetRange: "Needs growth acceleration",
      upsideCase: "Services growth, product cycle improvement, and AI features support replacement demand.",
      downsideCase: "iPhone demand stays soft and valuation remains too expensive for the growth rate.",
      thesis:
        "Apple is a high-quality business, but quality alone is not enough. I would rather see clearer evidence of growth acceleration before getting aggressive.",
      catalyst:
        "iPhone demand, services growth, China trends, buybacks, and AI-related product cycle commentary.",
      chart: [184, 190, 188, 196, 205, 214]
    },
    AMD: {
      name: "Advanced Micro Devices",
      sector: "Semiconductors",
      stance: "Watchlist / AI optionality",
      referencePrice: "Manual",
      targetRange: "Upside if AI share gains become real",
      upsideCase: "MI-series adoption improves and data center growth accelerates.",
      downsideCase: "NVIDIA keeps most of the economics and AMD margins disappoint.",
      thesis:
        "AMD is the kind of name where the story can get very exciting, but I need proof. The setup is attractive if it can take meaningful AI accelerator share.",
      catalyst:
        "Data center GPU revenue, customer wins, gross margin, and guidance around AI accelerator demand.",
      chart: [118, 124, 131, 147, 151, 156]
    },
    MELI: {
      name: "MercadoLibre",
      sector: "LatAm E-commerce / Fintech",
      stance: "High-conviction growth",
      referencePrice: "Manual",
      targetRange: "Long-term compounder if credit works",
      upsideCase: "Fintech flywheel compounds and credit losses stay controlled.",
      downsideCase: "Emerging-market recession stresses the loan book.",
      thesis:
        "MELI is one of my favorite frameworks because commerce creates data, data improves underwriting, credit increases purchasing power, and that drives more commerce.",
      catalyst:
        "Credit loss ratios, Mercado Pago growth, Mexico card adoption, advertising revenue, and logistics efficiency.",
      chart: [1320, 1410, 1505, 1580, 1620, 1670]
    },
    JPM: {
      name: "JPMorgan Chase",
      sector: "Financials",
      stance: "Quality financial",
      referencePrice: "Manual",
      targetRange: "Best-in-class bank lens",
      upsideCase: "Credit stays stable, deposits remain strong, and capital markets recover.",
      downsideCase: "Credit costs rise, regulation tightens, or net interest income rolls over.",
      thesis:
        "JPM is not just a bank stock to me. It is a macro dashboard for credit, consumer health, deposits, and capital markets activity.",
      catalyst:
        "Net interest income, credit losses, deposit trends, investment banking activity, and capital return.",
      chart: [198, 203, 211, 217, 222, 225]
    },
    BABA: {
      name: "Alibaba",
      sector: "China Internet",
      stance: "Contrarian / high risk",
      referencePrice: "Manual",
      targetRange: "Cheap, but needs confidence repair",
      upsideCase: "China sentiment improves and capital return supports the stock.",
      downsideCase: "Macro weakness, policy risk, and competition continue to weigh on valuation.",
      thesis:
        "Alibaba is cheap, but cheap alone is not a thesis. The question is whether the market can regain confidence in the business, the macro backdrop, and capital allocation.",
      catalyst:
        "China consumer data, cloud performance, buybacks, policy tone, and geopolitical sentiment.",
      chart: [76, 79, 84, 88, 85, 82]
    }
  },

  posts: [
    {
      id: "current-market-view",
      category: "Market Outlook",
      title: "My current market view: constructive, but I need breadth.",
      date: "Research note",
      readTime: "5 min",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1400&q=80",
      summary:
        "The market can keep working, but I don’t want to confuse a strong index with a healthy market underneath.",
      body: [
        "The way I’m thinking about the market right now is pretty simple: I’m not trying to be bearish just to sound smart, but I also don’t want to be blindly bullish because the index is going up.",
        "What matters to me is breadth. If the S&P 500 is moving higher because a small number of mega-cap names are carrying the whole index, then the average investor may be taking more concentration risk than they realize. That matters because a portfolio can look diversified on paper while still being heavily dependent on the same few names.",
        "The second thing I’m watching is rates. Higher rates compress equity multiples, make cash and fixed income more attractive, and change how consumers behave. I saw this in my own trading business too: when money feels tighter, people become much more selective with discretionary purchases.",
        "So my base case is cautious but constructive. I still want equity exposure, but I want the exposure to be intentional. I like high-quality companies with real earnings power, strong balance sheets, and catalysts that can work even if the market gets more volatile.",
        "The mistake would be thinking the only decision is all-in or all-out. I think the better approach is: stay invested, keep cash for opportunities, and know exactly what would make you add, trim, or change your mind."
      ]
    },
    {
      id: "ai-capex-framework",
      category: "Technology",
      title: "AI capex: I believe in the theme, but not every stock deserves credit.",
      date: "Technology note",
      readTime: "6 min",
      image:
        "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=1400&q=80",
      summary:
        "AI is real, but the investor question is who actually captures the economics and when the spending turns into earnings.",
      body: [
        "I don’t think AI is fake. The spending is real, the infrastructure buildout is real, and the productivity potential is real. But from an investment perspective, that is not enough.",
        "The question is who captures the economics. NVIDIA clearly captures a lot of the infrastructure economics right now. Microsoft has enterprise distribution. Meta may use AI to make advertising more effective. Amazon can benefit through AWS. But for every company, I want to see the bridge from AI spending to revenue, margin, and free cash flow.",
        "This is where investors can get too excited. If a company says AI twenty times on an earnings call, that does not automatically make the stock attractive. I want to know whether AI lowers costs, increases retention, improves pricing, or creates a new revenue stream.",
        "The risk is capex. If companies spend aggressively for years and the monetization is slower than expected, the market can start treating AI as a margin problem instead of a growth engine.",
        "My view is that AI remains one of the most important themes in the market, but the easy part was identifying the theme. The harder part is figuring out which companies actually earn excess returns from it."
      ]
    },
    {
      id: "meli-thesis",
      category: "Single Name",
      title: "Why I keep coming back to MercadoLibre.",
      date: "Single-name note",
      readTime: "7 min",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=80",
      summary:
        "The part I like most is not just e-commerce. It is the loop between marketplace activity, payments, credit, and data.",
      body: [
        "MercadoLibre is interesting to me because it is not just an e-commerce company. It is building the commerce layer and the financial infrastructure layer in Latin America at the same time.",
        "The thesis is the flywheel. Marketplace transactions create proprietary data. That data helps Mercado Pago underwrite credit. Credit increases purchasing power. More purchasing power creates more marketplace activity. That is a much stronger setup than just saying e-commerce penetration is low.",
        "The risk is also obvious: credit. If the loan book gets tested in a real emerging-market downturn and losses spike, investor confidence can change quickly. That is why I would never frame MELI as risk-free.",
        "But I think the market may still underappreciate the ecosystem effect. If credit losses stay controlled, the fintech business can become a much larger profit pool than people assume. On top of that, advertising can become another high-margin revenue stream.",
        "For a portfolio, I would not treat this like a safe core holding. I would treat it as emerging-market growth exposure with higher upside and higher volatility. The key is sizing it correctly."
      ]
    },
    {
      id: "cash-deployment",
      category: "Portfolio Process",
      title: "How I think about cash, pullbacks, and entry points.",
      date: "Process note",
      readTime: "5 min",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80",
      summary:
        "Trying to perfectly time the bottom usually sounds better than it works. I would rather have a deployment plan before volatility hits.",
      body: [
        "I used to think the goal was to wait for the perfect entry. The problem is that markets rarely give you a clean signal. By the time everything feels safe, the opportunity is usually smaller.",
        "Now I think about cash in tranches. If I like a stock long term, I would rather start with a small position, add on weakness, and define what would make me stop adding. That makes the process less emotional.",
        "This comes from my own trading experience. When I overcommitted capital too quickly, I learned that being right on the asset is not enough. Liquidity, position sizing, and timing matter. A good thesis can still become a bad trade if the process is wrong.",
        "So the questions I ask are: what is my time horizon, what would prove me wrong, what is my max position size, and do I still have liquidity if the stock goes lower?",
        "That framework is much more useful than asking whether today is the exact bottom."
      ]
    },
    {
      id: "rates-behavior",
      category: "Macro",
      title: "Rates matter because they change behavior.",
      date: "Macro note",
      readTime: "4 min",
      image:
        "https://images.unsplash.com/photo-1565372918675-997c5bd018c2?auto=format&fit=crop&w=1400&q=80",
      summary:
        "Rates are not just a valuation input. They affect borrowing, spending, cash returns, fixed income, and how investors feel about risk.",
      body: [
        "People usually talk about rates as a valuation input: higher discount rate, lower present value. That is true, but it is not the full story.",
        "Rates change behavior. Higher rates make cash more attractive. Fixed income becomes more competitive. Borrowing gets more expensive. Consumers become more cautious. Investors become more selective.",
        "This matters for wealth management because rates touch almost every client decision: portfolio allocation, securities-based lending, mortgages, estate planning tools, and liquidity management.",
        "That is why I watch the 10-year yield, inflation data, Fed language, gold, and the VIX together. No single indicator gives the whole story, but together they show what the market is pricing."
      ]
    },
    {
      id: "how-i-read-stocks",
      category: "Research Framework",
      title: "How I read a stock before forming a view.",
      date: "Research framework",
      readTime: "6 min",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
      summary:
        "I try to avoid starting with whether I like the company. I start with what the market is already pricing in.",
      body: [
        "The first question I ask is not whether the company is good. A good company can be a bad stock if expectations are too high. The first question is: what is the market already pricing in?",
        "Then I look for the mismatch. Is the market underestimating revenue growth, margin improvement, capital return, or durability? Or is it overestimating the speed of a turnaround?",
        "After that, I want the risk. If I cannot explain what would make me wrong, I probably do not understand the idea well enough. A strong thesis should have a strong bear case.",
        "Finally, I want a catalyst. Something needs to change perception: earnings, guidance, margins, user growth, credit data, regulation, or capital allocation. Without a catalyst, a cheap stock can stay cheap.",
        "My goal is not to sound certain. My goal is to make the thinking clear enough that someone else can challenge it."
      ]
    }
  ],

  videoLibrary: [
    {
      title: "Bloomberg Surveillance",
      source: "Bloomberg Television",
      reason:
        "Useful for macro tone, rates, Fed commentary, and hearing how institutional investors frame the day.",
      youtubeId: "xSEP1fdOK-M"
    },
    {
      title: "The Compound & Friends",
      source: "Ritholtz / The Compound",
      reason:
        "Good for market structure, portfolio behavior, investor psychology, and less formal but useful market debate.",
      youtubeId: "4fxT2a52_tc"
    },
    {
      title: "CNBC Fed / Market Coverage",
      source: "CNBC Television",
      reason:
        "Useful when I want quick updates on Fed language, inflation, market close reactions, and major stock moves.",
      youtubeId: "TFYgO4jY67o"
    }
  ],

  frameworks: [
    {
      title: "Thesis",
      prompt: "What is the market missing?",
      detail:
        "I want a specific mispricing, not just a good company or a popular theme."
    },
    {
      title: "Evidence",
      prompt: "What data supports it?",
      detail:
        "Margins, growth, earnings revisions, liquidity, credit data, user behavior, or management guidance."
    },
    {
      title: "Risk",
      prompt: "What would make me wrong?",
      detail:
        "If I cannot explain the downside case clearly, the thesis is not ready."
    },
    {
      title: "Catalyst",
      prompt: "What changes perception?",
      detail:
        "Earnings, guidance, rate cuts, margin inflection, credit losses, buybacks, or product adoption."
    }
  ]
};
