"use client";

import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export const TopBar = () => {
  return (
    <header className="bg-white shadow-sm border border-gray-200 fixed top-1 left-1 right-1 z-50 rounded-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            <Image
              src="/images/logo2.webp"
              alt="Bookshelf Logo"
              width={200}
              height={133}
              className="object-contain"
              priority
            />
          </Link>

          <NavigationMenu className="hidden md:block">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/"
                    className="text-gray-600 hover:text-gray-900 transition-colors px-3 py-2"
                  >
                    Moje knihovna
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/wishlist"
                    className="text-gray-600 hover:text-gray-900 transition-colors px-3 py-2"
                  >
                    Chci si přečíst
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center space-x-4">
            <Button className="font-medium">Přidat knihu</Button>
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
