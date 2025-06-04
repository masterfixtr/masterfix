import { Zap, Shield, Smartphone, BarChart3, Users, Clock, Award, HeartHandshake } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Hızlı İş Akışı",
    description:
      "Gelişmiş teknoloji ve deneyimli ekibimizle çoğu onarımı 2 saat içinde tamamlıyoruz. Acil durumlar için ekspres servis.",
    color: "text-yellow-600",
    bgColor: "bg-yellow-50",
    borderColor: "border-yellow-200",
    stats: "2 saat ortalama",
  },
  {
    icon: Shield,
    title: "Güvenli Veri Saklama",
    description:
      "ISO 27001 sertifikalı güvenlik protokolleri. Verileriniz şifrelenir ve hiçbir zaman üçüncü taraflarla paylaşılmaz.",
    color: "text-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    stats: "ISO 27001 sertifikalı",
  },
  {
    icon: Smartphone,
    title: "Mobil Uyumluluk",
    description:
      "Kapıda servis ve mobil onarım hizmeti. İstanbul genelinde ücretsiz kurye ile cihazınızı alıp teslim ediyoruz.",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    stats: "İstanbul geneli",
  },
  {
    icon: BarChart3,
    title: "Gerçek Zamanlı Takip",
    description:
      "SMS ve WhatsApp ile anlık durum güncellemeleri. Onarım sürecinin her aşamasını canlı olarak takip edin.",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    stats: "Anlık bildirim",
  },
  {
    icon: Users,
    title: "Uzman Ekip",
    description:
      "Apple sertifikalı teknisyenler ve 10+ yıl deneyim. Sürekli eğitim alan ekibimiz en son teknolojileri kullanır.",
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
    borderColor: "border-indigo-200",
    stats: "10+ yıl deneyim",
  },
  {
    icon: Clock,
    title: "7/24 Destek",
    description:
      "Hafta sonu dahil 7/24 müşteri desteği. Acil durumlar için 24 saat içinde randevu garantisi sunuyoruz.",
    color: "text-red-600",
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
    stats: "7/24 hizmet",
  },
  {
    icon: Award,
    title: "Kalite Garantisi",
    description: "Orijinal ve A+ kalite parçalar. Tüm onarımlar için 12 aya kadar garanti ve ücretsiz kontrol hizmeti.",
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
    stats: "12 ay garanti",
  },
  {
    icon: HeartHandshake,
    title: "Müşteri Memnuniyeti",
    description:
      "%98 müşteri memnuniyeti oranı. Binlerce mutlu müşteri ve 5 yıldızlı değerlendirmeler ile güvenilir hizmet.",
    color: "text-pink-600",
    bgColor: "bg-pink-50",
    borderColor: "border-pink-200",
    stats: "%98 memnuniyet",
  },
]

export default function Features() {
  return (
    <section id="ozellikler" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Award className="w-4 h-4" />
            <span>Neden Masterfix?</span>
          </div>
          <h2 className="text-5xl lg:text-7xl font-bold mb-6">
            İş Süreçlerinizi{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Dijitalleştirin
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Modern teknoloji, deneyimli ekip ve müşteri odaklı yaklaşımımızla Apple cihazlarınız için en kaliteli onarım
            hizmetini sunuyoruz. Güvenilirlik, hız ve mükemmellik bir arada.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-white border-2 ${feature.borderColor} rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 group relative overflow-hidden`}
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-transparent to-slate-50 rounded-bl-full"></div>

              <div
                className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform relative z-10`}
              >
                <feature.icon className={`w-8 h-8 ${feature.color}`} />
              </div>

              <div className="relative z-10">
                <h3 className="text-xl font-bold text-slate-800 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-4">{feature.description}</p>

                <div
                  className={`inline-flex items-center space-x-1 ${feature.bgColor} ${feature.color} px-3 py-1 rounded-full text-sm font-medium`}
                >
                  <span>{feature.stats}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Stats */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-8">Rakamlarla Masterfix</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">15,000+</div>
              <div className="text-blue-100">Başarılı Onarım</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5,000+</div>
              <div className="text-blue-100">Mutlu Müşteri</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Uzman Teknisyen</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">7</div>
              <div className="text-blue-100">Yıllık Deneyim</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
