import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "../components/sidebar";

export const metadata: Metadata = {
  title: "Aruma BOA — Business Operations, made simpler",
  description:
    "Manage your products, inventory, production, finances and business operations in one workspace.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="md:flex">
          <Sidebar />
          <div className="min-w-0 flex-1 pb-20 md:pb-0">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}