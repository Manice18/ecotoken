"use client";
import dynamic from "next/dynamic";
import "./globals.css";

const WalletConnectionProvider = dynamic(
  () => import("../context/WalletConnectionProvider"),
  { ssr: false },
);
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <WalletConnectionProvider>{children}</WalletConnectionProvider>
      </body>
    </html>
  );
}
