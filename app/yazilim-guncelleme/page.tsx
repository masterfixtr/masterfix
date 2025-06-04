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
  Download,
  RefreshCw,
} from "lucide-react"

export default function YazilimGuncellemePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <Header />

      {/* Hero Section */}
      <section className="pt-40 lg:pt-44 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
              <RefreshCw className="w-4 h-4 mr-2" />
              Yazılım Hizmetleri
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6">
              Yazılım Güncelleme
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              iPhone, iPad ve MacBook cihazlarınız için profesyonel yazılım güncelleme hizmeti. En son iOS, iPadOS ve
              macOS sürümlerine güvenli geçiş yapın.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                Hemen Ara: 0532 123 45 67
              </button>
              <button className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                <MessageCircle className="w-5 h-5" />
                WhatsApp İletişim
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Güvenli Yazılım Güncelleme
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Cihazınızın performansını artırmak ve güvenlik açıklarını kapatmak için profesyonel yazılım güncelleme
                hizmeti sunuyoruz. Veri kaybı olmadan güvenli güncelleme garantisi.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Veri kaybı olmadan güncelleme</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">En son iOS/macOS sürümleri</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Performans optimizasyonu</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Güvenlik güncellemeleri</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <Download className="w-24 h-24 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Yazılım Güncelleme</h3>
                  <p className="text-gray-600 dark:text-gray-300">Güvenli ve hızlı güncelleme</p>
                </div>
              </div>
            </div>
          </div>

          {/* Service Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Güvenli Güncelleme</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600 dark:text-gray-300">
                  Verilerinizi koruyarak güvenli yazılım güncelleme işlemi
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Hızlı İşlem</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600 dark:text-gray-300">
                  Profesyonel ekipmanlarla hızlı güncelleme süreci
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Tüm Cihazlar</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600 dark:text-gray-300">
                  iPhone, iPad ve MacBook için uyumlu güncelleme hizmeti
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Supported Devices */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-12">
              Desteklenen Cihazlar
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <CardTitle className="text-xl text-blue-600">iPhone Serisi</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>• iPhone 15 Pro Max / Pro</li>
                    <li>• iPhone 15 / Plus</li>
                    <li>• iPhone 14 Pro Max / Pro</li>
                    <li>• iPhone 14 / Plus</li>
                    <li>• iPhone 13 serisi</li>
                    <li>• iPhone 12 serisi</li>
                    <li>• iPhone 11 serisi</li>
                    <li>• iPhone X serisi</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <CardTitle className="text-xl text-purple-600">iPad Serisi</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>• iPad Pro (M2/M1)</li>
                    <li>• iPad Air (M1/A14)</li>
                    <li>• iPad (10. nesil)</li>
                    <li>• iPad mini (A15)</li>
                    <li>• Eski nesil iPad'ler</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <CardTitle className="text-xl text-indigo-600">MacBook Serisi</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>• MacBook Pro (M3/M2/M1)</li>
                    <li>• MacBook Air (M2/M1)</li>
                    <li>• Intel MacBook'lar</li>
                    <li>• iMac (M3/M1)</li>
                    <li>• Mac mini</li>
                    <li>• Mac Studio</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Pricing */}
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
              Uygun Fiyat, Profesyonel Hizmet
            </h2>
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white max-w-md mx-auto">
              <h3 className="text-2xl font-bold mb-4">Yazılım Güncelleme</h3>
              <div className="text-4xl font-bold mb-4">₺149'dan başlayan fiyatlarla</div>
              <p className="text-blue-100 mb-6">Cihaz modeline göre değişkenlik gösterir</p>
              <a
                href="https://wa.me/905345740909"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                Randevu Al
              </a>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Cihazınızı En Son Sürüme Güncelleyin
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Güvenli ve profesyonel yazılım güncelleme hizmeti için hemen iletişime geçin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                0532 123 45 67
              </button>
              <button className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
