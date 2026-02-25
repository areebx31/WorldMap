const WorldMap = () => {
  return (
    <div className="relative w-full overflow-hidden rounded-lg border border-border glow-primary">
      <div className="map-grid-bg absolute inset-0 pointer-events-none z-10 opacity-40" />
      <img
        src="/images/world-map.svg"
        alt="World map showing all continents and countries"
        className="w-full h-auto block"
        style={{
          filter:
            "invert(40%) sepia(30%) saturate(600%) hue-rotate(130deg) brightness(90%)",
        }}
      />
    </div>
  );
};

export default WorldMap;
