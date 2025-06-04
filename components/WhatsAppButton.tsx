"use client"

import { useState, useEffect } from "react"
import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <Button
        size="lg"
        className="rounded-full w-16 h-16 bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
        asChild
        aria-label="WhatsApp ile iletişime geçin"
      >
        <a
          href="https://wa.me/905345740909?text=Merhaba,%20cihaz%20onarımı%20için%20bilgi%20almak%20istiyorum."
          target="_blank"
          rel="noopener noreferrer"
          itemProp="url"
        >
          <MessageCircle className="h-8 w-8" />
          <span className="sr-only">WhatsApp ile iletişime geçin</span>
        </a>
      </Button>
    </div>
  )
}
