"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Phone, MapPin, Clock, ArrowUp, MessageCircle, Mail } from "lucide-react"

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const services = [
    { href: "/iphone-onarim", label: "iPhone Onarım" },
    { href: "/ipad-onarim", label: "iPad Onarım" },
    { href: "/macbook-onarim", label: "MacBook Onarım" },
    { href: "/ekran-degisimi", label: "Ekran Değişimi" },
    { href: "/batarya-degisimi", label: "Batarya Değişimi" },
    { href: "/kamera-degisimi", label: "Kamera Değişimi" },
    { href: "/lazerli-arka-cam-degisimi", label: "Lazerli Arka Cam" },
    { href: "/yazilim-guncelleme", label: "Yazılım Güncelleme" },
    { href: "/anakart-onarim", label: "Anakart Onarım" },
    { href: "/hafiza-yukseltme", label: "Hafıza Yükseltme" },
    { href: "/su-hasari-onarim", label: "Su Hasarı Onarım" },
    { href: "/entegre-devre-degisimi", label: "Entegre Devre" },
  ]

  const quickLinks = [
    { href: "/ozellikler", label: "Özellikler" },
    { href: "/yorumlar", label: "Müşteri Yorumları" },
    { href: "/blog", label: "Blog" },
    { href: "/sss", label: "Sık Sorulan Sorular" },
  ]

  return (
    <>
      <footer className="bg-gray-900 text-white">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="relative w-12 h-12">
                  <Image
                    src="/apple-touch-icon.png"
                    alt="MasterFix Logo"
                    width={48}
                    height={48}
                    className="rounded-xl shadow-lg"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">MasterFix</h3>
                  <p className="text-sm text-gray-400">Teknik Servis</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                İzmir'in en güvenilir Apple cihaz onarım merkezi. Uzman ekibimizle iPhone, iPad ve MacBook onarımlarında
                kaliteli hizmet sunuyoruz.
              </p>

              {/* Social Media */}
              <div className="flex space-x-3">
                <a
                  href="https://maps.google.com/?q=Kemal+Paşa+Cd.+Altınhan+İşhanı+Apt.147+Kat-2/204+35600+Karşıyaka+İzmir"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 p-3 rounded-xl hover:scale-110 transition-transform duration-300 shadow-lg"
                >
                  <MapPin className="h-5 w-5" />
                </a>
                <a
                  href="https://www.instagram.com/masterfix.repair"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-pink-500 to-purple-600 p-3 rounded-xl hover:scale-110 transition-transform duration-300 shadow-lg"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/@masterfixtr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-600 p-3 rounded-xl hover:scale-110 transition-transform duration-300 shadow-lg"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/masterfix.tr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 p-3 rounded-xl hover:scale-110 transition-transform duration-300 shadow-lg"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://www.tiktok.com/@masterfix.tr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black p-3 rounded-xl hover:scale-110 transition-transform duration-300 shadow-lg border border-white"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-blue-400">Hizmetlerimiz</h4>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service.href}>
                    <Link
                      href={service.href}
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm"
                    >
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-blue-400">Hızlı Linkler</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-blue-400">İletişim</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      Kemal Paşa Cd., Altınhan İşhanı Apt.147
                      <br />
                      Kat-2/204, 35600 Karşıyaka/İzmir
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-blue-400" />
                    <a
                      href="tel:+905345740909"
                      className="text-sm text-gray-300 hover:text-blue-400 transition-colors duration-300"
                    >
                      +90 534 574 09 09
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-blue-400 mt-0.5" />
                  <div className="text-sm text-gray-300">
                    <p>Pazartesi – Cumartesi: 09:00 – 19:00</p>
                    <p>Pazar: Kapalı</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-400" />
                  <a
                    href="mailto:info@masterfix.tr"
                    className="text-sm text-gray-300 hover:text-blue-400 transition-colors duration-300"
                  >
                    info@masterfix.tr
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="mt-16">
            <h4 className="text-xl font-semibold text-blue-400 mb-6">Konumumuz</h4>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3124.8234567890123!2d27.1234567!3d38.4567890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbd862a0e7c5e5%3A0x5c5c5c5c5c5c5c5c!2sKemal%20Pa%C5%9Fa%20Cd.%2C%20Alt%C4%B1nhan%20%C4%B0%C5%9Fhan%C4%B1%20Apt.147%20Kat-2%2F204%2C%2035600%20Kar%C5%9F%C4%B1yaka%2F%C4%B0zmir!5e0!3m2!1str!2str!4v1234567890123!5m2!1str!2str"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>
            <div className="mt-6 text-center">
              <a
                href="https://maps.google.com/?q=Kemal+Paşa+Cd.+Altınhan+İşhanı+Apt.147+Kat-2/204+35600+Karşıyaka+İzmir"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-gray-600 dark:to-gray-700 hover:from-blue-700 hover:to-purple-700 dark:hover:from-gray-700 dark:hover:to-gray-800 text-white px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <MapPin className="h-5 w-5" />
                <span className="font-medium">Google Maps'te Görüntüle</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-sm text-gray-400">© 2024 MasterFix. Tüm hakları saklıdır.</p>
              <div className="flex space-x-6 text-sm">
                <Link href="/gizlilik" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                  Gizlilik Politikası
                </Link>
                <Link
                  href="/kullanim-sartlari"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  Kullanım Şartları
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
