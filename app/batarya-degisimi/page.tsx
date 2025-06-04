import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Battery, CheckCircle, Clock, Shield, Smartphone, Tablet, Laptop } from "lucide-react"

export const metadata = {
  title: "Batarya Değişimi - iPhone, iPad, MacBook | MasterFix",
  description:
    "Profesyonel batarya değişimi hizmetleri. iPhone, iPad ve MacBook batarya sorunlarınızı hızla çözüyoruz. Orijinal parça garantisi ve uzman teknisyen hizmeti.",
}

const BataryaDegisimiPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <main className="pt-40">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Batarya Değişimi Hizmetleri
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              iPhone, iPad ve MacBook cihazlarınızın batarya sorunlarını profesyonel ekibimizle çözün. Orijinal parça
              garantisi ve hızlı servis ile cihazınızı ilk günkü performansına kavuşturun.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+905345740909">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Hemen Ara: 0534 574 09 09
                </button>
              </a>
              <a href="https://wa.me/905345740909" target="_blank" rel="noopener noreferrer">
                <button className="bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 border-2 border-blue-600 dark:border-blue-400 font-bold py-4 px-8 rounded-xl hover:bg-blue-50 dark:hover:bg-gray-700 transform hover:scale-105 transition-all duration-300">
                  WhatsApp İletişim
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* iPhone Batarya Değişimi */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center mb-8">
              <Smartphone className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white">iPhone Batarya Değişimi</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  iPhone bataryanız hızla mı bitiyor? Şarj tutmuyor mu? Cihazınız beklenmedik şekilde mi kapanıyor? Bu
                  sorunlar bataryanızın ömrünü tamamladığının işaretidir. MasterFix olarak, tüm iPhone modellerine
                  uyumlu orijinal kalite bataryalarla değişim hizmeti sunuyoruz.
                </p>

                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  Uzman teknisyenlerimiz, iPhone 6'dan iPhone 15 Pro Max'e kadar tüm modellerde batarya değişimi
                  gerçekleştirmektedir. Değişim işlemi sırasında cihazınızın diğer bileşenlerine zarar verilmemesi için
                  özel dikkat gösterilir ve işlem sonrası kapsamlı test yapılır.
                </p>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-700 dark:text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Orijinal kalite batarya garantisi
                  </li>
                  <li className="flex items-center text-gray-700 dark:text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    30 dakikada hızlı değişim
                  </li>
                  <li className="flex items-center text-gray-700 dark:text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />6 ay servis garantisi
                  </li>
                  <li className="flex items-center text-gray-700 dark:text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Tüm iPhone modelleri desteklenir
                  </li>
                  <li className="flex items-center text-gray-700 dark:text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Ücretsiz batarya sağlık kontrolü
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
                <div className="text-center">
                  <Battery className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">iPhone Batarya Servisi</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Profesyonel iPhone batarya değişimi hizmeti alın
                  </p>
                  <a href="tel:+905345740909">
                    <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl w-full">
                      Hemen Ara
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* iPad Batarya Değişimi */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center mb-8">
              <Tablet className="w-8 h-8 text-purple-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white">iPad Batarya Değişimi</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-8">
                <div className="text-center">
                  <Tablet className="w-16 h-16 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">iPad Batarya Servisi</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Tüm iPad modelleri için profesyonel batarya değişimi
                  </p>
                  <a href="tel:+905345740909">
                    <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 px-6 rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl w-full">
                      Hemen Ara
                    </button>
                  </a>
                </div>
              </div>

              <div>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  iPad'inizin batarya ömrü azaldı mı? Şarj süresi kısaldı mı? iPad batarya değişimi hizmetimizle
                  tabletinizi yeniden canlandırın. iPad Air, iPad Pro, iPad Mini ve standart iPad modelleri için
                  profesyonel batarya değişimi hizmeti sunuyoruz.
                </p>

                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  iPad batarya değişimi, hassas bir işlemdir ve özel ekipman gerektirir. Deneyimli teknisyenlerimiz,
                  iPad'inizin ekranına ve diğer bileşenlerine zarar vermeden güvenli batarya değişimi gerçekleştirir.
                  İşlem sonrası cihazınız fabrika ayarlarındaki performansına kavuşur.
                </p>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-700 dark:text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Tüm iPad modelleri desteklenir
                  </li>
                  <li className="flex items-center text-gray-700 dark:text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Hassas değişim işlemi
                  </li>
                  <li className="flex items-center text-gray-700 dark:text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Ekran hasarı riski yok
                  </li>
                  <li className="flex items-center text-gray-700 dark:text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Yüksek kapasiteli bataryalar
                  </li>
                  <li className="flex items-center text-gray-700 dark:text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Kapsamlı test ve kalite kontrolü
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* MacBook Batarya Değişimi */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center mb-8">
              <Laptop className="w-8 h-8 text-green-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white">MacBook Batarya Değişimi</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  MacBook'unuz şarjda kalmıyor mu? Batarya şişti mi? MacBook batarya sorunları hem performansı etkiler
                  hem de cihazınıza zarar verebilir. MasterFix olarak, MacBook Air ve MacBook Pro modelleri için
                  profesyonel batarya değişimi hizmeti sunuyoruz.
                </p>

                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  MacBook batarya değişimi, özel araçlar ve deneyim gerektiren teknik bir işlemdir. Şişmiş bataryalar
                  özellikle tehlikeli olabilir ve acil müdahale gerektirir. Uzman ekibimiz, güvenli değişim işlemi ile
                  MacBook'unuzu korur ve yeni batarya ile maksimum performans sağlar.
                </p>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-700 dark:text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    MacBook Air ve Pro desteklenir
                  </li>
                  <li className="flex items-center text-gray-700 dark:text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Şişmiş batarya acil müdahalesi
                  </li>
                  <li className="flex items-center text-gray-700 dark:text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Güvenli değişim prosedürü
                  </li>
                  <li className="flex items-center text-gray-700 dark:text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Yüksek kalite batarya garantisi
                  </li>
                  <li className="flex items-center text-gray-700 dark:text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Performans optimizasyonu
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
                <div className="text-center">
                  <Laptop className="w-16 h-16 text-green-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">MacBook Batarya Servisi</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Profesyonel MacBook batarya değişimi ve onarımı
                  </p>
                  <a href="tel:+905345740909">
                    <button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl w-full">
                      Hemen Ara
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Neden MasterFix */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
              Neden MasterFix Batarya Servisi?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Hızlı Servis</h3>
                <p className="text-gray-600 dark:text-gray-300">Çoğu batarya değişimi işlemini aynı gün tamamlıyoruz</p>
              </div>

              <div className="text-center">
                <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Güvenli İşlem</h3>
                <p className="text-gray-600 dark:text-gray-300">Cihazınıza zarar vermeden güvenli batarya değişimi</p>
              </div>

              <div className="text-center">
                <CheckCircle className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Kalite Garantisi</h3>
                <p className="text-gray-600 dark:text-gray-300">Orijinal kalite parça ve 6 ay servis garantisi</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Batarya Sorununuzu Hemen Çözün!</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Uzman ekibimizle iletişime geçin ve cihazınızı ilk günkü performansına kavuşturun
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+905345740909">
                <button className="bg-white text-blue-600 font-bold py-4 px-8 rounded-xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Hemen Ara: 0534 574 09 09
                </button>
              </a>
              <a href="https://wa.me/905345740909" target="_blank" rel="noopener noreferrer">
                <button className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-xl hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-300">
                  WhatsApp İletişim
                </button>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default BataryaDegisimiPage
