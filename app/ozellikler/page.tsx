import type { Metadata } from "next"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import {
  Zap,
  Shield,
  Smartphone,
  BarChart3,
  Users,
  Clock,
  Award,
  HeartHandshake,
  CheckCircle,
  ArrowRight,
  Target,
  Lightbulb,
  Cog,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Özellikler - Masterfix Apple Cihaz Onarım Hizmetleri",
  description:
    "Masterfix'in sunduğu profesyonel Apple cihaz onarım hizmetlerinin özelliklerini keşfedin. Hızlı servis, güvenli veri saklama, uzman ekip ve daha fazlası.",
  keywords: "apple onarım özellikleri, iphone tamir avantajları, profesyonel servis, güvenli onarım, hızlı teslimat",
  openGraph: {
    title: "Özellikler - Masterfix Apple Cihaz Onarım Hizmetleri",
    description: "Profesyonel Apple cihaz onarım hizmetlerinin tüm özelliklerini keşfedin.",
    url: "https://masterfix.tr/ozellikler",
  },
  alternates: {
    canonical: "https://masterfix.tr/ozellikler",
  },
}

const mainFeatures = [
  {
    icon: Zap,
    title: "Hızlı İş Akışı",
    description:
      "Gelişmiş teknoloji ve deneyimli ekibimizle çoğu onarımı 2 saat içinde tamamlıyoruz. Acil durumlar için ekspres servis.",
    color: "text-yellow-600",
    bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
    borderColor: "border-yellow-200 dark:border-yellow-800",
    stats: "2 saat ortalama",
    details: [
      "Ekspres servis seçeneği",
      "Aynı gün teslimat garantisi",
      "Öncelikli randevu sistemi",
      "Gerçek zamanlı durum takibi",
    ],
  },
  {
    icon: Shield,
    title: "Güvenli Veri Saklama",
    description:
      "ISO 27001 sertifikalı güvenlik protokolleri. Verileriniz şifrelenir ve hiçbir zaman üçüncü taraflarla paylaşılmaz.",
    color: "text-green-600",
    bgColor: "bg-green-50 dark:bg-green-900/20",
    borderColor: "border-green-200 dark:border-green-800",
    stats: "ISO 27001 sertifikalı",
    details: ["256-bit AES şifreleme", "Veri gizliliği garantisi", "Güvenli veri transferi", "KVKK uyumlu işlemler"],
  },
  {
    icon: Smartphone,
    title: "Mobil Uyumluluk",
    description:
      "Kapıda servis ve mobil onarım hizmeti. İstanbul genelinde ücretsiz kurye ile cihazınızı alıp teslim ediyoruz.",
    color: "text-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
    borderColor: "border-blue-200 dark:border-blue-800",
    stats: "İstanbul geneli",
    details: ["Ücretsiz kurye hizmeti", "Kapıda ödeme seçeneği", "Mobil onarım aracı", "GPS takip sistemi"],
  },
  {
    icon: BarChart3,
    title: "Gerçek Zamanlı Takip",
    description:
      "SMS ve WhatsApp ile anlık durum güncellemeleri. Onarım sürecinin her aşamasını canlı olarak takip edin.",
    color: "text-purple-600",
    bgColor: "bg-purple-50 dark:bg-purple-900/20",
    borderColor: "border-purple-200 dark:border-purple-800",
    stats: "Anlık bildirim",
    details: ["SMS bildirimleri", "WhatsApp entegrasyonu", "E-posta güncellemeleri", "Mobil uygulama desteği"],
  },
  {
    icon: Users,
    title: "Uzman Ekip",
    description:
      "Apple sertifikalı teknisyenler ve 10+ yıl deneyim. Sürekli eğitim alan ekibimiz en son teknolojileri kullanır.",
    color: "text-indigo-600",
    bgColor: "bg-indigo-50 dark:bg-indigo-900/20",
    borderColor: "border-indigo-200 dark:border-indigo-800",
    stats: "10+ yıl deneyim",
    details: [
      "Apple sertifikalı teknisyenler",
      "Sürekli eğitim programları",
      "Uzman ekip liderleri",
      "Kalite kontrol süreçleri",
    ],
  },
  {
    icon: Clock,
    title: "7/24 Destek",
    description:
      "Hafta sonu dahil 7/24 müşteri desteği. Acil durumlar için 24 saat içinde randevu garantisi sunuyoruz.",
    color: "text-red-600",
    bgColor: "bg-red-50 dark:bg-red-900/20",
    borderColor: "border-red-200 dark:border-red-800",
    stats: "7/24 hizmet",
    details: ["Kesintisiz müşteri desteği", "Acil durum hattı", "Hafta sonu hizmeti", "Çok dilli destek"],
  },
  {
    icon: Award,
    title: "Kalite Garantisi",
    description: "Orijinal ve A+ kalite parçalar. Tüm onarımlar için 12 aya kadar garanti ve ücretsiz kontrol hizmeti.",
    color: "text-orange-600",
    bgColor: "bg-orange-50 dark:bg-orange-900/20",
    borderColor: "border-orange-200 dark:border-orange-800",
    stats: "12 ay garanti",
    details: ["Orijinal Apple parçaları", "A+ kalite alternatifler", "Ücretsiz kontrol hizmeti", "Garanti sertifikası"],
  },
  {
    icon: HeartHandshake,
    title: "Müşteri Memnuniyeti",
    description:
      "%98 müşteri memnuniyeti oranı. Binlerce mutlu müşteri ve 5 yıldızlı değerlendirmeler ile güvenilir hizmet.",
    color: "text-pink-600",
    bgColor: "bg-pink-50 dark:bg-pink-900/20",
    borderColor: "border-pink-200 dark:border-pink-800",
    stats: "%98 memnuniyet",
    details: [
      "5 yıldızlı değerlendirmeler",
      "Müşteri geri bildirim sistemi",
      "Sürekli iyileştirme",
      "Memnuniyet garantisi",
    ],
  },
]

