import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Link from "next/link"
import { Monitor, Smartphone, Tablet, Laptop, CheckCircle, Shield, Clock, Star, Calendar } from "lucide-react"

export const metadata = {
  title: "Ekran Değişimi - iPhone, iPad, MacBook, Ön Cam | MasterFix",
  description:
    "Profesyonel ekran değişimi hizmetleri. iPhone, iPad, MacBook ekran onarımı ve ön cam değişimi. Orijinal kalite parça garantisi ve uzman teknisyen hizmeti.",
}

const EkranDegisimiPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <main className="pt-40">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Ekran Değişimi Hizmetleri
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              iPhone, iPad, MacBook ekran onarımı ve ön cam değişimi hizmetleri. Kırık, çatlak veya hasarlı
              ekranlarınızı orijinal kalite parçalarla yenileyin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/905345740909"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Randevu Al
              </a>
              <Link href="/iletisim">
                <button className="bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 border-2 border-blue-600 dark:border-blue-400 font-bold py-4 px-8 rounded-xl hover:bg-blue-50 dark:hover:bg-gray-700 transform hover:scale-105 transition-all duration-300">
                  Ücretsiz Fiyat Teklifi
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* iPhone Ekran Değişimi */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center mb-8">
              <Smartphone className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white">iPhone Ekran Değişimi</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  iPhone ekranınız kırıldı mı? Dokunmatik çalışmıyor mu? Renk bozuklukları var mı? MasterFix olarak,
                  iPhone 6'dan iPhone 15 Pro Max'e kadar tüm modeller için profesyonel ekran değişimi hizmeti sunuyoruz.
                  Orijinal kalite LCD ve OLED ekranlarla cihazınızı ilk günkü gibi yapıyoruz.
                </p>

                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  Ekran değişimi işlemi sırasında Face ID, Touch ID ve diğer sensörlerin çalışması korunur. Uzman
                  teknisyenlerimiz, hassas değişim işlemi ile cihazınızın su geçirmezlik özelliğini de koruyarak ekran
                  değişimini gerçekleştirir.
                </p>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-700 dark:text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Orijinal kalite LCD/OLED ekranlar
                  </li>
                  <li className="flex items-center text-gray-700 dark:text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Face ID ve Touch ID korunur
                  </li>
                  <li className="flex items-center text-gray-700 dark:text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Su geçirmezlik özelliği korunur
                  </li>
                  <li className="flex items-center text-gray-700 dark:text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    30 dakikada hızlı değişim
                  </li>
                  <li className="flex items-center text-gray-700 dark:text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />6 ay ekran garantisi
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
                <div className="text-center">
                  <Smartphone className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">iPhone Ekran Servisi</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Tüm iPhone modelleri için profesyonel ekran değişimi
                  </p>
                  <a href="tel:+903455740909">
                    <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl w-full">
                      Hemen Ara
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* iPad Ekran Değişimi */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center mb-8">
              <Tablet className="w-8 h-8 text-purple-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white">iPad Ekran Değişimi</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-8">
                <div className="text-center">
                  <Tablet className="w-16 h-16 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">iPad Ekran Servisi</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    iPad Air, Pro, Mini için hassas ekran değişimi
                  </p>
                  <a href="tel:+905551234567">
                    <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 px-6 rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl w-full">
                      Hemen Ara
                    </button>
                  </a>
                </div>
              </div>

              <div>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  iPad ekranınız çatladı mı? Dokunmatik tepki vermiyor mu? iPad ekran değişimi, hassas bir işlemdir ve
                  özel ekipman gerektirir. MasterFix olarak, iPad Air, iPad Pro, iPad Mini ve standart iPad modelleri
                  için profesyonel ekran değişimi hizmeti sunuyoruz.
                </p>

                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  iPad ekranları büyük boyutları nedeniyle özel dikkat gerektirir. Deneyimli teknisyenlerimiz,
                  iPad'inizin anakartına ve diğer bileşenlerine zarar vermeden güvenli ekran değişimi gerçekleştirir.
                  Apple Pencil uyumluluğu ve True Tone özelliği korunur.
                </p>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-700 dark:text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Tüm iPad modelleri desteklenir
                  </li>
                  <li className="flex items-center text-gray-700 dark:text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Apple Pencil uyumluluğu korunur
                  </li>
                  <li className="flex items-center text-gray-700 dark:text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    True Tone özelliği aktif kalır
                  </li>
                  <li className="flex items-center text-gray-700 dark:text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Hassas değişim işlemi
                  </li>
                  <li className="flex items-center text-gray-700 dark:text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Yüksek çözünürlük korunur
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* MacBook Ekran Değişimi */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center mb-8">
              <Laptop className="w-8 h-8 text-green-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white">MacBook Ekran Değişimi</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  MacBook ekranınızda çizikler, çatlaklar veya renk bozuklukları mı var? MacBook Air ve MacBook Pro
                  modelleri için profesyonel ekran değişimi hizmeti sunuyoruz. Retina ekranların hassas yapısı nedeniyle
                  özel dikkat ve deneyim gerektiren bu işlemi uzman ekibimizle gerçekleştiriyoruz.
                </p>

                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  MacBook ekran değişimi sırasında LCD panel, cam ve çerçeve bir bütün olarak değiştirilir. İşlem
                  sonrası ekranınız fabrika ayarlarındaki parlaklık, renk doğruluğu ve netliğe kavuşur. True Tone ve P3
                  renk gamı gibi özellikler korunur.
                </p>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-700 dark:text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    MacBook Air ve Pro desteklenir
                  </li>
                  <li className="flex items-center text-gray-700 dark:text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Retina ekran kalitesi korunur
                  </li>
                  <li className="flex items-center text-gray-700 dark:text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    True Tone özelliği aktif
                  </li>
                  <li className="flex items-center text-gray-700 dark:text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    P3 renk gamı desteği
                  </li>
                  <li className="flex items-center text-gray-700 dark:text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Fabrika kalitesi parlaklık
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
                <div className="text-center">
                  <Laptop className="w-16 h-16 text-green-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">MacBook Ekran Servisi</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Retina ekran kalitesiyle MacBook ekran değişimi
                  </p>
                  <a href="tel:+905551234567">
                    <button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl w-full">
                      Hemen Ara
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ön Cam Değişimi */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center mb-8">
              <Monitor className="w-8 h-8 text-orange-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Ön Cam Değişimi</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-8">
                <div className="text-center">
                  <Monitor className="w-16 h-16 text-orange-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Ön Cam Servisi</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">Sadece ön cam hasarı için ekonomik çözüm</p>
                  <a href="tel:+905551234567">
                    <button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-bold py-3 px-6 rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl w-full">
                      Hemen Ara
                    </button>
                  </a>
                </div>
              </div>

              <div>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  Cihazınızın sadece ön camı mı kırıldı? LCD ekran çalışıyor ancak üst cam çatlak mı? Ön cam değişimi
                  hizmeti ile sadece hasarlı camı değiştirerek ekonomik bir çözüm sunuyoruz. Bu yöntem hem bütçe dostu
                  hem de çevre dostudur.
                </p>

                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  Ön cam değişimi işlemi, özel UV ışık ve optik yapıştırıcılarla gerçekleştirilir. LCD ekran ve
                  dokunmatik katman korunarak sadece üst cam yenilenir. İşlem sonrası cihazınız orijinal görünümüne
                  kavuşur ve su geçirmezlik özelliği korunur.
                </p>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-700 dark:text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Ekonomik çözüm seçeneği
                  </li>
                  <li className="flex items-center text-gray-700 dark:text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    LCD ekran korunur
                  </li>
                  <li className="flex items-center text-gray-700 dark:text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Dokunmatik fonksiyon korunur
                  </li>
                  <li className="flex items-center text-gray-700 dark:text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    UV ışık ile güçlü yapıştırma
                  </li>
                  <li className="flex items-center text-gray-700 dark:text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Su geçirmezlik korunur
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Neden MasterFix */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
              Neden MasterFix Ekran Servisi?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Hızlı Servis</h3>
                <p className="text-gray-600 dark:text-gray-300">Çoğu ekran değişimi 30 dakikada tamamlanır</p>
              </div>

              <div className="text-center">
                <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Güvenli İşlem</h3>
                <p className="text-gray-600 dark:text-gray-300">Cihaz özelliklerini koruyarak güvenli değişim</p>
              </div>

              <div className="text-center">
                <CheckCircle className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Kalite Garantisi</h3>
                <p className="text-gray-600 dark:text-gray-300">Orijinal kalite parça ve 6 ay garanti</p>
              </div>

              <div className="text-center">
                <Star className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Uzman Ekip</h3>
                <p className="text-gray-600 dark:text-gray-300">Deneyimli teknisyenlerle profesyonel hizmet</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ekran Sorununuzu Hemen Çözün!</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Kırık ekranınızı orijinal kalite parçalarla yenileyin, cihazınızı ilk günkü gibi kullanın
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/905345740909"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-600 font-bold py-4 px-8 rounded-xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Randevu Al
              </a>
              <Link href="/iletisim">
                <button className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-xl hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-300">
                  Ücretsiz Fiyat Teklifi
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

export default EkranDegisimiPage
