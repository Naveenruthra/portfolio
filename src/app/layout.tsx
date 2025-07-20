import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Poppins, Inter } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-poppins',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Naveen's Digital Domain",
  description: "Portfolio of Naveenkumar L, a Senior Software Engineer and Flutter developer.",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${poppins.variable} ${inter.variable} font-body antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
