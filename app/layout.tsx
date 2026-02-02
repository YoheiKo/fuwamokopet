// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://fuwamokopet.vercel.app/"), // ←本番ドメインに変更
  title: {
    default: "ふわもこペットマンガ館｜うちの子の可愛さをマンガに",
    template: "%s｜ふわもこペットマンガ館",
  },
  description:
    "スマホの中の写真やエピソードを、ふわっと優しいタッチの6コマ／12コママンガに。写真がなくてもOK。SNS投稿・アイコンにもぴったり。",
  keywords: [
    "ペット",
    "犬",
    "猫",
    "マンガ",
    "4コマ",
    "6コマ",
    "12コマ",
    "イラスト",
    "オーダーメイド",
    "似顔絵",
    "SNSアイコン",
    "思い出",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },

  icons: {
    icon: "/fuwamokoicon.png",
    shortcut: "/fuwamokoicon.png",
    apple: "/fuwamokoicon.png",
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "/",
    siteName: "ふわもこペットマンガ館",
    title: "ふわもこペットマンガ館｜うちの子の可愛さをマンガに",
    description:
      "スマホの中の写真やエピソードを、ふわっと優しいタッチの6コマ／12コママンガに。写真がなくてもOK。SNS投稿・アイコンにもぴったり。",
    images: [
      {
        url: "/fuwamako_eye.jpg",
        width: 1200,
        height: 630,
        alt: "ふわもこペットマンガ館｜オーダーメイドペットマンガ",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "ふわもこペットマンガ館｜うちの子の可愛さをマンガに",
    description:
      "スマホの中の写真やエピソードを、ふわっと優しいタッチの6コマ／12コママンガに。写真がなくてもOK。",
    images: ["/fuwamako_eye.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17164768183"
          strategy="afterInteractive"
        />
        <Script id="google-ads-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17164768183');
          `}
        </Script>
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}



// // app/layout.tsx
// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";

// const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
// const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

// export const metadata: Metadata = {
//   metadataBase: new URL("https://fuwamokopet.vercel.app/"), // ←本番ドメインに変更
//   title: {
//     default: "ふわもこペットマンガ館｜うちの子の可愛さをマンガに",
//     template: "%s｜ふわもこペットマンガ館",
//   },
//   description:
//     "スマホの中の写真やエピソードを、ふわっと優しいタッチの6コマ／12コママンガに。写真がなくてもOK。SNS投稿・アイコンにもぴったり。",
//   keywords: [
//     "ペット",
//     "犬",
//     "猫",
//     "マンガ",
//     "4コマ",
//     "6コマ",
//     "12コマ",
//     "イラスト",
//     "オーダーメイド",
//     "似顔絵",
//     "SNSアイコン",
//     "思い出",
//   ],
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: { index: true, follow: true },
//   },

//   // favicon（あなたの public 配下にあるもの）
//   icons: {
//     icon: "/fuwamokoicon.png",     // あるなら png 推奨
//     shortcut: "/fuwamokoicon.png",
//     apple: "/fuwamokoicon.png",
//   },

//   alternates: {
//     canonical: "/", // metadataBase + "/" になる（= https://example.com/）
//   },

//   openGraph: {
//     type: "website",
//     locale: "ja_JP",
//     url: "/", // metadataBase基準
//     siteName: "ふわもこペットマンガ館",
//     title: "ふわもこペットマンガ館｜うちの子の可愛さをマンガに",
//     description:
//       "スマホの中の写真やエピソードを、ふわっと優しいタッチの6コマ／12コママンガに。写真がなくてもOK。SNS投稿・アイコンにもぴったり。",
//     images: [
//       {
//         url: "/fuwamako_eye.jpg", // public/og-fuwamoko.jpg を用意
//         width: 1200,
//         height: 630,
//         alt: "ふわもこペットマンガ館｜オーダーメイドペットマンガ",
//       },
//     ],
//   },

//   twitter: {
//     card: "summary_large_image",
//     title: "ふわもこペットマンガ館｜うちの子の可愛さをマンガに",
//     description:
//       "スマホの中の写真やエピソードを、ふわっと優しいタッチの6コマ／12コママンガに。写真がなくてもOK。",
//     images: ["/fuwamako_eye.jpg"],
//   },
// };

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="ja">
//       <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
//         {children}
//       </body>
//     </html>
//   );
// }
