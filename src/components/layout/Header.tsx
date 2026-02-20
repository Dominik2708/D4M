'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Globe } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';

const navigationKeys = [
  { href: '/#produkte', key: 'products' },
  { href: '/#quiz', key: 'quiz' },
  { href: '/#about', key: 'about' },
  { href: '/#termine', key: 'events' },
  { href: '/#archive', key: 'archive' },
  { href: '/#contact', key: 'contact' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'de' ? 'en' : 'de';
    i18n.changeLanguage(newLang);
  };

  return (
    <header className="sticky top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <Link href="/" className="flex items-center space-x-4">
            <div className="w-12 h-12 border-2 rounded-lg flex items-center justify-center">
              <Image src="/images/logo.png" alt="Logo" width={48} height={48} />
            </div>
            <div>
              <h1 className="text-xl font-bold">{t('header.title')}</h1>
              <p className="text-sm text-muted-foreground">{t('header.subtitle')}</p>
            </div>
          </Link>

          <div className="flex items-center gap-2">
            {/* Desktop Navigation */}
            <NavigationMenu className="hidden lg:flex" aria-label={t('header.mainNav')}>
              <NavigationMenuList>
                {navigationKeys.map(item => (
                  <NavigationMenuItem key={item.href}>
                    <NavigationMenuLink
                      href={item.href}
                      className="text-foreground transition-colors cursor-pointer px-4 py-2 rounded-md hover:bg-accent"
                    >
                      {t(`header.nav.${item.key}`)}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            {/* Language Switcher */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="gap-1.5 text-sm font-medium"
              aria-label={i18n.language === 'de' ? 'Switch to English' : 'Auf Deutsch wechseln'}
            >
              <Globe className="h-4 w-4" />
              {i18n.language === 'de' ? 'EN' : 'DE'}
            </Button>

            {/* Mobile Navigation */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" aria-label={t('header.menuOpen')}>
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetTitle className="sr-only">{t('header.menuTitle')}</SheetTitle>
                <nav className="flex flex-col space-y-4 mt-8" aria-label={t('header.mobileNav')}>
                  {navigationKeys.map(item => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-lg font-medium text-foreground transition-colors px-4 py-2 rounded-md hover:bg-accent"
                      onClick={() => setIsOpen(false)}
                    >
                      {t(`header.nav.${item.key}`)}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
