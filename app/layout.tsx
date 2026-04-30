import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "ArcPay",
  description: "Send, receive, and shop with USDC on Arc Testnet",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-zinc-950 text-white">
        <Providers>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
