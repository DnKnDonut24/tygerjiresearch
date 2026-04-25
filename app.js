const C = window.SITE_CONTENT;
let marketState = structuredClone(C.tickers);
let selectedTicker = "SPX";
let selectedCategory = "All";

function $(selector) {
  return document.querySelector(selector);
}

function money(value, currency = "USD") {
  if (value === undefined || value === null || Number.isNaN(Number(value))) return "—";
  const n = Number(value);
  const options = n >= 1000
    ? { maximumFractionDigits: 0 }
    : { minimumFractionDigits: 2, maximumFractionDigits: 2 };
  if (currency === "USD") return "$" + n.toLocaleString(undefined, options);
  return n.toLocaleString(undefined, options);
}

function pct(value) {
  if (value === undefined || value === null || Number.isNaN(Number(value))) return "—";
  const n = Number(value);
  return `${n >= 0 ? "+" : ""}${n.toFixed(2)}%`;
}

function chartValues(item) {
  return Array.isArray(item.data) && item.data.length > 1 ? item.data.map(Number).filter(Number.isFinite) : [1, 2, 3, 4, 5, 6];
}

function chartPoints(values, width = 640, height = 260, padding = 28) {
  const clean = values.map(Number).filter(Number.isFinite);
  const min = Math.min(...clean);
  const max = Math.max(...clean);
  const range = max - min || 1;
  return clean.map((value, index) => ({
    x: padding + (index * (width - padding * 2)) / Math.max(clean.length - 1, 1),
    y: height - padding - ((value - min) / range) * (height - padding * 2),
    value
  }));
}

