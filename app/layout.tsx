import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/ThemeProvider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://masterfix.tr"),
  title: "MasterFix - Profesyonel Apple Cihaz Onarım Hizmetleri | iPhone iPad MacBook Tamiri",
  description:
    "İzmir'de iPhone, iPad ve MacBook onarım hizmetleri. Ekran değişimi, batarya değişimi, anakart onarımı. Hızlı, güvenilir ve profesyonel Apple cihaz tamiri. Aynı gün servis garantisi.",
  keywords:
    "iphone onarım, ipad onarım, macbook onarım, ekran değişimi, batarya değişimi, anakart onarımı, apple servis, cep telefonu tamiri, izmir teknik servis, apple teknik servis",
  authors: [{ name: "MasterFix Teknik Servis", url: "https://masterfix.tr" }],
  creator: "MasterFix Teknik Servis",
  publisher: "MasterFix Teknik Servis",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "MasterFix - Profesyonel Apple Cihaz Onarım Hizmetleri",
    description:
      "İzmir'de iPhone, iPad ve MacBook onarım hizmetleri. Profesyonel ve güvenilir çözümler. Aynı gün servis garantisi.",
    url: "https://masterfix.tr",
    siteName: "MasterFix Teknik Servis",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MasterFix Teknik Servis - Apple Cihaz Onarım Hizmetleri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MasterFix - Profesyonel Apple Cihaz Onarım Hizmetleri",
    description: "İzmir'de iPhone, iPad ve MacBook onarım hizmetleri. Aynı gün servis garantisi.",
    images: ["/twitter-image.jpg"],
    creator: "@masterfixizmir",
    site: "@masterfixizmir",
  },
  alternates: {
    canonical: "https://masterfix.tr",
    languages: {
      "tr-TR": "https://masterfix.tr",
    },
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
  },
  generator: "Next.js",
  applicationName: "MasterFix Teknik Servis",
  referrer: "origin-when-cross-origin",
  category: "technology",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#059669" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="MasterFix" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="alternate" hrefLang="tr-TR" href="https://masterfix.tr" />
        <meta name="geo.region" content="TR-35" />
        <meta name="geo.placename" content="İzmir" />
      </head>
      <body className={inter.className} suppressHydrationWarning itemScope itemType="https://schema.org/WebPage">
        <ThemeProvider>{children}</ThemeProvider>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js')
                    .then(function(registration) {
                      console.log('SW registered: ', registration);
                    })
                    .catch(function(registrationError) {
                      console.log('SW registration failed: ', registrationError);
                    });
                });
              }
            `,
          }}
        />
      </body>
    </html>
  )
}
