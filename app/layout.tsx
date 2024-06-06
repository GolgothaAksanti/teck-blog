"use client";

import { RecoilRoot, useRecoilValue } from "recoil";
import { Raleway } from "next/font/google";

import "./globals.css";
import Topbar from "@components/Topbar";
import Footer from "@components/Footer";
import Sidebar from "@components/Sidebar";

const raleway = Raleway({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RecoilRoot>
      <html lang="en" suppressHydrationWarning={true}>
        <body className={raleway.className}>
          <div className="relative">
          <Sidebar />
          <Topbar />
          {children}
          <Footer />
          </div>
        </body>
      </html>
    </RecoilRoot>
  );
}