function chartPath(values, width = 640, height = 260, padding = 28) {
  return chartPoints(values, width, height, padding)
    .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x.toFixed(2)} ${p.y.toFixed(2)}`)
    .join(" ");
}

function labelIndexes(length) {
  if (length <= 6) return Array.from({ length }, (_, i) => i);
  const count = 5;
  return Array.from({ length: count }, (_, i) => Math.round((i * (length - 1)) / (count - 1)));
}

function mainChart(item, ticker) {
  const values = chartValues(item);
  const path = chartPath(values);
  const pts = chartPoints(values);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const area = `${path} L 612 232 L 28 232 Z`;
  const labels = item.labels || [];
  const indexes = new Set(labelIndexes(values.length));

  return `
    <svg class="chart chart-large" viewBox="0 0 640 260" role="img" aria-label="${ticker} six-month chart">
      <defs>
        <linearGradient id="chartFill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stop-color="rgba(166,124,82,.32)" />
          <stop offset="100%" stop-color="rgba(166,124,82,0)" />
        </linearGradient>
      </defs>
      ${[0,1,2,3].map(i => `<line x1="28" x2="612" y1="${36+i*52}" y2="${36+i*52}" class="chart-grid" />`).join("")}
      <path d="${area}" fill="url(#chartFill)" />
      <path d="${path}" class="chart-line" />
      ${pts.map((p, i) => `
        <g>
          ${indexes.has(i) ? `<circle cx="${p.x}" cy="${p.y}" r="4.5" class="chart-dot"></circle>` : ""}
          ${indexes.has(i) ? `<text x="${p.x}" y="252" text-anchor="middle" class="chart-label">${labels[i] || ""}</text>` : ""}
        </g>
      `).join("")}
      <text x="36" y="28" class="axis-label">${money(max, item.currency)}</text>
      <text x="36" y="226" class="axis-label">${money(min, item.currency)}</text>
    </svg>
  `;
}

function miniChart(item, positive) {
  const values = chartValues(item);
  return `
    <svg class="mini-chart" viewBox="0 0 180 58" preserveAspectRatio="none" aria-hidden="true">
      <path d="${chartPath(values, 180, 58, 6)}" class="${positive ? "mini-line positive" : "mini-line negative"}" />
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
        ${C.nav.map(item => `<a href="#${item.toLowerCase()}">${item}</a>`).join("")}
      </nav>
      <a class="contact-link" href="mailto:${C.profile.email}">Contact</a>
    </header>

    <main id="top">
      <section class="hero">
        <div class="hero-copy">
          <p class="kicker">Independent market notebook</p>
          <h1>${C.profile.headline}</h1>
          <p class="hero-text">${C.profile.subheadline}</p>
          <div class="hero-actions">
            <a class="button primary" href="#notes">Read notes</a>
            <a class="button secondary" href="#markets">View live market board</a>
          </div>
        </div>
        <div class="hero-media">
          <img src="${C.profile.heroImage}" alt="Market research workspace" />
          <div class="hero-card">
            <span>${C.featuredNote.kicker}</span>
            <h2>${C.featuredNote.title}</h2>
            <p>${C.featuredNote.summary}</p>
          </div>
        </div>
      </section>

      <section class="indicator-strip">
        ${C.marketIndicators.map(i => `
          <article>
            <span>${i.label}</span>
            <strong>${i.value}</strong>
            <p>${i.note}</p>
          </article>
        `).join("")}
      </section>

      <section id="notes" class="section-block split-intro">
        <div>
          <p class="kicker">Research notes</p>
          <h2>Not a prediction feed. A thinking system.</h2>
        </div>
        <p>
          My notes are organized around the same structure I use when thinking through markets:
          what is the setup, what is the market missing, what could go wrong, and what would change the view.
        </p>
      </section>

      <section class="featured-grid">
        ${renderFeaturedNote()}
        <div class="post-list" id="postList"></div>
      </section>

      <section id="markets" class="section-block split-intro">
        <div>
          <p class="kicker">Live market board</p>
          <h2>Major tickers, indexes, current lens, and thesis notes.</h2>
        </div>
        <div class="market-tools">
          <div class="market-status" id="marketStatus">Loading live prices...</div>
          <button class="refresh-button" id="refreshMarket">Refresh data</button>
          <input id="tickerSearch" type="search" placeholder="Search ticker, company, or sector" />
        </div>
      </section>

      <section class="market-layout">
        <aside class="ticker-rail" id="tickerRail"></aside>
        <article class="ticker-detail" id="tickerDetail"></article>
      </section>

      <section id="frameworks" class="section-block split-intro">
        <div>
          <p class="kicker">Frameworks</p>
          <h2>The four questions behind every note.</h2>
        </div>
        <p>
          The goal is to make my thinking specific enough to be useful and transparent enough to be challenged.
        </p>
      </section>

      <section class="framework-grid">
        ${C.frameworks.map(f => `
          <article>
            <span>${f.title}</span>
            <h3>${f.prompt}</h3>
            <p>${f.detail}</p>
          </article>
        `).join("")}
      </section>

      <section class="memo-builder">
        <div>
          <p class="kicker">Knowledge exchange</p>
          <h2>Build a market memo.</h2>
          <p>
            Use this to draft a quick market thought. It saves locally in your browser and can be emailed directly.
          </p>
        </div>
        <form id="memoForm">
          <label>Thesis<textarea id="memoThesis" placeholder="What is the market missing?"></textarea></label>
          <label>Risk<textarea id="memoRisk" placeholder="What would make the thesis wrong?"></textarea></label>
          <label>Catalyst<textarea id="memoCatalyst" placeholder="What could change investor perception?"></textarea></label>
          <div class="memo-actions">
            <button type="button" id="saveMemo">Save draft</button>
            <a id="emailMemo" href="#">Email this idea</a>
          </div>
        </form>
      </section>

      <section id="about" class="about-section">
        <div class="about-image">
          <img src="${C.profile.avatarImage}" alt="Research notes and data dashboard" />
        </div>
        <div class="about-copy">
          <p class="kicker">About</p>
          <h2>${C.about.title}</h2>
          ${C.about.paragraphs.map(p => `<p>${p}</p>`).join("")}
          <div class="fact-grid">
            ${C.about.facts.map(f => `<span>${f}</span>`).join("")}
          </div>
        </div>
      </section>
    </main>

    <footer>
      <strong>${C.profile.brand}</strong>
      <span>Market notes, outlooks, and research frameworks by ${C.profile.name}.</span>
      <a href="mailto:${C.profile.email}">${C.profile.email}</a>
    </footer>

    <div class="modal-backdrop" id="modalBackdrop" hidden>
      <article class="modal" id="modalContent"></article>
    </div>
  `;

  bindEvents();
  renderPosts();
  renderTickers();
  renderTickerDetail();
  loadMemo();
  refreshMarketData();
}

function renderFeaturedNote() {
  return `
    <article class="featured-note">
      <img src="${C.featuredNote.image}" alt="${C.featuredNote.title}" />
      <div>
        <span>${C.featuredNote.kicker} · ${C.featuredNote.date}</span>
        <h3>${C.featuredNote.title}</h3>
        <p>${C.featuredNote.summary}</p>
        <button onclick="openPost('${C.posts[0].id}')">Read note</button>
      </div>
    </article>
  `;
}

function renderPosts() {
  const categories = ["All", ...new Set(C.posts.map(p => p.category))];
  const filtered = selectedCategory === "All" ? C.posts : C.posts.filter(p => p.category === selectedCategory);

  $("#postList").innerHTML = `
    <div class="category-row">
      ${categories.map(cat => `
        <button class="${cat === selectedCategory ? "active" : ""}" onclick="selectCategory('${cat}')">${cat}</button>
      `).join("")}
    </div>
    <div class="post-card-grid">
      ${filtered.map(post => `
        <article class="post-card" onclick="openPost('${post.id}')">
          <img src="${post.image}" alt="${post.title}" />
          <div>
            <span>${post.category} · ${post.readTime}</span>
            <h3>${post.title}</h3>
            <p>${post.summary}</p>
          </div>
        </article>
      `).join("")}
    </div>
  `;
}

function renderTickers(search = "") {
  const tickers = Object.entries(marketState).filter(([ticker, item]) => {
    const haystack = `${ticker} ${item.name} ${item.sector}`.toLowerCase();
    return haystack.includes(search.toLowerCase());
  });

  $("#tickerRail").innerHTML = tickers.map(([ticker, item]) => {
    const positive = Number(item.change) >= 0;
    return `
      <button class="ticker-button ${ticker === selectedTicker ? "active" : ""}" onclick="selectTicker('${ticker}')">
        <div class="ticker-top">
          <div>
            <strong>${ticker}</strong>
            <span>${item.name}</span>
          </div>
          <em class="${positive ? "up" : "down"}">${positive ? "↗" : "↘"} ${pct(item.change)}</em>
        </div>
        ${miniChart(item, positive)}
      </button>
    `;
  }).join("");
}

function renderTickerDetail() {
  const item = marketState[selectedTicker];
  const positive = Number(item.change) >= 0;
  $("#tickerDetail").innerHTML = `
    <div class="ticker-detail-header">
      <div>
        <span>${item.sector}</span>
        <h3>${selectedTicker}</h3>
        <p>${item.name}</p>
      </div>
      <div class="ticker-price">
        <strong>${money(item.price, item.currency)}</strong>
        <em class="${positive ? "up" : "down"}">${pct(item.change)}</em>
      </div>
    </div>

    ${mainChart(item, selectedTicker)}

    <div class="ticker-thesis-grid">
      <article>
        <span>Current View</span>
        <strong>${item.view}</strong>
      </article>
      <article>
        <span>Conviction Type</span>
        <strong>${item.conviction}</strong>
      </article>
      <article class="wide">
        <span>Working Thesis</span>
        <p>${item.thesis}</p>
      </article>
      <article class="wide">
        <span>Primary Risks</span>
        <p>${item.risks}</p>
      </article>
    </div>
  `;
}

function bindEvents() {
  $("#tickerSearch").addEventListener("input", e => renderTickers(e.target.value));
  $("#refreshMarket").addEventListener("click", refreshMarketData);
  $("#modalBackdrop").addEventListener("click", e => {
    if (e.target.id === "modalBackdrop") closePost();
  });
  $("#saveMemo").addEventListener("click", saveMemo);
  $("#emailMemo").addEventListener("click", emailMemo);
}

function selectTicker(ticker) {
  selectedTicker = ticker;
  renderTickers($("#tickerSearch").value);
  renderTickerDetail();
}

function selectCategory(category) {
  selectedCategory = category;
  renderPosts();
}

async function refreshMarketData() {
  const status = $("#marketStatus");
  const button = $("#refreshMarket");
  const items = Object.entries(C.tickers)
    .map(([key, item]) => `${key}:${item.yahoo || key}`)
    .join(",");

  try {
    status.textContent = "Updating live prices...";
    button.disabled = true;

    const res = await fetch(`/api/market?items=${encodeURIComponent(items)}`, {
      headers: { "Accept": "application/json" }
    });

    if (!res.ok) throw new Error(`Market API returned ${res.status}`);
    const payload = await res.json();

    if (!payload || !Array.isArray(payload.results)) {
      throw new Error("Invalid market payload");
    }

    payload.results.forEach(result => {
      if (!result.key || !marketState[result.key]) return;
      marketState[result.key] = {
        ...marketState[result.key],
        price: result.price ?? marketState[result.key].price,
        change: result.changePercent ?? marketState[result.key].change,
        currency: result.currency || marketState[result.key].currency || "USD",
        data: Array.isArray(result.data) && result.data.length > 2 ? result.data : marketState[result.key].data,
        labels: Array.isArray(result.labels) ? result.labels : marketState[result.key].labels,
        asOf: result.asOf
      };
    });

    renderTickers($("#tickerSearch").value);
    renderTickerDetail();

    const time = payload.generatedAt
      ? new Date(payload.generatedAt).toLocaleString([], { dateStyle: "medium", timeStyle: "short" })
      : "just now";

    status.textContent = `Live prices updated ${time}`;
  } catch (error) {
    console.warn(error);
    status.textContent = "Static preview data shown. Live prices will update after deploying the /api/market function on Vercel.";
  } finally {
    button.disabled = false;
  }
}

function openPost(id) {
  const post = C.posts.find(p => p.id === id);
  if (!post) return;

  const bodyHtml = Array.isArray(post.body)
    ? post.body.map(p => `<p>${p}</p>`).join("")
    : `<p>${post.body || ""}</p>`;

  $("#modalContent").innerHTML = `
    <button class="modal-close" onclick="closePost()">×</button>
    <img src="${post.image}" alt="${post.title}" />
    <span>${post.category} · ${post.date} · ${post.readTime}</span>
    <h2>${post.title}</h2>
    <p class="modal-summary">${post.summary}</p>
    ${bodyHtml}
  `;
  $("#modalBackdrop").hidden = false;
  document.body.classList.add("modal-open");
}

function closePost() {
  $("#modalBackdrop").hidden = true;
  document.body.classList.remove("modal-open");
}

function saveMemo() {
  const memo = {
    thesis: $("#memoThesis").value,
    risk: $("#memoRisk").value,
    catalyst: $("#memoCatalyst").value
  };
  localStorage.setItem("tygerResearchMemo", JSON.stringify(memo));
  $("#saveMemo").textContent = "Saved";
  setTimeout(() => $("#saveMemo").textContent = "Save draft", 1200);
}

function loadMemo() {
  try {
    const memo = JSON.parse(localStorage.getItem("tygerResearchMemo") || "{}");
    $("#memoThesis").value = memo.thesis || "";
    $("#memoRisk").value = memo.risk || "";
    $("#memoCatalyst").value = memo.catalyst || "";
  } catch {}
}

function emailMemo(e) {
  const thesis = $("#memoThesis").value;
  const risk = $("#memoRisk").value;
  const catalyst = $("#memoCatalyst").value;
  const body = encodeURIComponent(`Thesis:\n${thesis}\n\nRisk:\n${risk}\n\nCatalyst:\n${catalyst}`);
  e.currentTarget.href = `mailto:${C.profile.email}?subject=Market memo idea&body=${body}`;
}

renderShell();
