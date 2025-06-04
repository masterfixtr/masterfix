import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Link from "next/link"
import {
  Tablet,
  Monitor,
  Battery,
  Cpu,
  Volume2,
  Camera,
  CheckCircle,
  Clock,
  Shield,
  Star,
  Zap,
  Calendar,
} from "lucide-react"

export const metadata = {
  title: "iPad Onarım Hizmetleri - Air, Pro, Mini | MasterFix",
  description:
    "Profesyonel iPad onarım hizmetleri. iPad Air, Pro, Mini ekran, batarya, anakart, hoparlör onarımı. Uzman teknisyen ekibi ve orijinal parça garantisi.",
}

const IpadOnarimPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <main className="pt-40">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-900 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
              iPad Onarım Hizmetleri
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              iPad Air, iPad Pro ve iPad Mini için kapsamlı onarım hizmetleri. Ekran değişimi, batarya onarımı, anakart
              tamiri, hoparlör değişimi ve daha fazlası için uzman ekibimizle hizmetinizdeyiz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/905345740909"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Randevu Al
              </a>
              <Link href="/iletisim">
                <button className="bg-white dark:bg-gray-800 text-purple-600 dark:text-pink-400 border-2 border-purple-600 dark:border-pink-400 font-bold py-4 px-8 rounded-xl hover:bg-purple-50 dark:hover:bg-gray-700 transform hover:scale-105 transition-all duration-300">
                  Ücretsiz Teşhis
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Ana Hizmetler */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
              iPad Onarım Hizmetlerimiz
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Ekran Onarımı */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
                <Monitor className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Ekran Onarımı</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Retina ekran değişimi, çatlak cam onarımı, dokunmatik sorunları giderme
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Liquid Retina ekranlar
                  </li>
                  <li className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Apple Pencil uyumluluğu
                  </li>
                  <li className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    True Tone korunur
                  </li>
                </ul>
                <Link href="tel:+905345740909">
                  <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-2 px-4 rounded-lg w-full transform hover:scale-105 transition-all duration-300">
                    Hemen Ara
                  </button>
                </Link>
              </div>

              {/* Batarya Değişimi */}
              <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
                <Battery className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Batarya Değişimi</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Şişmiş batarya değişimi, şarj sorunları, batarya ömrü iyileştirme
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Yüksek kapasiteli bataryalar
                  </li>
                  <li className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Güvenli değişim işlemi
                  </li>
                  <li className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />6 ay garanti
                  </li>
                </ul>
                <Link href="tel:+905345740909">
                  <button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-bold py-2 px-4 rounded-lg w-full transform hover:scale-105 transition-all duration-300">
                    Hemen Ara
                  </button>
                </Link>
              </div>

              {/* Anakart Onarımı */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
                <Cpu className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Anakart Onarımı</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Mikroişlemci onarımı, su hasarı giderme, güç sorunları çözme
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    A-series işlemci tamiri
                  </li>
                  <li className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Su hasarı onarımı
                  </li>
                  <li className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Güç yönetimi tamiri
                  </li>
                </ul>
                <Link href="tel:+905345740909">
                  <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-2 px-4 rounded-lg w-full transform hover:scale-105 transition-all duration-300">
                    Hemen Ara
                  </button>
                </Link>
              </div>

              {/* Hoparlör Onarımı */}
              <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
                <Volume2 className="w-12 h-12 text-orange-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Hoparlör Onarımı</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Ses sistemi onarımı, hoparlör değişimi, mikrofon tamiri
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Stereo hoparlör sistemi
                  </li>
                  <li className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Mikrofon tamiri
                  </li>
                  <li className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Ses kalitesi iyileştirme
                  </li>
                </ul>
                <Link href="tel:+905345740909">
                  <button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-bold py-2 px-4 rounded-lg w-full transform hover:scale-105 transition-all duration-300">
                    Hemen Ara
                  </button>
                </Link>
              </div>

              {/* Kamera Onarımı */}
              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
                <Camera className="w-12 h-12 text-teal-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Kamera Onarımı</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Arka kamera, ön kamera, kamera camı değişimi ve odaklama sorunları
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    12MP kamera sistemi
                  </li>
                  <li className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    FaceTime HD kamera
                  </li>
                  <li className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Kamera camı değişimi
                  </li>
                </ul>
                <Link href="tel:+905345740909">
                  <button className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-bold py-2 px-4 rounded-lg w-full transform hover:scale-105 transition-all duration-300">
                    Hemen Ara
                  </button>
                </Link>
              </div>

              {/* Diğer Onarımlar */}
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
                <Zap className="w-12 h-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Diğer Onarımlar</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Şarj portu, WiFi anteni, Bluetooth ve diğer bileşen onarımları
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Lightning/USB-C port
                  </li>
                  <li className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    WiFi/Bluetooth tamiri
                  </li>
                  <li className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Home button tamiri
                  </li>
                </ul>
                <Link href="tel:+905345740909">
                  <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-2 px-4 rounded-lg w-full transform hover:scale-105 transition-all duration-300">
                    Hemen Ara
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Desteklenen Modeller */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
              Desteklenen iPad Modelleri
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-700 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                  <Tablet className="w-8 h-8 text-purple-600 mr-3" />
                  iPad Pro
                </h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>• 12.9" iPad Pro (1. - 6. nesil)</li>
                  <li>• 11" iPad Pro (1. - 4. nesil)</li>
                  <li>• M1, M2 işlemcili modeller</li>
                  <li>• Liquid Retina XDR ekran</li>
                  <li>• Apple Pencil 2. nesil desteği</li>
                  <li>• Magic Keyboard uyumluluğu</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-700 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                  <Tablet className="w-8 h-8 text-blue-600 mr-3" />
                  iPad Air
                </h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>• iPad Air (3. - 5. nesil)</li>
                  <li>• 10.9" Liquid Retina ekran</li>
                  <li>• A12 - M1 işlemcili</li>
                  <li>• Apple Pencil 2. nesil</li>
                  <li>• Smart Keyboard desteği</li>
                  <li>• Touch ID güvenlik</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-700 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                  <Tablet className="w-8 h-8 text-green-600 mr-3" />
                  iPad & iPad Mini
                </h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>• iPad (7. - 10. nesil)</li>
                  <li>• iPad Mini (5. - 6. nesil)</li>
                  <li>• 10.2" ve 8.3" ekranlar</li>
                  <li>• A10 - A15 işlemciler</li>
                  <li>• Apple Pencil desteği</li>
                  <li>• Smart Cover uyumluluğu</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Neden MasterFix */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
              Neden MasterFix iPad Servisi?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <Clock className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Hızlı Servis</h3>
                <p className="text-gray-600 dark:text-gray-300">Çoğu onarım aynı gün tamamlanır</p>
              </div>

              <div className="text-center">
                <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Güvenli İşlem</h3>
                <p className="text-gray-600 dark:text-gray-300">Verileriniz korunur, güvenli onarım</p>
              </div>

              <div className="text-center">
                <CheckCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Kalite Garantisi</h3>
                <p className="text-gray-600 dark:text-gray-300">Orijinal parça ve 6 ay garanti</p>
              </div>

              <div className="text-center">
                <Star className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Uzman Ekip</h3>
                <p className="text-gray-600 dark:text-gray-300">Apple sertifikalı teknisyenler</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">iPad'inizi Profesyonel Ellerde Onarın!</h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Uzman ekibimizle iletişime geçin ve iPad'inizi ilk günkü performansına kavuşturun
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/905345740909"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-purple-600 font-bold py-4 px-8 rounded-xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center"
              >
                Hemen Ara: 0534 574 09 09
              </a>
              <Link href="/iletisim">
                <button className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-xl hover:bg-white hover:text-purple-600 transform hover:scale-105 transition-all duration-300">
                  Ücretsiz Teşhis
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default IpadOnarimPage
