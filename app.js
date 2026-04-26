const C = window.SITE_CONTENT;

let selectedTicker = "MSFT";
let selectedCategory = "All";
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

function $(selector) {
  return document.querySelector(selector);
}

function chartPoints(values, width = 640, height = 260, padding = 28) {
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  return values.map((value, index) => ({
    x: padding + (index * (width - padding * 2)) / Math.max(values.length - 1, 1),
    y: height - padding - ((value - min) / range) * (height - padding * 2),
    value
  }));
}

function chartPath(values, width = 640, height = 260, padding = 28) {
  return chartPoints(values, width, height, padding)
    .map((point, index) => `${index === 0 ? "M" : "L"} ${point.x.toFixed(2)} ${point.y.toFixed(2)}`)
    .join(" ");
}

function miniChart(values) {
  const positive = values[values.length - 1] >= values[0];
  return `
    <svg class="mini-chart" viewBox="0 0 180 58" preserveAspectRatio="none">
      <path d="${chartPath(values, 180, 58, 6)}" class="${positive ? "mini-line up-line" : "mini-line down-line"}"></path>
    </svg>
  `;
}

function mainChart(values, ticker) {
  const path = chartPath(values);
  const points = chartPoints(values);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const area = `${path} L 612 232 L 28 232 Z`;

  return `
    <svg class="main-chart" viewBox="0 0 640 260" role="img" aria-label="${ticker} illustrative trend chart">
      <defs>
        <linearGradient id="chartFill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stop-color="rgba(166,124,82,.34)" />
          <stop offset="100%" stop-color="rgba(166,124,82,0)" />
        </linearGradient>
      </defs>
      ${[0, 1, 2, 3].map(i => `<line x1="28" x2="612" y1="${36 + i * 52}" y2="${36 + i * 52}" class="grid-line"></line>`).join("")}
      <path d="${area}" fill="url(#chartFill)"></path>
      <path d="${path}" class="main-line"></path>
      ${points.map((point, index) => `
        <g>
          <circle cx="${point.x}" cy="${point.y}" r="4.5" class="chart-dot"></circle>
          <text x="${point.x}" y="252" text-anchor="middle" class="chart-label">${months[index] || ""}</text>
        </g>
      `).join("")}
      <text x="36" y="28" class="axis-label">${max.toFixed(0)}</text>
      <text x="36" y="226" class="axis-label">${min.toFixed(0)}</text>
    </svg>
  `;
}

function renderShell() {
  document.getElementById("app").innerHTML = `
    <header class="site-header">
      <a class="brand" href="#top">
        <span class="brand-mark">TJ</span>
        <span>
          <strong>${C.profile.brand}</strong>
          <small>${C.profile.role}</small>
        </span>
      </a>
      <nav>
        <a href="#outlook">Outlook</a>
        <a href="#tickers">Tickers</a>
        <a href="#notes">Blogs</a>
        <a href="#videos">Videos</a>
        <a href="#framework">Framework</a>
      </nav>
      <a class="contact-button" href="mailto:${C.profile.email}">Contact</a>
    </header>

    <main id="top">
      <section class="hero">
        <div class="hero-copy">
          <p class="kicker">Independent market notebook</p>
          <h1>${C.profile.headline}</h1>
          <p>${C.profile.subheadline}</p>
          <div class="hero-actions">
            <a class="button primary" href="#notes">Read notes</a>
            <a class="button secondary" href="#tickers">View ticker thoughts</a>
          </div>
        </div>
        <div class="hero-media">
          <img src="${C.profile.heroImage}" alt="Market dashboard and charts" />
          <div class="floating-card">
            <span>${C.marketSnapshot.dateLabel}</span>
            <strong>${C.marketSnapshot.mainView}</strong>
            <p>${C.marketSnapshot.paragraph}</p>
          </div>
        </div>
      </section>

      <section id="outlook" class="section split-heading">
        <div>
          <p class="kicker">Market outlook</p>
          <h2>My base case is selective risk-taking, not blind optimism.</h2>
        </div>
        <p>
          This page intentionally uses manual research views instead of live prices.
          The goal is to communicate thinking, not pretend to be a Bloomberg terminal.
        </p>
      </section>

      <section class="scenario-grid">
        ${C.marketSnapshot.cards.map(card => `
          <article>
            <div>
              <h3>${card.title}</h3>
              <span>${card.probability}</span>
            </div>
            <p>${card.text}</p>
          </article>
        `).join("")}
      </section>

      <section id="tickers" class="section split-heading">
        <div>
          <p class="kicker">Ticker views</p>
          <h2>Popular tickers with my working judgment.</h2>
        </div>
        <label class="search-box">
          <span>Search</span>
          <input id="tickerSearch" type="search" placeholder="Search ticker, company, or sector" />
        </label>
      </section>

      <section class="ticker-layout">
        <aside class="ticker-list" id="tickerList"></aside>
        <article class="ticker-panel" id="tickerPanel"></article>
      </section>

      <section id="notes" class="section split-heading">
        <div>
          <p class="kicker">Blogs and market notes</p>
          <h2>Useful notes written in my actual market-thinking style.</h2>
        </div>
        <p>
          These are designed to sound like a thoughtful market notebook: clear thesis,
          clear risk, and enough structure that someone can push back.
        </p>
      </section>

      <section class="blog-tools" id="blogTools"></section>
      <section class="blog-grid" id="blogGrid"></section>

      <section id="videos" class="section split-heading">
        <div>
          <p class="kicker">Video watchlist</p>
          <h2>Videos I would use to sharpen the market view.</h2>
        </div>
        <p>
          These are not meant to replace my own view. They are inputs: macro tone,
          market structure, Fed language, investor psychology, and earnings debate.
        </p>
      </section>

      <section class="video-grid">
        ${C.videoLibrary.map(video => `
          <article class="video-card">
            <div class="video-frame">
              <iframe
                src="https://www.youtube.com/embed/${video.youtubeId}"
                title="${video.title}"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen>
              </iframe>
            </div>
            <div>
              <span>${video.source}</span>
              <h3>${video.title}</h3>
              <p>${video.reason}</p>
            </div>
          </article>
        `).join("")}
      </section>

      <section id="framework" class="section split-heading">
        <div>
          <p class="kicker">Research framework</p>
          <h2>The four questions behind every idea.</h2>
        </div>
        <p>
          I want my views to be specific enough to be useful and transparent enough to be challenged.
        </p>
      </section>

      <section class="framework-grid">
        ${C.frameworks.map(item => `
          <article>
            <span>${item.title}</span>
            <h3>${item.prompt}</h3>
            <p>${item.detail}</p>
          </article>
        `).join("")}
      </section>
    </main>

    <footer>
      <strong>${C.profile.brand}</strong>
      <span>Research views are educational and not investment advice. Ticker data is manually maintained.</span>
      <a href="mailto:${C.profile.email}">${C.profile.email}</a>
    </footer>

    <div class="modal-backdrop" id="modalBackdrop" hidden>
      <article class="modal" id="modalContent"></article>
    </div>
  `;

  $("#tickerSearch").addEventListener("input", event => renderTickers(event.target.value));
  $("#modalBackdrop").addEventListener("click", event => {
    if (event.target.id === "modalBackdrop") closePost();
  });

  renderTickers();
  renderTickerPanel();
  renderBlogTools();
  renderBlogs();
}

