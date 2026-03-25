import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'House Plus Ltd - Professional Manufacturer',
  description: 'House Plus Ltd is a leading manufacturer of household appliances, solar solutions, and 3C electronics. OEM/ODM services with ISO9001, CE, RoHS certification. Factory direct wholesale.',
  keywords: 'House Plus Ltd, household appliances manufacturer, solar products supplier, 3C electronics factory, OEM manufacturer China, wholesale home appliances, solar inverter supplier',
  robots: 'index, follow',
  authors: [{ name: 'House Plus Ltd' }],
  viewport: 'width=device-width, initial-scale=1',
  verification: {
    // 如有 Google Search Console 等可在此添加
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}