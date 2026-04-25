const C = window.SITE_CONTENT;
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

let selectedTicker = "MSFT";
let selectedCategory = "All";
let openPostId = null;

function $(selector) {
  return document.querySelector(selector);
}

function money(value) {
  if (value >= 1000) return "$" + value.toLocaleString(undefined, { maximumFractionDigits: 0 });
  return "$" + value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function chartPoints(values, width = 640, height = 260, padding = 28) {
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  return values.map((value, index) => ({
    x: padding + (index * (width - padding * 2)) / (values.length - 1),
    y: height - padding - ((value - min) / range) * (height - padding * 2),
    value
  }));
}

function chartPath(values, width = 640, height = 260, padding = 28) {
  return chartPoints(values, width, height, padding)
    .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x.toFixed(2)} ${p.y.toFixed(2)}`)
    .join(" ");
}

function mainChart(values, ticker) {
  const path = chartPath(values);
  const pts = chartPoints(values);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const area = `${path} L 612 232 L 28 232 Z`;
  return `
    <svg class="chart chart-large" viewBox="0 0 640 260" role="img" aria-label="${ticker} chart">
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
          <circle cx="${p.x}" cy="${p.y}" r="4.5" class="chart-dot"></circle>
          <text x="${p.x}" y="252" text-anchor="middle" class="chart-label">${months[i]}</text>
        </g>
      `).join("")}
      <text x="36" y="28" class="axis-label">${money(max)}</text>
      <text x="36" y="226" class="axis-label">${money(min)}</text>
    </svg>
  `;
}

function miniChart(values, positive) {
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
            <a class="button secondary" href="#markets">View market board</a>
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
          The site is structured around a simple research habit: state the thesis,
          define the risk, identify the catalyst, and keep updating the view when facts change.
        </p>
      </section>

      <section class="featured-grid">
        ${renderFeaturedNote()}
        <div class="post-list" id="postList"></div>
      </section>

      <section id="markets" class="section-block split-intro">
        <div>
          <p class="kicker">Market board</p>
          <h2>Major tickers, current lens, and thesis notes.</h2>
        </div>
        <div class="market-search">
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
          I want the site to feel like an open investment notebook: specific enough to be useful,
          transparent enough to be challenged, and simple enough to keep updated.
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
            Use this section to draft a thought, test your structure, or send me a question.
            It saves locally in your browser for preview purposes.
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
  const tickers = Object.entries(C.tickers).filter(([ticker, item]) => {
    const haystack = `${ticker} ${item.name} ${item.sector}`.toLowerCase();
    return haystack.includes(search.toLowerCase());
  });

  $("#tickerRail").innerHTML = tickers.map(([ticker, item]) => {
    const positive = item.change >= 0;
    return `
      <button class="ticker-button ${ticker === selectedTicker ? "active" : ""}" onclick="selectTicker('${ticker}')">
        <div class="ticker-top">
          <div>
            <strong>${ticker}</strong>
            <span>${item.name}</span>
          </div>
          <em class="${positive ? "up" : "down"}">${positive ? "↗" : "↘"} ${positive ? "+" : ""}${item.change}%</em>
        </div>
        ${miniChart(item.data, positive)}
      </button>
    `;
  }).join("");
}

function renderTickerDetail() {
  const item = C.tickers[selectedTicker];
  const positive = item.change >= 0;
  $("#tickerDetail").innerHTML = `
    <div class="ticker-detail-header">
      <div>
        <span>${item.sector}</span>
        <h3>${selectedTicker}</h3>
        <p>${item.name}</p>
      </div>
      <div class="ticker-price">
        <strong>${money(item.price)}</strong>
        <em class="${positive ? "up" : "down"}">${positive ? "+" : ""}${item.change}%</em>
      </div>
    </div>

    ${mainChart(item.data, selectedTicker)}

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

function openPost(id) {
  const post = C.posts.find(p => p.id === id);
  if (!post) return;
  openPostId = id;
  $("#modalContent").innerHTML = `
    <button class="modal-close" onclick="closePost()">×</button>
    <img src="${post.image}" alt="${post.title}" />
    <span>${post.category} · ${post.date} · ${post.readTime}</span>
    <h2>${post.title}</h2>
    <p class="modal-summary">${post.summary}</p>
    <p>${post.body}</p>
  `;
  $("#modalBackdrop").hidden = false;
  document.body.classList.add("modal-open");
}

function closePost() {
  openPostId = null;
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
