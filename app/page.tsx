// app/page.tsx
"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { M_PLUS_Rounded_1c } from "next/font/google";
import {
  PawPrint,
  Cat,
  Dog,
  ImageOff,
  Smartphone,
  Heart,
  Check,
  Instagram,
  Twitter,
} from "lucide-react";

const mplus = M_PLUS_Rounded_1c({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  display: "swap",
});

export default function Page() {
  return (
    <div className={`${mplus.className} text-[#5d4037] bg-orange-50/30`}>
      {/* original CSS equivalents */}
      <style jsx global>{`
        .bg-pattern {
          background-color: #fff5f5;
          background-image: radial-gradient(#ffe4e6 1px, transparent 1px);
          background-size: 20px 20px;
        }
        .hand-drawn-border {
          border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px;
        }
        .marker-highlight {
          background: linear-gradient(transparent 60%, #ffecd1 60%);
        }
      `}</style>

      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm fixed w-full top-0 z-50 shadow-sm border-b border-orange-100">
        <div className="max-w-4xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <PawPrint className="text-orange-400" fill="currentColor" />
            <h1 className="font-bold text-lg md:text-xl text-stone-600">
              ふわもこペットマンガ館
            </h1>
          </div>

          <Link
            href="#contact"
            className="bg-orange-400 hover:bg-orange-500 text-white text-sm font-bold py-2 px-4 rounded-full transition duration-300 shadow-md transform hover:scale-105"
          >
            作成を依頼する
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-20 bg-pattern text-center px-4 overflow-hidden relative">
        <div className="absolute top-20 left-10 text-orange-200 opacity-50 transform -rotate-12">
          <Cat size={80} />
        </div>
        <div className="absolute bottom-10 right-10 text-pink-200 opacity-50 transform rotate-12">
          <Dog size={80} />
        </div>

        <div className="max-w-2xl mx-auto relative z-10">
          <span className="inline-block bg-white border border-orange-200 text-orange-500 px-4 py-1 rounded-full text-sm font-bold mb-4 shadow-sm transform -rotate-2">
            スマホの中の写真を、物語に。
          </span>

          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6 text-stone-700">
            うちの子の
            <br />
            <span className="text-orange-500 marker-highlight">
              クスッと笑える瞬間
            </span>
            を
            <br />
            6コママンガにしませんか？
          </h2>

          <p className="text-stone-500 mb-8 font-bold text-sm md:text-base leading-relaxed">
            写真だけじゃ伝わらない、あの日のエピソード。
            <br />
            ふわっと優しいタッチで、世界に一つの作品にします。
          </p>

          <div className="flex justify-center gap-4">
            <Link
              href="#portfolio"
              className="bg-white border-2 border-stone-200 text-stone-600 font-bold py-3 px-8 rounded-full hover:bg-stone-50 transition"
            >
              作例を見る
            </Link>
            <Link
              href="#contact"
              className="bg-gradient-to-r from-orange-400 to-pink-400 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl hover:opacity-90 transition transform hover:-translate-y-1"
            >
              今すぐ依頼する
            </Link>
          </div>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="py-16 bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-center text-2xl font-bold mb-12 flex items-center justify-center gap-2">
            <span className="text-orange-400">●</span>
            こんな思い出ありませんか？
            <span className="text-orange-400">●</span>
          </h3>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-50 p-6 rounded-2xl text-center hand-drawn-border border-2 border-gray-100">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ImageOff className="text-blue-500" />
              </div>
              <p className="font-bold text-stone-600 mb-2">
                決定的瞬間を撮り逃した
              </p>
              <p className="text-xs text-stone-500">
                面白かったのに、カメラを構えた時にはもう終わってた…
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl text-center hand-drawn-border border-2 border-gray-100">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="text-yellow-600" />
              </div>
              <p className="font-bold text-stone-600 mb-2">
                写真フォルダが埋もれる
              </p>
              <p className="text-xs text-stone-500">
                可愛い写真は多いけど、どの時の何のエピソードだっけ？
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl text-center hand-drawn-border border-2 border-gray-100">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-pink-500" />
              </div>
              <p className="font-bold text-stone-600 mb-2">
                特別な形に残したい
              </p>
              <p className="text-xs text-stone-500">
                ただの写真プリントだけじゃなく、もっと愛着の湧く形にしたい。
              </p>
            </div>
          </div>

          <div className="bg-orange-50 p-8 rounded-3xl text-center border-4 border-dashed border-orange-200 relative">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-orange-400 text-white px-6 py-1 rounded-full font-bold shadow-md">
              ふわもこペットマンガ館なら
            </div>
            <h4 className="text-xl md:text-2xl font-bold text-orange-800 mt-4 mb-4">
              エピソードを聞くだけで
              <br />
              「うちの子」がマンガの主人公に！
            </h4>
            <p className="text-stone-600">
              写真がなくても大丈夫。あなたの記憶にある「あの可愛い仕草」を、
              <br />
              プロのタッチで完全再現。SNSのアイコンや投稿にもぴったりです。
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-16 bg-stone-50 px-4">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-center text-2xl md:text-3xl font-bold mb-4 text-stone-700">
            Portfolio
          </h3>
          <p className="text-center text-stone-500 mb-12">制作実績・サンプル</p>

          <div className="grid md:grid-cols-3 gap-6">
            <PortfolioCard
              src="/pet_sample_1.jpg"
              alt="ペットマンガサンプル1 | ふわもこペットマンガ館"
              title="桃を食べたかったダックスフンド"
            />
            <PortfolioCard
              src="/pet_sample_2.jpg"
              alt="ペットマンガサンプル2 | ふわもこペットマンガ館"
              title="パンを分けて欲しい3人"
            />
            <PortfolioCard
              src="/pet_sample_3.jpg"
              alt="ペットマンガサンプル3 | ふわもこペットマンガ館"
              title="トイレットペーパーで遊ぶもんちゃん"
            />
          </div>

          <p className="text-center mt-8 text-xs text-stone-400">
            ※タップで拡大してご覧いただけます（実装時はLightbox等を推奨）
          </p>
        </div>
      </section>

      {/* Price */}
      <section className="py-16 bg-white px-4">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-center text-2xl md:text-3xl font-bold mb-4 text-stone-700">
            Menu & Price
          </h3>
          <p className="text-center text-stone-500 mb-12">わかりやすい2つのプラン</p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* 6 panels */}
            <div className="border-2 border-orange-100 rounded-3xl p-6 text-center shadow-lg relative bg-white transform hover:-translate-y-2 transition duration-300">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-400 text-white text-sm font-bold px-4 py-1 rounded-full">
                一番人気！
              </div>
              <h4 className="text-xl font-bold text-stone-700 mb-4 mt-2">
                6コマプラン
              </h4>
              <p className="text-sm text-stone-500 mb-4">
                SNS投稿にぴったり。
                <br />
                起承転結がしっかり作れます。
              </p>
              <div className="text-3xl font-extrabold text-orange-500 mb-1">
                3,500
                <span className="text-sm text-stone-400 font-normal">円</span>
              </div>
              <p className="text-xs text-stone-400 mb-6">（税込 3,850円）</p>

              <ul className="text-left text-sm text-stone-600 space-y-2 mb-6 bg-orange-50 p-4 rounded-xl">
                {/* <li className="flex items-start gap-2">
                  <Check size={16} className="text-orange-400 mt-1" />
                  ラフ提案 1回
                </li> */}
                <li className="flex items-start gap-2">
                  <Check size={16} className="text-orange-400 mt-1" />
                  修正 1回無料
                </li>
                <li className="flex items-start gap-2">
                  <Check size={16} className="text-orange-400 mt-1" />
                  納品形式 JPG/PNG
                </li>
              </ul>
            </div>

            {/* 12 panels */}
            <div className="border-2 border-pink-100 rounded-3xl p-6 text-center shadow-lg bg-white relative transform hover:-translate-y-2 transition duration-300">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-pink-400 text-white text-sm font-bold px-4 py-1 rounded-full">
                たっぷり描ける
              </div>
              <h4 className="text-xl font-bold text-stone-700 mb-4 mt-2">
                12コマプラン
              </h4>
              <p className="text-sm text-stone-500 mb-4">
                長めのエピソードや
                <br />
                2つのエピソードをセットで。
              </p>
              <div className="text-3xl font-extrabold text-pink-500 mb-1">
                6,000
                <span className="text-sm text-stone-400 font-normal">円</span>
              </div>
              <p className="text-xs text-stone-400 mb-6">（税込 6,600円）</p>

              <ul className="text-left text-sm text-stone-600 space-y-2 mb-6 bg-pink-50 p-4 rounded-xl">
                {/* <li className="flex items-start gap-2">
                  <Check size={16} className="text-pink-400 mt-1" />
                  ラフ提案 1回
                </li> */}
                <li className="flex items-start gap-2">
                  <Check size={16} className="text-pink-400 mt-1" />
                  修正 1回無料
                </li>
                <li className="flex items-start gap-2">
                  <Check size={16} className="text-pink-400 mt-1" />
                  納品形式 JPG/PNG
                </li>
              </ul>
            </div>
          </div>

          <p className="text-center mt-8 text-xs text-stone-400">
            ※見積もり不要。一律料金で安心です。
          </p>
        </div>
      </section>

      {/* Flow */}
      <section className="py-16 bg-pattern px-4">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-center text-2xl md:text-3xl font-bold mb-12 text-stone-700">
            Order Flow
          </h3>

          <div className="flex flex-col md:flex-row justify-between items-center gap-6 relative">
            <FlowStep
              num="1"
              title="お申し込み"
              desc={
                <>
                  下部のフォームより
                  <br />
                  写真とエピソードを送るだけ。
                </>
              }
            />

            <div className="hidden md:block w-24 h-1 bg-orange-100 absolute left-[25%] top-10 -z-0" />

            <FlowStep
              num="2"
              title="完成・納品"
              desc={
                <>
                  まんがを制作し、
                  <br />
                  データでお届けします。
                </>
              }
            />

            <div className="hidden md:block w-24 h-1 bg-orange-100 absolute right-[25%] top-10 -z-0" />

            <FlowStep
              num="3"
              title="修正"
              desc={
                <>
                  必要に応じて、
                  <br />
                  文言等の微調整を行います。
                </>
              }
            />
          </div>
        </div>
      </section>

      {/* Contact / CTA (Iframe) */}
      <section id="contact" className="py-16 bg-white px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-stone-700">
            Contact Form
          </h2>
          <p className="text-stone-500 mb-8">
            以下のフォームよりお気軽にお申し込みください。
            <br />
            ペットの種類は問いません（犬、猫、うさぎ、ハムスターetc...）
          </p>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-orange-50">
            {/* default 1000px, on <640px -> 1200px */}
            <div className="relative w-full overflow-hidden h-[2450px]">
              <iframe
                src="https://gyosei-fujiwara.com/1193-2/?fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnwINYB6z4_kFYWqjZsx8_CQw2m_gSPQRfsFbR50RYMR0Qad1jFCmuvuPeNSA_aem_HJNh8YXqsUUrqoDyLt6NZA"
                width="100%"
                height="100%"
                frameBorder={0}
                marginHeight={0}
                marginWidth={0}
                title="お申し込みフォーム"
              >
                読み込んでいます…
              </iframe>
            </div>
          </div>

          <div className="mt-8 text-xs text-stone-400">
            ※フォームが正しく表示されない場合は、
            <a
              href="https://gyosei-fujiwara.com/1193-2/?fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnwINYB6z4_kFYWqjZsx8_CQw2m_gSPQRfsFbR50RYMR0Qad1jFCmuvuPeNSA_aem_HJNh8YXqsUUrqoDyLt6NZA"
              target="_blank"
              rel="noreferrer"
              className="text-orange-400 underline"
            >
              こちら
            </a>
            から直接アクセスしてください。
          </div>
        </div>
      </section>

      {/* Footer
      <footer className="bg-stone-800 text-stone-300 py-8 text-center text-sm">
        <div className="flex justify-center gap-4 mb-4">
          <Instagram className="hover:text-white cursor-pointer transition" />
          <Twitter className="hover:text-white cursor-pointer transition" />
        </div>
        <p>&copy; 2026 ふわもこペットマンガ館 All Rights Reserved.</p>
      </footer> */}
      {/* Footer */}
<footer className="bg-stone-800 text-stone-300 py-8 text-center text-sm">
  <div className="flex justify-center gap-4 mb-4">
    <a
      href="https://www.instagram.com/fuwamoko_manga/"
      target="_blank"
      rel="noreferrer"
      aria-label="Instagram（ふわもこペットマンガ館）"
      className="hover:text-white transition"
    >
      <Instagram className="cursor-pointer" />
    </a>
  </div>
  <p>&copy; 2026 ふわもこペットマンガ館 All Rights Reserved.</p>
</footer>

    </div>
  );
}

function PortfolioCard({
  src,
  alt,
  title,
}: {
  src: string;
  alt: string;
  title: string;
}) {
  return (
    <div className="bg-white p-2 rounded-xl shadow-md hover:shadow-xl transition duration-300">
      <div className="aspect-[2/3] bg-stone-200 rounded-lg overflow-hidden relative">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 768px) 320px, 100vw"
          className="object-cover"
          priority={false}
        />
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/50 to-transparent p-4">
          <p className="text-white text-sm font-bold">{title}</p>
        </div>
      </div>
    </div>
  );
}

function FlowStep({
  num,
  title,
  desc,
}: {
  num: string;
  title: string;
  desc: React.ReactNode;
}) {
  return (
    <div className="w-full md:w-1/3 text-center z-10">
      <div className="w-20 h-20 bg-white border-4 border-orange-200 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-orange-400 shadow-sm">
        {num}
      </div>
      <h5 className="font-bold text-stone-700 mb-2">{title}</h5>
      <p className="text-sm text-stone-500">{desc}</p>
    </div>
  );
}
