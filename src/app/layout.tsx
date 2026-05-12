import "./globals.css";

import ReduxProvider from "@/redux/provider";

import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Harshi Mart",
  description: "Modern E-Commerce Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=DM+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ReduxProvider>
          {children}

          <Toaster position="top-right" />
        </ReduxProvider>
      </body>
    </html>
  );
}