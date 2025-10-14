import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X, Bot } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/ThemeToggle';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { useLanguage } from '@/hooks/useLanguage';
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();
  const navLinks = [
    { name: t.nav.home, path: '#home' },
    { name: t.nav.solutions, path: '#solutions' },
    { name: t.nav.about, path: '#about' },
    { name: t.nav.pricing, path: '#pricing' },
    { name: t.nav.forBusiness, path: '#for-business' },
    { name: t.nav.blog, path: '#blog' },
    { name: t.nav.contact, path: '#contact' },
  ];
  const linkClass = "text-muted-foreground hover:text-foreground transition-colors";
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#home" className="flex items-center gap-2 text-2xl font-bold font-display text-foreground">
              <Bot className="w-8 h-8 text-tech-blue" />
              AIAI TOOLS
            </a>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className={cn(linkClass, "font-medium")}
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-2">
            <LanguageSwitcher />
            <ThemeToggle />
            <a href="#contact">
              <Button className="bg-tech-blue hover:bg-tech-blue/90 text-white font-semibold">
                {t.nav.demo}
              </Button>
            </a>
          </div>
          <div className="md:hidden flex items-center gap-2">
            <LanguageSwitcher />
            <ThemeToggle />
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-t border-border"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className='text-muted-foreground hover:bg-accent hover:text-accent-foreground block px-3 py-2 rounded-md text-base font-medium'
                >
                  {link.name}
                </a>
              ))}
              <div className="p-4">
                <a href="#contact" className="block w-full" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-tech-blue hover:bg-tech-blue/90 text-white font-semibold">
                    {t.nav.demo}
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}