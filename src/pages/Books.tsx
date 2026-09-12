import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";
import bookCover from "@/assets/book-cover-weed.jpg";
import bmaLogo from "@/assets/bma-logo-optimized.jpg";

const Books = () => {
  const navigate = useNavigate();

  const books = [
    {
      id: 1,
      title: "You Can't Smoke Weed and Be Successful",
      author: "Pascal",
      authorTwitter: "@PascalmetaX",
      price: "$7",
      originalPrice: "$10",
      cover: bookCover,
      description: "Get an e-copy for just $7. Send a DM to Pascal on X!",
    },
  ];

  const handleOrder = (authorTwitter: string) => {
    const twitterHandle = authorTwitter.replace("@", "");
    window.open(`https://twitter.com/messages/compose?recipient_id=${twitterHandle}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Button variant="ghost" size="sm" onClick={() => navigate("/")} className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
          <img src={bmaLogo} alt="BMA Logo" className="h-12 object-contain" />
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Community Books</h1>
          <p className="text-lg text-muted-foreground">
            Discover books written by our community members. Support African authors and expand your knowledge.
          </p>
        </div>
      </section>

      {/* Books Grid */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {books.map((book) => (
              <Card key={book.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-[3/4] overflow-hidden bg-muted">
                  <img src={book.cover} alt={book.title} className="w-full h-full object-cover" />
                </div>
                <CardHeader>
                  <CardTitle className="line-clamp-2">{book.title}</CardTitle>
                  <CardDescription>
                    by {book.author} ({book.authorTwitter})
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{book.description}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-primary">{book.price}</span>
                    <span className="text-sm text-muted-foreground line-through">{book.originalPrice}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button onClick={() => handleOrder(book.authorTwitter)} className="w-full gap-2">
                    Order Now
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">More Books Coming Soon</h2>
          <p className="text-muted-foreground">
            We're working with more community members to bring you inspiring content. Check back soon!
          </p>
        </div>
      </section>
    </div>
  );
};

export default Books;
