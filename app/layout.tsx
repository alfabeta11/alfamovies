import '@/app/ui/global.css';
import Header from '@/app/ui/header/header';
import { roboto } from './ui/fonts';
import Footer from './ui/footer/footer';
import { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  title: {
    template: '%s | Alfamovies',
    default: 'Alfamovies | Watch movies & series for FREE',
  },
  description: 'Streaming movies, tv shows and animations for free.',
  category: 'Video Streaming Website',
  keywords: 'streaming, movies, tv shows, free online movies, alfamovies, animations',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} from-2% min-h-screen overflow-x-hidden bg-gradient-to-b from-slate-900 to-slate-950 to-50% bg-no-repeat px-4 text-base leading-normal text-gray-200 antialiased md:px-8 lg:px-16 xl:px-24`}
      >
        <Header />
        <main className="relative">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
