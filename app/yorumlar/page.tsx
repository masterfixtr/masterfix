import type { Metadata } from "next"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import {
  Star,
  Quote,
  CheckCircle,
  MapPin,
  Calendar,
  Smartphone,
  Tablet,
  Laptop,
  ThumbsUp,
  MessageCircle,
  Award,
  TrendingUp,
} from "lucide-react"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Müşteri Yorumları - Masterfix Apple Cihaz Onarım Deneyimleri",
  description:
    "Masterfix Apple cihaz onarım hizmetleri hakkında gerçek müşteri yorumları ve deneyimleri. iPhone, iPad, MacBook onarım değerlendirmeleri.",
  keywords:
    "masterfix yorumlar, apple onarım deneyimleri, müşteri memnuniyeti, iphone onarım yorumları, ipad tamir değerlendirmeleri",
  openGraph: {
    title: "Müşteri Yorumları - Masterfix Apple Cihaz Onarım Deneyimleri",
    description: "Gerçek müşteri deneyimleri ve değerlendirmeleri ile Masterfix'in kaliteli hizmetini keşfedin.",
    url: "https://masterfix.tr/yorumlar",
  },
  alternates: {
    canonical: "https://masterfix.tr/yorumlar",
  },
}

const testimonials = [
  {
    id: 1,
    name: "Ahmet Yılmaz",
    role: "Yazılım Geliştirici",
    company: "Tech Startup",
    location: "Beşiktaş, İstanbul",
    content:
      "MacBook Pro'mun anakartı arızalanmıştı ve verilerimi kaybetmekten korkuyordum. Masterfix ekibi sadece 2 günde onarımı tamamladı ve tüm verilerim korundu. Profesyonel yaklaşımları ve şeffaf fiyatlandırmaları çok etkileyici. Kesinlikle tavsiye ederim!",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
    device: "MacBook Pro 2021 M1",
    service: "Anakart Onarımı",
    date: "2 hafta önce",
    verified: true,
    helpful: 24,
    deviceIcon: Laptop,
  },
  {
    id: 2,
    name: "Fatma Demir",
    role: "Grafik Tasarımcı",
    company: "Kreatif Ajans",
    location: "Kadıköy, İstanbul",
    content:
      "iPhone 14 Pro'mun ekranı kırılmıştı ve acil ihtiyacım vardı. Aynı gün servis aldım ve ekran değişimi sadece 30 dakika sürdü. Orijinal kalitede ekran kullandıkları için fark bile anlaşılmıyor. Müşteri hizmetleri de çok ilgili ve yardımcı.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
    device: "iPhone 14 Pro",
    service: "Ekran Değişimi",
    date: "1 hafta önce",
    verified: true,
    helpful: 18,
    deviceIcon: Smartphone,
  },
  {
    id: 3,
    name: "Mehmet Kaya",
    role: "İş İnsanı",
    company: "Kaya Holding",
    location: "Levent, İstanbul",
    content:
      "iPad Pro'mun bataryası şişmişti ve güvenlik riski oluşturuyordu. Masterfix'in uzman ekibi sorunu hemen teşhis etti ve güvenli bir şekilde batarya değişimini gerçekleştirdi. 12 ay garanti verdikleri için içim rahat. Profesyonel bir hizmet.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
    device: "iPad Pro 12.9",
    service: "Batarya Değişimi",
    date: "3 hafta önce",
    verified: true,
    helpful: 31,
    deviceIcon: Tablet,
  },
  {
    id: 4,
    name: "Ayşe Özkan",
    role: "Öğretmen",
    company: "İstanbul Üniversitesi",
    location: "Beyazıt, İstanbul",
    content:
      "iPhone 13'ümün kamerası çalışmıyordu ve önemli fotoğraflarım vardı. Masterfix'te hem kamera onarımını yaptılar hem de verilerimi kurtardılar. Fiyatları da çok makul. Hızlı ve kaliteli hizmet için teşekkürler!",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
    device: "iPhone 13",
    service: "Kamera Onarımı",
    date: "1 ay önce",
    verified: true,
    helpful: 15,
    deviceIcon: Smartphone,
  },
  {
    id: 5,
    name: "Can Arslan",
    role: "Mimar",
    company: "Freelancer",
    location: "Şişli, İstanbul",
    content:
      "MacBook Air'imin klavyesi bozulmuştu ve çalışamıyordum. Masterfix'te aynı gün klavye değişimi yaptılar. Yeni klavye çok sessiz ve rahat. Backlight özelliği de mükemmel çalışıyor. Hizmet kalitesi gerçekten üst düzey.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
    device: "MacBook Air M2",
    service: "Klavye Değişimi",
    date: "2 ay önce",
    verified: true,
    helpful: 22,
    deviceIcon: Laptop,
  },
  {
    id: 6,
    name: "Zeynep Aktaş",
    role: "Pazarlama Uzmanı",
    company: "Digital Agency",
    location: "Etiler, İstanbul",
    content:
      "iPad mini'min şarj soketi bozulmuştu. Masterfix'te USB-C soket değişimi yaptırdım. Artık hızlı şarj özelliği de çalışıyor. Teknisyenler çok bilgili ve işlerini severek yapıyorlar. Kesinlikle tekrar tercih edeceğim.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
    device: "iPad mini 6",
    service: "Şarj Soketi Onarımı",
    date: "1.5 ay önce",
    verified: true,
    helpful: 19,
    deviceIcon: Tablet,
  },
]

