import { Bot, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
export function Footer() {
  const { t } = useLanguage();
  const footerLinks = [
    { name: t.nav.home, path: '#home' },
    { name: t.nav.solutions, path: '#solutions' },
    { name: t.nav.about, path: '#about' },
    { name: t.nav.pricing, path: '#pricing' },
    { name: t.nav.blog, path: '#blog' },
    { name: t.nav.contact, path: '#contact' },
  ];
  return (
    <footer id="footer" className="bg-secondary/50 border-t border-border text-muted-foreground">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <a href="#home" className="flex items-center gap-2 text-2xl font-bold font-display text-foreground">
              <Bot className="w-8 h-8 text-tech-blue" />
              AIAI TOOLS
            </a>
            <p className="text-sm">{t.hero.description}</p>
            <p className="text-xs text-gray-500">
              Note: AI capabilities have a shared request limit across all users.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">{t.footer.quickLinks}</h3>
            <ul className="space-y-2">
              {footerLinks.map(link => (
                <li key={link.name}>
                  <a href={link.path} className="hover:text-foreground transition-colors">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">{t.footer.contactUs}</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-1 text-tech-blue flex-shrink-0" />
                <span>Tầng 5, Tòa BMC, 379 Minh Khai, HBT, Hà Nội</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-tech-blue" />
                <a href="mailto:contact@aiai.vn" className="hover:text-foreground">contact@aiai.vn</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-tech-blue" />
                <span>Hotline / Zalo OA</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">{t.footer.legal}</h3>
            <ul className="space-y-2">
              <li><a href="#faq" className="hover:text-foreground transition-colors">{t.footer.privacy}</a></li>
              <li><a href="#faq" className="hover:text-foreground transition-colors">{t.footer.terms}</a></li>
              <li><a href="#faq" className="hover:text-foreground transition-colors">{t.footer.faq}</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} AIAI TOOLS. {t.footer.rights}</p>
          <p className="mt-1">{t.footer.builtWith}</p>
        </div>
      </div>
    </footer>
  );
}