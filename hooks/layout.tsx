import type {Metadata} from 'next';
import { Playfair_Display, Montserrat } from 'next/font/google';
import './globals.css'; // Global styles

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['400', '600', '700', '800'],
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Shree Interior Designer | Elite Architectural Opulence',
  description: 'Redefining custom luxury architectural interiors and design solutions in Navi Mumbai.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${playfair.variable} ${montserrat.variable}`}>
      <body className="bg-[#050505] text-[#F5F5F5] antialiased min-h-screen selection:bg-[#C9A84C]/30 selection:text-[#C9A84C]" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