function renderTickers(search = "") {
  const tickers = Object.entries(C.tickerViews).filter(([ticker, item]) => {
    const text = `${ticker} ${item.name} ${item.sector} ${item.stance}`.toLowerCase();
    return text.includes(search.toLowerCase());
  });

  $("#tickerList").innerHTML = tickers.map(([ticker, item]) => `
    <button class="ticker-button ${ticker === selectedTicker ? "active" : ""}" onclick="selectTicker('${ticker}')">
      <div class="ticker-top">
        <div>
          <strong>${ticker}</strong>
          <span>${item.name}</span>
        </div>
        <em>${item.stance}</em>
      </div>
      ${miniChart(item.chart)}
    </button>
  `).join("");
}

function renderTickerPanel() {
  const item = C.tickerViews[selectedTicker];

  $("#tickerPanel").innerHTML = `
    <div class="ticker-header">
      <div>
        <span>${item.sector}</span>
        <h3>${selectedTicker}</h3>
        <p>${item.name}</p>
      </div>
      <div class="target-box">
        <span>My View</span>
        <strong>${item.stance}</strong>
      </div>
    </div>

    ${mainChart(item.chart, selectedTicker)}

    <div class="analysis-grid">
      <article>
        <span>Reference Price</span>
        <strong>${item.referencePrice}</strong>
      </article>
      <article>
        <span>Target / Setup</span>
        <strong>${item.targetRange}</strong>
      </article>
      <article>
        <span>Upside Case</span>
        <p>${item.upsideCase}</p>
      </article>
      <article>
        <span>Downside Case</span>
        <p>${item.downsideCase}</p>
      </article>
      <article class="wide">
        <span>Working Thesis</span>
        <p>${item.thesis}</p>
      </article>
      <article class="wide">
        <span>What I’m Watching</span>
        <p>${item.catalyst}</p>
      </article>
    </div>
  `;
}

function selectTicker(ticker) {
  selectedTicker = ticker;
  renderTickers($("#tickerSearch").value);
  renderTickerPanel();
}

function renderBlogTools() {
  const categories = ["All", ...new Set(C.posts.map(post => post.category))];
  $("#blogTools").innerHTML = categories.map(category => `
    <button class="${category === selectedCategory ? "active" : ""}" onclick="selectCategory('${category}')">${category}</button>
  `).join("");
}

function renderBlogs() {
  const posts = selectedCategory === "All"
    ? C.posts
    : C.posts.filter(post => post.category === selectedCategory);

  $("#blogGrid").innerHTML = posts.map(post => `
    <article class="blog-card" onclick="openPost('${post.id}')">
      <img src="${post.image}" alt="${post.title}" />
      <div>
        <span>${post.category} · ${post.readTime}</span>
        <h3>${post.title}</h3>
        <p>${post.summary}</p>
        <button>Read full note →</button>
      </div>
    </article>
  `).join("");
}

function selectCategory(category) {
  selectedCategory = category;
  renderBlogTools();
  renderBlogs();
}

function openPost(id) {
  const post = C.posts.find(item => item.id === id);
  if (!post) return;

  $("#modalContent").innerHTML = `
    <button class="modal-close" onclick="closePost()">×</button>
    <img src="${post.image}" alt="${post.title}" />
    <span>${post.category} · ${post.date} · ${post.readTime}</span>
    <h2>${post.title}</h2>
    <p class="modal-summary">${post.summary}</p>
    ${post.body.map(paragraph => `<p>${paragraph}</p>`).join("")}
  `;

  $("#modalBackdrop").hidden = false;
  document.body.classList.add("modal-open");
}

function closePost() {
  $("#modalBackdrop").hidden = true;
  document.body.classList.remove("modal-open");
}

renderShell();
