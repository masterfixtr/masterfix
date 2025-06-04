import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Link from "next/link"
import {
  Laptop,
  Monitor,
  Battery,
  Cpu,
  HardDrive,
  CheckCircle,
  Clock,
  Shield,
  Star,
  Wrench,
  Zap,
  Calendar,
} from "lucide-react"

export const metadata = {
  title: "MacBook Onarım Hizmetleri - Air, Pro | MasterFix",
  description:
    "Profesyonel MacBook onarım hizmetleri. MacBook Air ve Pro ekran, batarya, anakart, klavye onarımı. Uzman teknisyen ekibi ve orijinal parça garantisi.",
}

const MacbookOnarimPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <main className="pt-40">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-700 to-blue-600 bg-clip-text text-transparent mb-6">
              MacBook Onarım Hizmetleri
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              MacBook Air ve MacBook Pro için kapsamlı onarım hizmetleri. Ekran değişimi, batarya onarımı, anakart
              tamiri, klavye değişimi ve daha fazlası için uzman ekibimizle hizmetinizdeyiz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/905345740909"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-gray-700 to-blue-600 hover:from-gray-800 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Randevu Al
              </a>
              <Link href="/iletisim">
                <button className="bg-white dark:bg-gray-800 text-gray-700 dark:text-blue-400 border-2 border-gray-700 dark:border-blue-400 font-bold py-4 px-8 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transform hover:scale-105 transition-all duration-300">
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
              MacBook Onarım Hizmetlerimiz
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Ekran Onarımı */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
                <Monitor className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Ekran Onarımı</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Retina ekran değişimi, çatlak cam onarımı, renk bozukluğu giderme
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    13" ve 16" MacBook Pro
                  </li>
                  <li className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    MacBook Air tüm modeller
                  </li>
                  <li className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    True Tone korunur
                  </li>
                </ul>
                <Link href="tel:+905345740909">
                  <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-2 px-4 rounded-lg w-full transform hover:scale-105 transition-all duration-300">
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
                    Acil şişmiş batarya müdahalesi
                  </li>
                  <li className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Yüksek kapasiteli bataryalar
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
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
                <Cpu className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Anakart Onarımı</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Mikroişlemci onarımı, su hasarı giderme, güç sorunları çözme
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    BGA reballing işlemi
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
                  <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-2 px-4 rounded-lg w-full transform hover:scale-105 transition-all duration-300">
                    Hemen Ara
                  </button>
                </Link>
              </div>

              {/* Klavye Değişimi */}
              <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
                <Wrench className="w-12 h-12 text-orange-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Klavye Değişimi</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Butterfly klavye onarımı, Magic Keyboard değişimi, tuş tamiri
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Butterfly klavye sorunu
                  </li>
                  <li className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Magic Keyboard upgrade
                  </li>
                  <li className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Tekli tuş değişimi
                  </li>
                </ul>
                <Link href="tel:+905345740909">
                  <button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-bold py-2 px-4 rounded-lg w-full transform hover:scale-105 transition-all duration-300">
                    Hemen Ara
                  </button>
                </Link>
              </div>

              {/* SSD Upgrade */}
              <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
                <HardDrive className="w-12 h-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">SSD Upgrade</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Depolama alanı artırma, SSD değişimi, performans iyileştirme
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    512GB - 2TB seçenekleri
                  </li>
                  <li className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Veri transferi dahil
                  </li>
                  <li className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Performans artışı
                  </li>
                </ul>
                <Link href="tel:+905345740909">
                  <button className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-bold py-2 px-4 rounded-lg w-full transform hover:scale-105 transition-all duration-300">
                    Hemen Ara
                  </button>
                </Link>
              </div>

              {/* Diğer Onarımlar */}
              <div className="bg-gradient-to-br from-teal-50 to-green-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
                <Zap className="w-12 h-12 text-teal-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Diğer Onarımlar</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Şarj portu, hoparlör, kamera, WiFi anteni ve diğer bileşen onarımları
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Şarj portu tamiri
                  </li>
                  <li className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Ses sistemi onarımı
                  </li>
                  <li className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    WiFi/Bluetooth tamiri
                  </li>
                </ul>
                <Link href="tel:+905345740909">
                  <button className="bg-gradient-to-r from-teal-600 to-green-600 hover:from-teal-700 hover:to-green-700 text-white font-bold py-2 px-4 rounded-lg w-full transform hover:scale-105 transition-all duration-300">
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
              Desteklenen MacBook Modelleri
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-700 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                  <Laptop className="w-8 h-8 text-blue-600 mr-3" />
                  MacBook Pro
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">13" MacBook Pro</h4>
                    <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                      <li>• 2016 - 2023 modelleri</li>
                      <li>• M1, M2, M3 işlemcili</li>
                      <li>• Intel işlemcili</li>
                      <li>• Touch Bar modelleri</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">16" MacBook Pro</h4>
                    <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                      <li>• 2019 - 2023 modelleri</li>
                      <li>• M1 Pro, M1 Max</li>
                      <li>• M2 Pro, M2 Max</li>
                      <li>• M3 Pro, M3 Max</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-700 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                  <Laptop className="w-8 h-8 text-green-600 mr-3" />
                  MacBook Air
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">13" MacBook Air</h4>
                    <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                      <li>• 2018 - 2023 modelleri</li>
                      <li>• M1, M2 işlemcili</li>
                      <li>• Intel işlemcili</li>
                      <li>• Retina ekranlı</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">15" MacBook Air</h4>
                    <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                      <li>• 2023 modeli</li>
                      <li>• M2 işlemcili</li>
                      <li>• Liquid Retina ekran</li>
                      <li>• MagSafe 3 şarj</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Onarım Süreci */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
              MacBook Onarım Sürecimiz
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">1</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Ücretsiz Teşhis</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  MacBook'unuzu getirin, sorunu tespit edelim ve size detaylı rapor verelim
                </p>
              </div>

              <div className="text-center">
                <div className="bg-green-100 dark:bg-green-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600 dark:text-green-400">2</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Fiyat Teklifi</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Şeffaf fiyatlandırma ile size en uygun çözümü sunuyoruz
                </p>
              </div>

              <div className="text-center">
                <div className="bg-purple-100 dark:bg-purple-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">3</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Profesyonel Onarım</h3>
                <p className="text-gray-600 dark:text-gray-300">Uzman teknisyenlerimiz cihazınızı özenle onarır</p>
              </div>

              <div className="text-center">
                <div className="bg-orange-100 dark:bg-orange-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-600 dark:text-orange-400">4</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Test & Teslim</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Kapsamlı test sonrası MacBook'unuzu garanti ile teslim ediyoruz
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Neden MasterFix */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
              Neden MasterFix MacBook Servisi?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Hızlı Servis</h3>
                <p className="text-gray-600 dark:text-gray-300">Çoğu onarım aynı gün tamamlanır</p>
              </div>

              <div className="text-center">
                <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Güvenli İşlem</h3>
                <p className="text-gray-600 dark:text-gray-300">Verileriniz korunur, güvenli onarım</p>
              </div>

              <div className="text-center">
                <CheckCircle className="w-12 h-12 text-purple-600 mx-auto mb-4" />
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
        <section className="py-16 bg-gradient-to-r from-gray-700 to-blue-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">MacBook'unuzu Profesyonel Ellerde Onarın!</h2>
            <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
              Uzman ekibimizle iletişime geçin ve MacBook'unuzu ilk günkü performansına kavuşturun
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/905345740909"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-gray-700 font-bold py-4 px-8 rounded-xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center"
              >
                Hemen Ara: 0534 574 09 09
              </a>
              <Link href="/iletisim">
                <button className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-xl hover:bg-white hover:text-gray-700 transform hover:scale-105 transition-all duration-300">
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

export default MacbookOnarimPage
