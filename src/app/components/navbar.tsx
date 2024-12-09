"use client"; // ✅ Client Components ke liye zaroori hai

import { useState } from "react";
import { Sheet, SheetTrigger, SheetContent, SheetClose } from "@/components/ui/sheet"; // ✅ Correct path
import Link from "next/link";
import { FiMenu, FiUser, FiSearch, FiHeart, FiShoppingCart } from "react-icons/fi"; // ✅ Icons

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // ✅ Sheet toggle state

  return (
    <header className="w-full p-4 bg-[#FBEBB5] text-black text-2xl font-bold font-sans">
      <div className="flex items-center justify-between">
        {/* Desktop Links */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/home" className="hover:text-gray-500">Home</Link>
          <Link href="/shop" className="hover:text-gray-500">Shop</Link>
          <Link href="/about" className="hover:text-gray-500">About</Link>
          <Link href="/contact" className="hover:text-gray-500">Contact</Link>
        </nav>

        {/* Right Icons */}
        <div className="flex items-center space-x-4 text-black">
          <button aria-label="User Account" className="hover:text-gray-500">
            <FiUser size={20} />
          </button>
          <button aria-label="Search" className="hover:text-gray-500">
            <FiSearch size={20} />
          </button>
          <button aria-label="Wishlist" className="hover:text-gray-500">
            <FiHeart size={20} />
          </button>
          <button aria-label="Cart" className="hover:text-gray-500">
            <FiShoppingCart size={20} />
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <button className="block md:hidden text-black" aria-label="Open Menu">
              <FiMenu size={24} />
            </button>
          </SheetTrigger>

          <SheetContent side="left" className="bg-gray-900 text-white">
            <nav className="flex flex-col space-y-4 p-4">
              <SheetClose asChild>
                <Link href="/home" className="hover:text-gray-300" role="button">
                  Home
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href="/shop" className="hover:text-gray-300" role="button">
                  Shop
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href="/about" className="hover:text-gray-300" role="button">
                  About
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href="/contact" className="hover:text-gray-300" role="button">
                  Contact
                </Link>
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

export default Navbar;
