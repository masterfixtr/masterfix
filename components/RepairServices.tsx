"use client"

import { useState } from "react"
import { Smartphone, Tablet, Laptop, ArrowRight, CheckCircle, Clock, Shield, Star } from "lucide-react"
import Link from "next/link"
import { Monitor, Battery, Cpu, HardDrive, Droplets, Zap, Camera, Download } from "lucide-react"

const repairServices = {
  iphone: {
    title: "iPhone Onarımı",
    icon: Smartphone,
    color: "from-blue-500 to-blue-600",
    description: "iPhone modelleriniz için profesyonel onarım hizmetleri",
    services: [
      {
        name: "iPhone Ekran Değişimi",
        description: "Orijinal kalitede OLED/LCD ekran değişimi. Dokunmatik hassasiyeti korunur.",
        price: "₺899",
        duration: "30 dk",
        warranty: "6 ay",
        features: ["Orijinal kalite", "Su geçirmezlik", "True Tone desteği"],
      },
      {
        name: "iPhone Batarya Değişimi",
        description: "Yüksek kapasiteli batarya ile günlük kullanımda %40 daha uzun pil ömrü.",
        price: "₺399",
        duration: "20 dk",
        warranty: "12 ay",
        features: ["Yüksek kapasite", "Hızlı şarj", "Güvenlik sertifikası"],
      },
      {
        name: "iPhone Kamera Onarımı",
        description: "Ön ve arka kamera modülü onarımı. Profesyonel fotoğraf kalitesi.",
        price: "₺699",
        duration: "45 dk",
        warranty: "6 ay",
        features: ["4K video", "Portre modu", "Gece modu"],
      },
      {
        name: "iPhone Anakart Onarımı",
        description: "Mikroişlemci seviyesinde onarım. Veri kaybı olmadan profesyonel müdahale.",
        price: "₺1.499",
        duration: "2-3 gün",
        warranty: "6 ay",
        features: ["Veri korunur", "Mikroişlemci", "Performans testi"],
      },
    ],
  },
  ipad: {
    title: "iPad Onarımı",
    icon: Tablet,
    color: "from-purple-500 to-purple-600",
    description: "iPad modelleriniz için uzman onarım çözümleri",
    services: [
      {
        name: "iPad Ekran Değişimi",
        description: "Retina kalitesinde dokunmatik ekran. Apple Pencil uyumluluğu korunur.",
        price: "₺1.299",
        duration: "45 dk",
        warranty: "6 ay",
        features: ["Retina kalite", "Apple Pencil", "Multi-touch"],
      },
      {
        name: "iPad Batarya Değişimi",
        description: "Uzun süreli kullanım için yüksek kapasiteli batarya değişimi.",
        price: "₺699",
        duration: "30 dk",
        warranty: "12 ay",
        features: ["10 saat kullanım", "Hızlı şarj", "Güvenli batarya"],
      },
      {
        name: "iPad Şarj Soketi Onarımı",
        description: "Lightning/USB-C şarj soketi onarımı. Hızlı şarj desteği ile tam performans.",
        price: "₺599",
        duration: "25 dk",
        warranty: "6 ay",
        features: ["Hızlı şarj", "Veri aktarımı", "Dayanıklılık"],
      },
      {
        name: "iPad Hoparlör Onarımı",
        description: "Stereo hoparlör sistemi onarımı. Kristal netliğinde ses kalitesi.",
        price: "₺499",
        duration: "35 dk",
        warranty: "6 ay",
        features: ["Stereo ses", "Yüksek kalite", "Dolby ses"],
      },
    ],
  },
  macbook: {
    title: "MacBook Onarımı",
    icon: Laptop,
    color: "from-green-500 to-green-600",
    description: "MacBook modelleriniz için profesyonel teknik servis",
    services: [
      {
        name: "MacBook Klavye Değişimi",
        description: "Butterfly/Magic Keyboard değişimi. Sessiz ve duyarlı tuş deneyimi.",
        price: "₺1.899",
        duration: "1-2 gün",
        warranty: "12 ay",
        features: ["Sessiz tuşlar", "Backlight", "Dayanıklılık"],
      },
      {
        name: "MacBook Batarya Değişimi",
        description: "Yüksek kapasiteli batarya ile 8 saate kadar kesintisiz çalışma.",
        price: "₺1.199",
        duration: "45 dk",
        warranty: "12 ay",
        features: ["8 saat kullanım", "Hızlı şarj", "Güvenli batarya"],
      },
      {
        name: "MacBook Ekran Onarımı",
        description: "Retina ekran onarımı. True Tone ve P3 renk gamı desteği.",
        price: "₺2.499",
        duration: "1-2 gün",
        warranty: "6 ay",
        features: ["Retina kalite", "True Tone", "P3 renk"],
      },
      {
        name: "MacBook Logic Board Onarımı",
        description: "Ana kart onarımı. M1/M2 çip desteği ile yüksek performans.",
        price: "₺3.499",
        duration: "3-5 gün",
        warranty: "6 ay",
        features: ["M1/M2 çip", "Yüksek performans", "Veri korunur"],
      },
    ],
  },
}

