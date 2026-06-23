import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Chloe's Tutoring | Personalised Primary Tutoring in Mudgeeraba",
  description: "Qualified primary school teacher offering personalised 1-on-1 and small-group tutoring for Prep to Year 6 in Mudgeeraba and the Gold Coast hinterland. Build confidence, master fundamentals, and love learning with tailored support aligned to the Queensland Curriculum.",
  keywords: [
    "primary tutoring Mudgeeraba",
    "Gold Coast tutor",
    "Prep to Year 6 tutor",
    "private tutor Queensland",
    "NAPLAN preparation Gold Coast",
    "literacy numeracy support Mudgeeraba",
    "primary school teacher tutor",
    "personalised tutoring SEQ",
    "homework help Gold Coast hinterland",
  ],
  authors: [{ name: "Chloe" }],
  openGraph: {
    title: "Chloe's Tutoring | Personalised Primary Tutoring in Mudgeeraba",
    description: "Qualified primary teacher helping local children in Prep–Year 6 build confidence and succeed. In-person in Mudgeeraba & surrounds, plus online options.",
    images: [{ url: "/images/hero.jpg" }],
    locale: "en_AU",
    siteName: "Chloe's Tutoring",
  },
  alternates: {
    // TODO: Update this to your real domain once deployed (e.g. https://chloestutoring.com.au or your Vercel URL)
    canonical: "https://chloestutoring.example.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-warm-ivory text-text-dark">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
