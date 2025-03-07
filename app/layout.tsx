import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Олег Кузьмин Портфолио',
  description: 'Сайт Портфолио',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <meta name="apple-mobile-web-app-title" content="Oleg K." />
      </head>
      <body>{children}</body>
    </html>
  );
}