export default function RepairServices() {
  const [activeTab, setActiveTab] = useState<keyof typeof repairServices>("iphone")

  return (
    <section
      id="onarim-servisleri"
      className="py-24 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4" />
            <span>Profesyonel Onarım Hizmetleri</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Onarım Servisleri
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Apple cihazlarınız için profesyonel onarım hizmetleri. Her cihaz türü için uzman çözümler ve orijinal
            kalitede parçalar kullanıyoruz.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-16">
          <div className="bg-white dark:bg-gray-800 p-2 rounded-2xl shadow-xl border border-slate-200 dark:border-gray-700">
            <div className="flex flex-row flex-wrap justify-center gap-2">
              {Object.entries(repairServices).map(([key, service]) => {
                const IconComponent = service.icon
                return (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key as keyof typeof repairServices)}
                    className={`flex items-center justify-center space-x-3 px-4 sm:px-8 py-4 rounded-xl transition-all duration-300 font-medium ${
                      activeTab === key
                        ? "bg-blue-600 text-white shadow-lg transform scale-105"
                        : "text-slate-600 dark:text-gray-400 hover:bg-slate-100 dark:hover:bg-gray-700"
                    }`}
                  >
                    <IconComponent className="w-6 h-6" />
                    <span className="hidden sm:inline">{service.title}</span>
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {/* Service Description */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-slate-800 dark:text-gray-100 mb-4">
            {repairServices[activeTab].title}
          </h3>
          <p className="text-lg text-slate-600 dark:text-gray-400 max-w-2xl mx-auto">
            {repairServices[activeTab].description}
          </p>
        </div>

        {/* Service Table */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden border border-slate-200 dark:border-gray-700">
            <div className={`h-2 bg-gradient-to-r ${repairServices[activeTab].color}`}></div>

            <div className="p-6 sm:p-8">
              <div className="space-y-6">
                {repairServices[activeTab].services.map((service, index) => (
                  <div
                    key={index}
                    className="border border-slate-200 dark:border-gray-700 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-600"
                  >
                    <div className="grid lg:grid-cols-3 gap-6 items-center">
                      {/* Service Info */}
                      <div className="lg:col-span-2">
                        <div className="flex items-center space-x-3 mb-3">
                          <CheckCircle className="w-6 h-6 text-green-500" />
                          <h4 className="text-xl font-bold text-slate-800 dark:text-gray-100">{service.name}</h4>
                        </div>

                        <p className="text-slate-600 dark:text-gray-400 mb-4 leading-relaxed">{service.description}</p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {service.features.map((feature, featureIndex) => (
                            <span
                              key={featureIndex}
                              className="bg-blue-50 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center space-x-6 text-sm text-slate-500 dark:text-gray-500">
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{service.duration}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Shield className="w-4 h-4" />
                            <span>{service.warranty} garanti</span>
                          </div>
                        </div>
                      </div>

                      {/* Price & CTA */}
                      <div className="text-center lg:text-right">
                        <div className="mb-4">
                          <span className="text-3xl sm:text-4xl font-bold text-blue-600">{service.price}</span>
                          <span className="text-slate-500 dark:text-gray-500 text-sm block">başlangıç fiyatı</span>
                        </div>

                        <a
                          href="https://wa.me/905345740909"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary group w-full sm:w-auto"
                        >
                          Randevu Al
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Related Services Navigation */}
        <div className="mt-20 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-800 dark:text-gray-100 mb-4">Özel Hizmet Sayfalarımız</h3>
            <p className="text-lg text-slate-600 dark:text-gray-400 max-w-2xl mx-auto">
              Her hizmet türü için detaylı bilgi ve özel çözümler
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            <Link
              href="/iphone-onarim"
              className="bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 rounded-xl p-4 hover:shadow-lg transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-600 text-center group"
            >
              <Smartphone className="w-8 h-8 text-blue-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium text-slate-800 dark:text-gray-100">iPhone Onarım</span>
            </Link>

            <Link
              href="/ipad-onarim"
              className="bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 rounded-xl p-4 hover:shadow-lg transition-all duration-300 hover:border-purple-300 dark:hover:border-purple-600 text-center group"
            >
              <Tablet className="w-8 h-8 text-purple-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium text-slate-800 dark:text-gray-100">iPad Onarım</span>
            </Link>

            <Link
              href="/macbook-onarim"
              className="bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 rounded-xl p-4 hover:shadow-lg transition-all duration-300 hover:border-green-300 dark:hover:border-green-600 text-center group"
            >
              <Laptop className="w-8 h-8 text-green-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium text-slate-800 dark:text-gray-100">MacBook Onarım</span>
            </Link>

            <Link
              href="/ekran-degisimi"
              className="bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 rounded-xl p-4 hover:shadow-lg transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-600 text-center group"
            >
              <Monitor className="w-8 h-8 text-blue-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium text-slate-800 dark:text-gray-100">Ekran Değişimi</span>
            </Link>

            <Link
              href="/batarya-degisimi"
              className="bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 rounded-xl p-4 hover:shadow-lg transition-all duration-300 hover:border-green-300 dark:hover:border-green-600 text-center group"
            >
              <Battery className="w-8 h-8 text-green-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium text-slate-800 dark:text-gray-100">Batarya Değişimi</span>
            </Link>

            <Link
              href="/anakart-onarim"
              className="bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 rounded-xl p-4 hover:shadow-lg transition-all duration-300 hover:border-orange-300 dark:hover:border-orange-600 text-center group"
            >
              <Cpu className="w-8 h-8 text-orange-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium text-slate-800 dark:text-gray-100">Anakart Onarım</span>
            </Link>

            <Link
              href="/hafiza-yukseltme"
              className="bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 rounded-xl p-4 hover:shadow-lg transition-all duration-300 hover:border-purple-300 dark:hover:border-purple-600 text-center group"
            >
              <HardDrive className="w-8 h-8 text-purple-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium text-slate-800 dark:text-gray-100">Hafıza Yükseltme</span>
            </Link>

            <Link
              href="/su-hasari-onarim"
              className="bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 rounded-xl p-4 hover:shadow-lg transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-600 text-center group"
            >
              <Droplets className="w-8 h-8 text-blue-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium text-slate-800 dark:text-gray-100">Su Hasarı Onarım</span>
            </Link>

            <Link
              href="/entegre-devre-degisimi"
              className="bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 rounded-xl p-4 hover:shadow-lg transition-all duration-300 hover:border-red-300 dark:hover:border-red-600 text-center group"
            >
              <Zap className="w-8 h-8 text-red-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium text-slate-800 dark:text-gray-100">Entegre Devre</span>
            </Link>

            <Link
              href="/kamera-degisimi"
              className="bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 rounded-xl p-4 hover:shadow-lg transition-all duration-300 hover:border-green-300 dark:hover:border-green-600 text-center group"
            >
              <Camera className="w-8 h-8 text-green-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium text-slate-800 dark:text-gray-100">Kamera Değişimi</span>
            </Link>

            <Link
              href="/lazerli-arka-cam-degisimi"
              className="bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 rounded-xl p-4 hover:shadow-lg transition-all duration-300 hover:border-purple-300 dark:hover:border-purple-600 text-center group"
            >
              <Zap className="w-8 h-8 text-purple-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium text-slate-800 dark:text-gray-100">Lazerli Arka Cam</span>
            </Link>

            <Link
              href="/yazilim-guncelleme"
              className="bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 rounded-xl p-4 hover:shadow-lg transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-600 text-center group"
            >
              <Download className="w-8 h-8 text-blue-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium text-slate-800 dark:text-gray-100">Yazılım Güncelleme</span>
            </Link>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h4 className="font-bold text-slate-800 dark:text-gray-100 mb-2">Ücretsiz Teşhis</h4>
            <p className="text-slate-600 dark:text-gray-400 text-sm">Tüm cihazlar için ücretsiz arıza teşhisi</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-blue-600" />
            </div>
            <h4 className="font-bold text-slate-800 dark:text-gray-100 mb-2">Garanti</h4>
            <p className="text-slate-600 dark:text-gray-400 text-sm">Tüm onarımlar garanti kapsamında</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-purple-600" />
            </div>
            <h4 className="font-bold text-slate-800 dark:text-gray-100 mb-2">Hızlı Servis</h4>
            <p className="text-slate-600 dark:text-gray-400 text-sm">Çoğu onarım aynı gün teslim</p>
          </div>
        </div>
      </div>
    </section>
  )
}
