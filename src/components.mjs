import { navItems, sceneShots } from "./data.mjs";

function cardShot(program) {
  return sceneShots[(program.sequence || 0) % sceneShots.length];
}

export function money(value) {
  if (value === null || value === undefined) return "—";
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

export function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export function icon(name) {
  return `<span class="material-symbols-outlined">${name}</span>`;
}

export function statusLabel(status) {
  return status === "Active" ? "Enrolling Now" : "Coming Soon";
}

export function topNav(active = "home", mode = "full") {
  const links = navItems
    .map((item) => {
      const isActive = item.keys.includes(active);
      return `<a class="${isActive ? "active" : ""}" href="${item.href}">${item.label}</a>`;
    })
    .join("");

  return `
    <header class="top-shell ${mode === "checkout" ? "checkout-shell" : ""}">
      <nav class="top-nav">
        <a class="brand" href="/">Bot That Lyfe<span class="brand-dot">_</span></a>
        ${
          mode === "checkout"
            ? `<span class="secure-dot"><i></i>Secure Checkout</span>`
            : `<div class="nav-links" data-mobile-menu>${links}</div>`
        }
        <div class="nav-actions">
          ${mode === "checkout" ? "" : `<button class="mobile-menu-toggle" type="button" aria-label="Open navigation" aria-expanded="false" data-mobile-menu-toggle>${icon("menu")}</button>`}
          <button class="theme-toggle" aria-label="Toggle dark mode" data-theme-toggle>${icon("dark_mode")}</button>
          ${mode === "checkout" ? "" : `<a class="nav-cta" href="/work-with-us">Work With Us</a>`}
        </div>
      </nav>
    </header>
  `;
}

export function footer() {
  return `
    <footer class="site-footer">
      <div class="footer-grid">
        <div>
          <strong>Bot That Lyfe<span class="brand-dot">_</span></strong>
          <p>Nathan Baker's technical opportunity intelligence practice — tracking funding, research, people, and jobs across a network of U.S. universities at the intersection of computer science, agentic AI, and engineering — and publishing it free.</p>
        </div>
        <div><h5><a href="/research-and-case-studies">Research &amp; Case Studies</a></h5></div>
        <div><h5><a href="/courses">Free Courses</a></h5></div>
        <div><ul><li><a href="/work-with-us">Work With Us</a></li><li><a href="/about">About Nathan</a></li></ul></div>
      </div>
      <div class="footer-bottom">
        <span>&copy; 2026 Bot That Lyfe. Independent technical opportunity intelligence, published free.</span>
      </div>
    </footer>
  `;
}

const SITE_NAME = "Bot That Lyfe";
const SITE_URL = "https://botthatlyfe.com";
const DEFAULT_OG_IMAGE = "/assets/og/default.jpg";
const DEFAULT_DESCRIPTION =
  "Bot That Lyfe tracks funding, research, people, technology, and jobs across a network of U.S. universities — the agentic AI frontier, the university research economy, and the path from classwork to a career — researched, sourced, and published free by Nathan Baker.";

function absoluteUrl(value = "/") {
  if (/^https?:\/\//.test(value)) return value;
  return `${SITE_URL}${value.startsWith("/") ? value : `/${value}`}`;
}

function jsonLd(data) {
  return `<script type="application/ld+json">${JSON.stringify(data).replaceAll("</", "<\\/")}</script>`;
}

export function pageShell({
  title,
  active,
  body,
  mode = "full",
  ogImage = DEFAULT_OG_IMAGE,
  description = DEFAULT_DESCRIPTION,
  ogTitle = title,
  ogDescription = description,
  canonicalPath = "/",
  robots = "index,follow",
  structuredData = [],
}) {
  const canonicalUrl = absoluteUrl(canonicalPath);
  const baseStructuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Bot That Lyfe",
      "url": SITE_URL,
      "logo": absoluteUrl("/assets/brand/logo.png"),
      "founder": {
        "@type": "Person",
        "name": "Nathan Baker",
        "jobTitle": "Founder, Bot That Lyfe",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Bot That Lyfe",
      "url": SITE_URL,
      "description": DEFAULT_DESCRIPTION,
    },
  ];

  return `<!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>${title}</title>
        <meta name="description" content="${escapeHtml(description)}" />
        <meta name="robots" content="${escapeHtml(robots)}" />
        <link rel="canonical" href="${canonicalUrl}" />
        <link rel="icon" href="/assets/brand/favicon.ico" />
        <link rel="apple-touch-icon" href="/assets/brand/logo.png" />
        <meta property="og:title" content="${escapeHtml(ogTitle)}" />
        <meta property="og:description" content="${escapeHtml(ogDescription)}" />
        <meta property="og:url" content="${canonicalUrl}" />
        <meta property="og:image" content="${absoluteUrl(ogImage)}" />
        <meta property="og:site_name" content="${SITE_NAME}" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="${escapeHtml(ogTitle)}" />
        <meta name="twitter:description" content="${escapeHtml(ogDescription)}" />
        <meta name="twitter:image" content="${absoluteUrl(ogImage)}" />
        ${[...baseStructuredData, ...structuredData].map((item) => jsonLd(item)).join("\n        ")}
        <script>
          (function () {
            var stored = localStorage.getItem("anai-theme");
            var theme = stored || "light";
            document.documentElement.setAttribute("data-theme", theme);
          })();
        </script>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,420..680&family=Space+Grotesk:wght@500;700;800&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@500;600;700&family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        ${topNav(active, mode)}
        ${body}
        ${mode === "checkout" ? "" : footer()}
        <script type="module" src="/app.js"></script>
      </body>
    </html>`;
}

export function programCard(program) {
  const cheapest = program.offerings?.[0];
  const available = program.status === "Active";

  return `
    <article class="market-card ${available ? "" : "coming-soon"}">
      <a class="card-media" href="/programs/${program.handle}">
        <img src="${cardShot(program)}" alt="${escapeHtml(program.name)}" />
        <span class="card-badge">${escapeHtml(program.badge)}</span>
        <span class="card-price">${cheapest ? money(cheapest.price) : "TBD"}</span>
      </a>
      <div class="card-body">
        <div class="card-title-row">
          <span class="program-sequence">Cohort Program</span>
          <span class="status-pill ${available ? "live" : ""}">${statusLabel(program.status)}</span>
        </div>
        <h3>${escapeHtml(program.name)}</h3>
        <p>${escapeHtml(program.description)}</p>
        <div class="card-meta">
          <span>${icon("calendar_month")} ${program.durationWeeks || 2} weeks</span>
          <b>${escapeHtml(program.badge)}</b>
        </div>
      </div>
    </article>
  `;
}

export function offeringCard(offering, program) {
  return `
    <article class="offering-card">
      <span class="kicker">${escapeHtml(offering.deliveryType)}</span>
      <h3>${money(offering.price)}<small>${escapeHtml(offering.priceUnit || "")}</small></h3>
      <p>${escapeHtml(offering.meetingFrequency || "")}</p>
      ${offering.capacity ? `<p class="offering-capacity">${icon("group")} Capped at ${offering.capacity} students</p>` : ""}
      <a class="primary-button full" href="/checkout?program=${program.handle}&offering=${offering.id}">Reserve Seat &mdash; ${escapeHtml(offering.deliveryType)}</a>
    </article>
  `;
}
