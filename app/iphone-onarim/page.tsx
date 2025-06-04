import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle,
  Smartphone,
  Shield,
  Clock,
  Phone,
  MessageCircle,
  Calendar,
  Wrench,
  Battery,
  Camera,
  Monitor,
  Cpu,
  Droplets,
  Zap,
  ArrowRight,
  Award,
  ThumbsUp,
  Wifi,
  Volume2,
} from "lucide-react"

export default function IphoneOnarimPage() {
  const services = [
    {
      icon: Monitor,
      title: "iPhone Ekran Değişimi",
      description:
        "Kırık, çatlak veya dokunmatik sorunu yaşayan iPhone ekranlarınızı orijinal kalitede OLED/LCD panellerle değiştiriyoruz. Face ID ve Touch ID fonksiyonları korunur.",
      price: "₺899",
      duration: "30 dakika",
      warranty: "6 ay",
      features: [
        "Orijinal kalite OLED/LCD ekran",
        "Face ID/Touch ID korunur",
        "True Tone teknolojisi",
        "Su geçirmezlik korunur",
        "Dokunmatik hassasiyet testi",
        "Renk kalibrasyonu",
      ],
      popular: true,
    },
    {
      icon: Battery,
      title: "iPhone Batarya Değişimi",
      description:
        "iPhone bataryanızın kapasitesi düştüyse veya şişmişse, orijinal Apple sertifikalı bataryalarla değiştiriyoruz. Batarya sağlığı %100'e çıkar.",
      price: "₺399",
      duration: "20 dakika",
      warranty: "12 ay",
      features: [
        "Orijinal Apple batarya",
        "Yüksek kapasite garanti",
        "Hızlı şarj desteği",
        "Batarya sağlığı testi",
        "Güvenlik sertifikası",
        "Şişme koruması",
      ],
    },
    {
      icon: Camera,
      title: "iPhone Kamera Onarımı",
      description:
        "Ön ve arka kamera modüllerinde yaşanan sorunları çözüyoruz. Bulanık görüntü, odaklama sorunu ve lens çatlakları için profesyonel onarım.",
      price: "₺699",
      duration: "45 dakika",
      warranty: "6 ay",
      features: [
        "Ön/arka kamera onarımı",
        "Lens değişimi",
        "4K video kalitesi",
        "Portre modu testi",
        "Gece modu optimizasyonu",
        "Optik zoom kalibrasyonu",
      ],
    },
    {
      icon: Cpu,
      title: "iPhone Anakart Onarımı",
      description:
        "Anakart arızalarını mikroişlemci seviyesinde onarıyoruz. Veri kaybı olmadan profesyonel müdahale ile cihazınızı hayata döndürüyoruz.",
      price: "₺1.499",
      duration: "2-3 gün",
      warranty: "6 ay",
      features: [
        "Mikroişlemci onarımı",
        "Veri korunur",
        "Chip seviyesi müdahale",
        "Performans optimizasyonu",
        "Termal yönetim",
        "Fonksiyon testleri",
      ],
    },
    {
      icon: Zap,
      title: "iPhone Şarj Soketi Onarımı",
      description:
        "Lightning şarj soketinde yaşanan bağlantı sorunları, gevşeklik ve şarj alamama problemlerini çözüyoruz. Hızlı şarj desteği korunur.",
      price: "₺299",
      duration: "25 dakika",
      warranty: "6 ay",
      features: [
        "Lightning soket değişimi",
        "Hızlı şarj desteği",
        "Veri aktarım testi",
        "Bağlantı optimizasyonu",
        "Toz/nem koruması",
        "Dayanıklılık testi",
      ],
    },
    {
      icon: Volume2,
      title: "iPhone Hoparlör Onarımı",
      description:
        "Hoparlör, mikrofon ve ses kalitesi sorunlarını çözüyoruz. Stereo ses deneyimi ve kristal netliğinde ses kalitesi için profesyonel onarım.",
      price: "₺399",
      duration: "35 dakita",
      warranty: "6 ay",
      features: [
        "Hoparlör değişimi",
        "Mikrofon onarımı",
        "Stereo ses kalitesi",
        "Ses seviyesi optimizasyonu",
        "Titreşim motoru",
        "Ses testi",
      ],
    },
    {
      icon: Droplets,
      title: "iPhone Su Hasarı Onarımı",
      description:
        "Suya düşen veya sıvı teması olan iPhone'ları özel temizlik ve kurutma işlemleriyle kurtarıyoruz. Korozyon temizliği ve komponent değişimi.",
      price: "₺599",
      duration: "1-2 gün",
      warranty: "3 ay",
      features: [
        "Ultrasonik temizlik",
        "Korozyon temizliği",
        "Komponent değişimi",
        "Nem alma işlemi",
        "Fonksiyon testleri",
        "Önleyici bakım",
      ],
    },
    {
      icon: Wifi,
      title: "iPhone Wifi/Bluetooth Onarımı",
      description:
        "Wifi bağlantı sorunları, Bluetooth çalışmaması ve ağ problemlerini çözüyoruz. Antenna ve RF modülü onarımları yapıyoruz.",
      price: "₺449",
      duration: "40 dakika",
      warranty: "6 ay",
      features: [
        "Wifi antenna onarımı",
        "Bluetooth modülü",
        "RF kalibrasyonu",
        "Sinyal güçlendirme",
        "Ağ optimizasyonu",
        "Bağlantı testleri",
      ],
    },
  ]

  const processSteps = [
    {
      step: "01",
      title: "Ücretsiz Teşhis",
      description: "iPhone'unuzu getirin, uzman teknisyenlerimiz ücretsiz olarak teşhis edelim.",
      icon: Wrench,
    },
    {
      step: "02",
      title: "Fiyat Teklifi",
      description: "Tespit edilen arızaya göre şeffaf fiyat teklifi sunuyoruz.",
      icon: Calculator,
    },
    {
      step: "03",
      title: "Profesyonel Onarım",
      description: "Orijinal parçalarla uzman ellerde güvenli onarım işlemi.",
      icon: Wrench,
    },
    {
      step: "04",
      title: "Test & Teslim",
      description: "Kapsamlı testlerden geçen cihazınızı garanti ile teslim ediyoruz.",
      icon: CheckCircle,
    },
  ]

  const supportedModels = [
    { series: "iPhone 15 Serisi", models: ["iPhone 15 Pro Max", "iPhone 15 Pro", "iPhone 15 Plus", "iPhone 15"] },
    { series: "iPhone 14 Serisi", models: ["iPhone 14 Pro Max", "iPhone 14 Pro", "iPhone 14 Plus", "iPhone 14"] },
    { series: "iPhone 13 Serisi", models: ["iPhone 13 Pro Max", "iPhone 13 Pro", "iPhone 13", "iPhone 13 mini"] },
    { series: "iPhone 12 Serisi", models: ["iPhone 12 Pro Max", "iPhone 12 Pro", "iPhone 12", "iPhone 12 mini"] },
    { series: "iPhone 11 Serisi", models: ["iPhone 11 Pro Max", "iPhone 11 Pro", "iPhone 11"] },
    { series: "iPhone X Serisi", models: ["iPhone XS Max", "iPhone XS", "iPhone XR", "iPhone X"] },
    {
      series: "Klasik Modeller",
      models: ["iPhone 8 Plus", "iPhone 8", "iPhone 7 Plus", "iPhone 7", "iPhone 6s Plus", "iPhone 6s"],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <Header />

      {/* Hero Section */}
      <section className="pt-40 lg:pt-44 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 px-6 py-2 text-sm font-medium">
              <Smartphone className="w-4 h-4 mr-2" />
              iPhone Onarım Uzmanı
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-8 leading-tight">
              iPhone Onarım Hizmetleri
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              iPhone'unuzda yaşadığınız tüm sorunları çözmek için buradayız. Ekran değişimi, batarya değişimi, kamera
              onarımı ve daha fazlası için uzman teknisyenlerimizle hizmetinizdeyiz. Orijinal parçalar ve profesyonel
              hizmet garantisi.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
              <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
                <div className="text-3xl font-bold text-blue-600 mb-2">15.000+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Başarılı Onarım</div>
              </div>
              <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
                <div className="text-3xl font-bold text-green-600 mb-2">%98</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Başarı Oranı</div>
              </div>
              <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
                <div className="text-3xl font-bold text-purple-600 mb-2">30 dk</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Ortalama Süre</div>
              </div>
              <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
                <div className="text-3xl font-bold text-orange-600 mb-2">12 ay</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Garanti Süresi</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+905345740909"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Hemen Ara: 0534 574 09 09
              </a>
              <a
                href="https://wa.me/905345740909"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp İletişim
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                iPhone Onarım Hizmetlerimiz
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Tüm iPhone modellerine uyumlu, profesyonel onarım hizmetleri. Orijinal parçalar ve uzman teknisyenlerle
              kaliteli hizmet.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-20">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm group hover:scale-105 ${
                  service.popular ? "ring-2 ring-blue-500 ring-opacity-50" : ""
                }`}
              >
                {service.popular && (
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-2 text-sm font-medium rounded-t-lg">
                    ⭐ En Popüler Hizmet
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <service.icon className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl mb-3 text-gray-900 dark:text-white">{service.title}</CardTitle>
                  <div className="flex items-center justify-center space-x-4 mb-4">
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">{service.price}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {service.duration}
                      </div>
                      <div className="flex items-center gap-1 mt-1">
                        <Shield className="w-4 h-4" />
                        {service.warranty} garanti
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <a
                    href="https://wa.me/905345740909"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
                  >
                    <Calendar className="w-5 h-5" />
                    Randevu Al
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Onarım Sürecimiz
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              iPhone onarım sürecimiz şeffaf, hızlı ve güvenilirdir. Her adımda sizi bilgilendiriyoruz.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Models */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Desteklenen iPhone Modelleri
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              iPhone 6s'den iPhone 15 Pro Max'e kadar tüm modellerde uzman onarım hizmeti veriyoruz.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {supportedModels.map((series, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm group"
              >
                <CardHeader>
                  <CardTitle className="text-xl text-center text-blue-600 dark:text-blue-400 mb-4">
                    {series.series}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {series.models.map((model, modelIndex) => (
                      <div
                        key={modelIndex}
                        className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-slate-700 rounded-lg hover:bg-blue-50 dark:hover:bg-slate-600 transition-colors duration-300"
                      >
                        <Smartphone className="w-5 h-5 text-blue-600" />
                        <span className="text-gray-700 dark:text-gray-300 font-medium">{model}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Neden MasterFix?
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              iPhone onarımında İzmir'in en güvenilir adresi. Kalite, hız ve güvenilirlik bir arada.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm text-center group">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Orijinal Parçalar</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  Sadece orijinal ve Apple sertifikalı parçalar kullanıyoruz. Cihazınızın performansını koruyoruz.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm text-center group">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Hızlı Servis</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  Çoğu onarımı 30 dakikada tamamlıyoruz. Acil durumlar için express servis seçeneği.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm text-center group">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Uzman Teknisyen</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  Apple sertifikalı teknisyenlerimiz 10+ yıl deneyimle en karmaşık onarımları gerçekleştiriyor.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm text-center group">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <ThumbsUp className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Garanti</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  Tüm onarımlarımızda 6 ay ila 12 ay arası garanti veriyoruz. Güvenle tercih edin.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">iPhone'unuzu Uzman Ellere Teslim Edin</h2>
            <p className="text-xl mb-8 opacity-90">
              Profesyonel ekibimiz ve kaliteli parçalarımızla iPhone'unuzu en iyi şekilde onarıyoruz. Ücretsiz teşhis
              için hemen iletişime geçin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+905345740909"
                className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                0534 574 09 09
              </a>
              <a
                href="https://wa.me/905345740909"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

// Calculator icon component (since it's not in lucide-react)
function Calculator({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <rect x="4" y="2" width="16" height="20" rx="2" />
      <line x1="8" y1="6" x2="16" y2="6" />
      <line x1="16" y1="10" x2="16" y2="10" />
      <line x1="12" y1="10" x2="12" y2="10" />
      <line x1="8" y1="10" x2="8" y2="10" />
      <line x1="16" y1="14" x2="16" y2="14" />
      <line x1="12" y1="14" x2="12" y2="14" />
      <line x1="8" y1="14" x2="8" y2="14" />
      <line x1="16" y1="18" x2="16" y2="18" />
      <line x1="12" y1="18" x2="12" y2="18" />
      <line x1="8" y1="18" x2="8" y2="18" />
    </svg>
  )
}
