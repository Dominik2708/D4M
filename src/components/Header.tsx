'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from './ui/navigation-menu';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <Image src="/images/logo.png" alt="Logo" width={48} height={48} />
            </div>
            <div>
              <h1 className="text-xl text-gray-900 font-bold">Schülerunternehmen</h1>
              <p className="text-sm text-gray-600">BBS I</p>
            </div>
          </div>

          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink className="text-gray-700 transition-colors cursor-pointer px-4 py-2">
                  Produkte
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="text-gray-700 transition-colors cursor-pointer px-4 py-2">
                  Quiz
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="text-gray-700 transition-colors cursor-pointer px-4 py-2">
                  Über uns
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="text-gray-700 transition-colors cursor-pointer px-4 py-2">
                  Termine
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="text-gray-700 transition-colors cursor-pointer px-4 py-2">
                  Archiv
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="text-gray-700 transition-colors cursor-pointer px-4 py-2">
                  Kontakt
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {isMenuOpen && (
          <NavigationMenu className="lg:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <NavigationMenuList className="flex-col items-start space-y-2">
              <NavigationMenuItem>
                <NavigationMenuLink className="text-left text-gray-700 transition-colors py-2 cursor-pointer w-full">
                  Produkte
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="text-left text-gray-700 transition-colors py-2 cursor-pointer w-full">
                  Quiz
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="text-left text-gray-700 transition-colors py-2 cursor-pointer w-full">
                  Über uns
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="text-left text-gray-700 transition-colors py-2 cursor-pointer w-full">
                  Termine
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="text-left text-gray-700 transition-colors py-2 cursor-pointer w-full">
                  Archiv
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="text-left text-gray-700 transition-colors py-2 cursor-pointer w-full">
                  Kontakt
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        )}
      </div>
    </header>
  );
}
