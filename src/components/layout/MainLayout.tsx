import React from 'react';
import { Toaster } from 'sonner';
import { Header } from './Header';
import { Footer } from './Footer';
import { AiChatWidget } from '@/components/AiChatWidget';
import { ScrollProgress } from '@/components/ScrollProgress';
type MainLayoutProps = {
  children: React.ReactNode;
};
export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <AiChatWidget />
      <ScrollProgress />
      <Toaster />
    </div>
  );
}