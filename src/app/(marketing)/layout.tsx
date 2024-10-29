export default async function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="p-10">
      Website Layout
      {children}
    </section>
  );
}
