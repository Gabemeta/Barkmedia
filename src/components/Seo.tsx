import { useEffect } from "react";

type SeoProps = {
  title: string;
  description: string;
  path: string;
};

export const Seo = ({ title, description, path }: SeoProps) => {
  useEffect(() => {
    const url = `https://barkmediaafrica.com${path === "/" ? "/" : path.replace(/\/?$/, "/")}`;
    document.title = title;

    const setMeta = (selector: string, attr: "content" | "href", value: string) => {
      const el = document.querySelector(selector);
      if (el) el.setAttribute(attr, value);
    };

    setMeta('meta[name="title"]', "content", title);
    setMeta('meta[name="description"]', "content", description);
    setMeta('link[rel="canonical"]', "href", url);
    setMeta('meta[property="og:url"]', "content", url);
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[name="twitter:url"]', "content", url);
    setMeta('meta[name="twitter:title"]', "content", title);
    setMeta('meta[name="twitter:description"]', "content", description);
  }, [title, description, path]);

  return null;
};
