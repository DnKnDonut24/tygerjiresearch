/*
  TYGER JI RESEARCH — SIMPLE EDIT FILE

  This version is intentionally STATIC:
  - No live market prices
  - No fake charts
  - No backend/API
  - No build step

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
    headline: "Market notes with reasoning, not just headlines.",
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
      stance: "Neutral / core benchmark",
      lens: "Breadth check",
      timeHorizon: "Market cycle",
      setup: "A good benchmark, but not a full diversification answer.",
      thesis:
        "I use SPY as the main market reference, but I don’t think owning the index automatically means being diversified. The index can look strong while the average stock feels weaker underneath.",
      businessEngine:
        "SPY is basically a capitalization-weighted read on U.S. large-cap earnings power. The biggest companies matter more than the average company.",
      marketDebate:
        "The debate is not only valuation. It is whether earnings growth is broadening or whether the index is still too dependent on mega-cap technology.",
      myRead:
        "I would not use SPY as my only equity expression right now. I would pair it with single-name work, equal-weight checks, and sector rotation analysis.",
      upsideCase:
        "Breadth improves, earnings revisions stay positive, and rates stop pressuring multiples.",
      downsideCase:
        "Mega-cap leadership weakens, inflation stays sticky, and the multiple compresses.",
      whatIWatch:
        "Equal-weight S&P 500, sector breadth, earnings revisions, Fed language, and whether financials/industrials/small caps begin participating.",
      scorecard: [
        { label: "Breadth dependence", value: 76 },
        { label: "Valuation sensitivity", value: 68 },
        { label: "Core portfolio utility", value: 88 }
      ],
      questions: [
        "Is the average stock confirming the index move?",
        "Are earnings revisions broadening beyond mega-cap tech?",
        "Is the market paying too much for index-level safety?"
      ]
    },

    QQQ: {
      name: "Nasdaq 100 ETF",
      sector: "Growth / Technology",
      stance: "Constructive but crowded",
      lens: "AI + rates sensitivity",
      timeHorizon: "6–18 months",
      setup: "The cleanest ETF expression of growth, AI, and mega-cap tech momentum.",
      thesis:
        "QQQ is still the cleanest way to watch growth and AI risk appetite. The issue is that a lot of good news is already priced into the largest names.",
      businessEngine:
        "The engine is mega-cap technology earnings: cloud, semis, software, digital advertising, and consumer technology.",
      marketDebate:
        "The debate is whether AI capex and software adoption can keep driving earnings fast enough to justify premium valuations.",
      myRead:
        "I like the quality of the underlying companies, but I would be careful chasing after major rallies. I would rather add during volatility than buy into euphoria.",
      upsideCase:
        "AI monetization becomes clearer, earnings revisions keep moving higher, and real yields move lower.",
      downsideCase:
        "Rates rise, AI leaders miss expectations, or investors rotate toward cheaper cyclicals.",
      whatIWatch:
        "Real yields, mega-cap earnings guidance, AI capex commentary, software demand, and whether market leadership broadens.",
      scorecard: [
        { label: "AI exposure", value: 92 },
        { label: "Crowding risk", value: 82 },
        { label: "Earnings quality", value: 85 }
      ],
      questions: [
        "Are earnings growing into the multiple?",
        "Is AI monetization visible or still mostly narrative?",
        "Would I still like the exposure if rates moved higher?"
      ]
    },

    MSFT: {
      name: "Microsoft",
      sector: "Cloud / AI Infrastructure",
      stance: "Constructive",
      lens: "Enterprise AI compounder",
      timeHorizon: "Multi-year",
      setup: "A high-quality enterprise platform with AI distribution already built in.",
      thesis:
        "Microsoft is one of the cleaner AI stories because it already has enterprise distribution. My question is not whether AI matters; it is how fast AI shows up in revenue and margin.",
      businessEngine:
        "The engine is Azure, Office, enterprise software, security, and workflow integration. Microsoft has the customer base to push AI into daily enterprise use.",
      marketDebate:
        "The main debate is capex versus monetization. Investors want to know whether AI infrastructure spending converts into durable revenue growth.",
      myRead:
        "I like Microsoft because its AI story is attached to existing enterprise workflows, not just speculative future use cases. I would watch margin pressure carefully.",
      upsideCase:
        "Azure growth stays strong, Copilot adoption improves, and AI infrastructure spend produces visible revenue acceleration.",
      downsideCase:
        "AI capex grows faster than monetization and investors start questioning the return profile.",
      whatIWatch:
        "Azure growth, Copilot traction, AI infrastructure margins, enterprise demand, and management’s capex discipline.",
      scorecard: [
        { label: "Distribution advantage", value: 94 },
        { label: "Capex risk", value: 70 },
        { label: "Earnings durability", value: 88 }
      ],
      questions: [
        "Is Copilot becoming a real revenue driver?",
        "Can Azure keep share while funding AI infrastructure?",
        "Are margins absorbing the AI investment cycle?"
      ]
    },

    NVDA: {
      name: "NVIDIA",
      sector: "Semiconductors / AI",
      stance: "Positive, but crowded",
      lens: "AI infrastructure leader",
      timeHorizon: "Event-driven",
      setup: "Best-in-class AI exposure, but expectations are extremely high.",
      thesis:
        "NVIDIA is still the center of the AI infrastructure cycle. The risk is not that the business is bad. The risk is that the stock already assumes near-perfect execution.",
      businessEngine:
        "The engine is data center GPUs, networking, CUDA software ecosystem, and hyperscaler AI infrastructure demand.",
      marketDebate:
        "The debate is whether demand remains structurally supply-constrained or whether customers eventually digest capacity and pressure growth rates.",
      myRead:
        "I respect the business a lot, but I would not treat the stock as risk-free. The more perfect the setup looks, the more sensitive the stock becomes to any slowdown in expectations.",
      upsideCase:
        "Demand stays supply-constrained, Blackwell ramps cleanly, and earnings revisions continue higher.",
      downsideCase:
        "Hyperscalers pause/digest inventory, margins normalize, or competitive/custom silicon pressure increases.",
      whatIWatch:
        "Data center revenue, gross margin, Blackwell ramp, networking attach, hyperscaler capex plans, and backlog commentary.",
      scorecard: [
        { label: "AI leadership", value: 98 },
        { label: "Expectation risk", value: 90 },
        { label: "Moat quality", value: 92 }
      ],
      questions: [
        "How much demand is structural versus pulled forward?",
        "Can margins stay elevated as supply normalizes?",
        "What happens if hyperscalers slow capex for one quarter?"
      ]
    },

    META: {
      name: "Meta Platforms",
      sector: "Digital Ads / AI",
      stance: "Selective Buy",
      lens: "Cash flow vs AI capex",
      timeHorizon: "12–24 months",
      setup: "A highly profitable ad business funding a major AI investment cycle.",
      thesis:
        "Meta is interesting because the core ad business still throws off a lot of cash. The market debate is whether AI capex becomes a real earnings engine or just a margin overhang.",
      businessEngine:
        "The engine is digital advertising across Facebook, Instagram, Reels, messaging, and AI-driven ad targeting.",
      marketDebate:
        "The debate is whether AI spending improves engagement and ad efficiency enough to justify the scale of infrastructure investment.",
      myRead:
        "I like the cash generation, but I would not ignore capex. If AI makes ads more effective, the spend is justified. If not, the stock can rerate lower.",
      upsideCase:
        "AI improves targeting, engagement, creator tools, and ad pricing while core ads stay resilient.",
      downsideCase:
        "Capex remains open-ended, Reality Labs losses continue, and investors lose patience with spending.",
      whatIWatch:
        "Ad growth, Reels monetization, AI capex guidance, Reality Labs losses, engagement trends, and operating expense discipline.",
      scorecard: [
        { label: "Cash generation", value: 91 },
        { label: "AI capex risk", value: 85 },
        { label: "Ad cycle exposure", value: 72 }
      ],
      questions: [
        "Is AI improving ad ROI in a measurable way?",
        "Is capex still disciplined?",
        "Can Meta maintain margins while funding AI infrastructure?"
      ]
    },

    AMZN: {
      name: "Amazon",
      sector: "Cloud / Consumer",
      stance: "Constructive",
      lens: "Operating leverage setup",
      timeHorizon: "Multi-year",
      setup: "Multiple earnings levers: AWS, retail margin, advertising, and logistics scale.",
      thesis:
        "Amazon has multiple levers: AWS, retail efficiency, advertising, and logistics scale. I like the setup because operating leverage can drive earnings even if revenue growth is not perfect.",
      businessEngine:
        "The engine is AWS profitability, North America retail scale, advertising revenue, Prime ecosystem retention, and logistics efficiency.",
      marketDebate:
        "The debate is whether AWS can reaccelerate while Amazon keeps expanding retail margins and absorbing AI infrastructure costs.",
      myRead:
        "Amazon is attractive when investors can see both growth and margin expansion. The key is whether AWS and ads can keep pulling the earnings model higher.",
      upsideCase:
        "AWS reaccelerates, retail margins expand, advertising keeps growing, and logistics efficiency improves.",
      downsideCase:
        "Consumer demand slows, AWS competition rises, and reinvestment eats into margin expansion.",
      whatIWatch:
        "AWS growth, advertising revenue, North America operating margin, fulfillment costs, and AI infrastructure commentary.",
      scorecard: [
        { label: "Operating leverage", value: 88 },
        { label: "AWS importance", value: 90 },
        { label: "Consumer cyclicality", value: 65 }
      ],
      questions: [
        "Is AWS growth reaccelerating sustainably?",
        "Can retail margins keep improving?",
        "How much AI capex is required to stay competitive?"
      ]
    },

    GOOGL: {
      name: "Alphabet",
      sector: "Search / Cloud / AI",
      stance: "Balanced risk-reward",
      lens: "Search durability vs AI disruption",
      timeHorizon: "12–24 months",
      setup: "A strong core business with a real AI search question.",
      thesis:
        "Alphabet is a good example of a company that can be cheap for a reason or cheap because investors are over-discounting risk. I think the core business is still strong, but the AI search question is real.",
      businessEngine:
        "The engine is Search, YouTube, Google Cloud, Android distribution, and AI infrastructure.",
      marketDebate:
        "The debate is whether generative AI changes search behavior enough to pressure margins, traffic, or ad monetization.",
      myRead:
        "I think Alphabet still has enormous assets, but the stock deserves a debate. The key is whether AI becomes a defensive moat or an attack on the core search profit pool.",
      upsideCase:
        "AI strengthens search, Google Cloud scales profitably, YouTube remains strong, and the market gains confidence in AI monetization.",
      downsideCase:
        "AI search changes user behavior, regulatory pressure increases, and capex weighs on free cash flow.",
      whatIWatch:
        "Search revenue, AI Overviews monetization, Cloud growth/profitability, YouTube growth, antitrust updates, and capex guidance.",
      scorecard: [
        { label: "Core profit pool", value: 92 },
        { label: "AI disruption risk", value: 78 },
        { label: "Cloud optionality", value: 80 }
      ],
      questions: [
        "Does AI protect or weaken search?",
        "Can Cloud become a larger profit contributor?",
        "How much regulatory risk should the multiple reflect?"
      ]
    },

    AAPL: {
      name: "Apple",
      sector: "Consumer Tech",
      stance: "Neutral / quality watchlist",
      lens: "Quality, but needs growth",
      timeHorizon: "Long-term watchlist",
      setup: "A high-quality ecosystem, but the stock needs a clearer growth catalyst.",
      thesis:
        "Apple is a high-quality business, but quality alone is not enough. I would rather see clearer evidence of growth acceleration before getting aggressive.",
      businessEngine:
        "The engine is the iPhone ecosystem, services, wearables, installed base loyalty, and capital return.",
      marketDebate:
        "The debate is whether Apple can find the next growth leg through services, AI, or a new product cycle.",
      myRead:
        "I respect the business, but I do not want to overpay for defensive quality if revenue growth is limited. I would rather wait for a better setup or clearer catalyst.",
      upsideCase:
        "Services keep compounding, AI features support a replacement cycle, and capital return remains strong.",
      downsideCase:
        "iPhone demand stays soft, China remains pressured, and AI features fail to drive upgrades.",
      whatIWatch:
        "iPhone demand, services growth, China trends, gross margin, buybacks, and Apple Intelligence adoption.",
      scorecard: [
        { label: "Ecosystem quality", value: 95 },
        { label: "Growth clarity", value: 58 },
        { label: "Capital return", value: 90 }
      ],
      questions: [
        "What is the next real growth driver?",
        "Can services offset slower hardware cycles?",
        "Will AI actually drive upgrades?"
      ]
    },

    AMD: {
      name: "Advanced Micro Devices",
      sector: "Semiconductors",
      stance: "Watchlist / AI optionality",
      lens: "NVIDIA alternative",
      timeHorizon: "Execution-driven",
      setup: "Interesting upside if AI accelerator share gains become visible.",
      thesis:
        "AMD is the kind of name where the story can get very exciting, but I need proof. The setup is attractive if it can take meaningful AI accelerator share.",
      businessEngine:
        "The engine is data center CPUs, AI accelerators, client CPUs, gaming, and embedded chips.",
      marketDebate:
        "The debate is whether AMD can build a durable data center AI franchise or remains a second-place beneficiary.",
      myRead:
        "I like AMD as an AI optionality name, but I would not underwrite it like NVIDIA. It needs customer wins, margin progress, and proof that the data center story is scaling.",
      upsideCase:
        "MI-series adoption improves, hyperscaler/customer wins increase, and data center growth accelerates.",
      downsideCase:
        "NVIDIA keeps most economics, AMD margins disappoint, or AI revenue expectations get pushed out.",
      whatIWatch:
        "Data center GPU revenue, gross margin, customer wins, EPYC share, and guidance around AI demand.",
      scorecard: [
        { label: "AI optionality", value: 82 },
        { label: "Execution risk", value: 80 },
        { label: "Valuation support", value: 61 }
      ],
      questions: [
        "Are customers adopting AMD because they want choice or because supply is tight?",
        "Can margins improve as AI revenue scales?",
        "Is the market already pricing in too much share gain?"
      ]
    },

    MELI: {
      name: "MercadoLibre",
      sector: "LatAm E-commerce / Fintech",
      stance: "High-conviction growth",
      lens: "Commerce + fintech flywheel",
      timeHorizon: "Multi-year",
      setup: "A growth company where the ecosystem matters more than any single segment.",
      thesis:
        "MELI is one of my favorite frameworks because commerce creates data, data improves underwriting, credit increases purchasing power, and that drives more commerce.",
      businessEngine:
        "The engine is marketplace scale, logistics, Mercado Pago payments, consumer credit, advertising, and regional e-commerce penetration.",
      marketDebate:
        "The debate is whether growth investments and credit expansion create durable earnings power or introduce too much emerging-market risk.",
      myRead:
        "I like MELI because the fintech flywheel can make the marketplace stronger. But the risk is real: if credit losses spike, the market can change its view quickly.",
      upsideCase:
        "Fintech scales, credit losses stay controlled, advertising grows, and logistics strengthens the marketplace moat.",
      downsideCase:
        "Emerging-market recession stresses the loan book, FX weakens reported results, or margins compress from growth investment.",
      whatIWatch:
        "Credit loss ratios, Mercado Pago growth, credit card adoption, advertising revenue, logistics efficiency, and Brazil/Mexico execution.",
      scorecard: [
        { label: "Flywheel strength", value: 93 },
        { label: "Credit risk", value: 79 },
        { label: "Long-run runway", value: 90 }
      ],
      questions: [
        "Is credit growth disciplined or too aggressive?",
        "Does Mercado Pago increase marketplace engagement?",
        "Can ads become a large high-margin profit pool?"
      ]
    },

    JPM: {
      name: "JPMorgan Chase",
      sector: "Financials",
      stance: "Quality financial",
      lens: "Macro dashboard",
      timeHorizon: "Cycle monitor",
      setup: "Best-in-class bank lens for credit, deposits, and capital markets.",
      thesis:
        "JPM is not just a bank stock to me. It is a macro dashboard for credit, consumer health, deposits, and capital markets activity.",
      businessEngine:
        "The engine is net interest income, payments, trading, investment banking, credit cards, deposits, and scale advantages.",
      marketDebate:
        "The debate is whether normalized credit costs and lower rates pressure earnings after a strong banking cycle.",
      myRead:
        "I like JPM as the highest-quality bank read-through, but I would still watch credit normalization and regulatory capital requirements.",
      upsideCase:
        "Credit stays stable, investment banking recovers, deposits remain strong, and capital return continues.",
      downsideCase:
        "Credit costs rise, net interest income rolls over, or regulation pressures capital return.",
      whatIWatch:
        "Net interest income, credit losses, deposit trends, investment banking activity, trading revenue, and capital return.",
      scorecard: [
        { label: "Franchise quality", value: 94 },
        { label: "Credit cycle risk", value: 70 },
        { label: "Macro usefulness", value: 90 }
      ],
      questions: [
        "Are credit losses normalizing or accelerating?",
        "What happens to NII if rates fall?",
        "Can investment banking offset slower consumer credit?"
      ]
    },

    BABA: {
      name: "Alibaba",
      sector: "China Internet",
      stance: "Contrarian / high risk",
      lens: "Cheap, but needs confidence",
      timeHorizon: "High-volatility",
      setup: "A low-valuation name where the catalyst has to be confidence repair.",
      thesis:
        "Alibaba is cheap, but cheap alone is not a thesis. The question is whether the market can regain confidence in the business, the macro backdrop, and capital allocation.",
      businessEngine:
        "The engine is China commerce, cloud, international commerce, logistics, and capital return.",
      marketDebate:
        "The debate is whether AI/cloud growth and buybacks can offset China macro weakness and investor distrust.",
      myRead:
        "I would treat BABA as a contrarian idea, not a safe value stock. The upside can be meaningful, but the market needs a reason to believe again.",
      upsideCase:
        "China sentiment improves, cloud/AI growth accelerates, buybacks continue, and policy tone becomes more supportive.",
      downsideCase:
        "China consumer remains weak, competition pressures commerce, and geopolitical risk keeps the multiple depressed.",
      whatIWatch:
        "China consumer data, cloud growth, AI-related revenue, buybacks, policy tone, and ADR sentiment.",
      scorecard: [
        { label: "Valuation appeal", value: 84 },
        { label: "Macro risk", value: 88 },
        { label: "Catalyst clarity", value: 55 }
      ],
      questions: [
        "Is this cheap because the market is wrong or because trust is impaired?",
        "Can cloud/AI become a real rerating catalyst?",
        "Will buybacks be enough to support sentiment?"
      ]
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
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=80",
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
      source: "Macro / rates / daily market tone",
      reason:
        "Useful when I want to hear how institutional investors are framing rates, inflation, Fed language, and risk appetite.",
      url: "https://www.youtube.com/results?search_query=Bloomberg+Surveillance+markets+Fed+rates"
    },
    {
      title: "The Compound & Friends",
      source: "Market structure / investor psychology",
      reason:
        "Good for market debates that are less formal but useful: breadth, positioning, sentiment, and how real investors are thinking.",
      url: "https://www.youtube.com/results?search_query=The+Compound+and+Friends+market+breadth+AI"
    },
    {
      title: "CNBC Market Close / Fed Coverage",
      source: "Fast market updates",
      reason:
        "Useful for quick reactions around inflation prints, Fed decisions, major earnings, and market-close commentary.",
      url: "https://www.youtube.com/results?search_query=CNBC+market+close+Fed+inflation+stocks"
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
