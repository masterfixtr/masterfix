"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { Menu, Phone } from "lucide-react"
import ThemeToggle from "./ThemeToggle"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "/", label: "Ana Sayfa" },
    { href: "/ozellikler", label: "Özellikler" },
    { href: "/onarim-servisleri", label: "Onarım Servisleri" },
    { href: "/yorumlar", label: "Yorumlar" },
    { href: "/blog", label: "Blog" },
    { href: "/sss", label: "SSS" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/85 dark:bg-gray-900/85 backdrop-blur-xl shadow-2xl border-b border-gray-200/30 dark:border-gray-700/30"
          : "bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg"
      }`}
    >
      {/* Main Navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-12 h-12 group-hover:scale-105 transition-all duration-300">
              <Image
                src="/apple-touch-icon.png"
                alt="MasterFix Logo"
                width={48}
                height={48}
                className="rounded-xl shadow-lg"
                priority
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">MasterFix</h1>
              <p className="text-xs text-gray-600 dark:text-gray-400 -mt-1 font-medium">Teknik Servis</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-900/30 hover:bg-blue-100 dark:hover:bg-blue-800/50 hover:text-blue-800 dark:hover:text-blue-200 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md border border-blue-100 dark:border-blue-800/50"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-3">
            <ThemeToggle />

            {/* Call Button */}
            <Button
              asChild
              className="hidden sm:flex bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 rounded-full px-6 py-3 font-semibold text-sm border-2 border-white/20 backdrop-blur-sm"
            >
              <a href="tel:+905345740909" className="flex items-center space-x-2">
                <div className="bg-white/20 rounded-full p-1">
                  <Phone className="h-4 w-4" />
                </div>
                <span>Hemen Ara</span>
              </a>
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-xl"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <SheetTitle className="sr-only">Mobil Menü</SheetTitle>
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-center px-4 py-3 text-base font-medium text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-900/30 hover:bg-blue-100 dark:hover:bg-blue-800/50 hover:text-blue-800 dark:hover:text-blue-200 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md border border-blue-100 dark:border-blue-800/50 w-full"
                    >
                      {item.label}
                    </Link>
                  ))}

                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <Button
                      asChild
                      className="w-full bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 py-3 font-semibold"
                    >
                      <a href="tel:+905345740909" className="flex items-center justify-center space-x-2">
                        <div className="bg-white/20 rounded-full p-1">
                          <Phone className="h-4 w-4" />
                        </div>
                        <span>+90 534 574 09 09</span>
                      </a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
