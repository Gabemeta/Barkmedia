import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const dist = join(dirname(fileURLToPath(import.meta.url)), "..", "dist");
const template = readFileSync(join(dist, "index.html"), "utf8");

const pages = [
  {
    path: "/",
    title: "Bark Media Africa - Premier African Crypto & Web3 Community | barkmediaafrica.com",
    description:
      "Bark Media Africa (BMA) is the leading African crypto community connecting 6 nations and 250+ members. Expert Web3 onboarding, social media management, and monetization services across Africa.",
  },
  {
    path: "/merchandise",
    title: "BMA Merchandise Store | Bark Media Africa",
    description:
      "Shop Bark Media Africa merchandise: hoodies, shirts, caps, and accessories for the African crypto and Web3 community.",
  },
  {
    path: "/possibilities",
    title: "Infinite Possibilities | Bark Media Africa",
    description:
      "Explore Bark Media Africa's future: headquarters, Web3 partnerships, and the next chapter of African blockchain community building.",
  },
  {
    path: "/space-hosts",
    title: "BMA Space Hosts | Bark Media Africa",
    description:
      "Meet Bark Media Africa space hosts leading African Web3 conversations on X. Join live spaces across the BMA community.",
  },
  {
    path: "/books",
    title: "Community Books | Bark Media Africa",
    description:
      "Discover books written by Bark Media Africa community members. Support African authors in crypto, mindset, and Web3.",
  },
];

function applyMeta(html, page) {
  const url = `https://barkmediaafrica.com${page.path === "/" ? "/" : `${page.path}/`}`;
  const ogTitle = page.title.replace(" | barkmediaafrica.com", "");
  return html
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${page.title}</title>`)
    .replace(/<meta name="title" content="[^"]*" \/>/, `<meta name="title" content="${page.title}" />`)
    .replace(/<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${page.description}" />`)
    .replace(/<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${url}" />`)
    .replace(/<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${url}" />`)
    .replace(/<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${ogTitle}" />`)
    .replace(
      /<meta property="og:description" content="[^"]*" \/>/,
      `<meta property="og:description" content="${page.description}" />`,
    )
    .replace(/<meta name="twitter:url" content="[^"]*" \/>/, `<meta name="twitter:url" content="${url}" />`)
    .replace(/<meta name="twitter:title" content="[^"]*" \/>/, `<meta name="twitter:title" content="${ogTitle}" />`)
    .replace(
      /<meta name="twitter:description" content="[^"]*" \/>/,
      `<meta name="twitter:description" content="${page.description}" />`,
    );
}

for (const page of pages) {
  const html = applyMeta(template, page);
  if (page.path === "/") {
    writeFileSync(join(dist, "index.html"), html);
    continue;
  }
  const dir = join(dist, page.path.slice(1));
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "index.html"), html);
}

copyFileSync(join(dist, "index.html"), join(dist, "404.html"));
console.log(`Prepared ${pages.length} indexable pages in dist/`);