const stats = [
  { label: "Ortalama Değerlendirme", value: "4.9/5", icon: Star, color: "text-yellow-500" },
  { label: "Toplam Değerlendirme", value: "2,847", icon: MessageCircle, color: "text-blue-500" },
  { label: "Tekrar Müşteri Oranı", value: "%94", icon: TrendingUp, color: "text-green-500" },
  { label: "Doğrulanmış Yorumlar", value: "%100", icon: CheckCircle, color: "text-purple-500" },
]

const serviceStats = [
  { service: "iPhone Onarımı", rating: 4.9, reviews: 1247, icon: Smartphone },
  { service: "iPad Onarımı", rating: 4.8, reviews: 856, icon: Tablet },
  { service: "MacBook Onarımı", rating: 4.9, reviews: 744, icon: Laptop },
]

export default function YorumlarPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-purple-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4" />
              <span>Müşteri Deneyimleri</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Müşteri Yorumları
              </span>
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
              Binlerce müşterimizin gerçek deneyimleri ve değerlendirmeleri ile güvenilir hizmet kalitemizi keşfedin.
              Her yorum doğrulanmış ve gerçektir.
            </p>

            <div className="flex items-center justify-center space-x-2 mb-8">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-8 h-8 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-2xl font-bold text-gray-900 dark:text-white ml-4">4.9/5</span>
              <span className="text-gray-600 dark:text-gray-400">2,847 değerlendirme</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div
                  className={`w-16 h-16 ${
                    stat.color === "text-yellow-500"
                      ? "bg-yellow-100 dark:bg-yellow-900/50"
                      : stat.color === "text-blue-500"
                        ? "bg-blue-100 dark:bg-blue-900/50"
                        : stat.color === "text-green-500"
                          ? "bg-green-100 dark:bg-green-900/50"
                          : "bg-purple-100 dark:bg-purple-900/50"
                  } rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</div>
                <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Ratings */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Hizmet Bazında Değerlendirmeler</h2>
            <p className="text-gray-600 dark:text-gray-400">Her hizmet kategorimiz için ayrı değerlendirme puanları</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {serviceStats.map((service, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg text-center">
                <service.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{service.service}</h3>
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-lg font-bold text-gray-900 dark:text-white">{service.rating}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400">{service.reviews} değerlendirme</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Müşteri Deneyimleri</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Gerçek müşterilerimizin detaylı deneyim paylaşımları
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 border border-gray-200 dark:border-gray-700"
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <div className="flex items-center space-x-2">
                    {testimonial.verified && (
                      <div className="flex items-center space-x-1 bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 px-2 py-1 rounded-full text-xs">
                        <CheckCircle className="w-3 h-3" />
                        <span>Doğrulanmış</span>
                      </div>
                    )}
                    <Quote className="w-8 h-8 text-blue-200 dark:text-blue-800" />
                  </div>
                </div>

                {/* Content */}
                <p className="text-gray-700 dark:text-gray-300 mb-6 italic leading-relaxed">"{testimonial.content}"</p>

                {/* Service Info */}
                <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4 mb-6">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <testimonial.deviceIcon className="w-4 h-4 text-blue-500" />
                      <div>
                        <span className="text-gray-500 dark:text-gray-400">Cihaz:</span>
                        <div className="font-medium text-gray-900 dark:text-white">{testimonial.device}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Award className="w-4 h-4 text-green-500" />
                      <div>
                        <span className="text-gray-500 dark:text-gray-400">Hizmet:</span>
                        <div className="font-medium text-gray-900 dark:text-white">{testimonial.service}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* User Info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={`${testimonial.name} profil fotoğrafı`}
                        width={48}
                        height={48}
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                      <div className="flex items-center space-x-1 text-xs text-gray-500 dark:text-gray-500">
                        <MapPin className="w-3 h-3" />
                        <span>{testimonial.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="flex items-center space-x-1 text-xs text-gray-500 dark:text-gray-500 mb-2">
                      <Calendar className="w-3 h-3" />
                      <span>{testimonial.date}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-xs text-gray-500 dark:text-gray-500">
                      <ThumbsUp className="w-3 h-3" />
                      <span>{testimonial.helpful} kişi faydalı buldu</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Review CTA */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">Siz de Deneyiminizi Paylaşın</h2>
            <p className="text-xl text-blue-100 mb-8">
              Hizmetimizden memnun kaldıysanız, deneyiminizi diğer müşterilerimizle paylaşın. Her değerlendirme bizim
              için değerlidir.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-secondary group">
                Değerlendirme Yap
                <Star className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </button>
              <button className="btn-outline-white">Google'da Değerlendir</button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
