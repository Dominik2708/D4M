'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';

const navigationItems = [
  { href: '/#produkte', label: 'Unsere Produkte' },
  { href: '/#quiz', label: 'Quiz' },
  { href: '/#about', label: 'Über uns' },
  { href: '/#termine', label: 'Termine' },
  { href: '/#archive', label: 'Archiv' },
  { href: '/#contact', label: 'Kontakt' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

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
              <h1 className="text-xl font-bold">Schülerunternehmen</h1>
              <p className="text-sm text-muted-foreground">BBS I Lüneburg · HA25B</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex" aria-label="Hauptnavigation">
            <NavigationMenuList>
              {navigationItems.map(item => (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink
                    href={item.href}
                    className="text-foreground transition-colors cursor-pointer px-4 py-2 rounded-md hover:bg-accent"
                  >
                    {item.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" aria-label="Menü öffnen">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetTitle className="sr-only">Menü</SheetTitle>
              <nav className="flex flex-col space-y-4 mt-8" aria-label="Mobile Navigation">
                {navigationItems.map(item => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-lg font-medium text-foreground transition-colors px-4 py-2 rounded-md hover:bg-accent"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
