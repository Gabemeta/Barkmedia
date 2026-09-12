import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

export const CommunityBooksSection = () => {
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 mb-6">
          <BookOpen className="h-5 w-5 text-primary" />
          <span className="text-sm font-medium">Community Resources</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Community Books
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Discover inspiring books written by our community members. Support African authors and expand your knowledge.
        </p>
        <Button asChild variant="default" size="lg" className="text-lg px-8 py-6">
          <Link to="/books">
            <BookOpen className="mr-2 h-5 w-5" />
            Browse Books
          </Link>
        </Button>
      </div>
    </section>
  );
};
