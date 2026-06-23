import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Chloe's Tutoring | Personalised Primary Tutoring on the Gold Coast",
  description: "Qualified primary school teacher offering personalised 1-on-1 and small-group tutoring for Prep to Year 6 on the Gold Coast and surrounds. Build confidence, master fundamentals, and love learning with tailored support aligned to the Queensland Curriculum.",
  keywords: [
    "primary tutoring Gold Coast",
    "Gold Coast tutor",
    "Prep to Year 6 tutor",
    "private tutor Queensland",
    "NAPLAN preparation Gold Coast",
    "literacy numeracy support Gold Coast",
    "primary school teacher tutor",
    "personalised tutoring SEQ",
    "homework help Gold Coast",
  ],
  authors: [{ name: "Chloe" }],
  openGraph: {
    title: "Chloe's Tutoring | Personalised Primary Tutoring on the Gold Coast",
    description: "Qualified primary teacher helping local children in Prep–Year 6 build confidence and succeed. In-person on the Gold Coast and surrounds, plus online options.",
    images: [{ url: "/images/hero.jpg" }],
    locale: "en_AU",
    siteName: "Chloe's Tutoring",
  },
  metadataBase: new URL('https://chloes-tutoring-ike5k3aek-fun11.vercel.app'),
  alternates: {
    canonical: 'https://chloes-tutoring-ike5k3aek-fun11.vercel.app',
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
