import { Link } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/possibilities", label: "Possibilities" },
  { to: "/merchandise", label: "Merchandise" },
  { to: "/space-hosts", label: "Space Hosts" },
  { to: "/books", label: "Community Books" },
];

export const SiteFooter = () => (
  <footer className="border-t border-border/40 py-10 px-4">
    <nav aria-label="Site pages" className="max-w-4xl mx-auto flex flex-wrap justify-center gap-x-6 gap-y-3">
      {links.map((link) => (
        <Link
          key={link.to}
          to={link.to}
          className="text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          {link.label}
        </Link>
      ))}
    </nav>
    <p className="mt-6 text-center text-xs text-muted-foreground">
      © {new Date().getFullYear()} Bark Media Africa
    </p>
  </footer>
);
