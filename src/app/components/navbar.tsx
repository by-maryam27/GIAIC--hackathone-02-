"use client"; // ✅ This makes the entire file a Client Component.

import Link from "next/link";
import { useState } from "react";
import {
  FiMenu,
  FiUser,
  FiSearch,
  FiHeart,
  FiShoppingCart,
} from "react-icons/fi"; // ✅ Icons
import { Sheet, SheetTrigger, SheetContent, SheetClose } from "@/components/ui/sheet"; // ✅ Shadcn Sheet component

function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false); // ✅ Search bar toggle state

  const toggleSearchBar = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <header className="w-full p-4 bg-[#FBEBB5] text-black text-2xl font-bold font-sans">
      <div className="flex items-center justify-between">
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button aria-label="Menu" className="hover:text-gray-500">
                <FiMenu size={24} />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="p-6">
              <nav className="flex flex-col space-y-4">
                <SheetClose asChild>
                  <Link href="/home" className="hover:text-gray-500">
                    Home
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href="/shop" className="hover:text-gray-500">
                    Shop
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href="/about" className="hover:text-gray-500">
                    About
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href="/contact" className="hover:text-gray-500">
                    Contact
                  </Link>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Links */}
        <nav className="hidden md:flex space-x-6">
          <a href="/home" className="hover:text-gray-500">
            Home
          </a>
          <a href="/shop" className="hover:text-gray-500">
            Shop
          </a>
          <a href="/about" className="hover:text-gray-500">
            About
          </a>
          <a href="/contact" className="hover:text-gray-500">
            Contact
          </a>
        </nav>

        {/* Right Icons */}
        <div className="flex items-center space-x-4 text-black relative">
          {/* User Icon */}
          <Link href="/contact">
            <button aria-label="User Account" className="hover:text-gray-500">
              <FiUser size={20} />
            </button>
          </Link>

          {/* Search Icon and Sliding Bar */}
          <div className="flex items-center space-x-2 relative">
            <button
              aria-label="Search"
              className="hover:text-gray-500"
              onClick={toggleSearchBar}
            >
              <FiSearch size={20} />
            </button>
            {isSearchOpen && (
              <div
                className={`transition-all duration-300 ease-in-out ${
                  isSearchOpen ? "w-64 opacity-100" : "w-0 opacity-0"
                } bg-white border border-gray-300 rounded-lg shadow-lg flex items-center px-3`}
              >
                <input
                  type="text"
                  placeholder="Search our articles"
                  className="w-full p-2 text-sm text-gray-700 border-none outline-none bg-transparent"
                />
              </div>
            )}
          </div>

          {/* Wishlist and Cart Icons */}
          <Link href="/wishlist">
            <button aria-label="Wishlist" className="hover:text-gray-500">
              <FiHeart size={20} />
            </button>
          </Link>
          <Link href="/cart">
            <button aria-label="Cart" className="hover:text-gray-500">
              <FiShoppingCart size={20} />
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
