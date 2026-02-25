import WorldMap from "../components/WorldMap";
import StatCard from "../components/StatCard";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border px-6 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center">
              <span className="text-primary-foreground text-sm font-bold">G</span>
            </div>
            <h1 className="text-lg font-semibold text-foreground">
              Globe<span className="text-primary">View</span>
            </h1>
          </div>
          <p className="text-mono text-xs text-muted-foreground tracking-wider uppercase">
            World Explorer
          </p>
        </div>
      </header>

      {/* Main */}
      <main className="mx-auto max-w-7xl px-6 py-10">
        {/* Hero */}
        <section className="mb-10 text-center">
          <h2 className="text-4xl font-bold text-foreground md:text-5xl">
            Explore the <span className="text-primary glow-text">World</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            A visual overview of our planet — 195 countries, 7 continents, and
            over 8 billion people connected across the globe.
          </p>
        </section>

        {/* Map */}
        <section className="mb-10">
          <WorldMap />
        </section>

        {/* Stats */}
        <section className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <StatCard label="Countries" value="195" />
          <StatCard label="Continents" value="7" />
          <StatCard label="Oceans" value="5" />
          <StatCard label="Population" value="8B+" />
        </section>

        {/* Continents */}
        <section className="mt-10">
          <h3 className="mb-4 text-xl font-semibold text-foreground">Continents</h3>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Asia", countries: 49, area: "44.6M km²" },
              { name: "Africa", countries: 54, area: "30.4M km²" },
              { name: "North America", countries: 23, area: "24.7M km²" },
              { name: "South America", countries: 12, area: "17.8M km²" },
              { name: "Europe", countries: 44, area: "10.2M km²" },
              { name: "Oceania", countries: 14, area: "8.5M km²" },
              { name: "Antarctica", countries: 0, area: "14.2M km²" },
            ].map((c) => (
              <div
                key={c.name}
                className="flex items-center justify-between rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary/40"
              >
                <span className="font-medium text-foreground">{c.name}</span>
                <div className="flex gap-4 text-mono text-xs text-muted-foreground">
                  <span>{c.countries} countries</span>
                  <span>{c.area}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-6 text-center text-xs text-muted-foreground">
        GlobeView — Explore our world
      </footer>
    </div>
  );
};

export default Index;
