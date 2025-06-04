import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Cpu, CheckCircle, Clock, Shield, Phone, Zap, Award, Wrench, Calendar } from "lucide-react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Anakart Onarımı - MasterFix | Profesyonel iPhone iPad MacBook Anakart Tamiri",
  description:
    "iPhone, iPad ve MacBook anakart onarım hizmeti. Mikroişlemci tamiri, entegre devre değişimi, su hasarı onarımı. Uzman teknisyenler, garantili servis. İzmir Karşıyaka.",
  keywords: "anakart onarımı, mikroişlemci tamiri, entegre devre, iPhone anakart, iPad anakart, MacBook anakart, İzmir",
}

export default function AnakartOnarimPage() {
  const features = [
    {
      icon: <Cpu className="h-6 w-6" />,
      title: "Mikroişlemci Onarımı",
      description: "A-serisi ve M-serisi çip onarımları",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Güvenli İşlem",
      description: "Veri kaybı olmadan profesyonel onarım",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Hızlı Teşhis",
      description: "Gelişmiş test cihazları ile hızlı arıza tespiti",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Uzman Ekip",
      description: "Mikroelektronik uzmanı teknisyenler",
    },
  ]

  const services = [
    "iPhone Anakart Onarımı",
    "iPad Anakart Tamiri",
    "MacBook Logic Board Onarımı",
    "Mikroişlemci Değişimi",
    "Entegre Devre Tamiri",
    "Su Hasarı Anakart Onarımı",
    "Güç Yönetimi IC Değişimi",
    "WiFi/Bluetooth Çip Onarımı",
  ]

  const advantages = [
    "Orijinal performans geri kazanımı",
    "Veri kaybı olmadan onarım",
    "Mikroskobik hassasiyette çalışma",
    "Gelişmiş test ve teşhis sistemleri",
    "Orijinal kalite entegre devreler",
    "6 ay garanti kapsamı",
    "Hızlı ve güvenilir servis",
    "Uygun fiyat garantisi",
  ]

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 pt-40">
        <div className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">Anakart Uzmanı</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Anakart Onarımı
            </h1>
            <p className="text-xl text-slate-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed mb-8">
              iPhone, iPad ve MacBook anakart sorunlarınız için profesyonel çözüm. Mikroişlemci tamiri, entegre devre
              değişimi ve su hasarı onarımı ile cihazınızı yeniden hayata döndürüyoruz. Uzman teknisyenlerimiz ve
              gelişmiş ekipmanlarımızla %90 başarı oranı sağlıyoruz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 rounded-xl"
              >
                <Phone className="mr-2 h-5 w-5" />
                Hemen Ara: +90 542 123 45 67
              </Button>
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 rounded-xl dark:from-green-500 dark:to-emerald-500"
              >
                <Wrench className="mr-2 h-5 w-5" />
                Ücretsiz Teşhis
              </Button>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 rounded-xl">
                <CardHeader>
                  <div className="mx-auto bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-full w-fit">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Motherboard Services */}
            <Card className="rounded-xl">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Cpu className="mr-3 h-6 w-6 text-blue-600" />
                  Anakart Onarım Hizmetlerimiz
                </CardTitle>
                <CardDescription>Tüm Apple cihazları için kapsamlı anakart onarım çözümleri</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{service}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Onarım Süreci</h4>
                  <div className="space-y-2 text-sm text-blue-700 dark:text-blue-300">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>1. Detaylı teşhis ve analiz (1-2 saat)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>2. Mikroskobik inceleme (30 dk)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>3. Onarım işlemi (2-4 saat)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>4. Test ve kalite kontrol (1 saat)</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Repair Advantages */}
            <Card className="rounded-xl">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Award className="mr-3 h-6 w-6 text-purple-600" />
                  Anakart Onarımı Avantajları
                </CardTitle>
                <CardDescription>Profesyonel anakart onarımının faydaları</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {advantages.map((advantage, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-purple-500 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{advantage}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Anakart Sorunları</h4>
                  <ul className="space-y-1 text-sm text-purple-700 dark:text-purple-300">
                    <li>• Cihaz açılmıyor</li>
                    <li>• Sürekli yeniden başlatma</li>
                    <li>• Aşırı ısınma problemi</li>
                    <li>• WiFi/Bluetooth çalışmıyor</li>
                    <li>• Şarj olmuyor</li>
                    <li>• Su hasarı sonrası sorunlar</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Detailed Description */}
          <Card className="mb-12 rounded-xl">
            <CardHeader>
              <CardTitle className="text-2xl">Anakart Onarımı Hakkında</CardTitle>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Anakart, cihazınızın kalbi konumundadır ve tüm bileşenlerin iletişim kurduğu merkezi birimdir. iPhone,
                iPad ve MacBook anakart sorunları genellikle karmaşık olup, uzman müdahale gerektirir. MasterFix olarak,
                mikroelektronik alanında uzman teknisyenlerimiz ve gelişmiş ekipmanlarımızla anakart onarımlarında
                sektörde öncü konumdayız.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">
                Anakart Sorunları Nasıl Oluşur?
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                <li>
                  ✓ <strong>Su Hasarı:</strong> Sıvı teması sonucu oksitlenme ve korozyon
                </li>
                <li>
                  ✓ <strong>Aşırı Isınma:</strong> Uzun süreli yoğun kullanım sonucu çip hasarları
                </li>
                <li>
                  ✓ <strong>Fiziksel Darbe:</strong> Düşme sonucu mikroçiplerde kırılma
                </li>
                <li>
                  ✓ <strong>Elektriksel Sorunlar:</strong> Yanlış şarj cihazı kullanımı
                </li>
                <li>
                  ✓ <strong>Yaşlanma:</strong> Zamanla entegre devrelerde bozulma
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">
                MasterFix Anakart Onarımı Avantajları
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                <li>
                  ✓ <strong>Mikroskobik Hassasiyet:</strong> Stereo mikroskop altında hassas çalışma
                </li>
                <li>
                  ✓ <strong>Gelişmiş Ekipman:</strong> BGA rework station ve profesyonel araçlar
                </li>
                <li>
                  ✓ <strong>Orijinal Parçalar:</strong> Apple standartlarında entegre devreler
                </li>
                <li>
                  ✓ <strong>Veri Koruma:</strong> Onarım sırasında veri güvenliği
                </li>
                <li>
                  ✓ <strong>Garanti:</strong> Başarılı onarımlarda 6 ay garanti
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">Onarım Sonrası</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Anakart onarımı tamamlandıktan sonra cihazınız fabrika performansına geri döner. Tüm fonksiyonlar test
                edilir ve uzun süreli kullanım için optimize edilir. Onarım sonrası bakım önerileri ile cihazınızın
                ömrünü uzatabilirsiniz.
              </p>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl">
            <CardContent className="text-center py-12">
              <h2 className="text-3xl font-bold mb-4">Anakartınızı Profesyonel Ellerde Onarın!</h2>
              <p className="text-xl mb-8 opacity-90">
                Uzman teknisyenlerimiz ve gelişmiş ekipmanlarımızla anakart sorunlarınızı çözüyoruz
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 border-2 border-white hover:bg-blue-600 hover:text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 rounded-xl"
                  asChild
                >
                  <a href="https://wa.me/905345740909" target="_blank" rel="noopener noreferrer">
                    <Calendar className="mr-2 h-5 w-5" />
                    Randevu Al
                  </a>
                </Button>
                <Button
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 rounded-xl dark:border-gray-300 dark:hover:bg-gray-300"
                  asChild
                >
                  <a href="https://wa.me/905345740909" target="_blank" rel="noopener noreferrer">
                    WhatsApp ile İletişim
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </>
  )
}
