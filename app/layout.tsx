export const metadata = {
  title: "Next + Bun Starter",
  description: "Deterministic scaffold",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
