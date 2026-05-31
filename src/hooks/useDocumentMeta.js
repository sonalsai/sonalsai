import { useEffect } from "react";

const SITE_URL = "https://www.sonalsai.site";

/**
 * Upsert a <meta> tag in <head> (updates the existing tag rather than
 * appending a duplicate). `selector` finds it; `attr`/`attrValue` create it.
 */
const upsertMeta = (selector, attr, attrValue, content) => {
  if (!content) return;
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, attrValue);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const upsertLink = (rel, href) => {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
};

/**
 * Per-route <head> management for the SPA (zero-dependency).
 *
 * Sets the document title, meta description, canonical link, and the Open
 * Graph / Twitter title/description/url for the current route. Because both
 * routes call this, the tags are always rewritten to the active route's
 * values — no duplicates, no stale homepage metadata on /about.
 *
 * Note: this runs client-side. Googlebot renders JS so it sees these values;
 * non-JS social scrapers read the static index.html defaults. For fully
 * pre-rendered per-route HTML, add SSG (see the SEO notes).
 */
export const useDocumentMeta = ({ title, description, path = "/" }) => {
  useEffect(() => {
    const url = `${SITE_URL}${path}`;

    if (title) {
      document.title = title;
      upsertMeta('meta[property="og:title"]', "property", "og:title", title);
      upsertMeta('meta[name="twitter:title"]', "name", "twitter:title", title);
    }

    if (description) {
      upsertMeta('meta[name="description"]', "name", "description", description);
      upsertMeta('meta[property="og:description"]', "property", "og:description", description);
      upsertMeta('meta[name="twitter:description"]', "name", "twitter:description", description);
    }

    upsertLink("canonical", url);
    upsertMeta('meta[property="og:url"]', "property", "og:url", url);
    upsertMeta('meta[name="twitter:url"]', "name", "twitter:url", url);
  }, [title, description, path]);
};
