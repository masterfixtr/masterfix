import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  MicroscopeIcon as Microchip,
  CheckCircle,
  Clock,
  Shield,
  Phone,
  Zap,
  Award,
  Settings,
  Calendar,
} from "lucide-react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Entegre Devre Değişimi - MasterFix | IC Değişimi ve Mikroçip Tamiri",
  description:
    "iPhone, iPad ve MacBook entegre devre değişimi hizmeti. IC değişimi, mikroçip tamiri, BGA reballing. Profesyonel mikroelektronik onarım. İzmir Karşıyaka.",
  keywords: "entegre devre değişimi, IC değişimi, mikroçip tamiri, BGA reballing, mikroelektronik onarım, İzmir",
}

export default function EntegreDvreDegisimiPage() {
  const features = [
    {
      icon: <Microchip className="h-6 w-6" />,
      title: "IC Değişimi",
      description: "Tüm entegre devre türlerinde profesyonel değişim",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "BGA Reballing",
      description: "Ball Grid Array çiplerde yeniden top dizimi",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Mikroskobik Çalışma",
      description: "Stereo mikroskop altında hassas işlemler",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Uzman Teknisyen",
      description: "Mikroelektronik alanında sertifikalı uzmanlar",
    },
  ]

  const services = [
    "Güç Yönetimi IC Değişimi",
    "Ses IC Değişimi",
    "WiFi/Bluetooth Çip Değişimi",
    "Dokunmatik IC Değişimi",
    "Şarj IC Değişimi",
    "Kamera IC Değişimi",
    "Ekran IC Değişimi",
    "BGA Reballing İşlemi",
  ]

  const icTypes = [
    "Power Management IC (PMIC)",
    "Audio Codec IC",
    "WiFi/Bluetooth Combo IC",
    "Touch Controller IC",
    "Charging IC",
    "Camera ISP IC",
    "Display Driver IC",
    "Baseband Processor",
  ]

  const advantages = [
    "Orijinal kalite entegre devreler",
    "Mikroskobik hassasiyette çalışma",
    "BGA rework station kullanımı",
    "Termal profil optimizasyonu",
    "Kalite kontrol testleri",
    "6 ay garanti kapsamı",
    "Hızlı ve güvenilir servis",
    "Uygun fiyat politikası",
  ]

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 pt-40">
        <div className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
              Mikroelektronik Uzmanı
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Entegre Devre Değişimi
            </h1>
            <p className="text-xl text-slate-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed mb-8">
              iPhone, iPad ve MacBook cihazlarınızda arızalı entegre devrelerin profesyonel değişimi. IC değişimi, BGA
              reballing ve mikroçip tamiri ile cihazınızın fonksiyonlarını geri kazandırıyoruz. Stereo mikroskop altında
              hassas çalışma ve orijinal kalite parçalarla %95 başarı oranı.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 rounded-xl"
              >
                <Phone className="mr-2 h-5 w-5" />
                Hemen Ara: +90 542 123 45 67
              </Button>
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 rounded-xl dark:from-green-500 dark:to-emerald-500"
              >
                <Settings className="mr-2 h-5 w-5" />
                Ücretsiz Analiz
              </Button>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 rounded-xl">
                <CardHeader>
                  <div className="mx-auto bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-3 rounded-full w-fit">
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
            {/* IC Services */}
            <Card className="rounded-xl">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Microchip className="mr-3 h-6 w-6 text-purple-600" />
                  IC Değişimi Hizmetlerimiz
                </CardTitle>
                <CardDescription>Tüm entegre devre türlerinde profesyonel değişim hizmeti</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-purple-500 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{service}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Değişim Süreci</h4>
                  <div className="space-y-2 text-sm text-purple-700 dark:text-purple-300">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>1. Mikroskobik analiz (30 dk)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>2. Arızalı IC sökümü (45 dk)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>3. Yeni IC montajı (1 saat)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>4. Test ve kalibrasyon (30 dk)</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* IC Types */}
            <Card className="rounded-xl">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Settings className="mr-3 h-6 w-6 text-indigo-600" />
                  Değişim Yapılan IC Türleri
                </CardTitle>
                <CardDescription>Profesyonel olarak değişim yaptığımız entegre devre türleri</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {icTypes.map((type, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-indigo-500 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{type}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg">
                  <h4 className="font-semibold text-indigo-800 dark:text-indigo-200 mb-2">IC Arıza Belirtileri</h4>
                  <ul className="space-y-1 text-sm text-indigo-700 dark:text-indigo-300">
                    <li>• Cihaz açılmıyor</li>
                    <li>• Şarj olmuyor</li>
                    <li>• Ses gelmiyor</li>
                    <li>• WiFi/Bluetooth çalışmıyor</li>
                    <li>• Dokunmatik yanıt vermiyor</li>
                    <li>• Kamera açılmıyor</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Advantages */}
          <Card className="mb-12 rounded-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-center">IC Değişimi Avantajları</CardTitle>
              <CardDescription className="text-center">Profesyonel entegre devre değişiminin faydaları</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{advantage}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Detailed Description */}
          <Card className="mb-12 rounded-xl">
            <CardHeader>
              <CardTitle className="text-2xl">Entegre Devre Değişimi Hakkında</CardTitle>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Entegre devreler (IC), modern elektronik cihazların temel yapı taşlarıdır. iPhone, iPad ve MacBook
                cihazlarında yüzlerce farklı IC bulunur ve her biri belirli fonksiyonları yerine getirir. IC arızaları
                genellikle cihazın tamamen çalışmamasına veya belirli fonksiyonların kaybolmasına neden olur. MasterFix
                olarak, mikroelektronik alanındaki uzmanlığımızla IC değişimi hizmetinde sektör lideri konumdayız.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">
                IC Arızaları Nasıl Oluşur?
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                <li>
                  ✓ <strong>Aşırı Isınma:</strong> Uzun süreli yoğun kullanım sonucu IC hasarları
                </li>
                <li>
                  ✓ <strong>Su Hasarı:</strong> Sıvı teması sonucu IC'lerde korozyon
                </li>
                <li>
                  ✓ <strong>Elektriksel Dalgalanma:</strong> Yanlış şarj cihazı kullanımı
                </li>
                <li>
                  ✓ <strong>Fiziksel Darbe:</strong> Düşme sonucu IC'lerde kırılma
                </li>
                <li>
                  ✓ <strong>Yaşlanma:</strong> Zamanla IC'lerde performans kaybı
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">
                MasterFix IC Değişimi Avantajları
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                <li>
                  ✓ <strong>Stereo Mikroskop:</strong> 40x büyütme ile hassas çalışma
                </li>
                <li>
                  ✓ <strong>BGA Rework Station:</strong> Profesyonel IC değişim ekipmanı
                </li>
                <li>
                  ✓ <strong>Orijinal IC'ler:</strong> Apple standartlarında entegre devreler
                </li>
                <li>
                  ✓ <strong>Termal Profil:</strong> Optimum sıcaklık kontrolü
                </li>
                <li>
                  ✓ <strong>Kalite Kontrol:</strong> Değişim sonrası kapsamlı testler
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">Değişim Sonrası</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                IC değişimi tamamlandıktan sonra cihazınızın ilgili fonksiyonu tamamen geri döner. Yeni IC'nin
                performansı test edilir ve uzun süreli kullanım için optimize edilir. 6 ay garanti kapsamında güvenle
                kullanabilirsiniz.
              </p>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <Card className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl">
            <CardContent className="text-center py-12">
              <h2 className="text-3xl font-bold mb-4">IC Sorunlarınızı Profesyonel Ellerde Çözün!</h2>
              <p className="text-xl mb-8 opacity-90">
                Mikroelektronik uzmanlarımızla entegre devre değişimi hizmeti alın
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-purple-600 border-2 border-white hover:bg-purple-600 hover:text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 rounded-xl"
                  asChild
                >
                  <a href="https://wa.me/905345740909" target="_blank" rel="noopener noreferrer">
                    <Calendar className="mr-2 h-5 w-5" />
                    Randevu Al
                  </a>
                </Button>
                <Button
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-purple-600 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 rounded-xl dark:border-gray-300 dark:hover:bg-gray-300"
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
