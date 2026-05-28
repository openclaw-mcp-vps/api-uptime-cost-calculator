import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "API Uptime Cost Calculator — Calculate Revenue Lost from Downtime",
  description:
    "Track API uptime and calculate lost revenue based on traffic patterns, conversion rates, and downtime duration. Built for SaaS founders, DevOps teams, and CTOs."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          defer
          src="https://umami.microtool.dev/script.js"
          data-website-id="f49884c0-d625-432c-baee-c3d0c7e3ef1e"
        />
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
