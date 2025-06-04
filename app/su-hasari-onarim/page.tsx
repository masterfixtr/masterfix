import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Droplets, CheckCircle, Clock, Shield, Phone, Zap, Award, AlertTriangle, Calendar } from "lucide-react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Su Hasarı Onarım - MasterFix | iPhone Su Hasarı Kurtarma",
  description:
    "iPhone su hasarı onarım hizmeti. Sıvı hasarı kurtarma, oksitlenme temizliği. Acil müdahale, uzman teknisyenler. İzmir Karşıyaka.",
  keywords: "su hasarı onarım, iPhone su hasarı, sıvı hasarı, oksitlenme temizliği, Apple onarım, İzmir",
}

export default function SuHasariOnarimPage() {
  const features = [
    {
      icon: <Droplets className="h-6 w-6" />,
      title: "Acil Müdahale",
      description: "Su hasarına 24 saat içinde acil müdahale hizmeti",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Profesyonel Temizlik",
      description: "Ultrasonik temizlik ile oksitlenme giderme",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Hızlı Kurtarma",
      description: "Veri kurtarma ve cihaz fonksiyonlarını geri getirme",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Yüksek Başarı",
      description: "%85 başarı oranı ile su hasarı kurtarma",
    },
  ]

  const services = [
    "Acil Su Hasarı Müdahalesi",
    "Ultrasonik Anakart Temizliği",
    "Oksitlenme Giderme",
    "Veri Kurtarma İşlemi",
    "Komponent Değişimi",
    "Fonksiyon Testleri",
    "Koruyucu Kaplama",
    "Garanti Kapsamı",
  ]

  const steps = [
    "Cihazı derhal kapatın",
    "SIM kartı çıkarın",
    "Dış yüzeyi kurulayın",
    "Pirinç içine koymayın",
    "Hemen servise getirin",
    "Şarj etmeye çalışmayın",
  ]

  const damageTypes = [
    "Su Hasarı",
    "Kahve/Çay Dökülmesi",
    "Deniz Suyu Hasarı",
    "Yağmur Hasarı",
    "Havuz/Banyo Hasarı",
    "İçecek Dökülmesi",
    "Nem Hasarı",
    "Buhar Hasarı",
  ]

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-900 dark:to-gray-800 pt-40">
        <div className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
              Acil Su Hasarı Servisi
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Su Hasarı Onarım
            </h1>
            <p className="text-xl text-slate-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed mb-8">
              iPhone'unuz suya mı düştü? Sıvı hasarı mı aldı? Panik yapmayın! Acil müdahale ekibimizle cihazınızı
              kurtarıyoruz. %85 başarı oranı ile profesyonel su hasarı onarım hizmeti.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 rounded-xl"
                asChild
              >
                <a href="https://wa.me/905345740909" target="_blank" rel="noopener noreferrer">
                  <Calendar className="mr-2 h-5 w-5" />
                  Acil Randevu Al
                </a>
              </Button>
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 rounded-xl dark:from-blue-500 dark:to-cyan-500"
              >
                <Droplets className="mr-2 h-5 w-5" />
                Hemen Getirin
              </Button>
            </div>
          </div>

          {/* Emergency Alert */}
          <Card className="mb-12 border-red-200 bg-red-50 dark:bg-red-900/20 rounded-xl">
            <CardContent className="py-6">
              <div className="flex items-center space-x-3 text-red-800 dark:text-red-200">
                <AlertTriangle className="h-6 w-6 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg">ACİL DURUM TALİMATLARI</h3>
                  <p className="text-sm">
                    Su hasarı durumunda ilk 24 saat kritiktir. Cihazınızı derhal kapatın ve hemen servise getirin!
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 rounded-xl">
                <CardHeader>
                  <div className="mx-auto bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-3 rounded-full w-fit">
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
            {/* Water Damage Services */}
            <Card className="rounded-xl">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Droplets className="mr-3 h-6 w-6 text-blue-600" />
                  Su Hasarı Kurtarma Hizmetleri
                </CardTitle>
                <CardDescription>iPhone su hasarı için kapsamlı kurtarma çözümleri</CardDescription>
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
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Kurtarma Süreci</h4>
                  <div className="space-y-2 text-sm text-blue-700 dark:text-blue-300">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>1. Acil müdahale ve analiz (30 dk)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>2. Sökme ve temizlik (2-3 saat)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>3. Kurutma ve onarım (24-48 saat)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>4. Test ve teslim (2-4 saat)</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Emergency Steps */}
            <Card className="rounded-xl">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <AlertTriangle className="mr-3 h-6 w-6 text-red-600" />
                  Acil Durum Adımları
                </CardTitle>
                <CardDescription>Su hasarı durumunda yapmanız gerekenler</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {steps.map((step, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">{step}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                  <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">YAPMAYIN!</h4>
                  <ul className="space-y-1 text-sm text-red-700 dark:text-red-300">
                    <li>• Cihazı açmaya çalışmayın</li>
                    <li>• Şarj etmeyin</li>
                    <li>• Saç kurutucusu kullanmayın</li>
                    <li>• Pirinç içine koymayın</li>
                    <li>• Sıcak yerlere koymayın</li>
                    <li>• Çok bekletmeyin</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Damage Types */}
          <Card className="mb-12 rounded-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Su Hasarı Türleri</CardTitle>
              <CardDescription className="text-center">Onarım yapılan sıvı hasarı çeşitleri</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {damageTypes.map((type, index) => (
                  <Badge key={index} variant="secondary" className="justify-center py-2">
                    {type}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Success Rate */}
          <Card className="mb-12 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl">
            <CardContent className="text-center py-12">
              <div className="text-6xl font-bold text-green-600 mb-4">%85</div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Başarı Oranımız</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Su hasarı alan iPhone'ların %85'ini başarıyla kurtarıyoruz. Erken müdahale ile bu oran %95'e kadar
                çıkabiliyor.
              </p>
            </CardContent>
          </Card>

          {/* Detailed Description */}
          <Card className="mb-12 rounded-xl">
            <CardHeader>
              <CardTitle className="text-2xl">Su Hasarı Onarımı Hakkında</CardTitle>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                iPhone su hasarı, en kritik onarım türlerinden biridir. Su, cihazın elektronik bileşenlerine zarar
                vererek kalıcı hasarlara neden olabilir. MasterFix olarak, acil müdahale ekibimizle su hasarı alan
                cihazları kurtarıyoruz.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">Su Hasarı Nasıl Oluşur?</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                <li>
                  ✓ <strong>Doğrudan Su Teması:</strong> Cihazın suya düşmesi veya su dökülmesi
                </li>
                <li>
                  ✓ <strong>Nem Hasarı:</strong> Yüksek nemli ortamlarda uzun süre kalma
                </li>
                <li>
                  ✓ <strong>Sıvı Dökülmesi:</strong> Kahve, çay, içecek gibi sıvıların dökülmesi
                </li>
                <li>
                  ✓ <strong>Buhar Hasarı:</strong> Banyo, sauna gibi buharli ortamlarda kullanım
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">
                MasterFix Su Hasarı Kurtarma Avantajları
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                <li>
                  ✓ <strong>24 Saat Hizmet:</strong> Acil durumlarda 24 saat müdahale
                </li>
                <li>
                  ✓ <strong>Ultrasonik Temizlik:</strong> Profesyonel ultrasonik temizlik cihazları
                </li>
                <li>
                  ✓ <strong>Veri Kurtarma:</strong> Mümkün olduğunca veri kurtarma garantisi
                </li>
                <li>
                  ✓ <strong>Yüksek Başarı:</strong> %85 başarı oranı ile sektör lideri
                </li>
                <li>
                  ✓ <strong>Garanti:</strong> Başarılı onarımlarda 3 ay garanti
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">Kurtarma Sonrası</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Başarılı su hasarı kurtarma sonrasında iPhone'unuz normal fonksiyonlarına geri döner. Tüm özellikler
                test edilir ve cihazınız size teslim edilir.
              </p>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <Card className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl">
            <CardContent className="text-center py-12">
              <h2 className="text-3xl font-bold mb-4">Cihazınızı Hemen Kurtarın!</h2>
              <p className="text-xl mb-8 opacity-90">
                Su hasarında her dakika değerli. Acil müdahale için hemen arayın
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-red-600 text-white border-2 border-red-600 hover:bg-red-700 hover:border-red-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 rounded-xl"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  ACİL: +90 542 123 45 67
                </Button>
                <Button
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 rounded-xl dark:border-gray-300 dark:hover:bg-gray-300"
                  asChild
                >
                  <a href="https://wa.me/905345740909" target="_blank" rel="noopener noreferrer">
                    WhatsApp Acil Hattı
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
