import { Star, Quote, CheckCircle, MapPin } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "Ahmet Yılmaz",
    role: "Yazılım Geliştirici",
    company: "Tech Startup",
    location: "Beşiktaş, İstanbul",
    content:
      "MacBook Pro'mun anakartı arızalanmıştı ve verilerimi kaybetmekten korkuyordum. Masterfix ekibi sadece 2 günde onarımı tamamladı ve tüm verilerim korundu. Profesyonel yaklaşımları ve şeffaf fiyatlandırmaları çok etkileyici.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
    device: "MacBook Pro 2021",
    service: "Anakart Onarımı",
    date: "2 hafta önce",
  },
  {
    name: "Fatma Demir",
    role: "Grafik Tasarımcı",
    company: "Kreatif Ajans",
    location: "Kadıköy, İstanbul",
    content:
      "iPhone 14 Pro'mun ekranı kırılmıştı ve acil ihtiyacım vardı. Aynı gün servis aldım ve ekran değişimi sadece 30 dakika sürdü. Orijinal kalitede ekran kullandıkları için fark bile anlaşılmıyor. Kesinlikle tavsiye ederim.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
    device: "iPhone 14 Pro",
    service: "Ekran Değişimi",
    date: "1 hafta önce",
  },
  {
    name: "Mehmet Kaya",
    role: "İş İnsanı",
    company: "Kaya Holding",
    location: "Levent, İstanbul",
    content:
      "iPad Pro'mun bataryası şişmişti ve güvenlik riski oluşturuyordu. Masterfix'in uzman ekibi sorunu hemen teşhis etti ve güvenli bir şekilde batarya değişimini gerçekleştirdi. 12 ay garanti verdikleri için içim rahat.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
    device: "iPad Pro 12.9",
    service: "Batarya Değişimi",
    date: "3 hafta önce",
  },
]

const stats = [
  { label: "Ortalama Değerlendirme", value: "4.9/5", icon: Star },
  { label: "Toplam Değerlendirme", value: "2,847", icon: CheckCircle },
  { label: "Tekrar Müşteri Oranı", value: "%94", icon: CheckCircle },
]

export default function Testimonials() {
  return (
    <section id="yorumlar" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4" />
            <span>Müşteri Deneyimleri</span>
          </div>
          <h2 className="text-5xl lg:text-7xl font-bold mb-6">
            Müşterilerimiz{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Ne Diyor?
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Binlerce müşterimizin deneyimleri ve değerlendirmeleri ile güvenilir hizmet kalitemizi keşfedin.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-slate-800 mb-2">{stat.value}</div>
              <div className="text-slate-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 border border-slate-200"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-blue-200" />
              </div>

              {/* Content */}
              <p className="text-slate-700 mb-6 italic leading-relaxed">"{testimonial.content}"</p>

              {/* Service Info */}
              <div className="bg-slate-50 rounded-xl p-4 mb-6">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-slate-500">Cihaz:</span>
                    <div className="font-medium text-slate-800">{testimonial.device}</div>
                  </div>
                  <div>
                    <span className="text-slate-500">Hizmet:</span>
                    <div className="font-medium text-slate-800">{testimonial.service}</div>
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
                    <h4 className="font-bold text-slate-800">{testimonial.name}</h4>
                    <p className="text-sm text-slate-600">{testimonial.role}</p>
                    <div className="flex items-center space-x-1 text-xs text-slate-500">
                      <MapPin className="w-3 h-3" />
                      <span>{testimonial.location}</span>
                    </div>
                  </div>
                </div>
                <div className="text-xs text-slate-500">{testimonial.date}</div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Siz de Deneyiminizi Paylaşın</h3>
            <p className="text-slate-600 mb-6">
              Hizmetimizden memnun kaldıysanız, deneyiminizi diğer müşterilerimizle paylaşın.
            </p>
            <button className="btn bg-blue-600 hover:bg-blue-700 text-white border-none">Değerlendirme Yap</button>
          </div>
        </div>
      </div>
    </section>
  )
}
