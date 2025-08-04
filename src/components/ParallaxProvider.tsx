'use client';
import { ParallaxProvider as Provider } from 'react-scroll-parallax';

export default function ParallaxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Provider>{children}</Provider>;
}
