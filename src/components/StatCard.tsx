const StatCard = ({ label, value }: { label: string; value: string }) => {
  return (
    <div className="rounded-lg border border-border bg-card p-4 text-center">
      <p className="text-2xl font-semibold text-primary glow-text">{value}</p>
      <p className="mt-1 text-sm text-muted-foreground">{label}</p>
    </div>
  );
};

export default StatCard;
