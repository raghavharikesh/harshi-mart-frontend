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
      <body>
        <ReduxProvider>
          {children}

          <Toaster position="top-right" />
        </ReduxProvider>
      </body>
    </html>
  );
}