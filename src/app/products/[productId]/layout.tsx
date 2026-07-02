export default function ProductLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <main>{children}</main>
      <p>Featured Products</p>
    </div>
  );
}

