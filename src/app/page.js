"use client";

import "./globals.css";
import "./themes.css";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";

export default function RootLayout({ children }) {


  return (
    <><ThemeToggle/>
      <h1 className="
        text-4xl
        font-bold
        text-center
        py-8
        bg-gradient-to-r
        from-blue-500
        to-green-400
        bg-clip-text
      ">MooSMP Logo Gallery</h1>



      <main className="flex-grow">
        <Gallery />
        {children}
      </main>

      <Footer />
    </>
  );
}