const additionalFeatures = [
  {
    icon: Target,
    title: "Hassas Teşhis",
    description: "Gelişmiş teşhis ekipmanları ile problemin kaynağını doğru tespit ediyoruz.",
  },
  {
    icon: Lightbulb,
    title: "İnovatif Çözümler",
    description: "Standart dışı problemler için yaratıcı ve etkili çözümler geliştiriyoruz.",
  },
  {
    icon: Cog,
    title: "Özelleştirilmiş Hizmet",
    description: "Her müşterinin ihtiyacına özel, kişiselleştirilmiş onarım planları.",
  },
]

export default function OzelliklerPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Award className="w-4 h-4" />
              <span>Neden Masterfix?</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Özelliklerimiz
              </span>
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
              Apple cihazlarınız için sunduğumuz profesyonel onarım hizmetlerinin tüm özelliklerini keşfedin. Modern
              teknoloji, deneyimli ekip ve müşteri odaklı yaklaşımımızla fark yaratıyoruz.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">15K+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Başarılı Onarım</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">%98</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Memnuniyet Oranı</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">2h</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Ortalama Süre</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">7/24</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Destek Hizmeti</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Ana Özelliklerimiz</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Masterfix'i tercih etmeniz için 8 önemli neden
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mainFeatures.map((feature, index) => (
              <div
                key={index}
                className={`${feature.bgColor} border-2 ${feature.borderColor} rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 group relative overflow-hidden`}
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-transparent to-white/10 dark:to-gray-800/10 rounded-bl-full"></div>

                <div
                  className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform relative z-10 border ${feature.borderColor}`}
                >
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>

                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">{feature.description}</p>

                  <div
                    className={`inline-flex items-center space-x-1 ${feature.bgColor} ${feature.color} px-3 py-1 rounded-full text-sm font-medium mb-4 border ${feature.borderColor}`}
                  >
                    <span>{feature.stats}</span>
                  </div>

                  <div className="space-y-2">
                    {feature.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Ek Özellikler</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Hizmet kalitemizi artıran diğer özelliklerimiz</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {additionalFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">Bu Özellikleri Deneyimleyin</h2>
            <p className="text-xl text-blue-100 mb-8">
              Profesyonel Apple cihaz onarım hizmetimizin tüm avantajlarından yararlanın
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-secondary group">
                Hemen Randevu Al
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-outline-white">Ücretsiz Değerlendirme</button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
