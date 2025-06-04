"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight, Play, CheckCircle, Star, Award } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-slate-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-20 flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div
            className={`space-y-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium">
                <Award className="w-4 h-4" />
                <span>Apple Yetkili Servis Kalitesi</span>
              </div>
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
                <span className="text-sm text-slate-600 dark:text-gray-400 ml-2">4.9/5 (2,847 değerlendirme)</span>
              </div>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold leading-tight">
              <span className="block text-slate-800 dark:text-gray-100">Apple</span>
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Cihazlarınız
              </span>
              <span className="block text-slate-800 dark:text-gray-100">Güvende</span>
            </h1>

            <p className="text-xl text-slate-600 dark:text-gray-400 max-w-2xl leading-relaxed">
              iPhone, iPad ve MacBook onarımında{" "}
              <strong className="text-slate-800 dark:text-gray-200">10+ yıllık deneyim</strong> ile cihazlarınızı
              yeniden hayata döndürüyoruz. Orijinal parçalar, profesyonel ekip ve{" "}
              <strong className="text-slate-800 dark:text-gray-200">aynı gün teslimat</strong> garantisi.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#hemen-basla" className="btn-primary group">
                Ücretsiz Değerlendirme
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button
                type="button"
                className="btn-secondary group"
                onClick={() => window.location.href = "/onarim-sureci"}
              >
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Onarım Süreci
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">15K+</div>
                <div className="text-sm text-slate-600 dark:text-gray-400">Başarılı Onarım</div>
                <div className="text-xs text-slate-500 dark:text-gray-500">Son 3 yılda</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-purple-600 mb-2">%98</div>
                <div className="text-sm text-slate-600 dark:text-gray-400">Müşteri Memnuniyeti</div>
                <div className="text-xs text-slate-500 dark:text-gray-500">5 yıldızlı değerlendirme</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-green-600 mb-2">2h</div>
                <div className="text-sm text-slate-600 dark:text-gray-400">Ortalama Süre</div>
                <div className="text-xs text-slate-500 dark:text-gray-500">Çoğu onarım için</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center space-x-2 text-slate-600 dark:text-gray-400">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm">Orijinal parça garantisi</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-600 dark:text-gray-400">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm">12 aya kadar garanti</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-600 dark:text-gray-400">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm">Veri güvenliği</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 border border-slate-200 dark:border-gray-700">
                <Image
                  src="/masterfix.png"
                  alt="MasterFix Teknik Servis"
                  width={600}
                  height={500}
                  className="rounded-2xl w-full"
                  priority
                />
                <div className="absolute -bottom-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-xl shadow-lg">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5" />
                    <span className="font-medium">Aynı Gün Teslimat</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
