const C = window.SITE_CONTENT;

let selectedTicker = "MSFT";
let selectedCategory = "All";

function $(selector) {
  return document.querySelector(selector);
}

function renderScoreBars(scorecard) {
  return scorecard.map(item => `
    <div class="score-row">
      <div>
        <span>${item.label}</span>
        <strong>${item.value}/100</strong>
      </div>
      <div class="score-track">
        <div class="score-fill" style="width:${item.value}%"></div>
      </div>
    </div>
  `).join("");
}

function renderQuestionList(questions) {
  return questions.map(question => `<li>${question}</li>`).join("");
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
          <h2>YouTube inputs I would use to sharpen the market view.</h2>
        </div>
        <p>
          These are not meant to replace my own view. They are inputs: macro tone,
          market structure, Fed language, investor psychology, and earnings debate.
        </p>
      </section>

      <section class="video-grid">
        ${C.videoLibrary.map(video => `
          <article class="video-card">
            <div>
              <span>${video.source}</span>
              <h3>${video.title}</h3>
              <p>${video.reason}</p>
              <a href="${video.url}" target="_blank" rel="noreferrer">Open on YouTube →</a>
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
      <span>Research views are educational and not investment advice. Ticker views are manually maintained.</span>
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
    const text = `${ticker} ${item.name} ${item.sector} ${item.stance} ${item.lens}`.toLowerCase();
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
      <p>${item.setup}</p>
      <div class="ticker-tags">
        <span>${item.sector}</span>
        <span>${item.lens}</span>
      </div>
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

    <section class="insight-hero">
      <div>
        <span>Core Takeaway</span>
        <h4>${item.setup}</h4>
        <p>${item.thesis}</p>
      </div>
      <aside>
        <span>Lens</span>
        <strong>${item.lens}</strong>
        <small>${item.timeHorizon}</small>
      </aside>
    </section>

    <div class="insight-grid">
      <article>
        <span>Business Engine</span>
        <p>${item.businessEngine}</p>
      </article>
      <article>
        <span>Market Debate</span>
        <p>${item.marketDebate}</p>
      </article>
      <article>
        <span>My Read</span>
        <p>${item.myRead}</p>
      </article>
      <article>
        <span>What I’m Watching</span>
        <p>${item.whatIWatch}</p>
      </article>
    </div>

    <div class="case-grid">
      <article>
        <span>Upside Case</span>
        <p>${item.upsideCase}</p>
      </article>
      <article>
        <span>Downside Case</span>
        <p>${item.downsideCase}</p>
      </article>
    </div>

    <div class="research-bottom">
      <section class="score-card">
        <span>Qualitative Scorecard</span>
        ${renderScoreBars(item.scorecard)}
      </section>
      <section class="question-card">
        <span>Questions I’d Keep Testing</span>
        <ul>${renderQuestionList(item.questions)}</ul>
      </section>
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
