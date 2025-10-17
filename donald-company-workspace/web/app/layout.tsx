import type { Metadata } from "next";
import "./globals.css";
import { COMPANY_NAME, TAGLINE } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${COMPANY_NAME} - ${TAGLINE}`,
  description: "Eliminate manufacturing defects through real-time causal backtrace and adaptive process control. WDBX + Abi for smart manufacturing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
