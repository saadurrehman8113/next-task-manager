import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Tasks",
  description: "A small task manager built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900 antialiased">
        <header className="sticky top-0 z-10 border-b border-gray-200 bg-white/80 backdrop-blur">
          <nav className="mx-auto flex max-w-2xl items-center gap-6 px-6 py-4">
            <Link
              href="/"
              className="text-sm font-semibold tracking-tight text-gray-900"
            >
              Home
            </Link>
            <Link
              href="/tasks"
              className="text-sm font-medium text-gray-500 transition-colors hover:text-gray-900"
            >
              Tasks
            </Link>
          </nav>
        </header>
        <main className="mx-auto max-w-2xl px-6 py-10">{children}</main>
      </body>
    </html>
  );
}
