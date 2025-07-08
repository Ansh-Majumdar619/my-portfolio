import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout"; // Import client-side wrapper

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ansh Majumdar",
  description: "Full Stack Developer",
  icons: {
    icon: "/ansh-logo.png",
    shortcut: "/ansh-logo.png",
    apple: "/ansh-logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/ansh-logo.png" type="image/png" sizes="32x32" />
      </head>
      <body className={inter.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
