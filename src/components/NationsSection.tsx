import { Card } from "@/components/ui/card";

export const NationsSection = () => {
  const countries = [
    { name: "Nigeria", flag: "🇳🇬" },
    { name: "South Africa", flag: "🇿🇦" },
    { name: "Ghana", flag: "🇬🇭" },
    { name: "Uganda", flag: "🇺🇬" },
    { name: "Tanzania", flag: "🇹🇿" },
    { name: "Ethiopia", flag: "🇪🇹" }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">African Nations</span> in BMA
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our community spans across the beautiful continent of Africa, representing diverse cultures, languages, and perspectives united by innovation and collaboration.
          </p>
        </div>

        {/* Countries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {countries.map((country, index) => (
            <Card 
              key={country.name}
              className="card-gradient p-6 border border-primary/20 shadow-card hover:shadow-glow transition-all duration-300 hover:scale-105 animate-fade-in text-center group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl mb-3 group-hover:animate-float">{country.flag}</div>
              <h3 className="font-semibold text-foreground">{country.name}</h3>
            </Card>
          ))}
        </div>

        {/* Join CTA */}
        <div className="text-center mt-16">
          <Card className="card-gradient p-8 border border-primary/20 shadow-glow inline-block animate-fade-in">
            <h3 className="text-2xl font-bold mb-4">
              Don't see your country? <span className="gradient-text">Join us!</span>
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              We're always looking to expand our pan-African community. Be the first from your nation to join BMA.
            </p>
            <div className="flex gap-4 justify-center">
              <span className="text-3xl">🌍</span>
              <span className="text-3xl">🤝</span>
              <span className="text-3xl">🚀</span>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};