import type { Metadata } from 'next';
import './global.css';
import './normalize.css';
import GTMWrapper from './GTM';

export const metadata: Metadata = {
  metadataBase: new URL('https://haanna.com'),
  title: 'Ha Anna | Portfolio',
  description:
    'Ha Anna, front-end designer & developer based in Seoul, South Korea. I focus on designing beautiful and functional user experiences.',
  keywords: ['Portfolio', 'Frontend developer', 'South Korea', 'Designer'],
  creator: 'Anna Ha',
  icons: {
    icon: '/favicon.webp',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ha Anna | Portfolio',
    description:
      'Ha Anna, front-end designer & developer based in Seoul, South Korea. I focus on designing beautiful and functional user experiences.',
    images: ['/res/webimg.webp'],
  },
  openGraph: {
    images: '/res/webimg.webp',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GTMWrapper />
      <body>{children}</body>
    </html>
  );
}
