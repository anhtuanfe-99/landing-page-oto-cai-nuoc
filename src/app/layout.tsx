import "~/styles/globals.css";

import type { Metadata } from "next";

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL &&
  process.env.NEXT_PUBLIC_BASE_URL.startsWith("http")
    ? process.env.NEXT_PUBLIC_BASE_URL
    : "https://example.com";

console.log("baseUrl: ", baseUrl);

export const metadata: Metadata = {
  title: "Xe Dịch Vụ Cái Nước - Đặt Xe 5-7 Chỗ Uy Tín | 0918.669.356",
  description:
    "Xe Dịch Vụ Cái Nước uy tín. Tài xế chuyên nghiệp, giá cả hợp lý, phục vụ 24/7. Đặt xe ngay: 0918.669.356",

  // Essential for performance
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Local SEO optimization
  openGraph: {
    title: "Xe Dịch Vụ Cái Nước - Đặt Xe 5-7 Chỗ Uy Tín",
    description:
      "Xe Dịch Vụ Cái Nước chuyên nghiệp . Tài xế kinh nghiệm, an toàn tuyệt đối, giá cả hợp lý. Phục vụ tận nơi 24/7 tại Cái Nước và các tỉnh lân cận.",
    url: baseUrl,
    type: "website",
    locale: "vi_VN",
    phoneNumbers: ["0918669356"],
    siteName: "Xe Dịch Vụ Cái Nước",
    images: [
      {
        url: "/vf-5-banner.png", // Use WebP for better performance
        width: 1200,
        height: 630,
        alt: "Xe dịch vụ Cái Nước",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Xe Dịch Vụ Cái Nước - Đặt Xe 5-7 Chỗ",
    description:
      "Xe Dịch Vụ Cái Nước. Tài xế chuyên nghiệp, an toàn, giá hợp lý. Gọi ngay: 0918.669.356",
    images: [
      {
        url: "/vf-5-banner.png", // Use WebP for better performance
        width: 1200,
        height: 630,
        alt: "Xe dịch vụ Cái Nước",
      },
    ],
  },

  //   // Performance optimization
  icons: [
    { rel: "icon", url: "/favicon.ico" },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon-32x32.png",
      // TODO
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon-16x16.png",
    },
  ],

  // Mobile optimization
  appleWebApp: {
    title: "Xe Dịch Vụ Cái Nước",
    statusBarStyle: "default",
    capable: true,
  },

  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },

  // Local SEO and service-specific keywords
  keywords: [
    // Primary service keywords
    "xe dịch vụ Cái Nước",
    "đặt xe Cái Nước",
    "xe du lịch Cái Nước",

    // Vehicle-specific keywords
    "xe 5 chỗ Cái Nước",
    "xe 7 chỗ Cái Nước",

    // Local area keywords
    "xe dịch vụ Cà Mau",
    "taxi Cà Mau",
    "xe du lịch miền Tây",
    "dịch vụ xe Đồng bằng sông Cửu Long",

    // Service-specific long-tail keywords
    "thuê xe tự lái Cái Nước",
    "xe đưa đón sân bay Cà Mau",
    "dịch vụ xe uy tín Cái Nước",
    "tài xế chuyên nghiệp Cái Nước",
    "xe giá rẻ Cái Nước",
    "đặt xe 24/7 Cái Nước",

    // Nearby locations
    "xe dịch vụ Năm Căn",
    "xe dịch vụ Ngọc Hiển",
    "xe dịch vụ Đầm Dơi",
    "xe dịch vụ U Minh",
    "xe dịch vụ Thới Bình",

    // Business type keywords
    "công ty xe dịch vụ Cái Nước",
    "doanh nghiệp vận tải Cái Nước",
    "dịch vụ vận chuyển Cái Nước",
  ],

  // Structured data hints for search engines
  other: {
    "business:contact_data:phone_number": "0918669356",
    "business:contact_data:locality": "Cái Nước",
    "business:contact_data:region": "Cà Mau",
    "business:contact_data:country_name": "Vietnam",
    "og:business:hours": "24/7",
    "article:author": "Xe Dịch Vụ Cái Nước",
  },

  // Performance optimization
  metadataBase: new URL(baseUrl),

  // Verification (add these when you set up Google Search Console)
  verification: {
    // google: "your-google-verification-code",
    // bing: "your-bing-verification-code",
  },

  // Language and region
  alternates: {
    canonical: baseUrl,
    languages: {
      "vi-VN": baseUrl,
    },
  },
};
import { Inter } from "next/font/google";
import { log } from "console";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.className}`}>
      <body>{children}</body>
    </html>
  );
}
