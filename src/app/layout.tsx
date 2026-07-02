import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  // title: "My App",
  title: {
    default: "My App",
    template: "%s | My App",
    absolute: "",
  },
  description: "Next.js app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header style={{ padding: "1rem", backgroundColor: "#adafcf" }}>
          Header
        </header>

        {children}

        <footer style={{ padding: "1rem", backgroundColor: "#f0f0f0" }}>
          Footer
        </footer>
      </body>
    </html>
  );
}
