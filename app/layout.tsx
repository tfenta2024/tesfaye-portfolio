import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tesfaye Fenta | Computer Science Researcher",
  description:
    "Academic portfolio of Tesfaye Fenta, a Computer Science lecturer and PhD researcher specializing in recommendation systems, deep learning, machine learning, and large language models.",
  authors: [
    {
      name: "Tesfaye Fenta",
    },
  ],
  creator: "Tesfaye Fenta",
  keywords: [
    "Tesfaye Fenta",
    "Computer Science",
    "Recommendation Systems",
    "Sequential Recommendation",
    "Cross-Domain Recommendation",
    "Machine Learning",
    "Deep Learning",
    "Large Language Models",
    "Artificial Intelligence",
    "Bule Hora University",
    "Beijing Institute of Technology",
  ],
  openGraph: {
    title: "Tesfaye Fenta | Computer Science Researcher",
    description:
      "Research, publications, academic experience, technical skills, and projects in recommendation systems and artificial intelligence.",
    type: "website",
    locale: "en_US",
    siteName: "Tesfaye Fenta Academic Portfolio",
  },
  twitter: {
    card: "summary",
    title: "Tesfaye Fenta | Computer Science Researcher",
    description:
               "Academic portfolio of Tesfaye Fenta, a Computer Science lecturer and PhD candidate specializing in recommendation systems, deep learning, machine learning, and large language models.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
