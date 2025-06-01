import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Providers from './providers';

const pretendard = localFont({
  src: [
    {
      path: '../../public/font/Pretendard-Thin.otf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../../public/font/Pretendard-ExtraLight.otf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../../public/font/Pretendard-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/font/Pretendard-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/font/Pretendard-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/font/Pretendard-SemiBold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/font/Pretendard-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/font/Pretendard-ExtraBold.otf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../../public/font/Pretendard-Black.otf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-pretendard',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Dr.Straight - 교정, 바르게 시작합니다',
  description: '교정과 전문의가 설계한 나만의 교정 플랜. 3D 디지털 기술로 예측 가능한 교정, 개인 맞춤 설계로 완성하는 바른 미소.',
  keywords: '치아교정, 투명교정, 교정치과, Dr.Straight, 교정과전문의, 3D교정',
  openGraph: {
    title: 'Dr.Straight - 교정, 바르게 시작합니다',
    description: '교정과 전문의가 설계한 나만의 교정 플랜',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body
        className={`${pretendard.variable} font-pretendard antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
